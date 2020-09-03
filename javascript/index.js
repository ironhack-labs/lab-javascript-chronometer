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
  var min = chronometer.twoDigitsNumber(chronometer.getMinutes());
  var splitMin = min.split("");
  minDec.innerText = splitMin[0];
  minUni.innerText = splitMin[1];
}

function printSeconds() {
  // console.log(chronometer.getSeconds());
  var counter = chronometer.twoDigitsNumber(chronometer.getSeconds());
  var counterSplit = counter.split("");

  secDec.innerText = counterSplit[0];
  secUni.innerText = counterSplit[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  const li = document.createElement("li");
  li.innerHTML += `<span>${chronometer.splitClick()}</span>`;
  splits.appendChild(li);
}

function clearSplits() {
  splits.innerHTML = ""
  secDec.innerText = "0"
  secUni.innerText = "0"
  minDec.innerText = "0"
  minUni.innerText = "0"
}

function setStopBtn() {
  btnLeft.classList.toggle("stop");
  btnLeft.classList.toggle("start");
  console.log("btn left new class List >>", btnLeft.classList);
  event.target.textContent = "STOP";
}

function setSplitBtn() {
  console.log("set split btn");
  btnRight.classList.toggle("split");
  btnRight.classList.toggle("reset");
  console.log("btn right new class list >>", btnRight.classList);
  btnRight.textContent = "SPLIT";
}

function setStartBtn() {
  btnLeft.classList.toggle("start");
  btnLeft.classList.toggle("stop");
  console.log("btn left new class list >>", btnLeft.classList);
  btnLeft.textContent = "START";
  setResetBtn(); // always set reset btn with start btn
}

function setResetBtn() {
  btnRight.classList.toggle("reset");
  btnRight.classList.toggle("split");
  console.log("btn right new class list >>", btnRight.classList);
  btnRight.textContent = "RESET";
}

// Start/Stop Button
btnLeft.addEventListener("click", (evt) => {
  let temp = evt.target;
  console.log("btn left class list on click >>", temp.classList);

  if (temp.classList.contains("start")) {
    chronometer.startClick(printTime);
    console.log("set stop btn");
    setStopBtn();
    setSplitBtn();
  } else {
    chronometer.stopClick();
    console.log("set start btn");
    setStartBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener("click", (evt) => {
  let temp = evt.target;

  console.log("clicked on right btn");
  console.log("btn right class list on click >>", temp.classList);

  if (temp.classList.contains("split")) {
    chronometer.splitClick();
    printSplit();
  }

  if (temp.classList.contains("reset")) {
    chronometer.resetClick();
    clearSplits();
  }
});
