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
  setInterval(() => {
    printSeconds()
    printMinutes()
  }, 1000)
  
}

function printMinutes() {
  // ... your code goes here
  let mins = chronometer.getMinutes()
  let minsStr = chronometer.twoDigitsNumber(mins) //instancia de clase chronometer
  minDec.innerText = minsStr[0]
  minUni.innerText = minsStr[1]
}

function printSeconds() {
  // ... your code goes here
  let secs = chronometer.getSeconds()
  let secsStr = chronometer.twoDigitsNumber(secs)
  secDec.innerText = secsStr[0]
  secUni.innerText = secsStr[1]
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
  // ... your code goes here
  btnLeft.classList.toggle('stop')
  btnLeft.innerText = 'STOP'
}

function setSplitBtn() {
  btnRight.classList.toggle('split')
  btnRight.innerText = 'SPLIT'
  
  // ... your code goes here
}

function setStartBtn() {
  btnLeft.classList.remove('stop')
  btnLeft.innerText = 'START'
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
  btnRight.classList.remove('split')
  btnRight.innerText = 'RESET'
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if(btnLeft.className === 'btn start') {
    setStopBtn()
    setSplitBtn()
    chronometer.startClick()
    printTime()
  } else {

    chronometer.stopClick()
    setStartBtn()
    setResetBtn()

    
  }
})
// Reset/Split Button
btnRight.addEventListener('click', () => {
  if(btnRight.className === 'btn reset') {

    setResetBtn()
    chronometer.resetClick()
    
  } else {
    printTime()
  }  
})
