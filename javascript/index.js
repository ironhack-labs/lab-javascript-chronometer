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
  minDec.innerHTML = minutes[0];
  minUni.innerHTML = minutes[1];
}

function printSeconds() {
  let seconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
  secDec.innerHTML = seconds[0];
  secUni.innerHTML = seconds[1];
}

// // ==> BONUS
// function printMilliseconds() {
//   // ... your code goes here
// }

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
  if (btnLeft.classList.contains("start")) {
    btnLeft.innerHTML = "START";
    chronometer.stopClick();
  } else if (btnLeft.classList.contains("stop")) {
    btnLeft.innerHTML = "STOP";
    chronometer.startClick();
  }
}

function setResetBtn() {
  // if (btnRight.classList.contains("reset")) {
  //   btnRight.innerHTML = 'RESET';
  //   chronometer.splitClick();
  // } if (btnRight.classList.contains("split")) {
  //   btnRight.innerHTML = 'SPLIT';
  //   chronometer.splitClick();
  // }
  // if (btnRight.classList.contains("reset")) {
  //   chronometer.splitClick();
  // } else {
  //   chronometer.resetClick();
  // }
}

// Start/Stop Button
// btnLeft.addEventListener("click", () => {
//   btnLeft.classList.toggle("start");
//   btnLeft.classList.toggle("stop");
//   btnRight.classList.toggle("reset");
//   btnRight.classList.toggle("split");
//   return setStartBtn();
// });


//OR


btnLeft.addEventListener("click", () => {
  if (btnLeft.classList.contains("start")) {
    btnLeft.innerHTML = "STOP";
    btnLeft.classList.add("stop");
    btnLeft.classList.remove("start");
    chronometer.startClick(printTime);
    btnRight.innerHTML = "SPLIT";
    btnRight.classList.add("split");
    btnRight.classList.remove("reset");
  } else {
    btnLeft.innerHTML = "START";
    btnLeft.classList.add("start");
    btnLeft.classList.remove("stop");
    chronometer.stopClick(printTime);
    btnRight.innerHTML = "RESET";
    btnRight.classList.add("reset");
    btnRight.classList.remove("split");
  }
});

// Reset/Split Button
btnRight.addEventListener("click", () => {
  if (btnRight.classList.contains("reset")) {
    chronometer.resetClick(printTime);
    minDec.innerHTML = "0";
    minUni.innerHTML = "0";
    secDec.innerHTML = "0";
    secUni.innerHTML = "0";
    splits.innerHTML = "";

  } else {
    splits.innerHTML += `<li>${chronometer.splitClick()}</li>`
  }
});
