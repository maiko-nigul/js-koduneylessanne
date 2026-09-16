console.log(5 === "5");
console.log(5 == "5");

const age = 20;
const isLoggedIn = true;

if (age >= 18 && isLoggedIn) {
  console.log("Juurdepääs lubatud");
} else if (age < 18 || !isLoggedIn) {
  console.log("Juurdepääs piiratud");
}

const accessMessage = age >= 18 ? "Täiskasvanu" : "Alaealine";
console.log(accessMessage);