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
  // console.log(printSeconds())
printSeconds() 
printMinutes()
//   let HTMLminutes = chronometer.twoDigitsNumber(chronometer.getMinutes())
//   let HTMLseconds = chronometer.twoDigitsNumber(chronometer.getSeconds())
//   minDec.innerText = HTMLminutes.substring(0, 1)
//   minUni.innerText = HTMLminutes.substring(1)
//   secDec.innerText = HTMLseconds.substring(0, 1)
//   secUni.innerText = HTMLseconds.substring(1)
//   console.log(HTMLminutes.substring(0, 1), HTMLminutes.substring(1), HTMLseconds.substring(0, 1), HTMLseconds.substring(1))
  // ... your code goes here
}

function printMinutes() {
  let HTMLminutes = chronometer.twoDigitsNumber(chronometer.getMinutes())
  minDec.innerText = HTMLminutes.substring(0, 1)
  minUni.innerText = HTMLminutes.substring(1)
  console.log(HTMLminutes)
  // ... your code goes here
}

function printSeconds() {
  let HTMLseconds = chronometer.twoDigitsNumber(chronometer.getSeconds())
  secDec.innerText = HTMLseconds.substring(0, 1)
  secUni.innerText = HTMLseconds.substring(1)
 console.log(HTMLseconds)
  // ... your code goes here
}
// // ==> BONUS
// function printMilliseconds() {
//   // ... your code goes here
// }
function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  btnLeft.classList.remove("start")
  btnLeft.classList.add("stop")
  btnLeft.innerText= "STOP"
  // ... your code goes here
}

function setSplitBtn() {
  btnRight.classList.remove("reset")
  btnRight.classList.add("split")
  btnRight.innerText = "SPLIT"
  // ... your code goes here
}

function setStartBtn() {
  btnLeft.classList.remove("stop")
  btnLeft.classList.add("start")
  btnLeft.innerText = "START"
  // ... your code goes here
}

function setResetBtn() {
  btnRight.classList.remove("split")
  btnRight.classList.add("reset")
  btnRight.innerText = "RESET"
  // ... your code goes here
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if (btnLeft.classList.contains('start')) {
    setStopBtn() 
    setSplitBtn()
    chronometer.startClick(printTime())
  } else if (btnLeft.classList.contains('stop')) {
    setStartBtn()
    setResetBtn()
    chronometer.stopClick()
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if (btnRight.classList.contains('reset')) { 
    chronometer.resetClick()
    printTime()
  } else if (btnRight.classList.contains('split')) {
    chronometer.splitClick()
  }
});
