import speech_recognition as sr
import googletrans
import gtts  
import threading
from io import BytesIO 
from pydub import AudioSegment
from pydub.playback import play

def setup_microphone():
    r = sr.Recognizer()
    #r.energy_threshold = 4000
    #r.dynamic_energy_threshold = True
    #r.dynamic_energy_adjustment_damping = 0.15
    #r.dynamic_energy_adjustment_ratio = 1.5
    #r.pause_threshold = 0.8
    #r.phrase_threshold = 0.3
    #r.non_speaking_duration = 0.5
    return r

def setup_translator():
    translator = googletrans.Translator()
    print("Translator setup complete")
    return translator

def listen_and_recognize_whisper(r, from_code):
    with sr.Microphone() as source:
        print("listening...")
        audio = r.listen(source)
        try:
            print("recognizing...")
            text = r.recognize_whisper(audio,model="small", language=from_code)
            if len(text) > 0:
                print(text)
                return text
        except:
            print("text not > 0")

def translate_text(translator, text, from_code, to_code):
    try:
        translate = translator.translate(text, src=from_code, dest=to_code)
        if len(translate.text) > 0:
            print(translate.text)
            return translate.text
    except:
        print("Translation Failed")
        pass

def say(text, to_code):
    tts = gtts.gTTS(text, lang=to_code)
    fp = BytesIO()
    tts.write_to_fp(fp)
    fp.seek(0)
    aud = AudioSegment.from_file(fp, format="mp3")
    play(aud)

def main():
    print("Starting...")
    from_code = "en"
    to_code = "te"
    r = setup_microphone()
    translator = setup_translator()
    while True:
        text = listen_and_recognize_whisper(r, from_code)
        if text:
            print("Spoken: ", text)
            translated_text = translate_text(translator, text, from_code, to_code)
            if translated_text:
                print(f"Translated to: {translated_text}, {from_code} to {to_code}")
                say(translated_text, to_code)
        

if __name__ == "__main__":
    main()