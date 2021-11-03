const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
let splitsElement = document.getElementById('splits');

//llama las funciones de imprimir segundos y minutos
function printTime() {
  printSeconds();
  printMinutes();
  //printMilliseconds();
}

//consigue los valores del metodo getMinutes() y los imprime, si llega a 10 quita el cero a izquierda
function printMinutes() {
  let minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  minDecElement.innerText = minutes[0];
  minUniElement.innerText = minutes[1];
  
}

//consigue los valores del metodo getSeconds() y los imprime, si llega a 10 quita el cero a izquierda
function printSeconds() {
  let seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  secDecElement.innerText = seconds[0];
  secUniElement.innerText = seconds[1];
}

// ==> BONUS
function printMilliseconds() {
  let miliseconds = chronometer.computeTwoDigitNumber(chronometer.getMiliSeconds());
  milDecElement.innerText = miliseconds[0];
  milUniElement.innerText = miliseconds[1];

}

function printSplit() {
  const $li = document.createElement("li");
  $li.textContent=chronometer.split();
 splitsElement.appendChild($li);
}

function clearSplits() {
  splitsElement.removeChild('li')
}

function setStopBtn() {
  chronometer.stop();
  btnLeftElement.classList.remove('stop');
   btnLeftElement.classList.add('start');
   btnLeftElement.textContent = 'START';

   btnRightElement.classList.remove('split');
  btnRightElement.classList.add('reset');
  btnRightElement.textContent = 'RESET';
   
}

function setSplitBtn() {
   
  printSplit();
}

function setStartBtn() {
  btnLeftElement.classList.remove('start');
   btnLeftElement.classList.add('stop');
   btnLeftElement.textContent = 'STOP';
  
  btnRightElement.classList.remove('reset');
  btnRightElement.classList.add('split');
  btnRightElement.textContent = 'SPLIT';
}

function setResetBtn() {
  
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {

  if (btnLeftElement.classList.contains('start')){
    chronometer.start(printTime);
     setStartBtn();
  }else if(btnLeftElement.classList.contains('stop')){
    setStopBtn();
  }
 });

// Reset/Split Button
btnRightElement.addEventListener('click', () => {

  if (btnRightElement.classList.contains('reset')){
     chronometer.reset();
     printTime();
    }else if(btnRightElement.classList.contains('split')){
      setSplitBtn();
    }
 });
