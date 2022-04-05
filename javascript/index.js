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
}

function printMinutes() {
  let minutesPassed = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
    minDecElement.innerHTML = minutesPassed[0];
    minUniElement.innerHTML = minutesPassed[1];
}

function printSeconds() {
  let secondsPassed = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
    secDecElement.innerHTML = secondsPassed[0];
    secUniElement.innerHTML = secondsPassed[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  let listItem = document.createElement('li');
  listItem.innerHTML = chronometer.split();

  splitsElement.appendChild(listItem);
}

function clearSplits() {
  splitsElement.innerHTML = '';
}

function setStopBtn() {
  btnLeftElement.setAttribute('class', 'btn stop');
  btnLeftElement.innerHTML = "STOP";
}

function setSplitBtn() {
  btnRightElement.setAttribute('class', 'btn split');
  btnRightElement.innerHTML = "SPLIT";
}

function setStartBtn() {
  btnLeftElement.setAttribute('class', 'btn start');
  btnLeftElement.innerHTML = "START";
}

function setResetBtn() {
  btnRightElement.setAttribute('class', 'btn reset');
  btnRightElement.innerHTML = "RESET";
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if(btnLeftElement.className === 'btn start'){
    chronometer.start(printTime);
    setStopBtn();
    setSplitBtn();
  } else {
    chronometer.stop();
    setStartBtn();
    setResetBtn();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if(btnRightElement.className === 'btn split'){
   printSplit();
  }

  if (btnRightElement.className === 'btn reset'){
    clearSplits();
    chronometer.reset();
  }
});
