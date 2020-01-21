let chronometer = new Chronometer();
let btnLeft = document.getElementById("btnLeft");
let btnRight = document.getElementById("btnRight");
let minDec = document.getElementById("minDec");
let minUni = document.getElementById("minUni");
let secDec = document.getElementById("secDec");
let secUni = document.getElementById("secUni");
let milDec = document.getElementById("milDec");
let milUni = document.getElementById("milUni");

function printTime() {
  printMinutes(chronometer.getMinutes());
  printSeconds(chronometer.getSeconds());
}

function printMinutes(value) {
  let min = chronometer.twoDigitsNumber(value).split("");
  minDec.innerText = min[0];
  minUni.innerText = min[1];
}

function printSeconds(value) {
  let sec = chronometer.twoDigitsNumber(value).split("");
  secDec.innerText = sec[0];
  secUni.innerText = sec[1];
}

function printMilliseconds() {}

function printSplit() {
  let split = document.createElement("li");
  let list = document.querySelector("#splits");
  split.innerText = (`${chronometer.twoDigitsNumber(chronometer.getMinutes())} : ${chronometer.twoDigitsNumber(chronometer.getSeconds())}`) 
  list.appendChild(split);
}

function clearSplits() {}

function setStopBtn() {
  btnLeft.innerText = `START`;
  btnLeft.className = `btn start`;
  chronometer.stopClick();
}

function setSplitBtn() {
  btnRight.innerText = `RESET`;
  btnRight.className = `btn reset`;
  
}

function setStartBtn() {
  btnLeft.innerText = `STOP`;
  btnLeft.className = `btn stop`;
  chronometer.startClick(printTime);
}

function setResetBtn() {
  btnRight.innerText = `SPLIT`;
  btnRight.className = `btn split`;
  chronometer.resetClick();
  printTime();
}

// Start/Stop Button
btnLeft.addEventListener("click", function() {
  if (btnLeft.innerText === `START`) {
    setStartBtn();
    btnRight.innerText = `Split`;
    btnRight.className = `btn split`;
  } else {
    setStopBtn();
    btnRight.innerText = `RESET`;
    btnRight.className = `btn reset`;
  }
});

// Reset/Split Button
btnRight.addEventListener("click", function() {
  if (btnRight.innerText === `RESET`) {
    printTime();
  } else {
    printSplit();  
  }
});