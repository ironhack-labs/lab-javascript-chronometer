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
  let num = chronometer.getMinutes();
  let twoDig = chronometer.twoDigitsNumber(num);
  minDec.innerHTML = twoDig[0];
  minUni.innerHTML = twoDig[1];
}

function printSeconds() {
  let num = chronometer.getSeconds();
  let twoDig = chronometer.twoDigitsNumber(num);
  secDec.innerHTML = twoDig[0];
  secUni.innerHTML = twoDig[1];
}

// ==> BONUS
function printMilliseconds() {
  let num = chronometer.getCenti();
  let twoDig = chronometer.twoDigitsNumber(num);
  let l = twoDig.length;
  if (l >= 2) milDec.innerHTML = twoDig[l - 2];
  milUni.innerHTML = twoDig[l - 1];
}

function printSplit() {}

function clearSplits() {
  while (splits.hasChildNodes()) {
    splits.removeChild(splits.firstChild);
  }
}

function setStopBtn() {
  btnLeft.innerHTML = "START";
  btnLeft.className = "btn start";
  btnRight.className = "btn reset";
  btnRight.innerHTML = "RESET";
}

function setSplitBtn() {
  var node = document.createElement("LI");
  var textNode = document.createTextNode(chronometer.splitClick());
  node.appendChild(textNode);
  splits.appendChild(node);
}

function setStartBtn() {
  btnLeft.className = "btn stop";
  btnLeft.innerHTML = "STOP";
  btnRight.innerHTML = "SPLIT";
  btnRight.className = "btn split";
}

function setResetBtn() {
  chronometer.resetClick();
  printTime();
  printMilliseconds();
  clearSplits();
}

// Start/Stop Button
btnLeft.addEventListener("click", () => {
  if (btnLeft.classList.contains("start")) {
    chronometer.startClick(printTime);
    chronometer.startMili(printMilliseconds);
    setStartBtn();
  } else {
    chronometer.stopClick();
    setStopBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener("click", () => {
  if (btnRight.classList.contains("split")) {
    setSplitBtn();
  }

  if (btnRight.classList.contains("reset")) {
    setResetBtn();
  }
});
