function somar() {
    let num1 = parseInt(document.getElementById(`num1`).value);
    let num2 = parseInt(document.getElementById(`num2`).value);

    let soma = num1 + num2
    let resultado = document.getElementById(`resultado`)
    resultado.innerHTML = ` A soma é ${soma}.`
    
}

function subtrair() {
    let num1 = parseInt(document.getElementById(`num3`).value);
    let num2 = parseInt(document.getElementById(`num4`).value);
    
    let subtracao = num1 - num2
    let resultado = document.getElementById(`resultado2`)
    resultado.innerHTML = ` A subtração é ${subtracao}.`

}