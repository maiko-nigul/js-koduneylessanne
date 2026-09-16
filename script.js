const users = [
  { id: 1, name: "Mari", age: 22, active: true },
  { id: 2, name: "Jüri", age: 17, active: false },
  { id: 3, name: "Kati", age: 31, active: true },
  { id: 4, name: "Martin", age: 19, active: false },
  { id: 5, name: "Laura", age: 26, active: true }
];

// 3.1. Kuva console.log() abil kõikide kasutajate nimed.
// .forEach() käib massiivi iga elemendi (user) ükshaaval läbi ja väljastab selle nimelise omaduse (user.name).
console.log("--- 3.1 ---");
users.forEach(user => console.log(user.name));

// 3.2. Kasuta .filter() meetodit, et leida kõik aktiivsed kasutajad.
// .filter() loob uue massiivi, kuhu pannakse ainult need objektid, mille puhul tingimus (user.active === true) on tõene.
console.log("--- 3.2 ---");
const activeUsers = users.filter(user => user.active);
console.log(activeUsers);

// 3.3. Kasuta .filter() meetodit, et leida kõik vähemalt 18-aastased kasutajad.
// Kontrollime iga kasutaja vanust (user.age >= 18) ning tagastame uue massiivi täisealistest kasutajatest.
console.log("--- 3.3 ---");
const adultUsers = users.filter(user => user.age >= 18);
console.log(adultUsers);

// 3.4. Kasuta .map() meetodit, et luua uus massiiv, mis sisaldab ainult kasutajate nimesid.
// .map() võtab iga objekti massiivist ja muundab selle ainult nime sõneks (stringiks), luues nimede massiivi.
console.log("--- 3.4 ---");
const userNames = users.map(user => user.name);
console.log(userNames);

// 3.5. Kasuta .find() meetodit, et leida kasutaja, kelle id on 3.
// .find() tagastab esimese objekti, mille puhul user.id === 3 on tõene (mitte terve massiivi).
console.log("--- 3.5 ---");
const userWithId3 = users.find(user => user.id === 3);
console.log(userWithId3);

// 3.6. Kirjuta tavaline funktsioon getUserStatus(user).
// Tavaline funktsioonisüntaks (function märksõnaga), mis kontrollib tingimuslausega (if/else) kasutaja aktiivsust.
function getUserStatus(user) {
  if (user.active) {
    return "Aktiivne";
  } else {
    return "Mitteaktiivne";
  }
}
console.log("--- 3.6 ---");
console.log(getUserStatus(users[0]));
console.log(getUserStatus(users[1])); 

// 3.7. Kirjuta arrow function getGreeting(user), mis kasutab template literal'it.
// Noolfunktsioon (=>) ja mallisõne (`...`), kus muutujad liidetakse teksti sisse `${}` abil.
const getGreeting = (user) => `Tere, ${user.name}! Sa oled ${user.age} aastat vana.`;
console.log("--- 3.7 ---");
console.log(getGreeting(users[0])); 
console.log(getGreeting(users[1])); 

// 3.8. Kasuta destructuring'ut, et võtta ühe kasutaja objektist välja name ja age.
// Objektist omaduste väljavõtmine otse samanimelistesse muutujatesse ilma "users[0].name" kirjutamata.
console.log("--- 3.8 ---");
const { name, age } = users[0];
console.log(`Nimi: ${name}, Vanus: ${age}`);

// 3.9. Kasuta spread-süntaksit, et luua uus kasutaja ja lisada ta uude massiivi.
// [...] ehk spread koopia algsest massiivist, lisades selle lõppu uue objekti.
console.log("--- 3.9 ---");
const newUser = { id: 6, name: "Karl", age: 24, active: true };
const updatedUsers = [...users, newUser];
console.log(updatedUsers);

// 3.10.  Lisa ühele kasutajale valikuline omadus address:
// user.address?.city kontrollib, kas address on olemas.
// ?? "Linn puudub" tagastab vaikeväärtuse "Linn puudub", kui tulemus on null või undefined.
console.log("--- 3.10 ---");
const userWithAddress = { ...users[0], address: { city: "Tallinn" } };
console.log(userWithAddress.address?.city ?? "Linn puudub");
console.log(users[1].address?.city ?? "Linn puudub");

// 3.11. Käi kasutajad läbi .forEach() abil ja kuva iga kasutaja nimi ja olek.
// .forEach() kutsub iga kasutaja puhul välja eespool loodud getUserStatus() funktsiooni.
console.log("--- 3.11 ---");
users.forEach(user => {
  console.log(`${user.name} – ${getUserStatus(user)}`);
});

// 3.12. Sorteeri kasutajad vanuse järgi noorimast vanimani.
// [.users] teeb massiivist koopia (et algset järjekorda mitte muuta) ja .sort((a, b) => a.age - b.age) sorteerib vanuse järgi kasvavalt.
console.log("--- 3.12 ---");
const sortedUsers = [...users].sort((a, b) => a.age - b.age);
console.log(sortedUsers);