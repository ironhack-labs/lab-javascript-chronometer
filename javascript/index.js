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
  print = setInterval(() => {
    printMinutes();
    printSeconds();
  }, 1000);
  console.log(print);
}

function printMinutes() {
  minDec.innerText = String(
    chronometer.twoDigitsNumber(chronometer.getMinutes())
  )[0];
  minUni.innerText = String(
    chronometer.twoDigitsNumber(chronometer.getMinutes())
  )[1];
}

function printSeconds() {
  secDec.innerText = String(
    chronometer.twoDigitsNumber(chronometer.getSeconds())
  )[0];
  secUni.innerText = String(
    chronometer.twoDigitsNumber(chronometer.getSeconds())
  )[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  splits.innerHTML += `
  <li>
  ${chronometer.splitClick()}
  </li>`;
}

function clearSplits() {
  document.getElementById("splits").innerHTML = "";
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
  if (btnLeft.className === "btn start") {
    chronometer.startClick();
    document.getElementById("btnLeft").className = "btn stop";
    btnLeft.innerText = "STOP";
    document.getElementById("btnRight").className = "btn split";
    btnRight.innerText = "SPLIT";

    // FORMA ALTERNATIVA
    // btnLeft.classList.remove("start");
    // btnLeft.classList.add("stop");
    // btnLeft.innerText = "STOP"
    // btnRight.classList.remove("reset");
    // btnRight.classList.add("split");
    // btnRight.innerText = "SPLIT"
    // chronometer.startClick();
  } else {
    chronometer.stopClick();
    document.getElementById("btnLeft").className = "btn start";
    btnLeft.innerText = "START";
    document.getElementById("btnRight").className = "btn reset";
    btnRight.innerText = "RESET";
  }
});

// Reset/Split Button
btnRight.addEventListener("click", () => {
  if (btnRight.className === "btn reset") {
    chronometer.resetClick();
  } else {
    chronometer.splitClick();
  }
});
