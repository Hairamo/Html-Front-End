/* Verificar a hora do dia e imprimir uma saudação */
let hora = new Date().getHours
console.log(`Agora são exatamento ${hora} horas.`)
if (hora < 12){
    console.log(`Bom dia!!`)
}else if(hora <= 18){
    console.log(`Boa Tarde`)

}else {
    console.log(`Boa Noite`)
}

let valor = new Date().getFullYear()
console.log(valor)