![IMG_4212](https://user-images.githubusercontent.com/15862393/218314874-c096d578-4f4b-4367-ae97-f1ea307ede10.jpeg)


# globe-talk

The goal of this project was to create a web-based voice conference app with near real-time voice translation to native languages of the various clients in the meeting.

Current State: Translation models are working in `core.py` but needs to be linked into the server code itself. The server code is close to being in a state where the two can get linked. The main issue preventing the integration is the lack of recording of audio from the WebRTC framework to a framework where we can process it. The other thing is integrating the frontend React code to the Node.JS code.


core/
|
-- core.py <- contains the API for interactions with AI models like Whisper and Google Translate in hopes of presenting near real-time translation of languages


server/
|
-- contains the Node.JS application for the web-based video conference system. The technology stack used consists of WebRTC, Sockets.io, Express, and more to provide the voice conference software


frontend/
|
-- contains the React code for our front end UI. Most of the code is on `master` branch
