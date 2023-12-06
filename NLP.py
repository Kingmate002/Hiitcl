import spacy

# load the spacy English language model
nlp = spacy.load('en_core_web_sm')

#Tokenize the sentence
sentence = input("prompt:")
doc = nlp(sentence)

# perform semantic analysis on the sentence
for token in doc:
    sentencer = token.lemma_, token.pos_, token.ent_type_
    print(sentencer)
