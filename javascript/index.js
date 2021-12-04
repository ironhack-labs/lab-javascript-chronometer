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


//---------------------------------------------------------








function printTime() {
  printMinutes();
  printSeconds();
}


function printMinutes() {
  let showMinutes =chronometer.computeTwoDigitNumber(chronometer.getMinutes())
  minDecElement.innerHTML = showMinutes[0];
  minUniElement.innerHTML = showMinutes[1];
}



function printSeconds() {
    let showSeconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds()) 
    secDecElement.innerHTML = showSeconds[0]
    secUniElement.innerHTML = showSeconds[1]
}


// // ==> BONUS
// function printMilliseconds() {
// }

function printSplit() {
    let splitList = document.getElementById('splits')
    let splitTime = chronometer.split()
}

function clearSplits() {
    let splitList = document.getElementById('splits')
    splitList.innerHTML = ''
}

function setStopBtn() {
    btnLeftElement.classList.remove ('start')
    btnLeftElement.classList.add  ('stop')
    btnLeftElement.innerText = "STOP"
    chronometer.start(printTime)
}

function setSplitBtn() {
    btnRightElement.classList.remove ('reset')
    btnRightElement.classList.add  ('split')
    btnRightElement.innerText = "SPLIT"
    chronometer.start(printTime)
}

function setStartBtn() {
    btnLeftElement.classList.remove ('stop')
    btnLeftElement.classList.add  ('start')
    btnLeftElement.innerText = "START"
    chronometer.stop(printTime)
}

function setResetBtn() {
    btnRightElement.classList.remove ('split')
    btnRightElement.classList.add  ('reset')
    btnRightElement.innerText = "RESET"
    chronometer.start(printTime)
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (this.classList.contains("start")) {
    setStartBtn();
    setSplitBtn();
    chronometer.startClick();
  } else {
    setStopBtn();
    chronometer.stopClick();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (this.classList.contains("split")) {
    printSplit();
  } else {
    setResetBtn();
    clearSplits();
  }
});
