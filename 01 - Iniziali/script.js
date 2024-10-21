/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function initialLetters (array) {
    const letters = []
    for(let i = 0; i < array.length ; i++){
        const element = array[i]
        letters.push(element.charAt(0))
    }
    return letters
};

// Invoca la funzione qui e stampa il risultato in console
initialLetters (names);
console.log(initialLetters (names));


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]