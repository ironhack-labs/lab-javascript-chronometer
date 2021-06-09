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
  minDecElement.innerText = minutes[0];
  minUniElement.innerText = minutes[1];
}

function printSeconds() {
  let seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  secDecElement.innerText = seconds[0];
  secUniElement.innerText = seconds[1];
}

// ==> BONUS
function printMilliseconds() {
  /* Pretty messy. Many tests will fail, unless you create
  additional variables and functions. Also it won't be 
  syncronized as the two counters will start at slightly 
  different times. I was not happy with the results so I 
  didn't include them here.
  
  And it's centiseconds, not miliseconds :D
  */
}

function printSplit() {
  splitsElement.innerHTML += `<li>${chronometer.computeTwoDigitNumber(chronometer.getMinutes())}:${chronometer.computeTwoDigitNumber(chronometer.getSeconds())}</li>`
}

function clearSplits() {
  splitsElement.innerHTML = '';
}

function setStopBtn() {
  chronometer.stop();
  btnLeftElement.innerText = 'START';
  btnRightElement.innerText = 'RESET';
  btnRightElement.classList.toggle('reset');
  btnRightElement.classList.toggle('split');
}

function setSplitBtn() {
  chronometer.split();
  printSplit();
}

function setStartBtn() {
  btnLeftElement.innerText = 'STOP';
  btnRightElement.innerText = 'SPLIT';
  btnRightElement.classList.toggle('reset');
  btnRightElement.classList.toggle('split');

  chronometer.start();
  let id = setInterval(() => {
    printTime();
  }, 1000);
}

function setResetBtn() {
  clearSplits();
  chronometer.reset();
  clearInterval(id);
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  btnLeftElement.classList.toggle('start');
  btnLeftElement.classList.toggle('stop');
  
  if (btnLeftElement.innerText === 'START')
    setStartBtn();
  else {
    setStopBtn();
    btnRightElement.innerText = 'RESET';
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.innerText === 'RESET')
    setResetBtn();
  else
    setSplitBtn();
});