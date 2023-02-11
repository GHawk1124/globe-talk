from flask import (
    Blueprint, flash, g, redirect, render_template, request, url_for
)
from werkzeug.exceptions import abort

from globe_talk.room import connection_required
from globe_talk.db import get_db

bp = Blueprint('sockets', __name__)

@bp.route("/")
@connection_required
def index():
    # db = get_db()
    # room_name = db.execute("SELECT * FROM rooms WHERE room_name = ?", (g.room['room_name'])).fetchone()
    return render_template('base.html')

