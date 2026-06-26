function verificar(){
    let nome = Number.parseInt(document.getElementById(`nome`).value);
    let resul = document.getElementById(`resultado`);
     
    if(nome < 20){
        resul.innerHTML = `<p>Sua velocidade atual é ${nome} KM/h</p> <p> Velocidade abaixo do limite permitido.</p><p> Use sempre cinto de segurança</p>`
    }else if (nome >= 20  && nome <= 80){
        resul.innerHTML = `<p>Sua velocidade atual é ${nome} KM/h</p> <p> Velocidade esta dentro do limite permitido.</p><p> Use sempre cinto de segurança</p>`
    }else {
        resul.innerHTML = `<p>Sua velocidade atual é ${nome} KM/h</p> <p> Você esta <span id='red'>multado</span> por excesso de velocidade.</p><p> Use sempre cinto de segurança</p>`
        let red = document.getElementById(`red`)
        red.style.color = 'red'
    }
}