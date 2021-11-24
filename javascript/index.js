

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
  minUniElement.innerText = chronometer.computeTwoDigitNumber(chronometer.getMinutes())[1];
  minDecElement.innerText = chronometer.computeTwoDigitNumber(chronometer.getMinutes())[0];
}

function printSeconds() {
  secUniElement.innerText = chronometer.computeTwoDigitNumber(chronometer.getSeconds())[1];
  secDecElement.innerText = chronometer.computeTwoDigitNumber(chronometer.getSeconds())[0];
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

function setStartBtn() {
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeftElement.addEventListener('click', (event) => {
  btnLeftElement.classList.toggle('stop')
  btnLeftElement.classList.toggle('start')
  
  if (btnLeftElement.innerText === "START")  {
    chronometer.start(printTime)
    btnLeftElement.innerText = 'STOP'
  } else {
    chronometer.stop()
    btnLeftElement.innerText = "START"
  }

  btnRightElement.classList.toggle('split')
  btnRightElement.classList.toggle('reset')

  if (btnRightElement.innerText === 'SPLIT')  {
    btnRightElement.innerText = 'RESET'
  } else {
    btnRightElement.innerText = 'SPLIT'
  }

});

// Reset/Split Button
btnRightElement.addEventListener('click', (event) => {
  
  if (btnRightElement.innerText === 'SPLIT') {
    const split = document.createElement('li');
    split.innerText = chronometer.split();
    splitsElement.appendChild(split);
  } else {
    chronometer.reset();
    printTime();
    splitsElement.innerHTML = ""
  }

});


