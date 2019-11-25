var chronometer = new Chronometer();
var btnLeft = document.getElementById("btnLeft");
var btnRight = document.getElementById("btnRight");
var minDec = document.getElementById("minDec");
var minUni = document.getElementById("minUni");
var secDec = document.getElementById("secDec");
var secUni = document.getElementById("secUni");
var milDec = document.getElementById("milDec");
var milUni = document.getElementById("milUni");
var splits = document.getElementById("splits");

function printTime() {
  let timer = setInterval(function() {
    printMinutes();
    printSeconds();
  }, 10);
}

function printMinutes() {
  let min = chronometer.getMinutes();
  min = chronometer.twoDigitsNumber(min).split("");
  minDec.innerHTML = min[0];
  minUni.innerHTML = min[1];
}

function printSeconds() {
  let sec = chronometer.getSeconds();
  sec = chronometer.twoDigitsNumber(sec).split("");
  secDec.innerHTML = sec[0];
  secUni.innerHTML = sec[1];
}

function printMilliseconds() {}

function printSplit(min, sec) {
  var line = document.createElement("li");
  line.textContent = `${min[0]}${min[1]}:${sec[0]}${sec[1]}`;
  splits.appendChild(line);
}

function clearSplits() {
  document.querySelectorAll("li").forEach(function(e) {
    e.remove();
  });
}

function setStopBtn() {
  chronometer.stopClick();
}

function setSplitBtn() {
  let min = chronometer.getMinutes();
  min = chronometer.twoDigitsNumber(min);
  min = min.split("");
  let sec = chronometer.getSeconds();
  sec = chronometer.twoDigitsNumber(sec);
  sec = sec.split("");
  printSplit(min, sec);
}

function setStartBtn() {
  chronometer.startClick();
  printTime();
}

function setResetBtn() {
  chronometer.resetClick();
  minDec.innerHTML = "0";
  minUni.innerHTML = "0";
  secDec.innerHTML = "0";
  secUni.innerHTML = "0";
  milDec.innerHTML = "0";
  milUni.innerHTML = "0";
  clearSplits();
}

// Start/Stop Button
btnLeft.addEventListener("click", function() {
  if (btnLeft.className.includes("start")) {
    btnLeft.setAttribute("class", "btn stop");
    btnLeft.innerHTML = "STOP";
    btnRight.setAttribute("class", "btn split");
    btnRight.innerHTML = "SPLIT";
    setStartBtn();
  } else {
    btnLeft.setAttribute("class", "btn start");
    btnLeft.innerHTML = "START";
    btnRight.setAttribute("class", "btn reset ");
    btnRight.innerHTML = "RESET";
    setStopBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener("click", function() {
  if (btnRight.className.includes("reset")) {
    setResetBtn();
  } else {
    setSplitBtn();
  }
});
