const LOCAL_FORESCAT = {
    yesterday: { low: 61, high: 75},
    today: { low: 64, high: 77},
    tomorrow: { low: 68, high: 80}
};

// Only change code below this line

const {today: { low: lowToday, high: highToday}} = LOCAL_FORESCAT;

// Only change code above this line


console.log(lowToday, highToday); //64 77

/* EXAMPLE
const user = {
  johnDoe: { 
    age: 34,
    email: 'johnDoe@freeCodeCamp.com'
  }
};

const { johnDoe: { age: userAge, email: userEmail }} = user;
*/