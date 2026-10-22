// 29. PROCESSAMENTO DE PEDIDO

let estoque = 12;
let quantidade = 13;
let precoUnitario = 80;
let saldoCliente = 220;
let clienteVIP = true;

let subtotal = quantidade * precoUnitario;
let valorFinal = clienteVIP ? subtotal * 0.90 : subtotal;
// Tarefa: autorize a compra somente se quantidade > 0,
// quantidade <= estoque e o cliente tiver saldo suficiente.
// Clientes VIP recebem desconto de 10% ANTES de comparar o saldo.
// Dicas:
// - Calcule subtotal = quantidade * precoUnitario.
// - Se clienteVIP, valorFinal = subtotal * 0.90; caso contrário,
//   valorFinal = subtotal.
// - Valide quantidade e estoque; então compare saldoCliente >= valorFinal.
// - Mostre o motivo da rejeição, se houver.
// Teste extra: clienteVIP = true (o desconto muda a aprovação?).

if ( quantidade > 0 && quantidade <= estoque && saldoCliente > precoUnitario){
    console.log(`Pedido Autorizado`);
} else if (quantidade < 0){
    console.log(`Pedido negado: Valor invalido`);
} else if (quantidade >= estoque ){
    console.log(`Pedido negado: pedido maior que estoque`); 
}  else if ( saldoCliente < precoUnitario ){
    console.log(`Pedido negado: saldo insuficiente`); 
}