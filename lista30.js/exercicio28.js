// 28. CONSUMO DE ENERGIA
let consumoKWh = 250;

 if ( consumoKWh <= 100 ){
    console.log(`O consumo de energia é R$${ consumoKWh * 0.60}`);
 } else if (consumoKWh > 100 && consumoKWh <= 200){
    console.log(`O consumo de energia é R$${ consumoKWh * 0.75}`);
 } else if (consumoKWh > 200){
    console.log(`O consumo de energia é R$${ consumoKWh * 0.90}`);
 }