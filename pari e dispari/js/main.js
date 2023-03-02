let userChoise= prompt('Scegli pari o dispari');

console.log(userChoise);

let userNumber = parseInt(prompt('Inserisci un numero da 1 a 5'));

console.log(userNumber);



const numeroBase = 1;
const numeroTetto = 5;

let numberPC = generatoreNumeri(numeroBase, numeroTetto);

function generatoreNumeri (min , max){

    let numberRandom = Math.floor(Math.random() * (max - min + 1)) + min;
    
    return numberRandom;
}

console.log(numberPC);

let somma = userNumber + numberPC;

console.log(somma);

let conclusione = calcoloSomma(somma);

console.log(conclusione);

function calcoloSomma (sommaDaControllare){

    let result = '';

    if ((sommaDaControllare % 2 == 0) && userChoise == 'pari'){
        result = "Ha vinto l'utente";
    } else {
        result = "Ha vinto il computer";
    }

    return result;
}

