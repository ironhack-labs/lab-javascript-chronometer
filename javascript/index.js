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

let digit = null;

function printTime() {
  printMinutes()
  printSeconds()
  printMilliseconds()
}

function printMinutes() {
  const minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes())
  minDecElement.innerText = minutes[0]
  minUniElement.innerText = minutes[1]
}

function printSeconds() {
  const seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds())
  secDecElement.innerText = seconds[0]
  secUniElement.innerText = seconds[1]
}

// ==> BONUS
function printMilliseconds() {
  const miliseconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds())
  milDecElement.innerText = Math.floor((miliseconds[0] % 1000))
  milUniElement.innerText = Math.floor((miliseconds[1] % 1000))
}

function printSplit() {
  const timeMark = chronometer.splitsElement();
  const newLi = document.createElement('li');
  newLi.innerText = timeMark
  splitsElement.appendChild(newLi);
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
 if (btnLeftElement.innerText === "START"){
chronometer.start()
setStopBtn()
if(!digit)digit = setInterval(() => {
printTime()
},1000);
} else {
chronometer.stop()
setStartBtn()
setResetBtn()

}
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  
  if (btnRightElement.innerText === "RESET" ){
    chronometer.stop();
    chronometer.reset()
    clearSplits()
    secUniElement.innerText = '0';
    secDecElement.innerText = '0';
    minUniElement.innerText = '0';
    minDecElement.innerText = '0'
  } else {
    printSplits()
    setSplitBtn()
  }
});
