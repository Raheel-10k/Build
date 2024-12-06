from marvel import Marvel
from apikey import publickey, privatekey

marvel=Marvel(PUBLIC_KEY=publickey,PRIVATE_KEY=privatekey)

characters=marvel.characters

charname=input("Enter Character Name: ")
my_character=characters.all(name=f"{charname}")["data"]["results"]

print(my_character[0]["series"])

for char in my_character:
    print(char["id"],char["name"])
    for series in char["series"]["items"]:
        print(series["name"])
    print("----------------------------------") 
        
