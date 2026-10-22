// 12. FRETE GRÁTIS
let totalCompra = 180;
let cupomFrete = false;
let frete = 25;
let total = totalCompra + frete;

if ( totalCompra >=250 || cupomFrete == true ){
    frete = 0;
    console.log(`O preço da sua compra é:  ${ totalCompra }`)
} else {
    console.log(`O preço de sua compra é: ${total} `)
}