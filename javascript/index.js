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

function setStopBtn(element) {
  // ... your code goes here
  console.log(element.textContent);
  element.textContent = 'STOP';
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn(element) {
  // ... your code goes here
  
  element.textContent = 'START';
}

function setResetBtn(element) {
  // ... your code goes here
}

// Start/Stop Button
btnLeft.addEventListener('click', (evt) => {
  // ... your code goes here
  let temp = evt.target;
  console.log(temp.classList);

  
  if(temp.classList.contains('start')) {
    chronometer.startClick();
    setStartBtn(temp);
    temp.classList.toggle('start');
    
  }else {
    chronometer.stopClick();
    temp.classList.toggle('stop');
    setStopBtn(temp);
  }

});

// Reset/Split Button
btnRight.addEventListener('click', (evt) => {
  // ... your code goes here
  let temp = evt.target;
  console.log(temp.classList);

  
  if(temp.classList.contains('reset')) {
    temp.classList.toggle('reset');
    setResetBtn(temp);  
  }else {
    temp.classList.toggle('split');
    setSplitBtn(temp);
  }
  
});
