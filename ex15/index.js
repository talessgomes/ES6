const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
    // Only change code below this line
    const failureItems = [];
    for (let i = 0; i < arr.length; i++) {
        failureItems.push(`<li class="text-warning">${result.failure[i]}</li>`)
    }
    // Only change code above this line

    return failureItems;
}

const failuresList = makeList(result.failure);

console.log(failuresList);

/*
  [ '<li class="text-warning>no-var</li>',
  '<li class="text-warning>var-on-top</li>',
  '<li class="text-warning>linebreak</li>' ]
  
  Esse resultado aconteceu porque eu fiz um looping usando o for
  cada vez que o parâmetro arr.length ter um valor dentro dele, eu vou ter o resultado
 */



/* EXAMPLE
const person = {
  name: "Zodiac Hasbro",
  age: 56
};

const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greeting); 

Hello, my name is Zodiac Hasbro!
I am 56 years old.

*/
