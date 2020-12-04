const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milUni = document.getElementById('milUni');
let milDec = document.getElementById('milDec');
let splits = document.getElementById('splits');

// PRINTING TIME ---------------------------------------------------------------------------------
function printTime() {
  printMinutes()
  printSeconds()
}

function printMinutes() {
  minDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[0]
  minUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[1]
}

function printSeconds() {
  secDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[0]
  secUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[1]
}

// ==> BONUS
function printMillisecond() {
  //
} 


// SPLITS ---------------------------------------------------------------------------------
function printSplit() {
  splits.innerHTML = chronometer.splitClick()
}

function setSplitBtn() {
  
  const newSplit = document.createElement('li')
  const pInnerLi = document.createElement('p')

  newSplit.setAttribute('class', 'splits')
  pInnerLi.setAttribute('class', 'p-splits')

  pInnerLi.innerHTML = chronometer.splitClick()
  
  splits.appendChild(newSplit)
  newSplit.appendChild(pInnerLi)
}

function clearSplits() {
  splits.innerHTML = "";
}

// ------------------------------------------------------------------------------------

function setStartBtn() {
  startClick(printTime)
}

function setStopBtn() {

  btnLeft.innerHTML = 'STOP'
  btnLeft.removeAttribute('class')
  btnLeft.setAttribute('class', 'btn stop')

  btnRight.innerHTML = 'SPLIT'
  btnRight.removeAttribute('class')
  btnRight.setAttribute('class', 'btn split')

}

function setResetBtn() {

  btnLeft.innerHTML = 'START'
  btnLeft.removeAttribute('class')
  btnLeft.setAttribute('class', 'btn start')

  btnRight.innerHTML = 'RESET'
  btnRight.removeAttribute('class')
  btnRight.setAttribute('class', 'btn reset')

 
}

// BUTTONS -----------------------------------------------------------------------------
// Start/Stop Button
btnLeft.addEventListener('click', () => {

  if (btnLeft.innerHTML === 'START') {
    chronometer.startClick(printTime)
    setStopBtn()

  } else if (btnLeft.innerHTML === 'STOP') {
    chronometer.stopClick()
    setResetBtn()
  }

});


// Reset/Split Button
btnRight.addEventListener('click', () => {

  if (btnRight.innerHTML === 'RESET') {
    chronometer.resetClick(printTime)
    clearSplits()
    
  } else if (btnRight.innerHTML === 'SPLIT') {
    setSplitBtn()  
  }
});
