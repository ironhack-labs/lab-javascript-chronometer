// instancia um nova Chronometer
const chronometer = new Chronometer();

// pega os elementos da DOM
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

const minDec = document.getElementById('minDec');
const minUni = document.getElementById('minUni');

const secDec = document.getElementById('secDec');
const secUni = document.getElementById('secUni');

const milDec = document.getElementById('milDec');
const milUni = document.getElementById('milUni');

// pega a ol onde vai inserir os splits e cria os elementos li
const splitsOl = document.getElementById('splits');
const splitsLi = document.createElement('li');

// atualiza o valor do tempo decorrido a cada 10ms
function printTime() {
  setInterval(() => {
    printMinutes();
    printSeconds();
    printMilliseconds();
    this.currentTime += 1;
  }, 10);
}

function printMinutes() {
  minDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[0];
  minUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[1];
}

function printSeconds() {
  secDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[0];
  secUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[1];
}

function printMilliseconds() {
  milDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getMiliseconds())[0];
  milUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getMiliseconds())[1];

}

// pega o valor do currentTime (minutos, segundos e milisegundos) e atribui o valor(textnode) à li(node), que é inserida na DOM
function printSplit() {
  const splitTime = `${chronometer.twoDigitsNumber(chronometer.getMinutes())}:${chronometer.twoDigitsNumber(chronometer.getSeconds())}:${chronometer.twoDigitsNumber(chronometer.getMiliseconds())}`
  let node = document.createElement("li");
  let textnode = document.createTextNode(splitTime);
  node.appendChild(textnode);
  document.getElementById("splits").appendChild(node);
}

// deixa um valor vazio dentro da ol
function clearSplits() {
  splitsOl.innerHTML = '';
}

// chama a função stopClick() e altera a classe e innerHTML na DOM
function setStopBtn() {
  chronometer.stopClick();
  btnLeft.className = 'btn start';
  btnLeft.innerHTML = 'START'
}

// altera classe e innerHTML na DOM
function setSplitBtn() {
  btnRight.className = 'btn split';
  btnRight.innerHTML = 'SPLIT';
}

// inicia o cronômetro com startClick, começa a escrever os valores na tela com printTime e altera classe e innerHTML na DOM
function setStartBtn() {
  chronometer.startClick();
  printTime();
  btnLeft.className = 'btn stop';
  btnLeft.innerHTML = 'STOP';
}

// altera classe e innerHTML na DOM
function setResetBtn() {
  btnRight.className = 'btn reset';
  btnRight.innerHTML = 'RESET';
  
}

// define um valor de estado em chronometerState
// Start/Stop Button
let chronometerState = false;
btnLeft.addEventListener('click', function () {
  chronometerState = !chronometerState; // alterna em true e false de chronometerState
  if (chronometerState) { // se for verdateiro, inicia o cronômetro (setStartBtn) e alterna o botão direito para split (setSplitBtn)
    setStartBtn();
    setSplitBtn();
  } else { // se for falso, para o cronômetro (setStopBtn) e alterna o botão direito para reset (setResetBtn)
    setStopBtn();
    setResetBtn();
  }
});


// Reset/Split Button
btnRight.addEventListener('click', function () {
  if (chronometerState) { // se o cronômetro estiver rodadndo (chronometerState === true), ao clicar no botão direito, cria um split (printSplit)
    printSplit();
  } else { // se o cronômetro estiver parado (chronometerState === false), ao clicar no botão direito, reseta o valor (resetClick) e limpa a ol (clearSplits)
    chronometer.resetClick();
    clearSplits();
  }
});