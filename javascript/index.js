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
  minDec.textContent = printMinutes()[0];
  minUni.textContent = printMinutes()[1];
  secDec.textContent = printSeconds()[0];
  secUni.textContent = printSeconds()[1];
}

function printMinutes() {
  // ... your code goes here
  return chronometer.getMinutes();
}

function printSeconds() {
  // ... your code goes here
  return chronometer.getSeconds();
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
  btnLeft.className = `btn stop`;
  btnLeft.textContent = `STOP`;
}

function setSplitBtn() {
  // ... your code goes here
  btnRight.className = `btn split`;
  btnRight.textContent = `SPLIT`;
}

function setStartBtn() {
  // ... your code goes here
  btnLeft.className = `btn start`;
  btnLeft.textContent = `START`;
}

function setResetBtn() {
  // ... your code goes here
  btnRight.className = `btn reset`;
  btnRight.textContent = `RESET`;
}

// Start/Stop Button
btnLeft.addEventListener("click", () => {
  // ... your code goes here
  if (btnLeft.className === "btn start") {
    chronometer.startClick();
    setStopBtn(btnLeft);

  } else if (btnLeft.className === "btn stop") {
    chronometer.stopClick();
    setStartBtn(btnLeft);
  }
});

// Reset/Split Button
btnRight.addEventListener("click", () => {
  // ... your code goes here
   if (btnRight.className === "btn reset") {
    chronometer.resetClick();
     setSplitBtn(btnRight);

  } else if (btnRight.className === "btn split") {
    chronometer.splitClick();
     setResetBtn(btnRight);
  }
});
});
