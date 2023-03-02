let userChoise= prompt('Scegli pari o dispari');

console.log(userChoise);

let userNumber = parseInt(prompt('Inserisci un numero da 1 a 5'));

console.log(userNumber);

let numeroDaGenerare = false;

generatoreNumeri(numeroDaGenerare);

function generatoreNumeri (numberPc){
    if (numberPc == false){
        newNumber = Math.floor(Math.random() * 5 + 1);
    }
}

console.log(newNumber);

let somma = userNumber + newNumber;

console.log(somma);

calcoloSomma(somma);

function calcoloSomma (sommaDaControllare){
    if ((sommaDaControllare % 2 == 0) && userChoise == 'pari'){
        console.log("Ha vinto l'utente");
    } else {
        console.log("Ha vinto il computer");
    }
}