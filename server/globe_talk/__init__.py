import os
from flask import Flask
from flask_socketio import SocketIO, emit
from flask_cors import CORS
from flask_sockets import Sockets
from . import db, room

socketio = SocketIO()

def create_app(debug=False, test_config=None):
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_mapping(
        SECRET_KEY="wubba lubba dev dev",
        DATABASE=os.path.join(app.instance_path, "globe_talk.sqlite"),
        DEBUG=debug,
    )

    if test_config is None:
        app.config.from_pyfile('config.py', silent=True)
    else:
        app.config.from_mapping(test_config)

    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass

    db.init_app(app)

    CORS(app, resources={r"/*":{"origins": "*"}})
    app.register_blueprint(room.bp)
    from .main import main as main_blueprint
    app.register_blueprint(main_blueprint)

    socketio.init_app(app, cors_allowed_origins="*")

    return app