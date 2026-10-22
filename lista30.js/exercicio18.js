// 18. ESTOQUE DE PRODUTO

let estoque = 4;
let quantidadePedida = 1;

if ( quantidadePedida > 0 && quantidadePedida <= 4){
    console.log(`Venda autorizada`);
} else if ( quantidadePedida < 0 && quantidadePedida <= 4 ){
    console.log(`Venda não autorizada, a quantidade pedida deve ser positiva`);
} else if ( quantidadePedida > 0 && quantidadePedida > 4){
    console.log(`Venda não autorizada, não possui estoque suficiente`);
}

if ( quantidadePedida > 0 && quantidadePedida <= 4){
    estoque--
}

