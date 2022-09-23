const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];

let arr2;

arr2 = [...arr1];

console.log(arr2); //[ 'JAN', 'FEB', 'MAR', 'APR', 'MAY' ]

/*Se eu fizer isso arr2 = [...arr1], eu vou estar criando uma cópia do arr1
que vai ficar dentro do arr2*/


/* EXAMPLE 

const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr); //89


aqui eu vou estar pegando o número maior

*/