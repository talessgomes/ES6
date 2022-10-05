const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer is set to true to represent a successful response from a server
    let responseFromServer = true;

    if (responseFromServer) {
        resolve("We got the data").then(result => {
            console.log(result);
        });
    } else {
        reject("Data not received");
    }
});

/*Basicamente, eu estou fazendo uma promessa, onde o then vai me retornar o
valor do que for aparecer caso for verdadeiro */

/* EXAMPLE
 
myPromise.then(result => {
  
});
 */