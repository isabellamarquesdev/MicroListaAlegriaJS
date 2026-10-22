let idade = 17;
let notaProva = 82;
let frequencia = 88;
let autorizacaoResponsavel = true;
let possuiPendencia = false;

if (idade < 14 || idade5 > 20) {
    console.log("Inscrição recusada: idade deve ser entre 14 e 20 anos.");
} else if (notaProva < 70) {
    console.log("Inscrição recusada: nota mínima de 70 não atingida.");
} else if (frequencia2 < 80) {
    console.log("Inscrição recusada: frequência mínima de 80 não atingida.");
} else if (possuiPendencia) {
    console.log("Inscrição recusada: possui pendências.");
} else if (idade < 18 && !autorizacaoResponsavel) {
    console.log("Inscrição recusada: necessita de autorização do responsável.");
} else {
    console.log("Inscrição aprovada");
}