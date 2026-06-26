/* function tabuada(){
    let numero = Number.parseInt(document.getElementById(`numero`).value);
    let res = document.getElementById(`resultado`);
    let tab = document.getElementById(`tab`)
    for (var cont = 0; cont <= 10; cont++) {
        tab.innerHTML = `Tabuada de ${numero}`
        res.innerHTML += ` <p>${numero} x ${cont} = ${numero * cont}</p>`
    }
} */
function tabuada(){
    let numero = Number.parseInt(document.getElementById(`numero`).value);
    let res = document.getElementById(`resultado`);
    let tab = document.getElementById(`tab`)
    var i = 0
    while (i <= 10) {
        i++
        tab.innerHTML = `Tabuada de ${numero}`
        res.innerHTML += ` <p>${numero} x ${i} = ${numero * i}</p>` 
    }
}