## Philip Roberts – What the heck is the event loop anyway?

### Kokkuvõte
JavaScript on ühelõimeline keel ja saab teha korraga vaid ühte asja. Selle piirangu ületamiseks teeb brauser pikemad ülesanded taustal ära läbi Web API-de. Event loop vaatab pidevalt call stacki ja tõstab callback queue-st uue ülesande täitmisele alles siis, kui peamine pinu on täiesti tühi. Kui teed sünkroonselt liiga aeglast tööd, kiilub brauseri pilt kinni, sest stack on kinni ja lehte ei saa renderdada.

### Mida uut sain teada
- `setTimeout`i aeg on tegelikult miinimumaeg ega garanteeri täpset täitmist, kui stack on veel hõivatud.
- Tihedate sündmuste puhul (näiteks scrollimine) peab kasutama debounce'i, et callback queue'd mitte umbe ajada.

---

## Anjana Vakil – Learning Functional Programming with JS

### Kokkuvõte
Funktsionaalne programmeerimine (FP) on koodikirjutamise stiil, mis aitab vältida objektorienteeritud JS-i keerukusi nagu `prototype` ja `this`. FP põhineb puhastel funktsioonidel, mis ei tekitaks kõrvalmõjusid, ja väärtuste mittemuutmisel ehk immutaabluselt. Tavaliste `for`-tsüklite asemel kasutatakse massiivi meetodeid nagu `map`, `filter` ja `reduce`.

### Mida uut sain teada
- Puhas funktsioon peab saama kogu oma info parameetritest ega tohi muuta midagi väljaspool ennast.
- Tõsisemaks FP jaoks kasutatakse JS-is persistentseid andmestruktuure ja teeke nagu Immutable.js või Ramda.

---

## Shelley – Mechanics of Asynchronous Programming in JavaScript

### Kokkuvõte
Ettekanne annab ülevaate asünkroonse JS-i arengust alates callbackidest kuni generaatorite ja async/awaitini. Callbackide peamine miinus on kontrolli kaotamine koodi üle, samas kui async/await teeb asünkroonse koodi loetavaks ja hoiab selle kergelt hallatavana. Promisid ja async/await teevad veatöötluse selgemaks ning teevad koodi käitamise sujuvamaks.

### Mida uut sain teada
- Promisid ja async/await kasutavad eelisjärjekorda nimega microtask queue, mis tehakse tühjaks enne tavalisi ülesandeid.
- Ilma `.catch()` plokita võivad promiside vead vaikimisi ära kaduda.
- Järjestikused awaitid teevad koodi tarbetult aeglaseks.