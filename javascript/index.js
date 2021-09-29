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
  getMinutes();
  getSeconds()
}

function printMinutes(minutes) {
  minDecElement.innerHTML = minutes[0]
  minUniElement.innerHTML = minutes[1]
}

function printSeconds(seconds) {
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
  btnLeftElement.innerHTML = 'STOP';
  btnLeftElement.setAttribute('class', 'btn stop');
}

function setSplitBtn() {
  btnRightElement.innerHTML = 'SPLIT';
  btnRightElement.setAttribute('class', 'btn split');
}

function setStartBtn() {
  btnLeftElement.innerHTML = 'START';
  btnLeftElement.setAttribute('class', 'btn start');
}

function setResetBtn() {
  btnRightElement.innerHTML = 'RESET';
  btnRightElement.setAttribute('class', 'btn reset');
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
   if(btnLeftElement.innerHTML === 'START'){
      chronometer.start();
      setStopBtn();
      setSplitBtn()

   } else {
     chronometer.stop();
     setStartBtn();
     setResetBtn();
   } 
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.innerHTML === 'RESET') {
    chronometer.reset();
    clearSplits();
  } else {
    chronometer.split();}
});
