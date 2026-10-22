// 25. VELOCIDADE NA VIA
let velocidade = 100;
let limite = 80;

if ( velocidade <= 80 ){
    console.log(`Dentro do limite`);
} else if ( velocidade >  limite && velocidade <= limite * 1.20 ){
    console.log(`Acima do limite`);
} else if ( velocidade > limite && velocidade <= limite * 1.40 ){
    console.log(`Muito acima do limite`);
}