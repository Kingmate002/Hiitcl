import speech_recognition as aa
import pyttsx3
import pywhatkit
import datetime
import wikipedia

listener = aa.Recognizer()

machine = pyttsx3.init()


def talk(text):
    machine.say(text)
    machine.runAndWait()


def input_instruction():
    global instruction
    try:
        with aa.Microphone() as origin:
            print("listening master")
            talk("listening master")
            speech = listener.listen(origin)
            instruction = listener.recognize_google(speech)
            instruction = instruction.lower()
            if "stick" in instruction:
                instruction = instruction.replace("stick", " ")
                print(instruction)
    except aa.UnknownValueError:
        print("Sorry sir!")
    return instruction


def play_Jillr1():
    instruction = input_instruction()
    print(instruction)
    if "play" in instruction:
        song = instruction.replace("play", "")
        talk("playing" + song)
        pywhatkit.playonyt(song)

    elif "time" in instruction:
        time = datetime.datetime.now().strftime("%I:%M%p")
        talk("current time" + time)
        print("current time" + time)

    elif "date" in instruction:
        date = datetime.datetime.now().strftime("%d /%m /%Y")
        talk("Today's date" + date)
        print("Today's date" + date)

    elif "how are you" in instruction:
        talk("I am fine, how about you?")
        print("I am fine, how about you?")

    elif "name" in instruction:
        talk("I am stick james virtual assistant")
        print("I am stick james virtual assistant")

    elif "google" in instruction:
        we = instruction
        pywhatkit.search(we)

    elif "search" in instruction:
        human = instruction.replace("who is", " ")
        object = instruction.replace("")
        info = wikipedia.summary(human, sentences=3)
        print(info)
        talk(info)
    else:
        talk("I don't understand you")


play_Jillr1()
