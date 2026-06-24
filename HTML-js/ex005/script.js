/* Trabalhando com Condições IF e Else 

 Objetivo - Verificar através da média do aluno, se ele foi aprovado ou reprovado 

 Vamos considerar a média para aprovação */

let media = 4;
let situacao = ''

if (media >= 7) {
    /* console.log(`Aluno Aprovado. Sua média é ${media}`) */
    situacão = 'Aprovado';

} else if (media < 5){
    situacao = 'Reprovado'
}
 else {
    situacao = 'Recuperação'

    Situacao = 'Reprovado'
    /* console.log(`Aluno Reprovado. Sua média é ${media}`) */
}
console.log(`Aluno ${situacao}. Sua média é ${media}`)