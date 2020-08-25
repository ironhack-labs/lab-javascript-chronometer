const chronometer = new Chronometer();
chronometer.click = 'off'


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

function printTime(){
    
    printMinutes();
    
    printSeconds();    
}

function printMinutes() {
    chronometer.getMinutes()
}

function printSeconds() {
  // ... your code goes here
}

// ==> BONUS
/*function printMilliseconds() {
  // ... your code goes here
}*/

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
    printTime();
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
    if (chronometer.click === 'off'){
        chronometer.click = 'on'
        btnLeft.textContent = 'STOP';
        btnRight.textContent = 'SPLIT';
        btnLeft.className = 'btn stop';
        btnRight.className = 'btn split';
        setStartBtn();
    }else {
        chronometer.click = 'off'
        btnLeft.textContent = 'START';
        btnRight.textContent = 'RESET';
        btnLeft.className = 'btn start';
        btnRight.className = 'btn reset';
      }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  // ... your code goes here
});
