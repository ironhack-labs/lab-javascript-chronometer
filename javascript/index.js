const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');
let leftBtnClasses = btnLeft.classList;
let rightBtnClasses = btnRight.classList;
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
  let minutes = chronometer.getMinutes();
  minDec.innerHTML = minutes[0];
  minUni.innerHTML = minutes[1];
}

function printSeconds() {
  let seconds = chronometer.getSeconds();
  secDec.innerHTML = seconds[0];
  secUni.innerHTML = seconds[1];
}

function printMilliseconds() {
  let milliseconds = chronometer.getMilliseconds();
  milDec.innerHTML = milliseconds[0];
  milUni.innerHTML = milliseconds[1];
}

function printSplit() {
  let ol = document.getElementById("splits");
  let li = document.createElement("li");
  li.innerHTML = chronometer.splitClick();
  ol.appendChild(li);
}

function clearSplits() {
  let ol = document.getElementById("splits");
  ol.innerHTML = "";
  chronometer.resetClick();
  printTime();
}

function setStopBtn() {
  leftBtnClasses.remove("start");
  leftBtnClasses.add("stop");
  btnLeft.innerHTML = "STOP";
}

function setSplitBtn() {
  rightBtnClasses.remove("reset");
  rightBtnClasses.add("split");
  btnRight.innerHTML = "SPLIT";
}

function setStartBtn() {
  leftBtnClasses.remove("stop");
  leftBtnClasses.add("start");
  btnLeft.innerHTML = "START";
}

function setResetBtn() {
  rightBtnClasses.remove("split");
  rightBtnClasses.add("reset");
  btnRight.innerHTML = "RESET";
}

btnLeft.addEventListener('click', (e) => {
  if (leftBtnClasses.contains("start")) {
    setStopBtn();
    setSplitBtn();
    chronometer.startClick(() => printTime());
  } else if (leftBtnClasses.contains("stop")) {
    setStartBtn();
    setResetBtn();
    chronometer.stopClick();
  }
})

btnRight.addEventListener('click', (e) => {
  if (rightBtnClasses.contains("split")) {
    printSplit();
  } else if (rightBtnClasses.contains("reset")) {
    clearSplits();
  }
})


// Previous version, didn't see the already present functions structure

/*
// Start/Stop Button
btnLeft.addEventListener('click', (e) => {
  toggleState(leftBtnClasses);
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  triggerClick(rightBtnClasses);
});


function toggleState(leftBtnClasses) {
  if (leftBtnClasses.contains("start")) {
    leftBtnClasses.remove("start");
    leftBtnClasses.add("stop");
    btnLeft.innerHTML = "STOP";

    rightBtnClasses.remove("reset");
    rightBtnClasses.add("split");
    btnRight.innerHTML = "SPLIT";

    chronometer.startClick(() => updateScreen());

  } else if (leftBtnClasses.contains("stop")){
    leftBtnClasses.remove("stop");
    leftBtnClasses.add("start");
    btnLeft.innerHTML = "START";

    rightBtnClasses.remove("split");
    rightBtnClasses.add("reset");
    btnRight.innerHTML = "RESET";

    chronometer.stopClick();

  } 
}

function triggerClick(rightBtnClasses) {
  if (rightBtnClasses.contains("split")) {
    splitTime();
  } else if (rightBtnClasses.contains("reset")) {
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
*/