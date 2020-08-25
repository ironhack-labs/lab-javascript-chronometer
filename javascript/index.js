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
  // ... your code goes here
  setInterval(printSeconds,1000)
  setInterval(printMinutes,60000)

}

function printMinutes() {
  // ... your code goes here
}

function printSeconds() {
  // ... your code goes here
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
  btnLeft.innerText = 'STOP'
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
  btnRight.innerText = 'SPLIT'
}

function setStartBtn() {
  // ... your code goes here
  btnLeft.innerText = 'START'
}

function setResetBtn() {
  // ... your code goes here
  btnRight.innerText = 'RESET'
}

// Start/Stop Button
let evaluateBtn = true
btnLeft.addEventListener('click', () => {
  // ... your code goes here
  e.target.classList.toggle('stop',evaluateBtn)

  if(evaluateBtn){
    chronometer.startClick(printTime)
    setStopBtn()
    setSplitBtn()
  }
  else{
    chronometer.stopClick()
    setStartBtn()
    setResetBtn()
  }
  
  evaluateBtn = !evaluateBtn

});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  // ... your code goes here
  if (btnRight.getAttribute("class").includes('reset')){

    chronometer.resetClick()

    btnRight.innerText = 'SPLIT'

  }else{

    chronometer.splitClick()

  }




});
