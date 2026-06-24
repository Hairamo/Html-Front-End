let media = 8
let situacao = ''

if(media > 5 && media < 7){
    situacao = 'Recuperação'
}else if (media > 7){
    situacao = 'Aprovado'
}else{
    situacao = 'Reprovado'
}
console.log(`Aluno ${situacao}. Sua média é ${media}`)
