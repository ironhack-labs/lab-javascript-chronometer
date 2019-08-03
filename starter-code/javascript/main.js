var chronometer = new Chronometer(printTime);
var btnLeft = document.getElementById("btnLeft");
var btnRight = document.getElementById("btnRight");
var split = document.getElementById("splits");
var minDec = document.getElementById("minDec");
var minUni = document.getElementById("minUni");
var secDec = document.getElementById("secDec");
var secUni = document.getElementById("secUni");
var milDec = document.getElementById("milDec");
var milUni = document.getElementById("milUni");

function printTime(deci, sec, min) {
  printMilliseconds(deci);
  printSeconds(sec);
  printMinutes(min);
}

function printMinutes(min) {
  minDec.innerText = min[0];
  minUni.innerText = min[1];
}

function printSeconds(sec) {
  secDec.innerText = sec[0];
  secUni.innerText = sec[1];
}

function printMilliseconds(milli) {
  milDec.innerText = milli[0];
  milUni.innerText = milli[1];
}

function printSplit() {
  let min = `${minDec.innerText}${minUni.innerText}`;

  let second = `${secDec.innerText}${secUni.innerText}`;

  let milli = `${milDec.innerText}${milUni.innerText}`;

  return (split.innerHTML += `
    <li>
        <span>${min}</span>:<span>${second}</span>:<span>${milli}</span>
    </li>
  `);
}

function clearSplits() {
  return (split.innerHTML = ``);
}

function setStopBtn() {
  btnLeft.innerText = "START";
  btnLeft.setAttribute("class", "btn start");
  btnRight.setAttribute("class", "btn reset");
  btnRight.innerText = "RESET";
  chronometer.stopClick();
}

function setSplitBtn() {
  printSplit();
}

function setStartBtn() {
  if (btnLeft.innerText === "START") {
    chronometer.startClick();
    btnLeft.innerText = "STOP";
    btnLeft.setAttribute("class", "btn stop");
    btnRight.setAttribute("class", "btn split");
    btnRight.innerText = "SPLIT";
  } else {
    this.setStopBtn();
  }
}

function setResetBtn() {
  chronometer.resetClick();
  clearSplits();
}

// Start/Stop Button
btnLeft.addEventListener("click", function() {
  setStartBtn();
});

// Reset/Split Button
btnRight.addEventListener("click", function() {
  if (btnRight.innerText === "RESET") {
    setResetBtn();
    minDec.innerText = `0`;
    minUni.innerText = `0`;

    secDec.innerText = `0`;
    secUni.innerText = `0`;

    milDec.innerText = `0`;
    milUni.innerText = `0`;
    btnLeft.innerText = "START";
  } else {
    setSplitBtn();
  }
});
