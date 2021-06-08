const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  printMinutes();
  printSeconds();
  printMilliseconds()
}

function printMinutes() {
  function y(){let a=newChrono.getMinutes();
    let b=newChrono.computeTwoDigitNumber(a);
    minDecElement.innerHTML=b[0];
    minUniElement.innerHTML=b[1]; }
  let printMinuteId = setInterval(y,1000)
}

function printSeconds() {
  function x (){let a=newChrono.getSeconds();
    let b=newChrono.computeTwoDigitNumber(a);
secDecElement.innerHTML=b[0]
secUniElement.innerHTML=b[1]};
let printSecondId = setInterval(x,1000);
}


// ==> BONUS
function printMilliseconds() {
 
}

function printSplit() {
  
}

function clearSplits() {
 
}

function setStopBtn() {
 
}

function setSplitBtn() {
 
 
}

function setStartBtn() {
 
}

function setResetBtn() {
 
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  
});
