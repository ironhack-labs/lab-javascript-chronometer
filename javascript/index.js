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
  printMinutes()
  printSeconds()
}

function printMinutes() {
  let minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes())
  minDecElement.textContent = minutes[0]
  minUniElement.textContent = minutes[1]
}

function printSeconds() {

  let seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds())
  secDecElement.textContent = seconds[0]
  secUniElement.textContent = seconds[1]

}

// ==> BONUS
function printMilliseconds() {

  let milliseconds = chronometer.computeTwoDigitNumber(chronometer.currentMilliseconds)
  milDecElement.textContent = milliseconds[0]
  milUniElement.textContent = milliseconds[1]

}

function printSplit() {
  let liElement = document.createElement('li')
  liElement.textContent = chronometer.split()
  splitsElement.appendChild(liElement)
}

function clearSplits() {
  let lisElements = splitsElement.querySelectorAll('li')
  lisElements.forEach( (li) => li.remove() ) 
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
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {

  if (btnLeftElement.classList.value === 'btn start') {

    btnLeftElement.classList = 'btn stop'
    btnLeftElement.textContent = 'STOP'

    btnRightElement.classList = 'btn split'
    btnRightElement.textContent = 'SPLIT'

    chronometer.start()

  } else {

    btnLeftElement.classList = 'btn start'
    btnLeftElement.textContent = 'START'

    btnRightElement.classList = 'btn reset'
    btnRightElement.textContent = 'RESET'

    chronometer.stop()
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {

  if (btnLeftElement.classList.value === 'btn stop') {
    printSplit()

  } else {
    chronometer.reset()
    clearSplits()
  }

});
