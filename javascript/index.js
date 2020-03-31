const chronometer = new Chronometer();

const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

btnLeft.addEventListener('click', () => {


  if (btnLeft.innerHTML === "START") {
    chronometer.startClick()
    setStartBtn()

  } else {
    chronometer.stopClick()
    setStopBtn()
  }

  printTime()
  console.log(chronometer.currentTime)

})

btnRight.addEventListener('click', () => {

  if (btnRight.innerHTML === "RESET") {
    chronometer.resetClick()
    setResetBtn()
  } else {
    chronometer.splitClick()
    setSplitBtn()
  }

})

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

function printTime(minutes, seconds) {
  printMinutes(minutes)
  printSeconds(seconds)
}

function printMinutes(minutes) {
  minUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[1]
  minDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[0]


}

function printSeconds(seconds) {
  secUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds()).substr(1)
  secDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds()).substr(0, 1)
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {

  btnLeft.innerHTML = "START"
  btnLeft.setAttribute("class", "btn start")

}

function setSplitBtn() {

  btnRight.innerHTML = "RESET"
  btnRight.setAttribute("class", "btn reset")
}

function setStartBtn() {

  btnLeft.innerHTML = "STOP"
  btnLeft.setAttribute("class", "btn stop")

}

function setResetBtn() {
  btnRight.innerHTML = "SPLIT"
  btnRight.setAttribute("class", "btn split")
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  // ... your code goes here
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  // ... your code goes here
});
