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
  return `${printMinutes()}:${printSeconds()}`
}

function printMinutes() {
  return `${minDec}${minUni}`
}

function printSeconds() {
  return `${secDec}${secUni}`
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
 
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
document.getElementById("btnLeft").innerText = "Stop"
document.getElementByClass("#btn.left btn start").className ="btn stop"
  
}

function setSplitBtn() {
  document.getElementById("btnRight").innerText = "Split"
document.getElementByClass("#btnRight .btn reset").className ="btn split"
}

function setStartBtn() {
document.getElementById("btnLeft").innerText = "Start"
document.getElementByClass("#btn.left btn start").className ="btn start"


function setResetBtn() {
  document.getElementById("btnRight").innerText = "Reset"
  document.getElementByClass("#btnRight .btn reset").className ="btn reset"
}

// Start/Stop Button
function startStop() {  
if (btnLeft = document.getElementsByClass('btn Stop')){   
btnLeft.addEventListener('click', () => {
  setStartBtn()})
  
  } else {
    btnLeft.addEventListener('click', () => {
      setStopBtn()})
  }
}


// Reset/Split Button
btnRight.addEventListener('click', () => {
  
});
}