from flask import Flask, request, jsonify
from flask_socketio import SocketIO

app = Flask(__name__)
app.config['SECRET_KEY'] = 'wubba lubba dub dub'
socketio = SocketIO(app)

@app.route("/join-room", method="POST")
def join_room():
    
    data = {'data': 'You have just connected to a room with the id: 1'}
    return jsonify(data)

@socketio.on("connect")
def user_chat_connect():


if __name__ == '__main__':
    socketio.run(app, debug=True)