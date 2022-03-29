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
  getMinutes() 
  getSeconds()
}

function printMinutes() {
  minDecElement.textContent = chronometer.computeTwoDigitNumber(chronometer.getMinutes()).charAt(0)
  minUniElement.textContent = chronometer.computeTwoDigitNumber(chronometer.getMinutes()).charAt(1)
}

function printSeconds() {
  secDecElement.textContent = chronometer.computeTwoDigitNumber(chronometer.getSeconds()).charAt(0)
  secUniElement.textContent = chronometer.computeTwoDigitNumber(chronometer.getSeconds()).charAt(1)

}

// // ==> BONUS
// function printMilliseconds() {
//   // ... your code goes here
// }

function printSplit() {
  split = document.createElement("li")
  split.textContent = chronometer.split()
  splitsElement.appendChild(split)
}

function clearSplits() {
  while (splitsElement.firstChild){
    splitsElement.removeChild(splitsElement.firstChild)
  }
}

function setStopBtn() {
  btnLeftElement.className = 'btn stop'
  btnLeftElement.textContent = 'STOP'

}

function setSplitBtn() {
  btnRightElement.className = 'btn split'
  btnRightElement.textContent = 'SPLIT'

}

function setStartBtn() {
  btnLeftElement.className = 'btn start'
  btnLeftElement.textContent = 'START'

}

function setResetBtn() {
  btnRightElement.className = 'btn reset'
  btnRightElement.textContent = 'RESET'
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  btnClass = btnLeftElement.className
  if (btnLeftElement.className === 'btn Start'){
    setStopBtn()
    setSplitBtn()
    chronometer.start()
  } else {
    setResetBtn()
    setStartBtn()
    chronometer.stop()
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if(btnRightElement.className === 'btn Split'){
    printSplit()
  } else {
    chronometer.reset()
    clearSplits()
  }

});
