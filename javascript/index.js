const chronometer = new Chronometer()

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
  
printMinutes();
printSeconds();

}
function printMinutes() {
  let currentMinutes = chronometer.twoDigitsNumber(chronometer.getMinutes());

  console.log(currentMinutes);
  minDec.innerHTML = currentMinutes[0];
  minUni.innerHTML = currentMinutes[1];
  }                             

function printSeconds() {
  let currentSeconds = chronometer.twoDigitsNumber(chronometer.getSeconds());

  secDec.innerHTML = currentSeconds[0];
  secUni.innerHTML = currentSeconds[1];
  
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
  chronometer.stopClick();
}

function setSplitBtn() {
  chronometer.splitClick();
  
}

function setStartBtn() {
  chronometer.startClick(printTime);
}

function setResetBtn() {
  // btnRight.className = 'btn reset';
  chronometer.resetClick();
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {

  if (btnLeft.classList.contains("start")) { 
    btnLeft.innerHTML = "STOP";
    btnLeft.classList.toggle("stop");
    btnLeft.classList.toggle("start");
    btnRight.innerHTML = "SPLIT";
    setStartBtn();
  }
  else { 
      setStopBtn();
      btnLeft.innerHTML = "START";
      btnLeft.classList.toggle("stop");
      btnLeft.classList.toggle("start");
      btnRight.innerHTML = "RESET";
  }
  
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  
  if (btnRight.className === 'btn split') {
    printSplit();
  } else {
    setResetBtn();
    printTime();
    // clearSplits();
  } 
});