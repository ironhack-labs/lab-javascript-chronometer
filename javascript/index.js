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
}

function printMinutes() {
  let minuts = chronometer.getMinutes()
  let doisDigt = chronometer.twoDigitsNumber(minuts)
  minDec.innerHTML = doisDigt[0]
  minUni.innerHTML = doisDigt[1]
}

function printSeconds() {
  let seconds = chronometer.getSeconds()
  let doisSecs = chronometer.twoDigitsNumber(seconds)
  secDec.innerHTML = doisSecs[0]
  secUni.innerHTML = doisSecs[1]
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  let split = document.createElement ('LI')
  let splitTime = document.createTextNode (chronometer.splitClick())
  split.appendChild(splitTime)
  splits.appendChild(split)
}

function clearSplits() {
  while (splits.hasChildNodes()){
    splits.removeChild(splits.firstChild)
  }
}

function setStopBtn() {
  btnLeft.className = 'btn stop'
  btnLeft.innerHTML = 'STOP'
}

function setSplitBtn() {
  btnRight.className = 'btn split'
  btnRight.innerHTML = 'SPLIT'

}

function setStartBtn() {
  btnLeft.className = 'btn start'
  btnLeft.innerHTML = 'START'
}


function setResetBtn() {
  btnRight.className = 'btn reset'
  btnRight.innerHTML = 'RESET'
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
   
  if (btnLeft.classList.contains('start')){
    setStopBtn()
    setSplitBtn()
    chronometer.startClick(printTime);
  } else{
    setStartBtn()
    setResetBtn()
    chronometer.stopClick()    
  }  
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if (btnRight.classList.contains('reset')){
     chronometer.resetClick()
     printTime()
     clearSplits()
  }  else{
    printSplit()
  }
});
