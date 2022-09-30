const createPerson = (name, age, gender) => (name, age, gender);

const testObj = createPerson("Zodiac Hasbro", 56, "male");

console.log(testObj); //{ name: 'Zodiac Hasbro', age: 56, gender: 'male' }


/* EXAMPLE

const getMousePosition = (x, y) => ({ x, y });

const testObj = getMousePosition(17, 20);
console.log(testObj);
*/