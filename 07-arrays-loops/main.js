const names = ["Kati", "Mati", "Jaan"];

names.push("Mari");
names.pop();

console.log(names.includes("Kati"));

for (let i = 0; i < names.length; i++) {
  if (names[i] === "Mati") break;
  console.log(names[i]);
}

for (const name of names) {
  console.log(`Nimi: ${name}`);
}