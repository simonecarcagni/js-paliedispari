let userWord = prompt('Inserisci una parola');

console.log(userWord);

let newWord = '';

for (i = userWord.length - 1; i >= 0; i--){

    newWord += userWord[i];

}

console.log(newWord);

if (userWord == newWord){
    console.log('La parola è palindroma');
} else {
    console.log('La parola non è palindroma');
}