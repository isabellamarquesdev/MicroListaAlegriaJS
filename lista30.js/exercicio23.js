// 23. CÁLCULO DE IMC (EXERCÍCIO DE PROGRAMAÇÃO)
let peso = 100;
let altura = 1.75;
let imc = peso / (altura ** 2);


if ( imc < 18.5){
    console.log(` O valor do imc é ${imc.toFixed(2)}, logo, abaixo do peso`);
} else if (imc >= 18.5 && imc < 25 ){
    console.log(`O valor do imc é ${imc.toFixed(2)}, logo, faixa considerada normal`);
} else if (imc >= 25 && imc < 30 ){
    console.log(`O valor do imc é ${imc.toFixed(2)}, logo sobrepeso`);
} else if (imc >= 30 ){
    console.log(`O valor do imc é ${imc.toFixed(2)}, logo, obesidade`);
}