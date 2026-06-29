function cadastro(){
    let nomes = document.getElementById(`list`).value
    resul = nomes
    
}

function imprimir(){
    let resul = document.getElementById(`resultado`)
    for (var n in nomes) {
        resul.innerHTML = `Usuários = ${nomes}`
    }

}

function limpar(){
    resul.innerHTML = ''
    
}