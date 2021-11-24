/*jshint esversion:8 */

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
  minDecElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getMinutes()).substr(0,1);
  minUniElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getMinutes()).substr(-1);
}

function printSeconds() {

  secDecElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getSeconds()).substr(0,1);
  secUniElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getSeconds()).substr(-1);
  
}

// ==> BONUS
function printMilliseconds() {

  milDecElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getMilliseconds()).substr(0,1);
  milUniElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getMilliseconds()).substr(-1);
  
}

function printSplit() {

  let li = document.createElement('li');
  splitsElement.appendChild(li);
  li.innerHTML = chronometer.split();

  
}

function clearSplits() {

  chronometer.currentTime = 0;
  secDecElement.innerHTML = 0;
  minUniElement.innerHTML = 0;
  secDecElement.innerHTML = 0;
  secUniElement.innerHTML = 0;
  milDecElement.innerHTML = 0;
  milUniElement.innerHTML = 0;
    
  while (splitsElement.firstChild) {
    splitsElement.removeChild(splitsElement.firstChild);
  }
}

function setStopBtn() {
  
  btnLeftElement.innerHTML = "STOP";
  btnLeftElement.className = "btn stop";
  
}

function setSplitBtn() {
  btnRightElement.innerHTML = "SPLIT";
  btnRightElement.className = "btn split";
  
}

function setStartBtn() {
  
  btnLeftElement.innerHTML = "START";
  btnLeftElement.className = "btn start";
  
}

function setResetBtn() {
  btnRightElement.innerHTML = "RESET";
  btnRightElement.className = "btn reset";
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {

  if(btnLeftElement.className == 'btn start') {

    setStopBtn();
    setSplitBtn();
    chronometer.start();
    clearSeconds = setInterval(() => { 
      printTime();
    }, 1000);
    clearSeconds = setInterval(() => { 
      printMilliseconds();
    }, 10);

  } else {

    setStartBtn();
    setResetBtn();
    chronometer.stop();
  }
  
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {

  if (btnRightElement.className == 'btn split') {

    printSplit();

  } else {

    clearSplits();
    chronometer.reset();
  }
  
});
