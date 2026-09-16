const single = 'Tere';
const double = "Maailm";
const template = `${single} ${double}!`;

const rawName = "  jUhaN  ";
const cleanName = rawName.trim().toLowerCase();
const formattedName = cleanName.charAt(0).toUpperCase() + cleanName.slice(1);

console.log(formattedName.length);
console.log(formattedName.includes("juh"));

const greeting = `Tere, ${formattedName}! Sinu nimes on ${formattedName.length} tähte.`;
console.log(greeting);