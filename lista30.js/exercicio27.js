// 27. SISTEMA DE LOGIN COM BLOQUEIO

let usuario = "admin";
let senha = "1234";
let tentativas = 2;

if ( tentativas >= 3){
    console.log(`Conta bloqueada`);
} else if  ( tentativas <= 2 && usuario == "admin" && senha == "1234"){
    console.log(`Conta valida`);
} else {
    console.log(`Credenciais inválidas`);
}