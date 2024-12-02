/*
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

const benzina = automobili.filter(({alimentazione}) => alimentazione === 'diesel')
const diesel = automobili.filter(({alimentazione}) => alimentazione === 'benzina')
const residuo = automobili.filter(({alimentazione}) => alimentazione !== 'diesel' && alimentazione !== 'benzina')

console.log(benzina, diesel, residuo)


