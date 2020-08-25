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
  
}

function printMinutes() {
  
  let dec= document.getElementById('minDec')
  console.log
  dec.nodeValue = "3"
}

function printSeconds() {
  
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
  chronometer.stopClick()
  console.log("stop")
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  chronometer.startClick()
  console.log("start")
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  
  let buttonStart = document.getElementById('btnLeft')
  console.log(buttonStart)
   if(buttonStart.className === 'btn start' )
   {
     
    setStartBtn()
    buttonStart.className = "btn stop"
    buttonStart.innerText = "STOP"
   }
   else{
    setStopBtn()
    buttonStart.className = "btn start"
    buttonStart.innerText = "START"
   }
  
      
  
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  
  let buttonsplit= document.getElementById('btnRight')
  console.log(buttonsplit)
   if(buttonsplit.className === 'btn reset' )
   {
    setResetBtn()
    buttonsplit.className = "btn split"
    buttonsplit.innerText = "split"
   }
   else{
    setSplitBtn()
    buttonsplit.className = "btn reset"
    buttonsplit.innerText = "reset"
   }
  
  
});
