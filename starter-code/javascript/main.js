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
  printMinutes();
  printSeconds();
}

function printMinutes() {
  let minutes = chronometer.twoDigitsNumber(chronometer.getMinutes());
  let min = minutes.split("");
  minDec.innerHTML = min[0];
  minUni.innerHTML = min[1];
}

function printSeconds() {
  let seconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
  let sec = seconds.split("");
  secDec.innerHTML = sec[0];
  secUni.innerHTML = sec[1];
  console.log(sec);
}

function printMilliseconds() {}

function printSplit() {
    let list = document.querySelector("#splits")
    let split = document.createElement(`li`)
    split.innerText = (`${chronometer.twoDigitsNumber(chronometer.getMinutes())}:${chronometer.twoDigitsNumber(chronometer.getSeconds())}`)
    list.appendChild(split)
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
  // chronometer.resetClick()
  // printTime()
}

function setStartBtn() {
  btnLeft.innerHTML = `STOP`;
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
    btnRight.innerText = `SPLIT`;
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
    chronometer.resetClick();
    printTime();
  } else {
    printSplit();
  }
});
