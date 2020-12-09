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
 printMinutes()
 printSeconds()
 printMilliseconds()
 
  // ... your code goes here
}

function printMinutes() {
  minDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes()).slice(0,1)
  minUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes()).slice(1)
  // ... your code goes here
}

function printSeconds() {
  secDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds()).slice(0,1)
  secUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds()).slice(1)
  // ... your code goes here
}

// ==> BONUS
function printMilliseconds() {
  milDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getMilliseconds()).slice(0,1)
  milUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getMilliseconds()).slice(1);
  // ... your code goes here
}

function printSplit() {
  let splitLI =  document.createElement("LI")
  splitLI.innerHTML = chronometer.splitClick()
  splits.appendChild(splitLI)
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
  btnLeft.classList.toggle("start")
  btnRight.classList.toggle("reset")
  btnLeft.classList.toggle("stop")
  btnRight.classList.toggle("split")
  btnLeft.innerHTML === "START" ?  btnLeft.innerHTML = "STOP" : btnLeft.innerHTML = "START"
  btnRight.innerHTML === "RESET" ? btnRight.innerHTML = "SPLIT" : btnRight.innerHTML = "RESET"
  btnLeft.classList.contains("stop") ? chronometer.startClick() : chronometer.stopClick() 
  setInterval (printTime , 1)

  // ... your code goes here
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  console.log("click")
  printSplit()
  // ... your code goes here
});
