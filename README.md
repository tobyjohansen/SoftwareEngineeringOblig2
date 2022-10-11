# Github Actions med Testing

Jeg har laget en Github Action workflow med Node.js. Det er allerede laget en mal på dette i github actions som gjør denne jobben veldig enkelt.
Denne Github actionen er som sakt standard og laget av github selv som man velger og bruker nodejs sin testing. Dette betyr at utenom å velge denne actions så er det ikke noe man trenger å gjøre mer for et så lite projekt som dette.

# Nodejs Action Workflow

Det er mulig derimot å redigere og skreddersy denne actionen. Dette gjør man ved å redigere node.js.yml filen. Der vill man kunne endre på når jobben vill kjøre ved å endre på "on:" og det som står der. Det denne workflowen også gjør er å starte en linux maskin og installerer node og kjører 3 npm kommandoer. Den ene er npm ci som installerer alle pakkene som er skrevet i package.json. Det andre er npm run build --if-present som kjører build kommandoen vis den er satt opp. I dette projektet så er det ikke det så denne kunne egentlig vært fjernet. Og siste er npm test som kjører testene. Man har da altså mulighet til å legge til flere forskjellige maskin typer og node versioner som skal testes. Det er for dette projektet valgt standard.
