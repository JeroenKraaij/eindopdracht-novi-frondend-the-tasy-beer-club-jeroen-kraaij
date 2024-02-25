# Eindopdracht Novi Hogeschool

![Screenshot 2024-02-22 at 12.01.35.png](src%2Fassets%2FImagesReadme%2FScreenshot%202024-02-22%20at%2012.01.35.png)

### The Tasty Beer Club

Door: Jeroen Kraaij
Alle rechten voorbehouden © | TastyBeerClub & Jeroen Kraaij


### inhoudsopgave

## Table of Contents

- [Eindopdracht Novi Hogeschool](#eindopdracht-novi-hogeschool)
- [The Tasty Beer Club](#the-tasty-beer-club)
- [Inhoudsopgave](#inhoudsopgave)
    - [Installatiehandleiding](#installatiehandleiding)
        - [1. Inleiding](#1-inleiding)
        - [2. Screenshot](#2-screenshot)
        - [3. Benodigdheden](#3-benodigdheden)
        - [4. De applicatie draaien](#4-de-applicatie-draaien)
        - [5. Overige commando’s](#5-overige-commandos)
        - [6. Testgebruikers](#6-testgebruikers)
    - [Verantwoording van het project](#verantwoording-van-het-project)
        - [Het project is geïnitialiseerd in Git](#27-december-2023)
        - [Header met navigatie opgezet](#29-december-2023)
        - [Global Styling opgezet](#3-januari-2024-het-nieuwe-jaar)
        - [De bieren zijn nu zichtbaar op de pagina Webshop](#4-januari-2024)
        - [Oplossing gevonden voor de Flex-wrap](#5-januari-2024)
        - [Het logo is toegevoegd ](#6-januari-2024)
        - [Het component Choose Taste](#7-januari-2024)
        - [De Webshop is de hoofdpagina](#9-januari-2024)
        - [optimaliseren van de CSS](#12-januari-2024)
        - [Blogs en Smaaktest](#15-16--17-januari)
        - [Complexe materie rond Smaaktest](#20-21-26--27-januari)
        - [Aanmaak van winkelmandje](#30-januari)
        - [Nog 25 dagen te gaan voor dit project](#1--2-februari)
        - [De productpagina wordt getoond](#6-februari)
        - [De smaaktest is eindelijk gekoppeld aan de bierdatabase](#8-9-10-februari)
        - [De branch feature/authentication is samengevoegd ](#11-februari)
        - [De API geeft de mogelijkheid tot "Pagination"](#13-14--16-februari)
        - ["BierBox" samenstellen](#17-18--19-februari)
        - [Homepage](#20-februari-)
        - [Vandaag zijn veel functionaliteiten afgerond ](#21-februari-)
        - [Update van deze Readme file](#22-februari-)



## Installatiehandleiding

#### 1. Inleiding

   Het concept “TastyBeer Club”

De Tasty Beer Club is zoals de naam al aangeeft, een club van bierliefhebbers die maandelijks mooie speciaal-, en craft bieren krijgen thuis gestuurd. Dit is een abonnementsvorm die ervoor zorgt dat er altijd een mooi IPA of Tripel in de koelkast staat en klaar om te worden gedronken. Via de marketingkanalen komt de gebruiker / klant (zie doelgroep) op de homepage van de Tasty Beer Club. Een hedendaags layout en design verwelkomd iedereen die geïnteresseerd is Craft bieren. 
De homepage is de start van de bierreis op dit platform en kent drie richtingen. De bezoeker (nieuw lid) die nog geen lidmaatschap heeft van de club: In deze fase van de bierreis wordt de gebruiker gevraagd om de smaaktest te doen. Deze smaaktest is een belangrijk onderdeel van de onboarding van de gebruiker / klant. Het is belangrijk om met de uitkomst van de smaaktest een profiel op te bouwen en 
deze te koppelen aan een x hoeveelheid bieren die later in het proces worden gepresenteerd. De onboarding start dus bij het invullen van de smaaktest en eenmaal doorlopen wordt de keuze gegeven om lid te worden of om eenmalig een pakket van craftbieren af te nemen. 

Kiest de gebruiker om akkoord te gaan met een lidmaatschap wordt deze om een registratie gevraagd. Dit is een formulier waarin naw-gegevens worden gevraagd plus inlognaam en wachtwoord. Met deze gegevens en de uitkomst van de smaaktest wordt het (beveiligde) account aangemaakt. 
De bezoeker / klant ( al een lidmaatschap) die al een account heeft:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
Een gebruiker (lid) van de club kan rechtstreeks gaan naar de inlog gaan. 
Eenmaal ingelogd ziet de gebruiker zijn of haar profiel met reeds geleverde bieren. Binnen deze omgeving (beveiligd) kunnen een aantal dingen worden geregeld. Zo kan de gebruik zijn gegeven wijzigen, het abonnement aanpassen en of stopzetten. 
En als laatste kan een extra een bestelling van bepaalde bieren worden besteld.

Naast het wijzigen van zaken is het belangrijk voor de gebruiker om de bieren van de afgelopen maand een beoordeling (review) te geven. Iedere maand is het pakket dat wordt verzonden aangepast aan de wijzigen van het smaakprofiel. Dit smaakprofiel groeit mee met de beoordelingen van bieren gedurende het lidmaatschap. 
Verder krijgt een lid exclusieve content over de bieren, recepten, brouwerijen en eventueel korting op aanvullende producten of diensten. 
De bezoeker die voor iemand anders een bierpakket cadeau wil doen. Deze gebruiker zal niet de smaaktest doorlopen en zal ook niet lid worden. Maar voor een ander een pakket bestellen kan via de overzichtspagina van alle bieren. 
Het platform heeft een overzichtspagina van alle te leveren bieren. Hier kan handmatig een keuze worden geselecteerd en deze kan middels een winkelmandje en betaalsysteem worden afgerekend.


#### 2. Screenshot

![GitHub.jpg](src%2Fassets%2FImagesReadme%2FGitHub.jpg)


#### 3. Benodigdheden

Het project is geheel te vinden op:
https://github.com/JeroenKraaij/eindopdracht-novi-frondend-the-tasy-beer-club-jeroen-kraaij

Kopieer de link met de selectie voor SSH
git@github.com:JeroenKraaij/eindopdracht-novi-frondend-the-tasy-beer-club-jeroen-kraaij.git

Ga naar WebStorm 
Open de link in WebStorm als "Nieuw Project From Version Control"
Open het project in een nieuwe window en vertrouw dit project. Het project wordt geladen.

#### 4. De applicatie draaien

Voor deze applicatie zijn er drie benodigde npm-installs. Schrijf in de terminal het volgende: 
1. run npm install
2. run npm install axios
3. run npm install firebase

#### 5. Overige commando’s

Het project is nu ready om te bekijken en run nu het command "npm run dev" in de terminal
De local host geeft een url aan in de browser en klik hierop. Je ziet nu de homepage van het de Tasty Beer CLub. 

![Homepage.jpg](src%2Fassets%2FImagesReadme%2FHomepage.jpg)


#### 6. Testgebruikers**

Om in te loggen kunnen de volgende gegevens worden gebruikt:

E-mail: jeroen@test.com
Wachtwoord: Test1234



## Verantwoording van het project 

Start project:

##### 27 december 2023:
Vandaag ben ik gestart met het bouwen van het project "The Tasty Beer Club":

De volgende punten zijn gerealiseerd:
- Het project is geïnitialiseerd in Git. 
- Branch aangemaakt in Git. 
- Documentatie aangemaakt. 
- Mappenstructuur aangemaakt met de mappen components, pages & helper. 
- Binnen de directory "Pages":
- Home.jsx en Home.css.!

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

##### 6 januari 2024:
Even een dag naar de opleiding. Het project begint vorm te krijgen, mede door een logo, font en een aantal basiskleuren.
Deze zijn allemaal opgenomen in index.css als globale stijl. De header ziet er nu als volgt uit.

![Screenshot 2024-02-22 at 12.19.50.png](src%2Fassets%2FImagesReadme%2FScreenshot%202024-02-22%20at%2012.19.50.png)

Het logo is toegevoegd als SVG-bestand binnen de styling van het Header-component.
Menu is op desktop

![Logo Tasty Beer Club.png](src%2Fassets%2FImagesReadme%2FLogo%20Tasty%20Beer%20Club.png)

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
- Later zal ik verder gaan met de webshop pagina.


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
Nog 25 dagen te gaan voor dit project. Er staan nog een aantal grote uitdagingen te wachten waaronder de "Smaaktest" koppelen aan de betreffende bieren.
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
- Plaatjes en SVG's in de juiste order geplaatst

#### 13, 14 & 16 februari
De API geeft de mogelijkheid tot "Pagination". Dit houdt in dat er pagina nummer mee kan worden gegeven aan het eindpoint
Hierbij ook ook het aantal producten (bieren) worden aangepast met hoeveel er worden getoond.
Voor de Webshop pagina heb ik deze pagination toegepast. De producten kunnen worden getoond in een selectie van 10, 25 50 en 80 bieren per pagina. 
Daarbij kan er ook met twee buttons door de pagina's worden geklikt. 
- Aanpassen mogelijk van het endpoint met pagination
- Het aantal getoonde bieren kan worden aangepast
- Er kan gezocht worden in de zoekbalk via de SearchQuery
- Data van de smaaktest definitief gekoppeld met de bieren

##### 17, 18 & 19 februari
Vooral op vrijdag hard gewerkt aan het project. Er zijn nog een aantal uitdagingen waaronder de ChooseBox. Hier worden de antwoorden van de smaaktest en de biertjes bij elkaar gebracht. 
Vanuit de eerste gedachte was dat dit maximaal 3 biertjes zouden zijn. Echter geven de resultaten van de Smaaktest veel opties aan bieren. Dit had ik mij niet gerealiseerd. 
Door deze gebeurtenis heb ik een aanpassingen gedaan in het ontwerp en functionaliteit. De biertjes die vanuit de smaaktest worden getoond hebben een selectie gekregen. Met deze selectie kun je zelf je eigen "BierBox" samenstellen.
Vanuit de gebruiker een betere oplossing en blijft er ook nog iets te kiezen. Hierdoor is de smaaktest meer aanbevelend geworden dan een harde daadwerkelijke selectie van drie bieren. 
- Vanuit de smaaktest worden de bieren getoond.
- Een selectiebox kan worden aangeklikt om de definitive selectie te maken
- Het geselecteerde biertje komt in de BierBox terecht
- Meerdere bieren kunnen worden aangeklikt
- De gedachte is om de "ID's" van de bieren door te sturen middels de context naar het winkelmandje 
- De Context is aangemaakt met de juiste codering in de Main.jsx
- Daarbij is ook een custom hook aangemaakt genaamd SelectedBeerContext".


##### 20 februari 
Aan de homepage was nog niet aan gedaan. De pagina is de eerste aanblik van een bezoeker van de website. Ik heb veel aandacht besteeed aan de styling van deze pagina met gebruik van diverse componenten. 
Omdat binnen de opdracht styling een ondergeschikte rol speelt hou ik de rest van de pagina basic. 
- Homepage banner gemaakt met double text color
- Meerdere componenten gemaakt zoals een call to action voor de Smaaktest 
- Vanuit de API kun je een biertjes random kiezen. Het leek mij leuk om dit op de homepage te tonen. 
- Helaas heb ik nog een uitdaging op het gebied van het Random doorgeven van een biertje. Vandaag geeft deze driemaal hetzelfde biertje door dat wel random wordt gekozen. 
- Als laatste heb ik de blogartikelen verbeterd met een styling en de juiste koppeling van images.
- De blogartikelen zijn van ondergeschikt belang maar werken wel en de gebruiker kan wel doorklikken naar het betreffende artikel.

##### 21 februari 
Vandaag zijn veel functionaliteiten afgerond waaronder de koppeling van de ChooseBox. De eindjes beginnen nu te vallen en het project is in de basis nu af. 
Wat betreft de styling zou er nog veel kunnen worden gedaan. De homepage ziet er mooi uit en dat zou ik in een later stadium nog door het gehele project doortrekken. 
De functionaliteit is tot aan het winkelmandje nu af en werkt. 
- Van zowel de smaaktest als de webshop vallen de biertjes in het winkelmandje. Hier kun je de aantallen biertje dat je wilt kopen bepalen met een standaardprijs van € 2,50
- Het bedrag wordt opgeteld als de counter wordt aangesproken met de + button. De prijs wordt afgerond op 2 decimalen 

#### 22, 23, 24 februari 

De laatste dagen voor het definitief inleveren van het project. De belangrijkste functionaliteiten zijn werkend. Het gaat om kleine dingen in styling en code die nog verbeterd moeten worden. 
Brouwerij informatie. 
- Payment images op de winkelmandje
- Filters aangepast
- Diverse verbeteringen doorgevoerd
- Id weghalen uit de product elementen van de webshop
- Schrijven van verantwoording, eindopdracht en handleiding
- Project volledig afgerond 