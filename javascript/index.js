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
  let firstDigit = chronometer.twoDigitsNumber(chronometer.getMinutes())[0];
  let secondDigit = chronometer.twoDigitsNumber(chronometer.getMinutes())[1];
  minDec.innerHTML = firstDigit;
  minUni.innerHTML = secondDigit;
}

function printSeconds() {
  let firstDigit = chronometer.twoDigitsNumber(chronometer.getSeconds())[0];
  let secondDigit = chronometer.twoDigitsNumber(chronometer.getSeconds())[1];
  secDec.innerText = firstDigit;
  secUni.innerText = secondDigit;
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

btnRight.onclick = function () {
  if (btnRight.className.includes("split")) {
    printSplit();
  }
};

function printSplit() {
  splits.innerHTML += `<li>${minDec.innerText}${minUni.innerText}:${secDec.innerText}${secUni.innerText}</li>`;
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  if (btnLeft.className.includes("stop")) {
    setResetBtn();
    chronometer.stopClick();
    btnLeft.classList.add("start");
    btnLeft.innerHTML = "start";
    btnLeft.classList.remove("stop");
  }
}

function setSplitBtn() {
  // ... your code goes here
}

btnLeft.onclick = setStartBtn;

function setStartBtn() {
  console.log(btnLeft.classList);
  if (btnLeft.className.includes("start")) {
    setResetBtn();
    btnLeft.classList.add("stop");
    btnLeft.innerHTML = "stop";

    chronometer.startClick(printTime);

    btnLeft.classList.remove("start");
  } else {
    setStopBtn();
  }
}

function setResetBtn() {
  if (btnLeft.className.includes("start")) {
    btnRight.classList.add("split");
    btnRight.innerText = "split";
    btnRight.classList.remove("reset");
  }
  if (btnLeft.className.includes("stop")) {
    btnRight.classList.add("reset");
    btnRight.innerText = "reset";
    btnRight.classList.remove("split");
  }
}

// Start/Stop Button
btnLeft.addEventListener("click", () => {
  // ... your code goes here
});

// Reset/Split Button
btnRight.addEventListener("click", () => {
  if (btnRight.className.includes("reset")) {
    chronometer.resetClick();
    printTime();
    splits.innerText = "";
  }
});
