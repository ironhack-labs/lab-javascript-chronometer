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
  printMinutes();
  printSeconds();
  printMilliseconds();
}

function printMinutes() {
  let mins = String(chronometer.twoDigitsNumber(chronometer.getMinutes()));
  minDec.innerHTML = mins[0];
  minUni.innerHTML = mins[1];
}

function printSeconds() {
  let secs = String(chronometer.twoDigitsNumber(chronometer.getSeconds()));
  secDec.innerHTML = secs[0];
  secUni.innerHTML = secs[1];
}

// ==> BONUS
function printMilliseconds() {
  let mils = String(chronometer.twoDigitsNumber(chronometer.getMilliseconds()));
  console.log(mils);
  milDec.innerHTML = mils[0];
  milUni.innerHTML = mils[1];
}

function printSplit() {
  let splitTime = document.createElement("li");
  splitTime.innerText = minDec.innerText + minUni.innerText + ":" + secDec.innerText + secUni.innerText + "." + milDec.innerText + milUni.innerText ;
  console.log(splitTime);
  splits.appendChild(splitTime);
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
  btnLeft.classList.contains("start") ? chronometer.startClick(printTime) : chronometer.stopClick() ;
  btnLeft.classList.toggle("start");
  btnLeft.classList.toggle("stop");
  btnRight.classList.toggle("reset");
  btnRight.classList.toggle("split");
  btnLeft.innerText = btnLeft.classList.contains("start") ? "START" : "STOP" ;
  btnRight.innerText = btnLeft.classList.contains("start") ? "RESET" : "SPLIT" ;
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if(btnRight.classList.contains("split")) {
    printSplit();
  } else {
    minDec.innerHTML = "0"
    minUni.innerHTML = "0"
    secDec.innerHTML = "0"
    secUni.innerHTML = "0"
    milDec.innerHTML = "0"
    milUni.innerHTML = "0"
    splits.innerHTML = ""
  }
});
