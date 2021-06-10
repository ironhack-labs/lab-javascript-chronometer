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
  let minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  minDecElement.innerText = minutes.charAt(0);
  minUniElement.innerText = minutes.charAt(1);
}

function printSeconds() {
  let secondes = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  secDecElement.innerText = secondes.charAt(0);
  secUniElement.innerText = secondes.charAt(1);
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
  btnLeftElement.className = 'btn stop';
  btnLeftElement.innerText = 'STOP';
  btnRightElement.className = 'btn split';
  btnRightElement.innerText = 'SPLIT';
}

function setSplitBtn() {
  let li = document.createElement('li');
  li.innerText = `${minDecElement.innerText}${minUniElement.innerText}:${secDecElement.innerText}${secUniElement.innerText}`;
  let ol = document.querySelector('#splits');
  console.log(ol);
  ol.appendChild(li);
}

function setStartBtn() {
  btnLeftElement.className = 'btn start';
  btnLeftElement.innerText = 'START';
  btnRightElement.className = 'btn reset';
  btnRightElement.innerText = 'RESET';
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.className === 'btn start') {
    setStopBtn();
    chronometer.start(printTime); // chronomoter object is an instance of the Chronometer class
  } else {
    setStartBtn();
    chronometer.stop();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.className === 'btn split') {
    setSplitBtn();
  } else {
    btnRightElement.className = 'btn reset';
    btnRightElement.innerText = 'RESET';
  }
});
