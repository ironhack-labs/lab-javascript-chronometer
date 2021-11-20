const chronometer = new Chronometer();
var intervalId;

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
  // ... your code goes here
  printMinutes();
  printSeconds();
  printMilliseconds();
}

function printMinutes() {
  // ... your code goes here
  let minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  minDecElement.innerText = minutes[0];
  minUniElement.innerText = minutes[1];
}

function printSeconds() {
  // ... your code goes here
  let seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  secDecElement.innerText = seconds[0];
  secUniElement.innerText = seconds[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
  let milliseconds = chronometer.computeTwoDigitNumber(chronometer.getMilliseconds());
  milDecElement.innerText = milliseconds[0];
  milUniElement.innerText = milliseconds[1];
}

function printSplit() {
  // ... your code goes here
  let li = document.createElement('li');
  li.innerText = (chronometer.split());
  splitsElement.appendChild(li);
}

function clearSplits() {
  // ... your code goes here
  splitsElement.innerHTML = '';
}

function setStopBtn() {
  // ... your code goes here
  chronometer.stop();
  clearInterval(intervalId);
  btnLeftElement.className = "btn start";
  btnLeftElement.innerText = 'START';
  btnRightElement.className = "btn reset";
  btnRightElement.innerText = 'RESET';
}

function setSplitBtn() {
  // ... your code goes here
  printSplit();
}

function setStartBtn() {
  // ... your code goes here
  chronometer.start();
  intervalId = setInterval(printTime,10);
  btnLeftElement.className = "btn stop";
  btnLeftElement.innerText = 'STOP';
  btnRightElement.className = "btn split";
  btnRightElement.innerText = 'SPLIT';
}

function setResetBtn() {
  // ... your code goes here
  chronometer.reset();
  clearSplits();
  printTime();
}

// Start/Stop Button
btnLeftElement.addEventListener('click', (e) => {
  // ... your code goes here
  if ( btnLeftElement.classList.contains('start') ){
    setStartBtn();
  }else{
    setStopBtn();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', (e) => {
  // ... your code goes here
  if ( btnRightElement.classList.contains('reset') ){
    setResetBtn();
  }else{
    setSplitBtn();
  }
});
