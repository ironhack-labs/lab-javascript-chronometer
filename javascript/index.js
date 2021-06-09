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
  let minutes = chronometer.getMinutes(); 
  let minutesTwoDigit = chronometer.computeTwoDigitNumber(minutes);
  minUniElement.innerText = minutesTwoDigit.split('')[1];
  minDecElement.innerText = minutesTwoDigit.split('')[0];
}

function printSeconds() {
  let seconds = chronometer.getSeconds() 
  let secondsTwoDigit = chronometer.computeTwoDigitNumber(seconds);
  secUniElement.innerText = secondsTwoDigit.split('')[1];
  secDecElement.innerText = secondsTwoDigit.split('')[0];  
}

// ==> BONUS
function printMilliseconds() {
  let tensOfMilliSeconds = chronometer.getTensOfMilliSeconds();
  let tensOfMilliSecondsTwoDigit = chronometer.computeTwoDigitNumber(tensOfMilliSeconds);
  milUniElement.innerText = tensOfMilliSecondsTwoDigit.split('')[1];
  milDecElement.innerText = tensOfMilliSecondsTwoDigit.split('')[0];  
}

function printSplit() {
  let splitValue = chronometer.split();
  let splitLi = document.createElement('li');
  splitLi.innerText = splitValue;
  splitsElement.appendChild(splitLi);
}

function clearSplits() {
  // Set times to 0
  chronometer.currentTime = 0;
  printTime();

  // Clear the UL
  while (splitsElement.firstChild) {
    splitsElement.removeChild(splitsElement.lastChild);
  }
}

function setStopBtn() {
  btnLeftElement.classList.toggle("stop");
  btnLeftElement.classList.toggle("start");
  btnLeftElement.innerText = 'STOP';
}

function setSplitBtn() {
  btnRightElement.classList.toggle("reset");
  btnRightElement.classList.toggle("split");
  btnRightElement.innerText = 'SPLIT';
}

function setStartBtn() {
  btnLeftElement.classList.toggle("stop");
  btnLeftElement.classList.toggle("start");
  btnLeftElement.innerText = 'START';
}

function setResetBtn() {
  btnRightElement.classList.toggle("reset");
  btnRightElement.classList.toggle("split");
  btnRightElement.innerText = 'RESET';
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // Toggle the classess
  if (btnLeftElement.classList.contains('start')) {
    setStopBtn();
    setSplitBtn();
    chronometer.start(printTime);
  }
  else {
    setResetBtn();
    setStartBtn();
    chronometer.stop()
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.classList.contains('split')) {
    printSplit();
  }
  else {
    clearSplits();
  }
});
