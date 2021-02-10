const chronometer = new Chronometer();
const chronometer2 = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

function HandleClick(event, chronometer2){
  if (event.target.classList.contains ('start')){
    event.target.innerText= 'STOP';
    btnRight.innerText='SPLIT';
    chronometer2.startClick(chronometer2.intervalId)

  }else {event.target.innerText= 'START';
  btnRight.innerText='RESET';
  chronometer2.stopClick(chronometer2.intervalId)}

    event.target.classList.toggle('start');
    event.target.classList.toggle('stop');
    btnRight.classList.toggle('split');
    btnRight.classList.toggle('reset')
  

}

btnLeft.addEventListener("click", HandleClick)



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
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  // ... your code goes here
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  // ... your code goes here
});
