from flask import render_template
from flask_socketio import emit, join_room, leave_room
from . import main
from .. import socketio
import json

@main.route("/")
def index():
    return render_template("base.html")

@socketio.on('joined')
def joined(data):
    print(f"{data['username']} is joining {data['room']}")
    join_room(data['room'])
    emit('status', {'msg': data['username'] + ' has entered the room.'}, room=data['room'])

@socketio.on('message')
def handle_message(message):
    # Do something with the message
    emit('response', {'data': 'This is a response'})

@socketio.on('text')
def text(data):
    emit('message', {'msg': data['username'] + ': ' + data['msg']}, room=data['room'])

@socketio.on('left')
def left(data):
    leave_room(data['room'])
    emit('status', {'msg': data['username'] + ' has left the room.'}, room=data['room'])