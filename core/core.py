import speech_recognition as sr

def setup_microphone():
    r = sr.Recognizer()
    r.energy_threshold = 4000
    r.dynamic_energy_threshold = True
    r.dynamic_energy_adjustment_damping = 0.15
    r.dynamic_energy_adjustment_ratio = 1.5
    r.pause_threshold = 0.8
    r.phrase_threshold = 0.3
    r.non_speaking_duration = 0.5
    return r

def setup_microphone_for_whisper():
    r = sr.Recognizer()
    r.energy_threshold = 100
    r.dynamic_energy_threshold = True
    r.dynamic_energy_adjustment_damping = 0.15
    r.dynamic_energy_adjustment_ratio = 1.5
    r.pause_threshold = 0.8
    r.phrase_threshold = 0.3
    r.non_speaking_duration = 0.5
    return r

def listen_for_speech(r):
    with sr.Microphone() as source:
        audio = r.listen(source)
    return audio

def recognize_whisper(r, audio):
    try:
        text = r.recognize_whisper(audio)
        if len(text) > 0:
            return text
    except:
        pass

def main():
    try:
        text = r.recognize_whisper(audio)
        print("You said: {}".format(text))
    except:
        pass

if __name__ == "__main__":
    main()