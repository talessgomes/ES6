const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    min: -0.75,
    average: 35.85
};

// Only change code below this line
const half = ({max, min}) => (max + min) / 2.0;
// Only change code above this line

console.log(half(stats)); //28.015

//desestruturando a função, eu consigo chamar max e min
//sem precisar usar stats.min ou stats.max