// ES6 code

const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};

// Only change code below this line

const {today: highToday, tomorrow: highTomorrow} = HIGH_TEMPERATURES;

console.log(HIGH_TEMPERATURES); //{ yesterday: 75, today: 77, tomorrow: 80 }

/* EXAMPLE
   ES5 code
   
   const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// Only change code below this line
  
const highToday = HIGH_TEMPERATURES.today; // 77
const highTomorrow = HIGH_TEMPERATURES.tomorrow; //80
   */