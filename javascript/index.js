const chronometer = new Chronometer();
console.log(chronometer);
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

let state = {
  stop: true,
  start: false
}

function printTime() {
  // ... your code goes here
}

function printMinutes() {
  // ... your code goes here
}

function printSeconds() {
  // ... your code goes here
}

// ==> BONUS
// function printMilliseconds() {
//   // ... your code goes here
// }

// function printSplit() {
//   // ... your code goes here
// }

// function clearSplits() {
//   // ... your code goes here
// }

// function setStopBtn() {
//   // ... your code goes here
// }

// function setSplitBtn() {
//   // ... your code goes here
// }

// function setStartBtn() {
//   // ... your code goes here
// }

// function setResetBtn() {
//   // ... your code goes here
// }

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  btnLeft.classList.toggle("stop");
  if (btnLeft.innerHTML === "START") {
    btnLeft.innerHTML = "STOP";
    btnRight.innerHTML = "SPLIT";
    btnRight.classList.toggle("split");
  } else {
    btnLeft.innerHTML = "START";
    btnRight.innerHTML = "RESET";
    btnRight.classList.toggle("split");
  }
  // console.log("clicked");
});

// Reset/Split Button
btnRight.addEventListener('click', () => {

  // if (btnLeft.innerHTML === "STOP") {
  //   btnRight.innerHTML = "SPLIT";
  //   btnRight.classList.replace("reset", "split");
  // } else if (btnLeft.innerHTML === "START") {
  //   btnRight.classList.replace("split", "reset");
  //   btnRight.innerHTML = "RESET";}
  
});