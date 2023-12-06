import random
import speech_recognition as aa
import pyttsx3
import pywhatkit
import datetime
import wikipedia

listener = aa.Recognizer()

machine = pyttsx3.init()


class AI:
    def __init__(self):
        self.knowledge_base = []

    def add_knowledge(self, knowledge):
        self.knowledge_base.append(knowledge)

    def generate_response(self, prompt):
        response = random.choice(self.knowledge_base)
        if prompt in response:
            return response
        else:
            return "I don't know the answer to that question."


# Example usage:

ai = AI()

# Add some knowledge to the AI
ai.add_knowledge("What is the capital of France? The capital of France is Paris.")
ai.add_knowledge("The capital of France is Paris.")

# Generate a response to a prompt


def talk(text):
    machine.say(text)
    machine.runAndWait()


def input_instruction():
    global instruction
    try:
        with aa.Microphone() as origin:
            print("listening commander")
            talk("listening commander")
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
        info = wikipedia.summary(human, sentences=3)
        print(info)
        talk(info)

    elif "stick" in instruction:
        prompt = input("Prompt:")
        response = ai.generate_response(prompt)
        print(response)
        talk(response)

    else:
        talk("I don't understand you")


play_Jillr1()
