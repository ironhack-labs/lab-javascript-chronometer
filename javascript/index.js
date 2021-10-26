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
  
chronometer.getMinutes();

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
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  
  const ltBtnClick = document.getElementById("btnLeft");

  if (ltBtnClick.className === 'btn stop') {

    ltBtnClick.innerHTML = "START";
    ltBtnClick.style.background = "#5fca5f";
    ltBtnClick.classList.add ('btn stop');

  }

  // ltBtnClick.innerHTML = "STOP";
  // ltBtnClick.style.background = "red";
  // ltBtnClick.classList.add('btn stop');

  const rtBtnClick = document.getElementById("btnRight");
  rtBtnClick.innerHTML = "SPLIT";
  rtBtnClick.style.background = "blue";
  ltBtnClick.classList.add('btn split');


});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  
  // const rtBtnClick = document.getElementById("btnRight");
  // rtBtnClick.innerHTML = "SPLIT";
  // rtBtnClick.style.background = "blue";
  // rtBtnClick.classList.add('btn reset');

});
