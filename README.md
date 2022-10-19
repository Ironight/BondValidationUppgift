# BondValidationUppgift

Uppgift 1
Jag skapade en array och en function som randomizade tal för att sedan pusha in det i arrayen som sedan blir printed i konsollen.
Efter det sorteras arrayen med en funktion som checkar efter värdet mellan två tal, om tal a är mindre än tal b får den en lägre index value.
Jag använde mig av document, math och console.


Uppgift 2
Koden använder sig av en funktion som anropar valideringen av en form. Den checkar ifall inputen är tomma och ifall något är i fel format/längd.
När allt stämmer och är == true så redirectas du till en annan hemsida och för att alerten ska fungera och inte resetta sidan så krävdes funktionen:
    function handleForm(event) {event.preventDefault()} 


Uppgift 3
I denna uppgift validerades formen med hjölp av html och dess inbygda validering. Required, min-length samt pattern för att bestämma hur formen ska vara ifylld.
Min pattern används för att definera hur ett email ser ut. om den inte följer mallen i pattern så kommer den inte accepteras.
Det som gick snett var själva submit knappen och att redirecta med hjälp av html. Man kan ju göra en knapp som skickar dig till en annan url,
men jag kunde inte lösa problemet med att checka ifall formen var ifylld innan submitten accepterar en redirect
