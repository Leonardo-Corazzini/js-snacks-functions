/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function vowelsCount(string) {
    const vowels = ["a","e","i","o","u"]
    let numberOfVowels = 0
    for(let i = 0; string.length ;i++){
        const letter = string.indexOf(i)
        if (vowels.includes(letter)){
            numberOfVowels++
        }
    }
    return numberOfVowels
};

// Invoca la funzione qui e stampa il risultato in console
const result = vowelsCount(word);
console.log(result)


//Risultato atteso se si passa 'javascript': 3 (a, a, i)