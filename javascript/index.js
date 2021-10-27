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
  printSeconds()
}

function printMinutes() {
  const totalMinutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  minDecElement.innerText = totalMinutes[0];
  minUniElement.innerText = totalMinutes[1];
}

function printSeconds() {
  const totalSecond = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  secDecElement.innerText = totalSecond[0];
  secUniElement.innerText = totalSecond[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.classList.contains('start')) {
    chronometer.start(printTime);
  } else {
    chronometer.stop();
  }
  console.log(chronometer.intervalId);
  if (chronometer.intervalId !== null) {
    btnLeftElement.innerText = 'STOP';
    btnLeftElement.className = 'btn stop';
    btnRightElement.innerText = 'SPLIT';
    btnRightElement.className = 'btn split';
  } else {
    btnLeftElement.innerText = 'START';
    btnLeftElement.className = 'btn start';
    btnRightElement.innerText = 'RESET';
    btnRightElement.className = 'btn reset';
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.classList.contains("split")){
    const splitLine = document.createElement("li");
    splitsElement.appendChild(splitLine);
    splitLine.innerText = chronometer.split();
  }else{
    // TODO RESET
  }
 
});
