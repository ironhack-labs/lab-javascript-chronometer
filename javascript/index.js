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
  printMinutes();
  printSeconds();
}

function printMinutes() {
  // ... your code goes here
  let minutes = chronometer.getMinutes();
  str = chronometer.computeTwoDigitNumber(minutes);
  minDecElement.innerHTML=str[0]
  minUniElement.innerHTML=str[1]
}

function printSeconds() {
  // ... your code goes here
  let seconds = chronometer.getSeconds();
  str = chronometer.computeTwoDigitNumber(seconds);
  minDecElement.innerHTML=str[0]
  minUniElement.innerHTML=str[1]
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
  if (btnLeftElement.innerHTML === 'START'){
    setStartBtn()
  }  else { setStopBtn()}
    let printedTime = setInterval(()=>(printTime()),1000)
  }
);

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
  if (btnRightElement.innerHTML === 'SPLIT'){
    setResetBtn();
  } else {
    setResetBtn()
  }
});