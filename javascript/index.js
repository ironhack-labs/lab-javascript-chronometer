const chronometer = new Chronometer();

/*  Buttons.  */
const btnLeft = document.getElementById("btnLeft");
const btnRight = document.getElementById("btnRight");

/*  DOM elements used to display the time.  */
let minDec = document.getElementById("minDec");
let minUni = document.getElementById("minUni");
let secDec = document.getElementById("secDec");
let secUni = document.getElementById("secUni");
let milDec = document.getElementById("milDec");
let milUni = document.getElementById("milUni");
let splits = document.getElementById("splits");

function printTime() {
  const minutes = printMinutes();
  minUni.innerText = minutes[1];
  minDec.innerText = minutes[0];

  const seconds = printSeconds();
  secUni.innerText = seconds[1];
  secDec.innerText = seconds[0];

  const milliseconds = printMilliseconds();
  milDec.innerText = milliseconds[1];
  milUni.innerText = milliseconds[0]
}

function printMinutes() {
  let minutes = chronometer.getMinutes();
  minutes = chronometer.twoDigitsNumber(minutes);

  return minutes;
}

function printSeconds() {
  let seconds = chronometer.getSeconds();
  seconds = chronometer.twoDigitsNumber(seconds);

  return seconds;
}

/*  Bonus.  */
function printMilliseconds() {
  let milliseconds = chronometer.getMilliseconds();
  milliseconds = chronometer.twoDigitsNumber(milliseconds);

  return milliseconds
}

function printSplit() {
  const splits_list = document.querySelector("#splits");
  const split = document.createElement("li");

  split.innerText = chronometer.splitClick();
  splits_list.appendChild(split);

  return splits_list;
}

function clearSplits() {
  return (document.querySelector("#splits").innerHTML = "");
}

function setStopBtn() {
  btnLeft.setAttribute("class", "btn stop");
  btnLeft.innerText = "STOP";
}

function setSplitBtn() {
  btnRight.setAttribute("class", "btn split");
  btnRight.innerText = "SPLIT";
}

function setStartBtn() {
  btnLeft.setAttribute("class", "btn start");
  btnLeft.innerText = "START";
}

function setResetBtn() {
  btnRight.setAttribute("class", "btn reset");
  btnRight.innerText = "RESET";
}

/*  Start/Stop Button.  */
btnLeft.addEventListener("click", () => {
  if (btnLeft.innerText === "START") {
    chronometer.startTimer(printTime);
    setStopBtn();
    setSplitBtn();
  } else {
    chronometer.stopClick();
    setStartBtn();
    setResetBtn();
  }
});

/*  Reset/Split Button.  */
btnRight.addEventListener("click", () => {
  if (btnRight.innerText === "RESET") {
    chronometer.resetClick();
    clearSplits();
    printTime();
  } else {
    printSplit();
  }
});
