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


function printTime() {
  chronometer.start();
  setInterval(printSeconds, 1000);
}

function printMinutes() {
  // ... your code goes here
}

function printSeconds() {
  let seconds = chronometer.getSeconds();
  secUniElement.innerText = `${seconds}`;
  if(seconds == 10){
    secDecElement.style.display = "none"
  }
  
  //console.log(secondsUnits);
  
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  const $li = document.createElement("li");
  $li.textContent=chronometer.split();
 splitsElement.appendChild($li);
}

function clearSplits() {
  splitsElement = '';
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
  printTime();
  
  btnLeftElement.classList.remove('start');
   btnLeftElement.classList.add('stop');
   btnLeftElement.textContent = 'STOP';
  
  btnRightElement.classList.remove('reset');
  btnRightElement.classList.add('split');
  btnRightElement.textContent = 'SPLIT';
}

function setResetBtn() {
  clearSplits();
  
  
  //chronometer.reset();
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {

  if (btnLeftElement.classList.contains('start')){
  setStartBtn();
  }else if(btnLeftElement.classList.contains('stop')){
    setStopBtn();
  }
 });

// Reset/Split Button
btnRightElement.addEventListener('click', () => {

  if (btnRightElement.classList.contains('reset')){
    setResetBtn();
    }else if(btnRightElement.classList.contains('split')){
      setSplitBtn();
    }
 });
