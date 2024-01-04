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
2. De bieren worden via het component "ProductArticle" getoond
3. CSS is aangemaakt maar ik heb nog een probleem met de Flex-wrap. Deze werkt nog niet goed en de bieren staan nu nog onder elkaar
4. Een andere sectie toegevoegd, namelijk doe van de blogs. 
5. De blogs zijn zelf geschreven content die ik een een Json bestand heb gezet. Het is niet een zeer belangrijk onderdeel van de functionaliteit maar geeft extra informatie. 
6. Branch "feature/startproject" heb ik samengevoegd met de Main branch. 
7. Nieuwe Branch aangemaakt ""feature/design"
8. Start gemaakt met het volledige design
   