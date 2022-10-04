// Only change code below this line
    class Vegetable {
        constructor(name) {
            this.name = name;
        }
    }

    // Only change code above this line

    const carrot = new Vegetable('carrot');
    console.log(carrot.name); // Should display 'carrot'
    /*Como estou selecionando a variável e o objeto que foi criado,
    o meu retorno é somente carrot */


    /* EXAMPLE

ES5 
var SpaceShuttle = function(targetPlanet){
  this.targetPlanet = targetPlanet;
}
var zeus = new SpaceShuttle('Jupiter');
console.log(zeus); //{ targetPlanet: 'Jupiter' }


ES6
class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
}
const zeus = new SpaceShuttle('Jupiter');
console.log(zeus); //{ targetPlanet: 'Jupiter' }
 */