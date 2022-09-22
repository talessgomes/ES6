const s = [5, 7, 2];

function editInPlace() {
    // Only change code below this line
    s[0] = 2;
    s[1] = 5;
    s[2] = 7;

    // Selecionando os números de cada parte que ficam dentro de um array e trocando os valores
}
editInPlace();

console.log(s); //[ 2, 5, 7 ]
/*

const s = [5, 6, 7];
s = [1, 2, 3]; vai dar erro nesta parte, 
               pois o array vai sobrepor o outro que foi declarado
s[2] = 45;    Esse aqui vai selecionar o valor 7 que está dentro do array e vai trocar o 7 por 45;
console.log(s); [5, 6, 45]

*/