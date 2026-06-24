/* Verificar se o usuário pode ou não votar. 
Menores de 16 não votam
entre 16 e 18 voto opcional
Maiores de 18 voto obrigatório
Acima de 70 voto opcional
*/

let idade = 18;
if (idade < 16){
    console.log(`Não vota!`);
} else if (idade < 18 || idade >=70) {
    console.log(`Voto opcional!`);
}else {
    console.log(`Voto Obrigatório!`)
}
