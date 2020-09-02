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

}

function printMinutes() {
  // ... your code goes here
  let min = chronometer.getMinutes();


}
printMinutes()

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
btnLeft.addEventListener("click", () => {
  // ... your code goes here
  if (btnLeft.classList.contains("start")) {
    btnLeft.textContent = "STOP";
    btnRight.textContent = "SPLIT";
    btnRight.classList.toggle("split");
    btnRight.classList.toggle("reset");
  } else {
    btnLeft.textContent = "START";
    btnRight.textContent = "RESET";
    btnRight.classList.toggle("split");
    btnRight.classList.toggle("reset");
  }

  btnLeft.classList.toggle("start");
  btnLeft.classList.toggle("stop");
  console.log(btnLeft.classList);
  console.log(btnRight.classList)
});

// Reset/Split Button
btnRight.addEventListener("click", () => {
  // ... your code goes here


});
