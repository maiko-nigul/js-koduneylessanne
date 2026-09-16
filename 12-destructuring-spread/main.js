const person = { firstName: "Mari", age: 30 };
const { firstName, age } = person;

const [firstItem, secondItem] = [10, 20];

const originalArr = [1, 2];
const newArr = [...originalArr, 3];

const updatedPerson = { ...person, age: 31 };

const config = { theme: "dark" };
config.theme = "light";