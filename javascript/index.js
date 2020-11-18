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
  printMinutes()
  printSeconds()
}

function printMinutes() {
  // ... your code goes here
  const minutes = chronometer.twoDigitsNumber(chronometer.getMinutes());
  minDec.innerText = minutes[0];
  minUni.innerText = minutes[1];
}

function printSeconds() {
  // ... your code goes here
 const seconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
 secDec.innerText = seconds[0];
 secUni.innerText = seconds[1]; 
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here

}

function printSplit() {
  // ... your code goes here
  let newSplit = document.createElement("li");
  newSplit.innerHTML = chronometer.splitClick();
  splits.appendChild(newSplit);
}


function clearSplits() {
  // ... your code goes here
  const splits = document.querySelectorAll('li');
  splits.forEach(split => split.remove())
}

function setStopBtn() {
  // ... your code goes here
  btnLeft.className = "btn stop"
  btnLeft.innerHTML = "STOP"

}

function setSplitBtn() {
  // ... your code goes here
  btnRight.className = "btn split"
  btnRight.innerHTML = "SPLIT"
}

function setStartBtn() {
  // ... your code goes here
  btnLeft.className = "btn start"
  btnLeft.innerHTML = "START"
}

function setResetBtn() {
  // ... your code goes here
  btnRight.className = "bnt reset"
  btnRight.innerHTML = "RESET"
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  // ... your code goes here
  if(btnLeft.className === "btn start") {
    setStopBtn();
    setSplitBtn();
    chronometer.startClick(setInterval(() => printTime()), 1000);
  } else {
    setStartBtn();
    setResetBtn();
    chronometer.stopClick();
  }});
  


// Reset/Split Button
btnRight.addEventListener('click', () => {
  // ... your code goes here

  if(btnRight.className === "btn split") {
    printSplit();
  } else {
    chronometer.resetClick();
    clearSplits();
  }
});

