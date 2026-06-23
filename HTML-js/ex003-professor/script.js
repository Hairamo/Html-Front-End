function somar() {
    let num1 = Number.parseInt(document.getElementById(`num1`).value)
    let num2 = Number.parseInt(document.getElementById(`num2`).value)
    let resultado = document.getElementById(`resultado`)
    resultado.innerHTML = `A soma entre ${num1} e ${num2} é igual a ${num1 + num2}`
    
}


function subtrair() {
    
    let num1 = Number.parseInt(document.getElementById(`num3`).value)
    let num2 = Number.parseInt(document.getElementById(`num4`).value)
    let resultado = document.getElementById(`resultado2`)
    resultado.innerHTML = `A soma entre ${num1} e ${num2} é igual a ${num1 - num2}`
}