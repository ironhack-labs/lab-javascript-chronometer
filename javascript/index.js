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
  const minutes = chronometer.getMinutes();
  const seconds = chronometer.getSeconds();
  printMinutes(minutes)
  printSeconds(seconds)
}

function printMinutes(minutes) {
  const twoDigitsMinutes = chronometer.computeTwoDigitNumber(minutes);
  minDecElement.textContent = twoDigitsMinutes[0]
  minUniElement.textContent = twoDigitsMinutes[1]
}

function printSeconds(seconds) {
  const twoDigitsSeconds = chronometer.computeTwoDigitNumber(seconds);
  secDecElement.textContent = twoDigitsSeconds[0]
  secUniElement.textContent = twoDigitsSeconds[1]
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  if (btnLeftElement.classList.contains('stop')) {
    const minutes = chronometer.getMinutes();
    const seconds = chronometer.getSeconds();
    const splitMinutes = chronometer.computeTwoDigitNumber(minutes);
    const splitSeconds = chronometer.computeTwoDigitNumber(seconds);
    const splitLi = document.createElement('li');
    splitLi.innerText = `${splitMinutes}:${splitSeconds}`;
    splitsElement.appendChild(splitLi);
  }
}

function clearSplits() {
  splitsElement.innerHTML = ''
}

function setStopBtn() {
  btnLeftElement.textContent = 'STOP';
  btnLeftElement.classList.remove('start');
  btnLeftElement.classList.add('stop');

  btnRightElement.textContent = 'SPLIT';
  btnRightElement.classList.remove('reset');
  btnRightElement.classList.add('split');
}

function setSplitBtn() {
  btnRightElement.textContent = 'RESET';
  btnRightElement.classList.remove('split');
  btnRightElement.classList.add('reset');
}

function setStartBtn() {
  btnLeftElement.textContent = 'START';
  btnLeftElement.classList.remove('stop');
  btnLeftElement.classList.add('start');
  
  btnRightElement.textContent = 'RESET';
  btnRightElement.classList.remove('split');
  btnRightElement.classList.add('reset');
}

function setResetBtn() {
  clearSplits();
  if (btnLeftElement.classList.contains('stop')) {
    chronometer.stop();
  }
  chronometer.reset();
  printMinutes(0);
  printSeconds(0);
  minDecElement.textContent = '0';
  minUniElement.textContent = '0';
  secDecElement.textContent = '0';
  secUniElement.textContent = '0';
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if(btnLeftElement.classList.contains('start')){
    chronometer.start(printTime)
    btnLeftElement.textContent = 'STOP'
    btnLeftElement.classList.toggle('start')
    btnLeftElement.classList.toggle('stop')
    btnRightElement.textContent = 'SPLIT'
    btnRightElement.classList.toggle('reset')
    btnRightElement.classList.toggle('split')
  } else {
    chronometer.stop()
    btnLeftElement.textContent = 'START'
    btnLeftElement.classList.toggle('start')
    btnLeftElement.classList.toggle('stop')
    btnRightElement.textContent = 'RESET'
    btnRightElement.classList.toggle('reset')
    btnRightElement.classList.toggle('split')
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if(btnRightElement.classList.contains('reset')){
    chronometer.reset()
    clearSplits()
    printTime();
  }else {
    const splitTime = chronometer.split()
    printSplit ();
  }
});
