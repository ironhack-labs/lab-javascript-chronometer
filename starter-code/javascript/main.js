var chronometer = new Chronometer();
var btnLeft = document.getElementById("btnLeft");
var btnRight = document.getElementById("btnRight");
var minDec = document.getElementById("minDec");
var minUni = document.getElementById("minUni");
var secDec = document.getElementById("secDec");
var secUni = document.getElementById("secUni");
var milDec = document.getElementById("milDec");
var milUni = document.getElementById("milUni");

function printTime() {}

function printMinutes() {}

function printSeconds() {}

function printMilliseconds() {}

function printSplit() {}

function clearSplits() {}

function setStopBtn() {}

function setSplitBtn() {}

function setStartBtn() {}

function setResetBtn() {}

// Start/Stop Button
btnLeft.addEventListener("click", function() {
  let id = setInterval(() => {
    // let mili = Math.floor(chronometer.getSeconds());
    let second = chronometer.getSeconds();
    let minute = chronometer.getMinutes();
    // if (mili >= 100) {
    //   milUni.innerHTML = mili.toString()[1];
    //   milDec.innerHTML = mili.toString()[0];
    // } else {
    //   milUni.innerHTML = mili.toString()[0];
    //   milDec.innerHTML = '0';
    // }
    if (second >= 10) {
      secUni.innerHTML = second.toString()[1];
      secDec.innerHTML = second.toString()[0];
    } else {
      secDec.innerHTML = "0";
      secUni.innerHTML = second.toString()[0];
    }

    if (minute >= 10) {
      minUni.innerHTML = minute.toString()[1];
      minDec.innerHTML = minute.toString()[0];
    } else if (minute <= 0) {
      minDec.innerHTML = "0";
      minUni.innerHTML = "0";
    } else {
      minDec.innerHTML = "0";
      minUni.innerHTML = minute.toString()[0];
    }
  }, 0);
  if (btnLeft.innerHTML === "START") {
    btnLeft.removeAttribute("class");
    btnLeft.setAttribute("class", "btn stop");
    btnLeft.innerHTML = "STOP";
    chronometer.startClick();
    btnRight.removeAttribute("class");
    btnRight.setAttribute("class", "btn split");
    btnRight.innerHTML = "SPLIT";
  } else {
    btnLeft.removeAttribute("class");
    btnLeft.setAttribute("class", "btn start");
    btnLeft.innerHTML = "START";
    chronometer.stopClick();
    btnRight.removeAttribute("class");
    btnRight.setAttribute("class", "btn reset");
    btnRight.innerHTML = "RESET";
    clearInterval(id);
  }
});

// Reset/Split Button
btnRight.addEventListener("click", function() {
  if (btnRight.innerHTML === "RESET") {
    chronometer.currentTime = 0;
    secDec.innerHTML = "0";
    secUni.innerHTML = "0";
    minDec.innerHTML = "0";
    minUni.innerHTML = "0";
    milDec.innerHTML = '0';
    milUni.innerHTML = '0';
  }
  if (btnRight.innerHTML === "SPLIT") {
    let splitClick = chronometer.splitClick();
    let ol = document.getElementById("splits");
    let li = document.createElement("li");
    li.innerHTML = splitClick;
    ol.appendChild(li);
  }
});
