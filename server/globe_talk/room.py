import functools

from flask import (
    Blueprint, flash, g, redirect, render_template, request, session, url_for
)

from globe_talk.db import get_db

bp = Blueprint('room', __name__, url_prefix='/room')


@bp.route("/join", methods=('GET', 'POST'))
def join():
    db = get_db()
    error = None

    # This code doesn't behave properly if the room doesn't exist
    if request.method == 'POST':
        room_name = request.form["room_name"]
        print(room_name)

        if not room_name:
            error = "room_name required"

        room = db.execute("SELECT * FROM rooms WHERE room_name = ?", (room_name,)).fetchone()

        if room is None:
            error = f'Could not find room {room_name}'
            
        if error is None:
            # try:
            #     db.execute(
            #         "INSERT INTO rooms (room_name) VALUES (?)",
            #         (room_name),
            #     )
            #     db.commit()
            # except db.IntegrityError:
            #     error = f"Room name {room_name} is already taken"
            # else:
            print(f"joined room {room_name}")
            session.clear()
            session['room_connection'] = room_name
            return redirect(url_for("main.index"))
            
        flash(error)
    # elif request.method == 'GET':
    #     # TODO: change this to by dynamic based on what the user reqeusted
    #     room = db.execute("SELECT * FROM rooms WHERE room_name = ?", (room_name,)).fetchone()
    #     print(error is None)
        
    #     if room is None:
    #         error = f'Could not find room {room_name}'

    #     if error is None:
    #         session.clear()
    #         session['room_connection'] = room['room_name']
    #         return redirect(url_for('index'))
        
        # flash(error)

    return render_template("room/join.html")

@bp.route("/leave")
def leave():
    session.clear()
    return redirect(url_for('main.index'))

@bp.before_app_request
def load_connected_user():
    room_connection = session.get('room_connection')
    
    print(room_connection)

    if room_connection is None:
        g.room = None
    else:
        g.room = get_db().execute(
            'SELECT * FROM rooms WHERE room_name = ?', (room_connection,)
        ).fetchone()

def connection_required(view):
    @functools.wraps(view)
    def wrapped_view(**kwargs):
        if g.room is None:
            return redirect(url_for('room.join'))
        
        return view(**kwargs)

    return wrapped_view