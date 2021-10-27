const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
// const milDecElement = document.getElementById('milDec');
// const milUniElement = document.getElementById('milUni');
// const splitsElement = document.getElementById('splits');

function printTime() {
  printMinutes()
  printSeconds()
}

function printMinutes() {
  const minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes()) //Get the minutes, compute to two digits
  minDecElement.innerHTML = minutes[0]
  minUniElement.innerHTML = minutes[1]
  
}

function printSeconds() {
  const seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds()) //Do the same but with seconds
  secDecElement.innerHTML = seconds[0]
  secUniElement.innerHTML = seconds[1]
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
  btnLeftElement.classList.remove('start')
  btnLeftElement.classList.add('stop')
  btnLeftElement.innerText = 'STOP'
  chronometer.start(printTime) //No parenthesis is used to start the function, if you use ()
}                             //it'll use whatever printTime returns

function setSplitBtn() {
  btnRightElement.classList.remove('reset')
  btnRightElement.classList.add('split')
  btnRightElement.innerText = 'SPLIT'
}

function setStartBtn() {
  btnLeftElement.classList.remove('stop')
  btnLeftElement.classList.add('start')
  btnLeftElement.innerText = 'START'
  chronometer.stop()
}

function setResetBtn() {
  btnRightElement.classList.remove('split')
  btnRightElement.classList.add('reset')
  btnRightElement.innerText = 'RESET'
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if(btnLeftElement.innerText === 'START') setStopBtn() //If the chronometer is started stop it, otherwise start it
  else setStartBtn()
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if(btnRightElement.innerText === 'RESET') setSplitBtn()
  else setResetBtn()
});
