// Only change code below this line
const bicycle = {
    gear: 2,
    setGear(newGear) {
        this.gear = newGear;
    }
};

// Only change code above this line
bicycle.setGear(3);
console.log(bicycle.gear); //3


/*  EXAMPLE

Code within ES5

const person = {
  name: "Taylor",
  sayHello: function() {
    return `Hello! My name is ${this.name}.`; //Taylor
  }
};

Code within ES6

const person = {
  name: "Taylor",
  sayHello() {
    return `Hello! My name is ${this.name}.`; //Taylor  }
};

 */