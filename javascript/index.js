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
  minUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[1]
  minDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[0]
}

function printSeconds() {
  secUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[1]
  secDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[0]
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  let 
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  btnLeft.setAttribute('class', 'btn stop')
  btnLeft.innerHTML='STOP'
}

function setSplitBtn() {
  btnRight.setAttribute('class', 'btn split')
  btnRight.innerHTML='SPLIT'
}

function setStartBtn() {
  btnLeft.setAttribute('class', 'btn start')
  btnLeft.innerHTML='START'
}

function setResetBtn() {
  btnRight.setAttribute('class', 'btn reset')
  btnRight.innerHTML='RESET'
}



// window.addEventListener('load', ()=> {

  // Start/Stop Button

  btnLeft.addEventListener('click', () => {
  
    if (btnLeft.className === 'btn start') {
      setStopBtn()
      setSplitBtn()

      chronometer.startClick(printTime)

    } else {
      setStartBtn()
      setResetBtn()

      chronometer.stopClick()
    }
  });
  
  // Reset/Split Button

  btnRight.addEventListener('click', () => {

    if(btnRight.className === 'btn reset'){
      chronometer.resetClick()
      printTime()
    }
  });
// })


