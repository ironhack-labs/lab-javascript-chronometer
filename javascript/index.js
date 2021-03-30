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
}

function printMinutes() {
  let minutes = chronometer.twoDigitsNumber(chronometer.getMinutes());
  minUni.innerHTML = minutes[1];
  minDec.innerHTML = minutes[0];
}

function printSeconds() {
  let seconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
  secUni.innerHTML = seconds[1];
  secDec.innerHTML = seconds[0];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  let liElem = document.createElement("li");
  liElem.innerHTML = `<p>${chronometer.splitClick()}</p>`;
  splits.appendChild(liElem);
}

function clearSplits() {
  splits.innerHTML= '';
}

function setStopBtn() {
  chronometer.stopClick();
}

function setStartBtn() {
  chronometer.startClick(printTime);
}

function setResetBtn() {

}

// Start/Stop Button
btnLeft.addEventListener("click", (event) => {
  event.preventDefault();

  //Botones
  btnLeft.classList.toggle("stop");

  if (btnLeft.innerHTML === "START") {
    btnLeft.innerHTML = "STOP";
  } else {
    btnLeft.innerHTML = "START";
  }

  btnRight.classList.toggle("split");

  if (btnRight.innerHTML === "RESET") {
    btnRight.innerHTML = "SPLIT";
  } else {
    btnRight.innerHTML = "RESET";
  }

  //Start - Stop

  if (btnLeft.classList.contains("stop")) {
    setStartBtn();
  } else {
    setStopBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener("click", () => {
  if (btnRight.classList.contains("split")) {
    printSplit();
  } else if (btnRight.classList.contains("reset")) {
    clearSplits();
    chronometer.resetClick();
    printTime();
  }
});
