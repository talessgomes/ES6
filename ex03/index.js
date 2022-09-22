function freezeObj() {
    const MATH_CONSTANTS = {
        PI: 3.14
    };
    // Only change code below this line
    Object.freeze(MATH_CONSTANTS);

    // Only change code above this line
    try {
        MATH_CONSTANTS.PI = 99; //atualizando o valor do JSON
    } catch(ex) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}
const PI = freezeObj(); //Pegando o valor de PI do JSON

console.log(PI); //3.14

/*O retorno vai ser um erro e o valor de 3.14,
pois estou usando Object.freeze na variável MATH_CONSTANTS
onde o try vai tentar mudar o valor de PI e não terá sucesso 

/* 
Exemplo

let obj = {
  name:"FreeCodeCamp",
  review:"Awesome"
};
Object.freeze(obj);
obj.review = "bad";
obj.newProp = "Test";
console.log(obj);  { name: "FreeCodeCamp", review: "Awesome" }
*/