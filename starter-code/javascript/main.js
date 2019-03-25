var chronometer = new Chronometer();
var btnLeft = document.getElementById("btnLeft");
var btnRight = document.getElementById("btnRight");
var minDec = document.getElementById("minDec");
var minUni = document.getElementById("minUni");
var secDec = document.getElementById("secDec");
var secUni = document.getElementById("secUni");
var milDec = document.getElementById("milDec");
var milUni = document.getElementById("milUni");

function printTime() {
  setInterval(() => {
    printMinutes();
    printSeconds();
  }, 1000);
}

function printMinutes() {
  minDec.innerHTML = chronometer.minutes[0];
  minUni.innerHTML = chronometer.minutes[1];
}

function printSeconds() {
  secDec.innerHTML = chronometer.seconds[0];
  secUni.innerHTML = chronometer.seconds[1];
}

function printMilliseconds() {}

function printSplit() {
    var splitItem = document.createElement('li');
    splitItem.innerHTML = chronometer.minutes + ':' + chronometer.seconds;
    document.querySelector('#splits').append(splitItem);
}

function clearSplits() {
    document.querySelector('#splits').innerHTML = "";
}

function setStopBtn() {
  chronometer.stopClick();
  btnLeft.classList.remove("stop");
  btnLeft.innerHTML = "START";
  btnLeft.classList.add("start");
  btnRight.classList.remove("split");
  btnRight.innerHTML = "RESET";
  btnRight.classList.add("reset");
}

function setSplitBtn() {
    printSplit();

}

function setStartBtn() {
  chronometer.startClick();
  btnLeft.classList.remove("start");
  btnLeft.innerHTML = "STOP";
  btnLeft.classList.add("stop");
  btnRight.classList.remove("reset");
  btnRight.innerHTML = "SPLIT";
  btnRight.classList.add("split");
}

function setResetBtn() {
    chronometer.resetClick();
    clearSplits();
}

// Start/Stop Button
btnLeft.addEventListener("click", function() {
  if (btnLeft.className === "btn start") {
    setStartBtn();
  } else {
    setStopBtn();
  }
  printTime();
});

// Reset/Split Button
btnRight.addEventListener("click", function() {
  if (btnRight.className === "btn reset") {
      setResetBtn();
  } else {
      setSplitBtn();
  }
  printTime();
});
