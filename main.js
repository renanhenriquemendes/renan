const tempoObjetivo2 = new Date("2023-12-05T00:00:00");
const tempoObjetivo3 = new Date("2023-12-30T00:00:00");
const tempoObjetivo4 = new Date("2024-02-01T00:00:00");
contadores[0].textContent = calculaTempo(tempoObjetivo1);
contadores[1].textContent = calculaTempo(tempoObjetivo2);
contadores[2].textContent = calculaTempo(tempoObjetivo3);
contadores[3].textContent = calculaTempo(tempoObjetivo4);
const tempos = [tempoObjetivo1, tempoObjetivo2, tempoObjetivo3, tempoObjetivo4];
contadores[0].textContent = calculaTempo(tempoObjetivo1); //Antes

contadores[0].textContent = calculaTempo(tempos[0]); // Depois
// Para cada objetivo na lista de contadores
for (let i = 0; i < contadores.length; i++) {
    //Calcular o tempo usando a função e associá-lo ao objetivo
    contadores[i].textContent = calculaTempo(tempos[i]);
  }
  function atualizaCronometro() {
    for (let i = 0; i < contadores.length; i++) {
      contadores[i].textContent = calculaTempo(tempos[i]);
    }
  }
  function comecaCronometro() {
    atualizaCronometro();
    setInterval(atualizaCronometro, 1000);
  }
  
  comecaCronometro();
  return (
    dias +
    " dias " +
    horas +
    " horas " +
    minutos +
    " minutos " +
    segundos +
    " segundos"
  );
  if (tempoFinal > 0) {
    return (
      dias +
      " dias " +
      horas +
      " horas " +
      minutos +
      " minutos " +
      segundos +
      " segundos"
    );
  } else {
    return "Prazo Finalizado";
  }
  const diasAniversario = new Date();

function calculaDias(diasAniversario) {
    const hoje = new Date();  
    const tempoRestante = diasAniversario - hoje; 
    const diasRestantes = Math.floor(tempoRestante / (1000 * 60 * 60 * 24)); 
    
    return diasRestantes;
}
function contagemRegressiva(tempoFinal) {
    let dias = Math.floor(tempoFinal / (60 * 60 * 24));
  
    if (tempoFinal > 0) {
      return "CHEGOU O DIA!";
    } else {
      return "Faltam " + dias + " dias ";
    }
  }
  function comecaCronometro(){
    setInterval(atualizaCronometro,1000);
}
function comecaCronometro(){
    setInterval(atualizaCronometro(),1000);
}
console.log(Math.ceil(4.2));  // Saída: 5
console.log(Math.ceil(9.8));  // Saída: 10
console.log(Math.floor(7.9));  // Saída: 7
console.log(Math.floor(2.1));  // Saída: 2
console.log(Math.round(3.4));  // Saída: 3
console.log(Math.round(5.7));  // Saída: 6
comecaCronometro();
function atualizaCronometro() {
    for (let i = 0; i < contadores.length; i++) {
      //contadores[i].textContent = calculaTempo(tempos[i]);
    }
  }
  if (tempoFinal > 0) {
    return (
      dias +
      " dias " +
      horas +
      " horas " +
      minutos +
      " minutos " +
      segundos +
      " segundos"
    );
  } else {
    return [0, 0, 0, 0];
  }
  function atualizaCronometro() {
    document.getElementById("dias0").textContent = calculaTempo(tempos[0]);
    for (let i = 0; i < contadores.length; i++) {
      //contadores[i].textContent = calculaTempo(tempos[i]);
    }
  }
  function atualizaCronometro() {
    document.getElementById("dias0").textContent = calculaTempo(tempos[0])[0];
    for (let i = 0; i < contadores.length; i++) {
      //contadores[i].textContent = calculaTempo(tempos[i]);
    }
  }
  function atualizaCronometro() {
    document.getElementById("dias0").textContent = calculaTempo(tempos[0])[0];
    document.getElementById("horas0").textContent = calculaTempo(tempos[0])[1];
    document.getElementById("min0").textContent = calculaTempo(tempos[0])[2];
    document.getElementById("seg0").textContent = calculaTempo(tempos[0])[3];
    for (let i = 0; i < contadores.length; i++) {
      //contadores[i].textContent = calculaTempo(tempos[i]);
    }
  }
  function atualizaCronometro() {
    document.getElementById("dias0").textContent = calculaTempo(tempos[1])[0];
    document.getElementById("horas0").textContent = calculaTempo(tempos[1])[1];
    document.getElementById("min0").textContent = calculaTempo(tempos[1])[2];
    document.getElementById("seg0").textContent = calculaTempo(tempos[1])[3];
    for (let i = 0; i < contadores.length; i++) {
      //contadores[i].textContent = calculaTempo(tempos[i]);
    }
  }
  function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);
  
    segundos %= 60;
    minutos %= 60;
    horas %= 24;
    if (tempoFinal > 0) {
      return [dias, horas, minutos, segundos];
    } else {
      return [0, 0, 0, 0];
    }
  }
  <p id="titulo"></p>
  const pintura = ["Solitude", "2018", "aquarela"];
document.getElementById("titulo").textContent = pintura[2];
const livro = ["O Pequeno Príncipe", "1943"];
document.getElementById("seg0").textContent = calculaTempo(tempos[0])[3];
document.getElementById("seg1").textContent = calculaTempo(tempos[1])[3];
document.getElementById("seg2").textContent = calculaTempo(tempos[2])[3];
document.getElementById("seg3").textContent = calculaTempo(tempos[3])[3];
for (let i = 0; i < tempos.length; i++) {
  document.getElementById("seg" + i).textContent = calculaTempo(tempos[i])[3];
}
for (let i = 0; i < contadores.length; i++) {
  document.getElementById("dias" + i).textContent = calculaTempo(tempos[i])[0];
  document.getElementById("horas" + i).textContent = calculaTempo(tempos[i])[1];
  document.getElementById("min" + i).textContent = calculaTempo(tempos[i])[2];
  document.getElementById("seg" + i).textContent = calculaTempo(tempos[i])[3];
}
function geraSenha(){
  const campoSenha = document.querySelector('#campo-senha');
const checkbox = document.querySelectorAll('.checkbox');

console.log(checkbox[0].checked);
const letrasMinusculas = 'abcdefghijklmnopqrstuvxywz';
const numeros = '0123456789';
const simbolos = '!@%*?';
let alfabeto = '';
let alfabeto = '';
if (checkbox[0].checked){
}
let alfabeto = '';
if (checkbox[0].checked){
    alfabeto = alfabeto + letrasMaiusculas;
}
let alfabeto = '';
if (checkbox[0].checked){
    alfabeto = alfabeto + letrasMaiusculas;
}
console.log(alfabeto);
for (i=0; i < checkbox.length;i++){
 
}
for (i=0; i < checkbox.length;i++){
    checkbox[i].onclick = geraSenha;
}
if (checkbox[1].checked){
    alfabeto = alfabeto + letrasMinusculas;
}
if (checkbox[2].checked){
    alfabeto = alfabeto + numeros;
}
if (checkbox[3].checked){
    alfabeto = alfabeto + simbolos;
}
for (let i = 0; i < tamanhoSenha;i++){
        let numeroAleatorio = Math.random()*alfabeto.length;
        numeroAleatorio = Math.floor(numeroAleatorio);
        senha = senha + alfabeto[numeroAleatorio];
    }
    function geraSenha(){
    let alfabeto = '';
    if (checkbox[0].checked){
        alfabeto = alfabeto + letrasMaiusculas;
    }
    if (checkbox[1].checked){
        alfabeto = alfabeto + letrasMinusculas;
    }
    if (checkbox[2].checked){
        alfabeto = alfabeto + numeros;
    }
    if (checkbox[3].checked){
        alfabeto = alfabeto + simbolos;
    }
    console.log(alfabeto);
    let senha = '';
    for (let i = 0; i < tamanhoSenha;i++){
        let numeroAleatorio = Math.random()*alfabeto.length;
        numeroAleatorio = Math.floor(numeroAleatorio);
        senha = senha + alfabeto[numeroAleatorio];
    }
    campoSenha.value = senha;
}
