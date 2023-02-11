import os
from flask import Flask
from . import db, room, sockets

def create_app(test_config=None):
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_mapping(
        SECRET_KEY="wubba lubba dev dev",
        DATABASE=os.path.join(app.instance_path, "globe_talk.sqlite"),
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

    app.register_blueprint(room.bp)
    app.register_blueprint(sockets.bp)
    app.add_url_rule('/', endpoint='index')

    return app