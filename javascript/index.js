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
  printMilli();
}

function printMilli() {
  let millis = chronometer.computeTwoDigitNumber(chronometer.getMilli());
  milUniElement.innerHTML = millis[1];
  milDecElement.innerHTML = millis[0];
}

function printMinutes() {
  let minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes())
  minUniElement.innerHTML = minutes[1];
  minDecElement.innerHTML = minutes[0];

}

function printSeconds() {
  let seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds())
  secUniElement.innerHTML = seconds[1];
  secDecElement.innerHTML = seconds[0];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  let newSplit = chronometer.split()
  let list = splitsElement.appendChild(document.createElement('li'))
  list.innerHTML = newSplit
}

function clearSplits() {
    while (splitsElement.firstChild) {
      splitsElement.removeChild(splitsElement.firstChild);
  }
  //or just add ( splits.innerHTML = ""; )
}

function setStopBtn() {
  btnLeftElement.classList.add('stop');
  btnLeftElement.classList.remove('start');
  btnLeftElement.innerHTML = 'STOP';
}

function setSplitBtn() {
  btnRightElement.classList.add('split');
  btnRightElement.classList.remove('reset');
  btnRightElement.innerHTML = 'SPLIT' ;
}

function setStartBtn() {
  btnLeftElement.classList.add('start');
  btnLeftElement.classList.remove('stop');
  btnLeftElement.innerHTML = 'START';
}

function setResetBtn() {
  btnRightElement.classList.add('reset');
  btnRightElement.classList.remove('split');
  btnRightElement.innerHTML = 'RESET';
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if(btnLeftElement.classList.contains('start')){
    setStopBtn();
    setSplitBtn();
    chronometer.start(printTime);
  }else if(btnLeftElement.classList.contains('stop')){
    setStartBtn();
    setResetBtn();
    chronometer.stop();
  }

});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if(btnRightElement.classList.contains('split')){
    printSplit()
  }else{
    chronometer.reset()
    minUniElement.innerHTML = '0';
    minDecElement.innerHTML = '0';
    secUniElement.innerHTML = '0';
    secDecElement.innerHTML = '0';
    milUniElement.immerHTML = '0';
    milDecElement.innerHTML = '0';
    clearSplits()
  }
});
