let numeroUm = 1;
let stringUm = '1';
let numeroTrinta = 30;
let stringTrinta = '30';
let numeroDez = 10;
let stringDez = '10';

function exibirTextoNaTela(texto) {
  let campo = document.querySelector('p');
  campo.innerHTML += texto + '<br>'; // Adiciona a mensagem sem sobrescrever a anterior
}

if (numeroUm == stringUm) {
  exibirTextoNaTela(`As variáveis numeroUm (${numeroUm}) e stringUm ('${stringUm}') têm o mesmo valor, mas tipos diferentes`);
  console.log(`As variáveis numeroUm (${numeroUm}) e stringUm ('${stringUm}') têm o mesmo valor, mas tipos diferentes`);
} else {
  exibirTextoNaTela(`As variáveis numeroUm (${numeroUm}) e stringUm ('${stringUm}') não têm o mesmo valor`);
  console.log(`As variáveis numeroUm (${numeroUm}) e stringUm ('${stringUm}') não têm o mesmo valor`);
}

if (numeroTrinta === stringTrinta) {
  exibirTextoNaTela(`As variáveis numeroTrinta (${numeroTrinta}) e stringTrinta ('${stringTrinta}') têm o mesmo valor e mesmo tipo`);
  console.log(`As variáveis numeroTrinta (${numeroTrinta}) e stringTrinta ('${stringTrinta}') têm o mesmo valor e mesmo tipo`);
} else {
  exibirTextoNaTela(`As variáveis numeroTrinta (${numeroTrinta}) e stringTrinta ('${stringTrinta}') não têm o mesmo tipo`);
  console.log(`As variáveis numeroTrinta (${numeroTrinta}) e stringTrinta ('${stringTrinta}') não têm o mesmo tipo`);
}

if (numeroDez == stringDez) {
  exibirTextoNaTela(`As variáveis numeroDez (${numeroDez}) e stringDez ('${stringDez}') têm o mesmo valor, mas tipos diferentes`);
  console.log(`As variáveis numeroDez (${numeroDez}) e stringDez ('${stringDez}') têm o mesmo valor, mas tipos diferentes`);
} else {
  exibirTextoNaTela(`As variáveis numeroDez (${numeroDez}) e stringDez ('${stringDez}') não têm o mesmo valor`);
  console.log(`As variáveis numeroDez (${numeroDez}) e stringDez ('${stringDez}') não têm o mesmo valor`);
}
