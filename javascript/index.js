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


//error at new chronometer (is undefined) so I commented my code entirely and didn't know how debug this.

function printTime() {
  // ... your code goes here
  // printMinutes();
  // printSeconds();
}

function printMinutes() {
  // ... your code goes here
  // let i = chronometer.twoDigitsNumber(chronometer.getMinutes());
  // minDec.innerText = i[0];
  // minUni.innerText = i[1];
}

function printSeconds() {
  // ... your code goes here
  // let j = chronometer.twoDigitsNumber(chronometer.getSeconds());
  // secDec.innerHTML = j[0];
  // secUni.innerHTML = j[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
  // splits.innnerHTML = `<li>${chronometer.splitClick()}</li>`;
}

function clearSplits() {
  // ... your code goes here
  // splits.innerHTML = "";
}

function setStopBtn() {
  // ... your code goes here
  // btnLeft.innerHTML = "STOP";
  // btnLeft.className = "btn stop";
  // chronometer.stopClick();
}

function setSplitBtn() {
  // ... your code goes here
  // btnRight.innerHTML = "SPLIT";
  // btnRight.className = "btn split";
  // chronometer.splitClick();
}

function setStartBtn() {
  // ... your code goes here
  // btnLeft.innerHTML = "START";
  // btnLeft.className = "btn start";
  // chronometer.startClick();
}

function setResetBtn() {
  // ... your code goes here
  // btnRight.innerHTML = "RESET";
  // btnRight.className = "btn reset";
  // chronometer.resetClick();
}

// Start/Stop Button
btnLeft.addEventListener("click", () => {
  // ... your code goes here

  // if (btnLeft.innerHTML == "START") {
  //   chronometer.startClick(chronometer);
  //   setStopBtn();
  //   setSplitBtn();
  // } else {
  //   chronometer.stopClick();
  //   setStartBtn();
  //   setResetBtn();
  // }

});

// Reset/Split Button
btnRight.addEventListener("click", () => {
  // ... your code goes here

  // if (btnRight.innerHTML == "RESET") {
  //   chronometer.resetClick();
  //   clearSplits();
  //   printTime();
  // } else {
  //   printSplit();
  // }
});
