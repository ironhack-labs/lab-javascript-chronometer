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




btnLeftElement.addEventListener('click', function () {
  if (btnLeftElement.innerHTML === 'START') {
    chronometer.start()
    btnLeftElement.classList.add('stop')
    btnLeftElement.innerHTML = 'STOP'

    btnRightElement.classList.add('split')
    btnRightElement.innerHTML = 'SPLIT'

   

  } else if (btnLeftElement.innerHTML === 'STOP') {
    chronometer.stop()
    btnLeftElement.classList.add('start')
    btnLeftElement.innerHTML = 'START'

    btnRightElement.classList.add('reset')
    btnRightElement.innerHTML = 'RESET'



  }
})

btnRightElement.addEventListener('click', function () {

  if (btnRightElement.innerHTML === 'SPLIT') {
    chronometer.split()
  } else {
    chronometer.reset()
  }
})





function printTime() {

  printMinutes(chronometer.getMinutes())
  printSeconds(chronometer.getSeconds())


}

function printMinutes(minutes) {
  minUniElement.innerHTML = Number(minutes.toString().slice(-1))
  minDecElement.innerHTML = Number(minutes.toString().slice(0, 1))
}

function printSeconds(seconds) {
  secUniElement.innerHTML = Number(seconds.toString().slice(-1))
  secDecElement.innerHTML = Number(seconds.toString().slice(0, 1))
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
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
});
