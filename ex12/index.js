let a = 8, b = 6;
// Only change code below this line

[a , b] = [b, a];

console.log(a, b) // 6 8

/*Desestruturando o array, eu consigo fazer com que o A
 pegue os dados de B */


/*  EXAMPLE

const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b); // 1 2


const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c); //1, 2, 5

as vírgulas vão pular os número 3 e 4, logo o c vai ser o número 5
 */