/* SNACK 7
Crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
 
Infine stampa separatamente i 3 array.
*/

const automobili = [
  { marca: 'opel', modello: 'mokka', alimentazione:'diesel'},
  { marca: 'opel', modello: 'astra', alimentazione:'benzina'},
  { marca: 'ford', modello: 'fiesta', alimentazione:'elettrico'},
  { marca: 'fiat', modello: 'punto', alimentazione:'metano'},
  { marca: 'toyota', modello: 'epsilon', alimentazione:'gpl'},
  { marca: 'lancia', modello: 'ypsilon', alimentazione:'benzina'},
  { marca: 'alfa-romeo', modello: 'giulia', alimentazione:'elettrico'},
  { marca: 'jaguar', modello: 'montreal', alimentazione:'metano'},
  { marca: 'mercedes-benz', modello: 'gle', alimentazione:'metano'},
  { marca: 'bmw', modello: 'x6', alimentazione:'diesel'}
]

const diesel = automobili.filter(({alimentazione}) => alimentazione === 'diesel')
console.log(diesel)
const benzina = automobili.filter(({alimentazione}) => alimentazione === 'benzina')
console.log(benzina)
const residuo = automobili.filter(({alimentazione}) => alimentazione !== 'diesel' && alimentazione !== 'benzina')
console.log(residuo)



/* SNACK 8
A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.

Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’]

*/

const nomi = ['GioVAnni', 'PLUTO', 'GIAngioLO', 'GianFrancioscHIO']

const nomiCapitalize = nomi.map( nome => {
  const firstLetter =  nome.toUpperCase().charAt(0)
  const otherLetter = nome.substring(1).toLowerCase()

return firstLetter + otherLetter

})
console.log(nomiCapitalize)


/*oppure*/ const nomiCapitalizer = nomi.map( nome => nome.charAt(0).toUpperCase + nome.substring(1).toLowerCase)

console.log(nomiCapitalizer)


/* SNACK 9

Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un’età.

Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.

*/


const persone = [
  { nome: 'Giovanni', cognome: 'Muciaccia', eta:'57'},
  { nome: 'Bruno', cognome: 'Giordano', eta:'15'},
  { nome: 'Ennio', cognome: 'Morricone', eta:'17'},
  { nome: 'Guido', cognome: 'Lamoto', eta:'18'},
  { nome: 'Pietro', cognome: 'Pacciani', eta:'18'},
  { nome: 'Jimmy', cognome: 'Ghione', eta:'30'}
]


// const sePuoGuidare = persone.map((persona) => {
//   if (persona.eta >= 18){
//     return `${persona.nome} ${persona.cognome} può guidare`
//   } else {
//     return `${persona.nome} ${persona.cognome} non può guidare`
//   }
// })

// console.log(sePuoGuidare)



const risultato = persone.map((persona) => {
  const {nome, cognome} = persona
  const licenza = persona.eta >= 18 ? `${nome} ${cognome} può guidare` : `${nome} ${cognome} non può guidare`
  return {...persona, licenza}
})

console.log(risultato)