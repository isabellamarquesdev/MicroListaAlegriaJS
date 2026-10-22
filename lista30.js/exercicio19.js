// 19. BOLETIM COM RECUPERAÇÃO
let nota = 10;
let frequencia = 82;

if ( frequencia <75 ){
    console.log(`Reprovado por frequencia`);   
} else if ( nota >= 5 && nota < 7){
    console.log(`Recuperação`);
} else if ( nota < 5 ){
    console.log(`Reprovado por nota`);
}else if ( nota >= 7 && nota <= 10 ) {
    console.log(`Aprovado`);
}