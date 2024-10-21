/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.
function saluto (nome,ora){
    let tipoDiSaluto =''
    if (ora <= 13){
        tipoDiSaluto = 'Buongiorno'
    } else if (ora > 13 && ora <= 17){
        tipoDiSaluto = 'Buon pomeriggio'
    } else if (ora > 17){
        tipoDiSaluto = 'Buonasera'
    }
    console.log(`${tipoDiSaluto} ${nome}`)
}


// Invoca la funzione qui e stampa il risultato in console
saluto(name,18)



//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.