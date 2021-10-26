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

// flag for chronometer
let stopped = true;
// ID for printTime
let printIntervalId;

function printTime() {
  printIntervalId = setInterval (()=>{
    printMinutes();
    printSeconds();
  }, 1000);
}

function printMinutes() {
  const minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  minDecElement.innerText = minutes[0];
  minUniElement.innerText = minutes[1];
}

function printSeconds() {
  const seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  secDecElement.innerText = seconds[0];
  secUniElement.innerText = seconds[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  const li = document.createElement('li');
  li.innerText = chronometer.split();
  splitsElement.appendChild(li);
}

function clearSplits() {
  //Remove lis from OL
  while (splitsElement.hasChildNodes()) {  
    splitsElement.removeChild(splitsElement.firstChild);
  }
}

function setStopBtn() {
  btnLeftElement.innerText = "STOP";
  btnLeftElement.classList.remove('start')
  btnLeftElement.classList.add('stop')
}

function setSplitBtn() {
  btnRightElement.innerText = "SPLIT";
  btnRightElement.classList.remove('reset')
  btnRightElement.classList.add('split')
}

function setStartBtn() {
  btnLeftElement.innerText = "START";
    btnLeftElement.classList.remove('stop')
    btnLeftElement.classList.add('start')
}

function setResetBtn() {
  btnRightElement.innerText = "RESET";
  btnRightElement.classList.remove('split')
  btnRightElement.classList.add('reset')
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if(stopped) {
    // change left btn
    setStopBtn();
    // change right btn
    setSplitBtn()
    // update flag
    stopped = false;
    // start chronometer
    chronometer.start();
    printTime();
  } else {
    // change left btn
    setStartBtn()
    // change right btn
    setResetBtn();
    // update flag
    stopped = true;
    // stop chronometer
    chronometer.stop();
    clearInterval(printIntervalId);
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if(stopped){
    // Reset the chronometer
    chronometer.reset();
    printMinutes();
    printSeconds();
    clearSplits();
  } else {
    // Made a li in OL with current time
    printSplit();
  }
});
