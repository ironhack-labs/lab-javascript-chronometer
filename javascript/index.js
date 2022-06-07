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
  // ... your code goes here
}

function printMinutes() {
  // ... your code goes here
}

function printSeconds() {


  // ... your code goes here
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
  if (btnLeftElement.classList.contains('start')) {
    btnLeftElement.style.backgroundColor = '#f14949';
    btnLeftElement.innerHTML = 'STOP';
    btnLeftElement.classList.toggle('stop')
    btnLeftElement.classList.toggle('start')

  }

  // ... your code goes here
}

function setSplitBtn() {
  if (btnRightElement.classList.contains('reset')) {
    btnRightElement.style.backgroundColor = '#0851ab';
    btnRightElement.innerHTML = 'SPLIT';
    btnRightElement.classList.toggle('split')
    btnRightElement.classList.toggle('reset')

  }
  // ... your code goes here
}

function setStartBtn() {
  if (btnLeftElement.classList.contains('stop')) {
    btnLeftElement.style.backgroundColor = '#5fca5f';
    btnLeftElement.innerHTML = 'START';
    btnLeftElement.classList.toggle('stop')
    btnLeftElement.classList.toggle('start')
  }

  // ... your code goes here
}

function setResetBtn() {

  if (btnRightElement.classList.contains('split')) {
    btnRightElement.style.backgroundColor = '#908e8e';
    btnRightElement.innerHTML = 'RESET';
    btnRightElement.classList.toggle('reset')
    btnRightElement.classList.toggle('split')
  }
  // ... your code goes here
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {

  if (btnLeftElement.classList.contains('start')) {
    chronometer.start('click')
    setSplitBtn()
    setStopBtn()
  } else if (btnLeftElement.classList.contains('stop')) {
    setStartBtn()
    setResetBtn()
  }

  // ... your code goes here
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // if (btnRightElement.classList.contains('split')) {

  //}

});
