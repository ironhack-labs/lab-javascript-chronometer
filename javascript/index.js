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
  printMinutes();
  printSeconds();
  printMilliseconds();
}

function printMinutes() {
  let min = chronometer.twoDigitsNumber(chronometer.getMinutes());

  minDec.innerHTML = min.slice(0, 1);
  minUni.innerHTML = min.slice(-1);
}

function printSeconds() {
  let sec = chronometer.twoDigitsNumber(chronometer.getSeconds());

  secDec.innerHTML = sec.slice(0, 1);
  secUni.innerHTML = sec.slice(-1);
}

// ==> BONUS
function printMilliseconds() {
  let millisec = chronometer.twoDigitsNumber(chronometer.getMilliSeconds());

  milDec.innerHTML = millisec.slice(0, 1);
  milUni.innerHTML = millisec.slice(-1);
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
  btnLeft.classList.toggle("stop");
  if (btnLeft.innerHTML === "START") {
    btnLeft.innerHTML = "STOP";
    btnRight.innerHTML = "SPLIT";
    chronometer.startClick(printTime);
  } else {
    btnLeft.innerHTML = "START";
    btnRight.innerHTML = "RESET";
    chronometer.stopClick();
  }
});

// Reset/Split Button
btnRight.addEventListener("click", () => {
  btnRight.classList.toggle("split");
  if (btnRight.innerHTML === "SPLIT") {
    chronometer.splitClick();
    let newTimesLi = document.createElement("li");
    newTimesLi.innerHTML = `${minDec.innerHTML}${minUni.innerHTML}:${secDec.innerHTML}${secUni.innerHTML}:${milDec.innerHTML}${milUni.innerHTML}`;
    splits.appendChild(newTimesLi);
  } else {
    chronometer.resetClick();
    minDec.innerHTML = 0;
    minUni.innerHTML = 0;
    secDec.innerHTML = 0;
    secUni.innerHTML = 0;
    milUni.innerHTML = 0;
    milDec.innerHTML = 0;
    let removeLi = document.querySelectorAll("li");
    removeLi.forEach((li) => {
      li.remove();
    });
  }
});
