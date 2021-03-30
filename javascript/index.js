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



function printMinutes() {
  let minutes = chronometer.splitClick();
  minDec.innerHTML = minutes[0];
  minUni.innerHTML = minutes[1]; 
}

function printSeconds() {
  let seconds = chronometer.splitClick();
  secDec.innerHTML = seconds[3];
  secUni.innerHTML = seconds[4]; 
}

function printTime() {
  printMinutes();
  printSeconds();
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  splits.innerHTML += '<li>'+chronometer.splitClick()+'</li>'
}

function clearSplits() {
  splits.innerHTML = '';
}

function setStopBtn() {
  btnLeft.setAttribute("class", "btn start");
  btnLeft.innerHTML = "START";
  btnRight.setAttribute("class", "btn reset");
  btnRight.innerHTML = "RESET";
}

// function setSplitBtn() {
//   // ... your code goes here
// }

function setStartBtn() {
  btnLeft.setAttribute("class", "btn stop");
  btnLeft.innerHTML = "STOP";
  btnRight.setAttribute("class", "btn split");
  btnRight.innerHTML = "SPLIT";
}

// function setResetBtn() {
//   // ... your code goes here
// }

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if (btnLeft.innerHTML === "START") {
    setStartBtn();
    chronometer.startClick();
      intervalId = setInterval(() => {
        printTime();
  }, 1000);
  } else if (btnLeft.innerHTML === "STOP") {
    setStopBtn();
    chronometer.stopClick();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if (btnLeft.innerHTML === "START") {
chronometer.resetClick();
this.clearSplits();
  } else if (btnLeft.innerHTML === "STOP") {
this.printSplit();
  }
});
