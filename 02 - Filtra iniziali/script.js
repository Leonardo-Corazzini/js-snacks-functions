/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function startLetter (array,letter){
    const newNames =[]
    for(let i = 0; i < array.length; i++){
        const element = array[i]
        if (array[i].startsWith(letter)){
            newNames.push(array[i])
        }
    }
    return newNames
};

// Invoca la funzione qui e stampa il risultato in console
startLetter(names,"A");
console.log(startLetter(names,"A"));


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]