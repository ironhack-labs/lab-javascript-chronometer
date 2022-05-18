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
const splitsElement = document.getElementById('splits');

function printTime() {
  printMinutes();
  printSeconds();
  printMilliseconds();
}

function printMinutes() {
  const minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes()).toString().split('')
  minDecElement.innerText = minutes[0];
  minUniElement.innerText = minutes[1];
}

function printSeconds() {
  const seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds()).toString().split('');
  secDecElement.innerText = seconds[0];
  secUniElement.innerText = seconds[1];
}

// ==> BONUS
function printMilliseconds() {
  const miliSeconds = chronometer.computeTwoDigitNumber(chronometer.getMiliSeconds()).toString().split('');
  milDecElement.innerText = miliSeconds[0];
  milUniElement.innerText = miliSeconds[1];
}

function printSplit() {
  const newSplit = document.createElement("li");
  const valueSplit = document.createTextNode(setSplitBtn());
  newSplit.appendChild(valueSplit);
  document.getElementById('splits').appendChild(newSplit);
}

function clearSplits() {
  document.getElementById('splits').innerHTML = '';
}

function setStopBtn() {
  chronometer.stop();
}

function setSplitBtn() {
  return chronometer.split();
}

function setStartBtn() {
  chronometer.start();
}

function setResetBtn() {
  chronometer.reset();
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if(chronometer.intervalId === null){
    btnLeftElement.innerText = 'STOP';
    btnRightElement.innerText = 'SPLIT';
    btnLeftElement.classList.remove('start');
    btnLeftElement.classList.add('stop');
    btnRightElement.classList.remove('reset');
    btnRightElement.classList.add('split');
    setStartBtn();
  } else {
    btnLeftElement.innerText = 'START';
    btnRightElement.innerText = 'RESET';
    btnLeftElement.classList.remove('stop');
    btnLeftElement.classList.add('start');
    btnRightElement.classList.remove('split');
    btnRightElement.classList.add('reset');
    setStopBtn();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if(btnRightElement.className.includes('reset')){
    setResetBtn();
    printTime();
    clearSplits();
  } else {
    printSplit();
  }
  
});
