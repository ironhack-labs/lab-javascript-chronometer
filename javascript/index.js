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
    // let displayTime = `${printMinutes()} ${printSeconds()}`;
    printMinutes()
    printSeconds()
}

function printMinutes() {
  minDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[0];
  minUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[1];
}

function printSeconds() {
  //change the DOM elements that display seconds 
  //access the OL
  const SplitTimeCollection = document.getElements
  
  secDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[0]
  secUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[1]
}
// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  let fetchSplit = chronometer.splitClick();
  let newSplitsLi = document.createElement("li")
   splits.appendChild(newSplitsLi).innerHTML = fetchSplit;
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  btnLeft.innerHTML = "STOP"
  btnLeft.setAttribute('class', 'btn stop')
  // chronometer.stopClick()
}

function setSplitBtn() {
  btnRight.innerHTML = 'SPLIT'
  btnRight.setAttribute('class', 'btn split')
  // chronometer.splitClick()
}

function setStartBtn() {
 btnLeft.innerHTML = "START"
 btnLeft.setAttribute('class', 'btn start')
}

function setResetBtn() {
  // ... your code goes here
  btnRight.innerHTML = 'RESET'
  btnRight.setAttribute('class', 'btn reset')
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if (btnLeft.innerHTML === "START"){
    chronometer.startClick(printTime);
    setStopBtn();
    setSplitBtn();

  } else {
    chronometer.stopClick();
    setStartBtn();
    setResetBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
 if (btnRight.innerHTML === "RESET"){
    chronometer.resetClick();
    printTime();
    setStartBtn();
  } else {
    printSplit();
    chronometer.splitClick();
  } 
});
