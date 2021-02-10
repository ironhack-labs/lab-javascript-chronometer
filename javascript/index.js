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
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here
  if(btnLeft.innerHTML === "START"){
    btnLeft.innerHTML = "STOP"
  }else if(btnLeft.innerHTML === "STOP"){
    btnLeft.innerHTML = "START"
  }
}

function setResetBtn() {
  // ... your code goes here
  if(btnRight.innerHTML === "RESET"){
    btnRight.innerHTML = "SPLIT"
  }else if(btnRight.innerHTML === "SPLIT"){
    btnRight.innerHTML = "RESET"
  }
  
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  // ... your code goes here
  btnLeft.classList.toggle('start')
  if(btnLeft.classList.toggle('start') === true){
    btnLeft.classList.toggle('stop')
  }
  setStartBtn();

});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  // ... your code goes here
  btnRight.classList.toggle('reset')
  if(btnRight.classList.toggle('reset') === true){
    btnRight.classList.toggle('split')
  }

  setResetBtn();
});
