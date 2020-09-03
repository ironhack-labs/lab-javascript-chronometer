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
  minDec.innerHTML = printMinutes()[0];
  minUni.innerHTML = printMinutes()[1];
  secDec.innerHTML = printSeconds()[0];
  secUni.innerHTML = printSeconds()[1];
}

function printMinutes() {
  // ... your code goes here
  return chronometer.twoDigitsNumber(chronometer.getMinutes());
}

function printSeconds() {
  // ... your code goes here
  return chronometer.twoDigitsNumber(chronometer.getSeconds());
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
  let li = document.createElement("li");
  li.innerHTML = `00 : ${printMinutes()} : ${printSeconds()}`;
  splits.appendChild(li);
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
}

function setSplitBtn() {
  btnRight.classList.remove("reset");
  btnRight.classList.add("split");
  btnRight.innerHTML = "SPLIT";
}
function setStartBtn() {
  btnLeft.classList.remove("stop");
  btnLeft.classList.add("start");
  btnLeft.innerHTML = "START";
}
function setResetBtn() {
  btnRight.classList.remove("split");
  btnRight.classList.add("reset");
  btnRight.innerHTML = "RESET";
}

// Start/Stop Button
btnLeft.addEventListener("click", () => {
  // ... your code goes here
  if (btnLeft.classList.contains("start")) {
    btnLeft.textContent = "STOP";
    btnRight.textContent = "SPLIT";
    btnRight.classList.toggle("split");
    btnRight.classList.toggle("reset");
    chronometer.startClick(printTime);
  } else {
    btnLeft.textContent = "START";
    btnRight.textContent = "RESET";
    btnRight.classList.toggle("split");
    btnRight.classList.toggle("reset");
  }

  btnLeft.classList.toggle("start");
  btnLeft.classList.toggle("stop");
  console.log(btnLeft.classList);
  console.log(btnRight.classList);
});

// Reset/Split Button
btnRight.addEventListener("click", () => {
  // ... your code goes here
  if (btnRight.classList.contains("split")) {
    printSplit();
  }
});
