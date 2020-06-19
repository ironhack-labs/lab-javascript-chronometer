const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById("btnLeft");
const btnRight = document.getElementById("btnRight");

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById("minDec");
let minUni = document.getElementById("minUni");
let secDec = document.getElementById("secDec");
let secUni = document.getElementById("secUni");
let milDec = document.getElementById("milDec");
let milUni = document.getElementById("milUni");
let splits = document.getElementById("splits");

function printTime() {
  // ... your code goes here
  printMinutes();
  printSeconds();
}

function printMinutes() {
  // ... your code goes here
  var minutes = chronometer.getMinutes();
  var minutesString = chronometer.twoDigitsNumber(minutes);
  minDec.innerHTML = minutesString[0];
  minUni.innerHTML = minutesString[1];
}

function printSeconds() {
  // ... your code goes here
  var seconds = chronometer.getSeconds();
  var secondstring = chronometer.twoDigitsNumber(seconds);
  secDec.innerHTML = secondstring[0];
  secUni.innerHTML = secondstring[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
  const currentSplit = chronometer.splitClick(printTime());
  splits.innerHTML = `<li>${currentSplit}</li>`;
}

function clearSplits() {
  // ... your code goes here
  splits.innerHTML = "";
}

function setStopBtn() {
  // ... your code goes here
  btnLeft.classList.remove("start");
  btnLeft.classList.add("stop");
  btnLeft.innerHTML = "STOP";

}
function setSplitBtn() {
  // ... your code goes here
  btnRight.classList.remove("reset");
  btnRight.classList.add("split");
  btnRight.innerHTML = "SPLIT";
  
  
}

function setStartBtn() {
  // ... your code goes here
  btnLeft.classList.remove("stop");
  btnLeft.classList.add("start");
  btnLeft.innerHTML = "START";

  
}
function setResetBtn() {
  // ... your code goes here
  btnRight.classList.remove("split");
  btnRight.classList.add("reset");
  btnRight.innerHTML = "RESET";
  
}

// Start/Stop Button
btnLeft.addEventListener("click", () => {

  if (btnLeft.classList.contains("start")) {
    
    // add the stop class: classList.add
    btnLeft.classList.add("stop");
    // remove the start class : classList.remove
    btnLeft.classList.remove("start");
    // change the text into "STOP" : innerHTML
    btnLeft.innerHTML = "STOP";
    chronometer.startClick(printTime);

  } else {
    // add the start class: classList.add
    btnLeft.classList.add("start");
    // remove the stop class : classList.remove
    btnLeft.classList.remove("stop");
    // change the text into "START" : innerHTML
    btnLeft.innerHTML = "START";
    chronometer.stopClick();


  }
});

// Reset/Split Button
btnRight.addEventListener("click", () => {
  if (btnRight.classList.contains("reset")) {
    // add the split class:
    btnRight.classList.add("split");
    // remove the reset class:
    btnRight.classList.remove("reset");
    // change the text into "split"
    btnRight.innerHTML = "SPLIT";
    chronometer.resetClick();
  } else {
    // add the reset class
    btnRight.classList.add("reset");
    // remove the split
    btnRight.classList.remove("split");
    // change the text into "RESET"
    btnRight.innerHTML = "RESET";
    chronometer.splitClick();
  }
});
