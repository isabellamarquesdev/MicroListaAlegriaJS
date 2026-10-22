// 20. DESCONTO POR FAIXA
let valorCompra = 380;

if (valorCompra < 100 ){
    console.log(`Sem desconto, o preço da conta é: ${valorCompra}`);
} else if ( valorCompra >= 100 && valorCompra < 300 ){
    console.log(`O preço da compra é: ${[valorCompra - ( valorCompra * 0.05)]} `);
} else if ( valorCompra >= 300 && valorCompra < 500 ){
    console.log(`O preço da compra é: ${[valorCompra - ( valorCompra * 0.10)]} `);
} else if ( valorCompra >= 500 ){
    console.log(`O preço da compra é: ${[valorCompra - ( valorCompra * 0.15)]} `);
}