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

function printTime(mins, secs, mill) {
  // const min = chronometer.getMinutes();
  // const sec = chronometer.getSeconds();

  minUni.innerHTML = chronometer.twoDigitsNumber(mins)[1];
  minDec.innerHTML = chronometer.twoDigitsNumber(mins)[0];
  secUni.innerHTML = chronometer.twoDigitsNumber(secs)[1];
  secDec.innerHTML = chronometer.twoDigitsNumber(secs)[0];

  milDec.innerHTML = chronometer.twoDigitsNumber(mill)[0];
  milUni.innerHTML = chronometer.twoDigitsNumber(mill)[1];
}

function printMinutes() {
  return chronometer.getMinutes();
  // ... your code goes here
}

function printSeconds() {
  return chronometer.getSeconds();
}
// ==> BONUS
function printMilliseconds() {
  return chronometer.getMilSeconds();
}

function printSplit() {
  const min = chronometer.getMinutes();
  const sec = chronometer.getSeconds();

  const lap = document.createElement("li");

  lap.innerHTML = chronometer.splitClick(min, sec);

  const list = document.querySelector("#splits");

  list.appendChild(lap);
}

function clearSplits() {
  chronometer.resetClick();

  const listReset = document.querySelectorAll("#splits li");
  listReset.forEach(function (el) {
    el.remove();
  });
}

function setStopBtn() {
  btnLeft.textContent = "STOP";
  setSplitBtn();
}

function setSplitBtn() {
  btnRight.textContent = "SPLIT";
  btnRight.classList = "btn split";
}

function setStartBtn() {
  btnLeft.textContent = "START";
  setResetBtn();
}

function setResetBtn() {
  btnRight.textContent = "RESET";
  btnRight.classList = "btn reset";
}

// Start/Stop Button
btnLeft.addEventListener("click", () => {
  btnLeft.classList.toggle("start");
  btnLeft.classList.toggle("stop");

  if (btnLeft.textContent === "START") {
    setStopBtn();
  } else if (btnLeft.textContent === "STOP") {
    setStartBtn();
  }

  if (btnLeft.classList[1] === "stop") {
    chronometer.startClick();
  } else if (btnLeft.classList[1] === "start") {
    chronometer.stopClick();
  }

  setInterval(function () {
    const min = printMinutes();
    const sec = printSeconds();
    const mill = printMilliseconds();

    printTime(min, sec, mill);
  }, 10);
});

// Reset/Split Button
btnRight.addEventListener("click", () => {
  if (btnRight.classList[1] === "split") {
    printSplit();
  } else if (btnRight.classList[1] === "reset") {
    clearSplits();
  }
});
