Eindopdracht Novi Hogeschool

The Tasty Beer Club
Door: Jeroen Kraaij

Start project - 27 december 2023

Documentatie:

Commentaar / verantwoording:

##### 27 december 2023:
Vandaag ben ik gestart met het bouwen van het project "The Tasty Beer Club":

De volgende punten zijn gerealiseerd:
- Het project is geïnitialiseerd in Git. 
- Branch aangemaakt in Git. 
- Documentatie aangemaakt. 
- Mappenstructuur aangemaakt met de mappen components, pages & helper. 
- Binnen de directory "Pages":
- Home.jsx en Home.css.


##### 29 december 2023:
Mijn doel is om vandaag een menustructuur op te zetten en de semantische basis elementen zoals body, header, nav en footer te creëren.

De volgende punten zijn gerealiseerd:
- Header met navigatie opgezet. 
- Menu en menu-items in header geplaatst. 
- Installatie van react-router-dom. 
- Import van Routes in main.jsx. 
- Import van Routes en Route in App.jsx. 
- Routes & Route omwikkeld voor de menu-elementen met pad en element. 
- Routing van de Navlink in Header en Nav gemaakt. 
- CSS van Header en menu in de basis opgezet met een default-link en active-link. 
- Definitieve styling volgt later. 
- Opzet van de Footer gerealiseerd. 
- Menu is werkend en de pagina's zijn zichtbaar. 
- Project gepusht naar Git.


##### 3 januari 2024: Het nieuwe jaar
De afgelopen dagen ben ik bezig geweest met het realiseren van de globale styling en opzet van de website.
Hierbij was het uitdagend om alle regels op de juiste plek in de CSS-bestanden te plaatsen.
Uiteindelijk is het gelukt en staan de globale CSS in het bestand index.css. Het ontwerp is nog niet compleet, maar alle klassen zijn gedefinieerd.

De volgende punten zijn gerealiseerd:
- Kleuren zijn gedefinieerd in de :root en de meeste variabelen zijn gekoppeld aan individuele CSS-klassen.
- Voorlopige kleuren en lettertypes zijn ingesteld en zullen later nog aangepast worden.
- Het voorlopige font is geïnstalleerd en toegepast op H1 t/m H6 en het algemene lettertype.
- Voorlopige styling van buttons en links toegevoegd en gedocumenteerd in een nieuwe pagina "Design".
- De pagina "Design" is aangemaakt om de weergave te controleren en zal verwijderd worden bij oplevering.
- Binnen App.css zijn belangrijke klassen aangemaakt, zoals een outer en inner container om de hoofdcontent correct weer te geven.
- De outer en inner container worden ook gebruikt om meer controle te hebben over de responsiviteit.
- Het design en de website zien er nu als volgt uit:
![Screenshot 2024-01-03 at 11.51.43.png](/Users/jkraaij/Desktop/Screenshot 2024-01-03 at 11.51.43.png)

Vanaf morgen wil ik starten met de implementatie van het definitieve design en begin ik ook met het aanmaken van de componenten.
Deze versie heb ik naar GitHub - branch feature/startproject gestuurd.


##### 4 januari 2024:
Gisteren heb ik nog verder gewerkt aan dit leuke project. Ik wilde zien of ik alle secties van het ontwerp kon implementeren met de kennis uit de lessen.
Ik heb de sectie voor de bieren via de API in een overzicht weten te krijgen. Dit heb ik bereikt door gebruik te maken van de Asynch functie en de Get.axios succesvol uit te voeren op de URL van de API.

De volgende punten zijn gerealiseerd:
- De bieren zijn nu zichtbaar op de pagina Webshop.
- De bieren worden weergegeven via het component "ProductCard". 
- CSS is toegevoegd, maar ik heb nog een probleem met de Flex-wrap. Deze werkt nog niet goed en de bieren worden momenteel onder elkaar weergegeven. 
- Een andere sectie, namelijk die van de blogs, is toegevoegd. 
- De blogs zijn zelf geschreven content die ik in een JSON-bestand heb geplaatst. Het is geen cruciaal onderdeel van de functionaliteit, maar het biedt extra informatie. 
- Branch "feature/startproject" is samengevoegd met de Main branch. 
- Nieuwe branch aangemaakt "feature/design". 
- Start gemaakt met het volledige design.


##### 5 januari 2024:
Oplossing gevonden voor de Flex-wrap. Ik heb een grid gebruikt van 3 kolommen en dat werkt goed.
De bieren worden nu in drie rijen getoond.
![Screenshot 2024-01-15 at 18.32.54.png](../..//Desktop/Screenshot 2024-01-15 at 18.32.54.png)


##### 6 januari 2024:
Even een dag naar de opleiding. Het project begint vorm te krijgen, mede door een logo, font en een aantal basiskleuren.
Deze zijn allemaal opgenomen in index.css als globale stijl. De hoofdheader ziet er nu als volgt uit.

![Screenshot 2024-01-15 at 18.38.13.png](../../../../../var/folders/8c/4dpz9pw92h35gz20cwcrw2_m0000gn/T/TemporaryItems/NSIRD_screencaptureui_goo1qE/Screenshot 2024-01-15 at 18.38.13.png)

Het logo is toegevoegd als SVG-bestand binnen de styling van het Header-component.
Menu is op desktop


##### 7 januari 2024
De volgende punten zijn gerealiseerd:
- Het component Choose Taste is het belangrijkste component en handelt de smaaktest volledig af. 
- Start gemaakt met het maken van de smaaktest. Dit zijn een aantal afbeeldingen waarop ja of nee gekozen moet worden. 
- Door middel van 5 categorieën heb ik de afbeeldingen ingedeeld. Deze kunnen bediend worden met knoppen met "Ja / Duim omhoog" en "Nee / Duim omlaag". 
- De code toont nu de categorieën en hoe vaak deze met "Ja" zijn aangeklikt. 
- Ik heb voor dit proces een Switch statement gebruikt, maar ik weet nog niet hoe ik dit kan stoppen. 
- Dit is een vraag die ik aan een docent zal stellen. Het klikken op de "ja" knop blijft doorgaan en ik wil dan stoppen met de smaaktest. 
- De volgende stap is dan ook om de bieren te koppelen aan de resultaten van de smaaktest. Dit is nog in ontwikkeling.


##### 9 januari 2024
De volgende punten zijn gerealiseerd:
- De Webshop is de hoofdpagina en daar heb ik een component geplaatst genaamd "Product Article".
- Op de pagina "Webshop" haal ik gegevens van de API op en deze heb ik verwerkt volgens de gebruikelijke werkwijze en lesstof.
- De code op de pagina zal ik later nog bekijken om deze te optimaliseren in meerdere componenten, indien nodig.
- Er ontstond een probleem met de koppeling naar CSS. Ik kreeg de bieren alleen onder elkaar te zien terwijl ik flex-wrap in CSS gebruikte.
- Uiteindelijk heb ik het probleem opgelost met CSS display: grid; en grid-template-columns: 1fr 1fr 1fr;.
- Later zal ik verder gaan met de webshoppagina.


##### 12 januari 2024
De volgende punten zijn gerealiseerd:
- Begonnen met het optimaliseren van de CSS.
- Het vinden van de juiste styling en waar deze moet worden geplaatst vind ik nog lastig. 
- Daarom ben ik gaan kijken naar nieuwe stof van het CSS-bestand gekoppeld aan een .module.css. 
- Dit proces zorgt ervoor dat het CSS van een pagina niet verder lekt en reageert in de overkoepelende CSS-bestanden. 
- Deze aanpassing is nu voor de meeste bestanden doorgevoerd binnen het project. 
- Ook heb ik geprobeerd om via @media de responsiviteit van het project te verbeteren. 
- Vooral voor "Mobiel" is aandacht nodig. Hier is een andere header noodzakelijk met een "Hamburgermenu".
- Dit vereist extra code en het was een uitdaging om dit in de "Route" met React goed te krijgen.
- Uiteindelijk is het resultaat dat het mobiele menu zichtbaar is en dat dit wordt geactiveerd met een OnClick-handler op het hamburgermenu.
- De CSS moet vervolgens de nav .hamburger-menu wijzigen van "none" naar "flex", maar hier ervaar ik nog problemen en zal ik dit aan een docent voorleggen.
- Voor de rest schaalt de hele applicatie zoals gewenst, dus dat is goed!


##### 15, 16 & 17 januari
De volgende punten zijn gerealiseerd:
- Een component dat minder complex is dan de Smaaktest is het bloggedeelte.
- Ik vind het leuk om meer content op de website te tonen en heb daarom een blogpagina gemaakt.
- In de lessen hebben we uitgebreid de werking van het blog behandeld. Ik heb dit één op één overgenomen.
- Daarbij heb ik een eigen JSON-bestand gemaakt in de map "constants". Dit bestand bevat 4 blogartikelen die worden getoond op de pagina "Blog".
- Je kunt doorklikken van de blogpagina naar het daadwerkelijke blogartikel.
- De gegevens zijn allemaal dynamisch en de blogs worden correct afgehandeld in de Route.


##### 20, 21, 26 & 27 januari
In de ontwikkeling van de "Smaaktest" ben ik tegen een probleem aangelopen.
De data die ik genereer via de Smaaktest wil ik opslaan in een ander component. Dit component is "Kies je Box".
Echter, de data gaat verloren bij het klikken naar "Kies je Box" omdat deze opnieuw wordt gerenderd. Ik ben hier nog mee bezig en kom hier later op terug.

De volgende punten zijn gerealiseerd:
- Smaaktest is verder afgemaakt.
- Component "Kies je box" is aangemaakt en wordt getoond via een knop op de Smaaktest.
- Nog gewerkt aan styling. Helaas is het nog niet gelukt om de responsiviteit te verbeteren, vooral voor mobiel.
- Op de Smaaktest heb ik ook een statusbalk toegevoegd.


##### 30 januari
De volgende punten zijn gerealiseerd:
- Aanmaak van winkelmandje. 
- Binnen het winkelmandje kun je je gegevens invullen voor het versturen van de bierboxen. 
- Ook kun je in het winkelmandje registreren voor de inlog / account.
- Ik heb een formulier gemaakt dat via useState alle velden aanspreekt. 
- Voor de authenticatie van de sign-up, inloggen en uitloggen wil ik een nieuwe branch maken. 
- Omdat ik projecten later echt wil gaan gebruiken heb ik besloten om een externe backend te gebruiken. 
- Ik ga Google Firebase gebruiken voor de gegevensverwerking.

Ik begrijp dat dit een risico is, maar ik heb goede documentatie gevonden inclusief YouTube tutorials.
Voor mij is het leerproces van het gebruik van een externe backend belangrijk en daarom heb ik hiervoor gekozen.
Om het risico te beperken maak ik wel een nieuwe branch aan en als het toch blijkt niet te werken stap ik over naar de Novi Backend.


##### 1 & 2 februari
Nog 22 dagen te gaan voor dit project. Er staan nog een aantal grote uitdagingen te wachten waaronder de "Smaaktest" koppelen aan de betreffende bieren.
Helaas kent de API geen smaken gedefinieerd in de database. Alleen in de beschrijving van alle bieren komen woorden voor die kunnen worden gebruikt in de vergelijking.
Ik ga de uitkomsten van de smaaktest zo maken dat de resultaten altijd overeenkomen met de bierbeschrijvingen.
Daarbij heb ik een deel van de smaaktest geschrapt omdat ik het simpeler kan maken. De vooraf bedachte smaakprofielen zijn verwijderd.

De volgende punten zijn gerealiseerd:
- De smaaktest is vereenvoudigd. Deze keuzes voor smaken worden vergeleken met de bieren in de database via een hulpfunctie "filtersBeers".
- De resultaten worden getoond in het component "ChooseBox". Ik wil uiteindelijk een pakket van 3 bieren overhouden.
- Het lukt nog niet om de bieren te koppelen vanuit de smaaktest. Handmatig een selectie opgeven werkt wel. Dit stukje staat dus nog open.
- Belangrijk is dat ik ben overgestapt naar een centrale import van de data uit de API. De reden hiervoor is dat ik op 1 plek de data ophaal en deze vervolgens binnen het project kan gebruiken.
- Het bestand fetchBeerData handelt de import af.
- De implementatie van "fetchBeerData" heeft goed gewerkt en resulteert ook in een betere verwerking van de data (bieren) binnen het project.
- Een voorbeeld is de zoekbalk op de pagina "Webshop". In deze zoekbalk kan nu daadwerkelijk worden gezocht in de bierdatabase.


##### 6 februari
Het was nog niet gelukt om in de webshop te klikken op "Meer informatie". De Route leverde wel een resultaat, maar er werd nog geen bier getoond op basis van het ID.

De volgende punten zijn gerealiseerd:
- De productpagina wordt getoond na het klikken binnen de webshop op het desbetreffende product.
- Ik moet de productpagina nog stylen en bepalen welke informatie ik wil tonen aan de gebruiker. Voor nu heb ik een knop "Bestel Product" gemaakt die via context <SelectedBeerProvider> de data doorgeeft aan het "winkelmandje". 
- Het winkelmandje ontvangt de data uit de webshop. 
- Ik heb de styling van het winkelmandje aangemaakt en een ontwerp bekeken. 
- Omdat de geselecteerde bieren via de context worden getoond, ga ik hier later mee verder. Voor nu werkt het en komt dit later terug in het ontwikkelproces.


##### 8, 9, 10 februari
Het project begint steeds meer vorm te krijgen, maar een aantal essentiële onderdelen werkt nog niet. De smaaktest heeft wel resultaat, maar deze is nog niet gekoppeld aan de bierdatabase.
Daarnaast is de gehele authenticatie van gebruikers nog niet aangemaakt. Omdat ik een andere backend (Firebase) ga gebruiken, heb ik dit eerst getest in een ander project. Het resultaat werkt.
Dit kan dus worden verwerkt in dit project.

De volgende punten zijn gerealiseerd:
- De smaaktest is eindelijk gekoppeld aan de bierdatabase. Met behulp van medestudenten en een docent heb ik de koppeling weten te maken van Smaaktest naar de bierdatabase... Daar ben ik erg blij mee!
- De bieren worden nog niet op de juiste manier getoond en hierbij heb ik een fout gemaakt in de opzet van <ul> <li>-klassen. Daarbij wilde ik in de CSS de <li> laten wrappen. Dat gebeurt nu wel op de juiste manier.
- Vanuit UX is er nu nog een "Nice to have" bijgekomen om de knop "Kies je Box" pas te tonen wanneer de smaaktest is beëindigd. In eerste instantie leek dit een simpele opdracht te zijn, maar het leidde uiteindelijk tot grote complicaties.
- De data (counter) die de knop "Kies je Box" moet activeren, bevindt zich in een onderliggend component. Het is niet mogelijk om data vanuit een onderliggend component te gebruiken in een bovenliggend component. Hierdoor kan de knop "Kies je Box" niet worden geactiveerd.
- Dit wordt in een later stadium opgelost.
- Authentication is gelukt.
- Er is een Firebase-project aangemaakt met daarin de keuze voor authenticatie van e-mail en wachtwoord.
- De gegevens van Firebase komen binnen in de directory "firebase".
- Binnen de authenticatie zijn er drie stappen: Inschrijven, Inloggen, Uitloggen.
- De gebruiker kan pas een account aanmaken op de pagina "Winkelmandje". Bij een gevuld winkelmandje is het ook noodzakelijk om je gegevens te verwerken voor het verzenden van het pakket.
- Overigens heb ik besloten om de gegevensverwerking nog 1 stap verder in het proces te laten plaatsvinden. Het winkelmandje moet echt een plek zijn waar de gebruiker een overzicht heeft van zijn bestelde producten.
- Pas bij een doorklik naar "Gegevens" krijgt de gebruiker de mogelijkheid om zijn of haar gegevens in te vullen.
- De twee invulvelden "e-mail en wachtwoord" bieden de mogelijkheid om de gebruiker te registreren voor zijn of haar account.
- Het gehele proces van Inschrijven, Inloggen, Uitloggen werkt met de authenticatie van Firebase.
- De belangrijkste functionaliteiten zijn nu in grote lijnen ontwikkeld.
- Project nu als back-up naar Github gestuurd.
- Deze readme file up-to-date gemaakt.

##### 11 februari
Het gehele project is op Github gezet. De branch feature/authenticationm is samengevoegd met de Main Branch. er is een nieuwe branche aangemaakt genaamd "feature/completing-functionality". 
Hierin worden de laatste functionele punten verwerkt de aankomende week. 
- Definitief alle 12 smaken aangemaakt binnen Smaaktest 
