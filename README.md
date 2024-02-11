# Eindopdracht Novi Hogeschool 

### The Tasty Beer Club

Door: Jeroen Kraaij 

Start project - 27 december 2023

#### Documentatie: 

#### Commentaar / verantwoording: 

27 december 2023:
Vandaag ben ik gestart met het bouwen van het project "The Tast Beer Club":

- Het project initialiseert in Git
- Branch aangemaakt in Git
- Aanmaken van documentatie 
- Mappen directory aangemaakt met components, pages & helper
- Binnen de directory "Pages"
    - Home.jsx en Home.css
  
29 december 2023:
Mijn doel is om vandaag een menu-structuur op te zetten met 
Daarnaast de opzet van de semantische basis elementen zoals body, header, nav en footer

- Header met navigatie opgezet
- Menu en men items in header gezet
- Install van react-router-dom
- Import van Routes in main.jsx
- import van Routes en Route in App.jsx
- Routes & Route omwikkeld voor de menu elementen met path en element
- Routing van de Navlink in Header en nav gemaakt 
- CSS van Header en menu in de basis opgezet met een default-link en active-link
- Definitieve styling volgt later 
- Opzet van de Footer gerealiseerd
- Menu is werkend en de pagina's zijn zichtbaar
- Project Push naar Git

3 januari 2024: Het nieuwe jaar
De afgelopen dagen ben ik bezig geweest om de globale styling en opzet van de website te realiseren. 
Daarbij was het lastig om alles goed te krijgen binnen de juiste CSS bestanden. Hiermee bedoel ik waar de regels het beste gedeclameerd konden worden. 
Uiteindelijk is het gelukt en staan de globale CSS in het bestand index.css. Het ontwerp is totaal niet wat het moet zijn maar heeft wel alle classes gedefinieerd. 
Het volgende is bereikt: 

- Kleuren zijn aangemaakt in de :root en de meeste variabelen zijn gekoppeld aan de individuele CSS-classes
- In mijn ontwerp heb ik andere kleuren gebruikt en dit wordt nog aangepast in een later stadium. De rede hiervoor is dat ik eerst de basiswebsite volledig goed wil hebben en ik ga dan invullen en aanpassen
- Het voorlopige font is geinstalleerd en werkt op de H1 t/m H6 en het algemene (tekst) lettertype
- De button en links hebben een voorlopige styling en alles staat uitgewerkt op een nieuwe pagina "Design"
- De pagina "Design" heb ik aangemaakt om te zien of alles juist wordt weergegeven. Deze pagina wordt verwijderd als het project wordt opgeleverd
- Binnen de App.css zijn twee belangrijke classes aangemaakt. Een outer en inner container om de hoofdcontent al juist weer te geven
- De outer en inner container worden ook gebruikt om meer controle te houden over de responsiveness 
- Het design en de website ziet er nu zo uit:

![](/Users/jkraaij/Desktop/Screenshot 2024-01-03 at 11.51.43.png)

- Vanaf morgen wil ik starten met de implementatie van het daadwerkelijke design en start ik ook met het aanmaken van de componenten. 
- Deze versie heb ik naar GitHub - branch feature/startproject gestuurd

4 januari 2024: 
Gisteren toch nog verder gewerkt aan dit leuke project. Ik was benieuwd of ik al deze secties in het ontwerp kon zetten middels de stof uit de lessen. 
De sectie voor de bieren heb ik via de API in een overzicht weten te krijgen. Ik heb hiervoor gebruik gemaakt van de Asynch functie en de Get.axios succesvol uitgevoerd op de url van de API. 

1. De bieren zijn nu zichtbaar op de pagina Webshop
2. De bieren worden via het component "ProductCard" getoond
3. CSS is aangemaakt maar ik heb nog een probleem met de Flex-wrap. Deze werkt nog niet goed en de bieren staan nu nog onder elkaar
4. Een andere sectie toegevoegd, namelijk doe van de blogs. 
5. De blogs zijn zelf geschreven content die ik een een Json bestand heb gezet. Het is niet een zeer belangrijk onderdeel van de functionaliteit maar geeft extra informatie. 
6. Branch "feature/startproject" heb ik samengevoegd met de Main branch. 
7. Nieuwe Branch aangemaakt ""feature/design"
8. Start gemaakt met het volledige design
   
5 januari 2024:
- Oplossing gevonden voor de flex-wrap. Hiervoor heb ik een grid gebruikt van 3 kolommen en dat werkt goed. 
- De bieren worden nu en drie rijen getoond

![Screenshot 2024-01-15 at 18.32.54.png](..%2F..%2FDesktop%2FScreenshot%202024-01-15%20at%2018.32.54.png)

6 januari 2024: 
Even een dag naar de opleiding. Het project begint vorm te krijgen mede door een logo, font en een aantal basiskleuren. 
Deze zijn allemaal opgenomen in de index.css als globale style. De main header ziet er nu zo uit. 

![Screenshot 2024-01-15 at 18.38.13.png](..%2F..%2F..%2F..%2Fvar%2Ffolders%2F8c%2F4dpz9pw92h35gz20cwcrw2_m0000gn%2FT%2FTemporaryItems%2FNSIRD_screencaptureui_goo1qE%2FScreenshot%202024-01-15%20at%2018.38.13.png)
- Het logo is toegevoegd als SVG-bestand binnen de styling van het Header component
- Menu is op desktop 

7 januari 2024 
- Het component Choose Taste is het belangrijkste component en handelt de de smaaktest geheel af
- Start gemaakt met het maken van de smaaktest. Deze test zijn een aantal plaatjes waar ja of nee op moet worden gekozen
- Door middel van 5 categories heb ik de images ingedeeld. Deze kunnen door buttons met "Ja / Duim omhoog" en "Nee / duim" omlaag worden bediend
- De code geeft nu de categorieën weer en hoevaak deze met "Ja" zijn aangeklikt
- Ik heb voor dit proces een Switch statement gebruikt en ik weer nog niet hoe ik deze kan stoppen
- Dit is een vraag die ik ga stellen aan een docent. Het klikken op de "ja" button blijft doorgaan en ik wil dan stoppen met de smaaktest
- De volgende stap is dan ook om de biertjes te koppelen aan de resultaten van de Smaaktest. Dit is nog in ontwikkeling

9 januari 2024
- De Webshop is de hoofdpagina en daarin heb ik een component gezet genaamd "Product Article"
- Binnen de pagina "Webshop" laat ik op de gegevens van de API binnenkomen en deze heb ik middels de gebruikelijke werkwijze en lesstof verwerkt
- De code binnen de pagina zal ik in een later stadium nog bekijken om deze te optimaliseren in meerdere componenten als dat noodzakelijk blijkt te zijn
- Een probleem ontstond met de koppeling naar CSS. Ik kreeg de bieren alleen onder elkaar terwijl ik de CSS Flex-wrap gebruikte
- Uiteindelijk heb ik het probleem opgelost met een CSS van  display: grid; & grid-template-columns: 1fr 1fr 1fr;
- In een later stadium ga ik verder met de webshop Pagina

12 januari 2024
- Gestart met een optimalisatie van het CSS
- De styling en in welk bestand dit moet vind ik nog lastig
- Daarin probeer ik te kijken naar de nieuwe stof van het CSS bestand gekoppeld met een .module.css
- Dit proces zorgt ervoor dat een het CSS van een pagina niet verder voorkomt en reageert in de overkoepelende CSS files
- Deze aanpassing is nu voor de meeste bestanden doorgevoerd binnen het project.
- Daarnaast heb ik geprobeerd om via de @media om meer responsiveness in het project te krijgen.
- Vooral "Mobiele" heeft aandacht. Hier is een andere header noodzakelijk met een "Hamburger menu".
- Dit is extra code en het was echt even puzzelen om dit in de "Route" met React goed te krijgen.
- Uiteindelijk is het resultaat dat het mobile menu zichtbaar is en dat dit wordt afgevuurd met een OnClick handler op het hamburgermenu. 
- Het CSS moet vervolgens het nav .hamburger-menu omzetten van "none" naar "flex" zetten. Maar hier ervaar ik nog problemen en zal dit aan een docent voorleggen.
- Voor de rest schaalt de hele applicatie zoal dat gewenst is dus dat is mooi!

15, 16 & 17 januari
- Een component wat minder complex is dan de Smaaktest bijvoorbeeld, is het bloggedeelte. 
- Ik vind het leuk om meer content op de website te tonnen en heb daarom een blogpagina gemaakt. 
- In de stof hebben wij uitgebreid de werking van de blog behandeld. Ik heb dit één op één overgenomen.
- Daarbij heb ik een eigen JSon file gemaakt in de map "constants". Dit bestand heeft 4 blogartikelen die getoond worden op de pagina "Blog".
- Er kan worden doorgeklikt van de blogpagina naar het daadwerkelijk blogartikel.
- De gegevens zijn allemaal dynamisch en de blogs worden in de Route goed afgehandeld.

20, 21, 26 & 27 januari 
In de ontwikkeling van de "Smaaktest" ben ik tegen een probleem aangelopen. 
De data die ik genereer via de Smaaktest wil ik opslaan in een ander component. Dit component is "Kies je Box"
Alleen wordt de data verwijderd (gaat verloren) bij het klikken naar de "Kies je Box". Dit is ook logisch want "Kies je Box" wordt opnieuw gerenderd. 
De data van Smaaktest zal ik toch ergen moeten opslaan. Hier ben ik nog mee bezig en kom ik later op terug.
- Smaaktest is verder afgemaakt
- Component "Kies je box" is aangemaakt en wordt getoond via een button op de Smaaktest.
- Nog aan styling gewerkt. Helaas is het nog niet gelukt om responsiveness te verbeteren van vooral mobile.
- Op de Smaaktest heb ik ook een statusbar gemaakt

30 januari
- Aanmaak van winkelmandje 
- Binnen het winkelmandje kun je je gegevens invullen voor het versturen van de bierboxen. 
- Ook kun je in de winkelmand registreren voor de inlog / account.
- Ik heb een formulier gemaakt dat via de useState alle velden aanspreekt. 
- Voor de authentication van de sign-up, inloggen en uitloggen wil in een nieuwe branch gaan doen. 
- Omdat ik projecten later echt wil gaan gebruiken heb ik besloten om een externe backend te werken. 
- Mijn gegevens verwerking ga ik Google Firebase gebruiken. 
- Ik begrijp dat dit een risico is maar ik heb ontzettend goede documentatie gevonden inclusief Youtube tutorials 
- Voor mij is het leerproces van het gebruik van een onafhankelijke backend belangrijk en heb daarom hiervoor gekozen. 
- Om het risico te beperken maak ik wel een nieuwe branch aan en als het toch blijkt niet te werken stap ik toch over naar de Novi Backend.

