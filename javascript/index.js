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
  let mins = chronometer.twoDigitsNumber(chronometer.getMinutes())
    minDec.innerText = mins[0]
    minUni.innerText = mins[1]
   // ... your code goes here
}

function printSeconds() {
  let secs = chronometer.twoDigitsNumber(chronometer.getSeconds())
    secDec.innerText = secs[0]
    secUni.innerText = secs[1]
  }
 
  
  // ... your code goes here


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
  btnLeft.classList.toggle(`stop`)
  btnLeft.classList.toggle(`start`)
  btnLeft.innerText=`STOP`
}

function setSplitBtn() {
  btnRight.classList.toggle(`split`)
  btnRight.classList.toggle(`reset`)
  btnRight.innerText='SPLIT'

}

function setStartBtn() {
  btnLeft.classList.toggle(`start`)
  btnLeft.classList.toggle(`stop`)
  btnLeft.innerText=`START`  
}

function setResetBtn() {
  btnRight.classList.toggle(`reset`)
  btnRight.classList.toggle(`split`)
  btnRight.innerText=`RESET`
}

// Start/Stop Button

btnLeft.addEventListener('click', () => {
 if(btnLeft.classList.contains(`start`)){
   chronometer.startClick()
   setSplitBtn()
   setStopBtn()
   contador = setInterval(()=>{
     printTime()
   }, 1000)
 }else if(btnLeft.classList.contains(`stop`)){
  setStartBtn()
  setResetBtn()
  chronometer.stopClick()
  clearInterval(contador)
 }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if(btnRight.classList.contains(`reset`)){
    chronometer.resetClick()
    printTime()

  }else if(btnRight.classList.contains(`split`)){
    
  }
});
