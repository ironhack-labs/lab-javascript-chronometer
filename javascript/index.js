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

let minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
let seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());

function printTime() {
  printMinutes();
  printSeconds()
}

function printMinutes() {
  minDecElement.innerText = minutes[0]
  minUniElement.innerText = minutes[1]
}

function printSeconds() {
  secDecElement.innerText = seconds[0]
  secUniElement.innerText = seconds[1]
}

// ==> BONUS
function printMilliseconds() {
 
}

function printSplit() {
  let newList = document.createElement('li');
  newList.className = 'liItem';
  newList.innerText = chronometer.split();
  splitsElement.appendChild(newList);
}

function clearSplits() {
  splitsElement.remove();
}

function setStopBtn() {
  btnLeft.className = 'btn start';
  btnLeft.innerText = 'START';
  btnRight.className = 'btn reset';
  btnRight.innerText = 'RESET';
  chronometer.stop()
  
}

function setSplitBtn() {
  printSplit()
}

function setStartBtn() {
  btnLeft.className = 'btn stop';
  btnLeft.innerText = 'STOP';
  btnRight.className = 'btn split';
  btnRight.innerText = 'SPLIT';
  chronometer.start()
  printTime()
}

function setResetBtn() {
  chronometer.reset()
  clearSplits()
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeft.className === 'btn start') {
    setStartBtn();
  } else if (btnLeft.className === 'btn stop') {
    setStopBtn();
    
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRight.className === 'btn reset') {
    setResetBtn();
  } else if (btnRight.className === 'btn split') {
    setSplitBtn();
  }
});


