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
  chronometer.twoDigitsNumber()
}
function printMinutes() {
 getMinutes()
}

function printSeconds() {
  getSeconds()
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
  const buttonLeft =document.querySelector("#btnLeft")
  buttonLeft.innerHTML = 'STOP'
}
  

function setSplitBtn() {
  const buttonRight = document.querySelector("#btnRight")
  buttonRight.innerHTML = 'SPLIT'
}

function setStartBtn() {
  const buttonLeft =document.querySelector("#btnLeft")
  buttonLeft.innerHTML = 'START'
}

function setResetBtn() {
  const buttonRight = document.querySelector("#btnRight")
  buttonRight.innerHTML = 'RESET'
}
// Start/Stop Button
btnLeft.addEventListener('click', () => {
 //if(btnLeft.className.includes('start')){
  if(btnLeft.classList.toggle('stop')) {
    setStopBtn()
    chronometer.startClick()
      printTime()      
 } else {
   //btnLeft.classList.toggle('start')
   setStartBtn()
   chronometer.stopClick()
 }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
   if(btnRight.classList.toggle('split')) {
    setSplitBtn()
    const ol = document.querySelector("#splits")
    const newLi = document.createElement("li")
    newLi.innerHTML = this.currentTime
    ol.appendChild(newLi)
  } else {
    setResetBtn()
    const li = document.querySelectorAll("li")
    document.querySelector("#splits").removeChild(li)
    resetClick()
  }
})

