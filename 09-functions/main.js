function greet(name = "Külaline") {
  return `Tere, ${name}!`;
}

console.log(greet("Peeter"));
console.log(greet());

function noReturn() {
  console.log("Teeb midagi");
}
const result = noReturn();
console.log(result);