/* Array - Listas */

let lista = [];  /* Lista vazia */
let idade = [2, 5 ,9, 10, 15];
let nomes = ['Jaderson', 'Pedro', 'thiago', 'João' ];
console.log(lista)
console.log(idade)
console.log(nomes[2])

console.log(` O tamanho da lista nomes é ${nomes.length}`)

for (var cont = 0; cont <= 3; cont++){
    console.log(`Usuario = ${nomes[cont]}`)
}
for (var n in nomes){
    console.log(`Usuario = ${nomes[n]}`)
}

lista.unshift(51) /* Adiciona um valor no inicio do Array / Lista */
console.log(lista)

lista.push(67)  /* Adiciona um valor no final do Array / Lista */

lista.pop() /* Remove o ultimo elemento da lista */

lista.shift()  //Remove o primeiro elemento da lista

lista.sort()  // Classificar em ordem crescente
lista.reverse()  //Classificar em ordem descrescente

lista .splice(0, 1, 'Jaderson', 'Jefferson')
console.log(nomes) 

console.log(nomes.indexOf('Thiago'))

var cadastros = [
    ['Jaderson', 73, 36],
    ['Adilene', 47, 22]
]
console.log(cadastros[0][2])