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
  let min = printMinutes () 
  let sec = printSeconds () 
  

  minDecElement.innerText = min [0]
  minUniElement.innerText = min [1]

  secDecElement.innerText = sec [0]
  secUniElement.innerText = sec [1]

}

function printMinutes() {
  // get value of minutes and return it as two digits "00"
  let min = chronometer.getMinutes ()
  let minStr = chronometer.computeTwoDigitNumber(min)
  return minStr;
}

function printSeconds() {
  // get value of seconds and return it as two digits "00"
  let sec = chronometer.getSeconds()
  let secStr = chronometer.computeTwoDigitNumber (sec)
  return secStr;
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  let split = chronometer.split()
  let li = document.createElement('li')
  splitsElement.append(li)
  li.innerText = split;
}

function clearSplits() {
  let splits = splitsElement.querySelectorAll('li')
  splits.forEach(elem => elem.remove())
}

function setStopBtn() {
  let stopBtn = document.querySelector('#btnLeft');
  stopBtn.setAttribute('class', 'btn stop');
  stopBtn.innerText = "STOP";
}

function setSplitBtn() {
  let splitBtn = document.querySelector ('#btnRight');
  splitBtn.setAttribute('class', 'btn split');
  splitBtn.innerText = "SPLIT";
}

function setStartBtn() {
  let startBtn = document.querySelector('#btnLeft');
  startBtn.setAttribute('class', 'btn start');
  startBtn.innerText = "START";
}

function setResetBtn() {
  let resetBtn = document.querySelector('#btnRight');
  resetBtn.setAttribute('class', 'btn reset');
  resetBtn.innerText = 'RESET';
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {

  if(btnLeftElement.classList.contains("start")){
    chronometer.start(printTime)
    setStopBtn()
    setSplitBtn()
  } else if (btnLeftElement.classList.contains("stop"))
  chronometer.stop()
  setStartBtn()
  setResetBtn()
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if(btnRightElement.classList.contains("reset")){
      chronometer.reset()
      clearSplits()
      printTime()
    } else if (btnRightElement.classList.contains("split"))

    chronometer.split()
    printSplit()
  }
);
