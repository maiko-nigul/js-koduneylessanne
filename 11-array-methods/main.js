const products = [
  { name: "Sülearvuti", price: 1000 },
  { name: "Hiir", price: 25 },
  { name: "Klaviatuur", price: 75 }
];

const names = products.map(p => p.name);
const cheapProducts = products.filter(p => p.price < 100);
const mouse = products.find(p => p.name === "Hiir");

console.log(names);
console.log(cheapProducts);
console.log(mouse);