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
  minDecElement.innerHTML = chronometer.split()[0];
  minUniElement.innerHTML = chronometer.split()[1];
}

function printSeconds() {
  secDecElement.innerHTML = chronometer.split()[3];
  secUniElement.innerHTML = chronometer.split()[4];
}

// ==> BONUS
function printMilliseconds() {

  // milDecElement.innerHTML = milliseconds.toString()[0];
  // milUniElement.innerHTML = milliseconds.toString()[1];
}

function printSplit() {
  // let newList = splitsElement.createElement('li');
  // newList.innerHTML = chronometer.split();
}

function clearSplits() {
  splitsElement.innerHTML = '';
}

function setStopBtn() {
  btnLeftElement.innerText = 'STOP';
  btnLeftElement.className = 'btn stop';
}

function setSplitBtn() {
  btnRightElement.innerText = 'SPLIT';
  btnRightElement.className = 'btn split';
}

function setStartBtn() {
  btnLeftElement.innerText = 'START';
  btnLeftElement.className = 'btn start';
}

function setResetBtn() {
  btnRightElement.innerText = 'RESET';
  btnRightElement.className = 'btn reset';
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
   if (btnLeftElement.className.includes('start')){
     chronometer.start(printTime);
     setStopBtn();
     setSplitBtn();
   } else {
     chronometer.stop();
     setStartBtn();
     setResetBtn();
   }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.className.includes('reset')){
    chronometer.reset();
    clearSplits();
  } else {
    chronometer.split();
  }
});
