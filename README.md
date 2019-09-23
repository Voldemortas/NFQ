# NFQ
NFQ 2019 frontend užduotis

## Užduoties aprašymas

Sveitainė simuliuoja Migracijos Tarnybos darbą. Žmonės gali kreiptis dėl 4 (praplečiama) priežasčių:

* *Registracijos* laikinam gyvenimui Lietuvoje
* Laikino gyvenimo Lietuvoje *pratęsimo*
* Asmens dokumento *užsisakymo*
* Asmens dokumento *išdavimo*

Vartotojas užsiregistruoja per fizinį objektą, kuris išspausdina čekį, kuriame pateikta viešas id, 
asmeninis kodas (skirtas prisijungimui vartotojo puslapyje), testuojant svetainę informaciją galima pasiekt
peržiūrėjus globalųjį `data` kintamąjį.

##Naudotos technologijos

Nenaudota jokių framework'ų/library, viskas vanilla JS/CSS/HTML

## Projekto struktūra

[info.html](info.html) – švieslentė  
[calendar.html](calendar.html) – kalendorius  
[admin.html](admin.html) – administratoriaus skydas  
[worker.html](worker.html) – specialistų aplinka  
[user.html](user.html) – vartotojo puslapis  
[scripts/functions.js](scripts/functions.js) – konfigūracija ir bendros funkcijos  
[backend/clients.json](backend/clients.json) – statinis failas, iš kurio galima užkrauti duomenis
[backend/index.mjs](backend/index.mjs) – nodeJS serverio failas

## Gyva peržiūra
Projektas pasiekiamas adresu https://voldemortas.github.io/NFQ/