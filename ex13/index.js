const source = [1,2,3,4,5,6,7,8,9,10];

function removeFirstTwo(list) {
    // Only change code below this line

    const [a, b, ...arr] = list; // Change this line

    // Only change code above this line
  return arr;
}

const arr = removeFirstTwo(source);

console.log(arr); // [3,4,5,6,7,8,9,10]
//o A e o B pegaram os primeiros dados do array
// o arr pegou o resto de list

/* EXAMPLE

const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b); // 1, 2
console.log(arr);  //3, 4, 5, 7
 */