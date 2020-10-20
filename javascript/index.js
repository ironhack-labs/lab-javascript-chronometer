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
}

function printMinutes() {
  // ... your code goes here
}

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
btnLeft.addEventListener('click', (e) => {
  let leftBtnClasses = btnLeft.className;
  toggleState(leftBtnClasses);
  
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  let rightBtnClasses = btnRight.className;
  triggerClick(rightBtnClasses);
});


function toggleState(leftBtnClasses) {
  if (leftBtnClasses === "btn start") {

    btnLeft.className = "btn stop";
    btnLeft.innerHTML = "STOP";

    btnRight.className = "btn split";
    btnRight.innerHTML = "SPLIT";

    chronometer.startClick(() => updateScreen());

  } else if (leftBtnClasses === "btn stop"){

    btnLeft.className = "btn start";
    btnLeft.innerHTML = "START";

    btnRight.className = "btn reset";
    btnRight.innerHTML = "RESET";

    chronometer.stopClick();
    console.log(chronometer.splitClick());
  } 
}

function triggerClick(rightBtnClasses) {
  if (rightBtnClasses === "btn split") {
    splitTime();
  } else if (rightBtnClasses === "btn reset") {
    resetTime();
  }
}

function updateScreen() {
  let minutes = chronometer.getMinutes();
  let seconds = chronometer.getSeconds();
  let milliseconds = chronometer.getMilliseconds();
  minDec.innerHTML = minutes[0];
  minUni.innerHTML = minutes[1];
  secDec.innerHTML = seconds[0];
  secUni.innerHTML = seconds[1];
  milDec.innerHTML = milliseconds[0];
  milUni.innerHTML = milliseconds[1];
}

function splitTime() {
  let ol = document.getElementById("splits");
  let li = document.createElement("li");
  li.innerHTML = chronometer.splitClick();
  ol.appendChild(li);
}

function clearSplits() {
  let ol = document.getElementById("splits");
  ol.innerHTML = "";
}

function resetTime() {
  chronometer.resetClick();
  updateScreen();
  clearSplits();
}
