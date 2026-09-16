# JavaScript Fundamentals - Tunniülesanded

Siin repositooriumis on esitatud JavaScripti põhitõdede näited teemade kaupa.

## Teemad

1. **Variables** (`01-variables/main.js`)
2. **Data Types** (`02-data-types/main.js`)
3. **Operators & Conversion** (`03-operators-type-conversion/main.js`)
4. **Strings & Templates** (`04-strings-template-literals/main.js`)
5. **Comparisons & Logic** (`05-comparisons-decisions/main.js`)
6. **Numbers & Math** (`06-numbers-math/main.js`)
7. **Arrays & Loops** (`07-arrays-loops/main.js`)
8. **Objects & Missing Data** (`08-objects-missing-data/main.js`)
9. **Functions** (`09-functions/main.js`)
10. **Arrow Functions & Callbacks** (`10-arrow-functions-callbacks/main.js`)
11. **Array Methods** (`11-array-methods/main.js`)
12. **Destructuring & Spread** (`12-destructuring-spread/main.js`)
13. **Modules** (`13-modules/`)
14. **Async & Promises** (`14-async-promises/main.js`)
15. **Fetch & Error Handling** (`15-fetch-json-error-handling/main.js`)
16. **Practical Exercise** (`16-practical-exercise/main.js`)

---

## 16. Praktilise kordamisülesande selgitused

Failis `16-practical-exercise/main.js` on lahendatud kasutajate massiivi kordamisülesanded (punktid 3.1–3.12):

* **3.1. Nimede kuvamine (`.forEach()`):** Käib läbi kõik kasutajad ja väljastab iga kasutaja nime (`user.name`).
* **3.2. Aktiivsed kasutajad (`.filter()`):** Loob uue massiivi kasutajatest, kelle `active` omadus on `true`.
* **3.3. Täisealised kasutajad (`.filter()`):** Filtreerib välja kasutajad, kelle vanus on vähemalt 18 (`user.age >= 18`).
* **3.4. Ainult nimede massiiv (`.map()`):** Muundab kasutajate objektide massiivi nimede (sõnede) massiiviks.
* **3.5. Kasutaja leidmine ID järgi (`.find()`):** Tagastab esimese kasutaja objekti, mille `id` on 3.
* **3.6. Kasutaja oleku funktsioon (`getUserStatus`):** Tavaline `function`, mis tagastab vastavalt aktiivsusele "Aktiivne" või "Mitteaktiivne".
* **3.7. Tervituse noolfunktsioon (`getGreeting`):** Arrow function, mis moodustab mallisõne (template literal) abil tervitusteksti.
* **3.8. Destructuring:** Võtab kasutaja objektist otse eraldi muutujatesse `name` ja `age` väärtused.
* **3.9. Uue kasutaja lisamine (Spread):** Kasutab `[...]` süntaksit uue massiivi loomiseks nii, et algne `users` massiiv ei muutu.
* **3.10. Valikuline omadus:** Kasutab *optional chaining* (`?.`) ja *nullish coalescing* (`??`) süntaksit puuduva aadressi ohutuks käsitlemiseks ("Linn puudub").
* **3.11. Nimi ja olek (`.forEach()`):** Kuvab iga kasutaja nime ja oleku, kasutades `getUserStatus` funktsiooni.
* **3.12. Sorteerimine vanuse järgi (`.sort()`):** Sorteerib kasutajad vanuse järgi noorimast vanimani (tehes enne massiivist koopia).

## Käivitamine

Näidete käivitamiseks Node.js abil:
```bash
node 01-variables/main.js
node 16-practical-exercise/main.js