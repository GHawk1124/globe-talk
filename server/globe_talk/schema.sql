DROP TABLE IF EXISTS user;
DROP TABLE IF EXISTS rooms;

CREATE TABLE user (
    username TEXT UNIQUE NOT NULL,
    spoken_language TEXT NOT NULL
);

CREATE TABLE rooms (
    room_name TEXT UNIQUE NOT NULL
);