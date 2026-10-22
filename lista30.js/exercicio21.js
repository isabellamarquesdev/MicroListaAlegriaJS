// 21. TRIÂNGULO VÁLIDO
let lados
let ladoA = 1;
let ladoB = 2;
let ladoC = 3;

// Tarefa: descubra se os três comprimentos podem formar um triângulo.
// Dicas:
// - Todos os lados devem ser maiores que zero.
// - A soma de quaisquer dois lados deve ser maior que o terceiro.
// - Combine as três comparações com &&.
// Teste extra: lados 1, 2 e 3 (não formam triângulo).
 
if( ladoA > 0 && ladoA < ladoC + ladoB, ladoB > 0 && ladoB < ladoA + ladoB, ladoC > 0 && ladoC < ladoA + ladoB  ){
    console.log(`É um triangulo válido`);
} else{
    console.log(`Não é um triangulo válido`);
}