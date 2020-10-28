const chronometer = new Chronometer();
console.log(chronometer);
// get the buttons:
const btnLeft = document.getElementById('btnLeft'); // start
const btnRight = document.getElementById('btnRight'); // clear

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

function printTime() {
  if (innerHTML === 'START'){

  }
}

function printMinutes() {
  let minutes = chronometer.twoDigitsNumber(chronometer.getMinutes());
  minDec.innerHTML = minutes[0];
  minUni.innerHTML = minutes[1];
}

function printSeconds() {
  let second = chronometer.twoDigitsNumber
  (chronometer.getSeconds());
  secDec.innerHTML = second[0];
  secUni.innerHTML = second[1];
    
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
  btnLeft.className = 'btn start';
  btnLeft.textContent = 'START';
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button

btnLeft.addEventListener('click', () => {
  if (btnLeft.classList.contains('start')){
      
  }

});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  btnRight.classList.toggle('split');
  if (btnRight.textContent === 'RESET'){
    btnRight.textContent = 'SPLIT';
  } else if (btnRight.textContent === 'SPLIT'){
    btnRight.textContent = 'RESET';
  }
});
