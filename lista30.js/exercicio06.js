// 06. DESCONTO VIP
let valorCompra = 150;
let clienteVIP = true;
let desconto = (valorCompra * 0.20)

if( valorCompra >= 200 || clienteVIP ==true){
    console.log(`O valor de sua compra ficou:  ${(valorCompra - desconto)}`)
}else{
    console.log(`O valor de sua compra ficou:  ${valorCompra}`)
}