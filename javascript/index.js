const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

function printTime() {
  printMinutes()
  printSeconds()
  printMilliseconds()
  
}

function printMinutes() {
  const minute = chronometer.twoDigitsNumber(chronometer.getMinutes())
  minDec.innerText = minute[0]
  minUni.innerText = minute[1]
}

function printSeconds() {
  const seconds = chronometer.twoDigitsNumber(chronometer.getSeconds())
  secDec.innerText = seconds[0]
  secUni.innerText = seconds[1]
}

// ==> BONUS
function printMilliseconds() {
  const miliseconds = chronometer.twoDigitsNumber(chronometer.getMilliseconds())
  milDec.innerText = miliseconds[0]
  milUni.innerText = miliseconds[1]
}

function printSplit() {
  const li = document.createElement('li')
  splits.appendChild(li).innerText = chronometer.splitClick()
}

function clearSplits() {
  chronometer.resetClick()
  printTime()
  while (splits.hasChildNodes()) {
    splits.removeChild(splits.firstChild)
  }
}

function setStopBtn() {
  btnLeft.innerText = "STOP"
  btnLeft.className = 'btn stop'
}

function setSplitBtn() {
  btnRight.innerText = "SPLIT"
  btnRight.className = 'btn split'
}

function setStartBtn() {
  btnLeft.innerText = "START"
  btnLeft.className = 'btn start'
}

function setResetBtn() {
  btnRight.innerText = "RESET"
  btnRight.className = 'btn reset'
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
    if (btnLeft.innerText === 'START') {
      setStopBtn()
      setSplitBtn()
      chronometer.startClick(printTime);
     
    } else {
      setStartBtn()
      setResetBtn()
      chronometer.stopClick();
    }
  
});

// Reset/Split Button
btnRight.addEventListener('click', () => {

  btnRight.innerText === 'RESET' ? clearSplits() : printSplit()

});
