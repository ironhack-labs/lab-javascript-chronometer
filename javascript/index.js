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
}

function printMinutes() {
  let minutes = chronometer.twoDigitsNumber()

}

function printSeconds() {
  let seconds = chronometer.twoDigitsNumber(chronometer.getSeconds)


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
btnLeft.classList.add("stop");
btnLeft.classList.remove("start");
btnLeft.innerHTML = "STOP";
}

function setSplitBtn() {
btnRight.classList.add("split");
btnRight.classList.remove("reset");
btnRight.innerHTML = "SPLIT"
}

function setStartBtn() {
  btnLeft.classList.add("start");
  btnLeft.classList.remove("stop")
  btnLeft.innerHTML  = "START";
}

function setResetBtn() {
  btnRight.classList.add("reset");
  btnRight.classList.remove("split");
  btnRight.innerHTML = "RESET"
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {

  if (btnLeft.innerHTML === "START") {
    chronometer.startClick() 
    setStopBtn();
    printMinutes();
    }

else {
  chronometer.stopClick();
  setStartBtn();

  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {

  if (btnRight.innerHTML === "RESET") {
    
    setSplitBtn();
    }

else {
  
  setResetBtn();
  }

});
