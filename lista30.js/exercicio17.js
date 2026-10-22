//17. PODE DIRIGIR?
let idade = 16;
let possuiCNH = true;

if ( idade >= 18 && possuiCNH == false){
    console.log(`Não pode dirigir, está faltando a CNH`);
} else if ( idade < 18 && possuiCNH == false){
    console.log(`Não pode dirigir, não possui a idade necessária`);
} else {
    console.log(`Pode dirigir`);
}