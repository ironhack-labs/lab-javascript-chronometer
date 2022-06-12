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
  
  printSeconds();
  printMinutes();

}

function printMinutes() {
  let twoDigitMinutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes())
  
  let firstDigitMinute = twoDigitMinutes.toString().charAt(0);
  let secondDigitMinute = twoDigitMinutes.toString().charAt(1);

  minUniElement.textContent = secondDigitMinute
  minDecElement.textContent = firstDigitMinute
}

function printSeconds() {
  let twoDigitSeconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds())
  
  let firstDigitSecond = twoDigitSeconds.toString().charAt(0);
  let secondDigitSecond = twoDigitSeconds.toString().charAt(1);

  secUniElement.textContent = secondDigitSecond
  secDecElement.textContent = firstDigitSecond

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
  
  btnLeftElement.classList.toggle('btn.stop')
  btnRightElement.classList.toggle('btn.split')
  chronometer.start(printTime)

  if(btnLeftElement.textContent === 'START' ){
    btnLeftElement.textContent = 'STOP'
    btnRightElement.textContent = 'SPLIT'
    

  } else{
    btnLeftElement.textContent = 'START'
    btnRightElement.textContent = 'RESET'
    chronometer.stop()
  }

  

  console.log('no cambia bro', secUniElement.textContent)

});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {

});
