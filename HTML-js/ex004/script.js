var x = 0
function clique() {
    x++
    let resultado = document.getElementById(`resultado`)
    
    resultado.innerHTML = `<p>O contador esta com ${x} cliques</p>`
    
    
}
function zera() {
    x = 0
    let resultado = document.getElementById(`resultado`)
    resultado.innerHTML = `<p>O contador esta com ${x} cliques</p>`
}