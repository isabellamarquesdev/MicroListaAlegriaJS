// 24. TARIFA DE ESTACIONAMENTO

let horas = 5;
let clienteConveniado = false;

// 1. Calcula a tarifa base dependendo das horas
let tarifaBase = 10;
if (horas > 2) {
    tarifaBase = 10 + (horas - 2) * 4;
}

// 2. Aplica o desconto se o cliente for conveniado
let valorFinal = tarifaBase;
if (clienteConveniado) {
    valorFinal = tarifaBase - (tarifaBase * 0.20);
}

// 3. Exibe o resultado de forma clara
if (clienteConveniado) {
    console.log(`Você recebeu 20% de desconto! O valor total é R$ ${valorFinal.toFixed(2)}`);
} else {
    console.log(`A tarifa é R$ ${valorFinal.toFixed(2)}`);
}

 // Espero que entenda :)