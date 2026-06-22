function cadastrar() {
    let nome = document.getElementById(`nome`);
    let lista = document.getElementById(`lista`);
    lista.innerHTML += `<p> ${nome.value} </p>`
    nome.value = ''
    nome.focus()
}
