const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById("btnLeft");
const btnRight = document.getElementById("btnRight");

// get the DOM elements that will serve us to display the time:

let splits = document.getElementById("splits");
let timeFace = document.getElementById("timeFace");

function printTime() {
  chronometer.intervalId = setInterval(() => {
    chronometer.currentTime += 1;
    timeFace.innerText = `${chronometer.getMinutes()}:${chronometer.getSeconds()}`;
  }, 1000);
}

function printSplit() {
  let newLi = document.createElement("li");
  newLi.classList.add("splitItem");
  newLi.innerText = `${chronometer.getMinutes()}:${chronometer.getSeconds()}`;
  document.querySelector("#splits").appendChild(newLi);
}

function clearSplits() {
  timeFace.innerText = `${chronometer.getMinutes()}:${chronometer.getSeconds()}`;
  let splitsChild = document.querySelectorAll(".splitItem");
  splitsChild.forEach((item) => {
    item.remove();
  });
}

function setStartBtn() {
  btnLeft.innerText = "START";
  btnRight.innerText = "RESET";
  clearInterval(chronometer.intervalId);
}

function setStopBtn() {
  btnLeft.innerText = "STOP";
  btnRight.innerText = "SPLIT";
  // chronometer.startClick();
  this.printTime();
}

function setResetBtn() {
  clearInterval(chronometer.intervalId);
  chronometer.currentTime = 0;
  this.clearSplits();
}

// Start/Stop Button
btnLeft.addEventListener("click", () => {
  if (btnLeft.classList.contains("start")) {
    this.setStopBtn();
  } else {
    this.setStartBtn();
  }
  btnLeft.classList.toggle("start");
  btnLeft.classList.toggle("stop");
  btnRight.classList.toggle("reset");
  btnRight.classList.toggle("split");
});

// Reset/Split Button
btnRight.addEventListener("click", () => {
  if (btnRight.classList.contains("split")) {
    this.printSplit();
  } else {
    this.setResetBtn();
  }
});
