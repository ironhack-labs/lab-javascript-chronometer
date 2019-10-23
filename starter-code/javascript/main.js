var chronometer = new Chronometer();
var btnLeft = document.getElementById("btnLeft");
var btnRight = document.getElementById("btnRight");
var minDec = document.getElementById("minDec");
var minUni = document.getElementById("minUni");
var secDec = document.getElementById("secDec");
var secUni = document.getElementById("secUni");
var milDec = document.getElementById("milDec");
var milUni = document.getElementById("milUni");

function printTime(chronometer) {
  printMinutes(chronometer);
  printSeconds(chronometer);
}

function printMinutes(chronometer) {
  var min = chronometer.twoDigitsNumber(chronometer.getMinutes());

  minDec.innerHTML = min[0];
  minUni.innerHTML = min[1];
}

function printSeconds(chronometer) {
  var sec = chronometer.twoDigitsNumber(chronometer.getSeconds());

  secDec.innerHTML = sec[0];
  secUni.innerHTML = sec[1];
}

function printMilliseconds() {}

function printSplit() {
  var li = document.createElement("li");
  document.getElementById("splits").appendChild(li);
  li.innerHTML =
    chronometer.twoDigitsNumber(chronometer.getMinutes()) +
    ":" +
    chronometer.twoDigitsNumber(chronometer.getSeconds());
}

function clearSplits() {
  var list = document.querySelectorAll("li");
  console.log(list);
  list.forEach(function(val) {
    console.log(val);
    val.remove();
  });
  //   list.remove();
}

function setStopBtn() {
  btnLeft.innerHTML = "STOP";
  btnLeft.classList.toggle("stop");
  btnLeft.classList.toggle("start");
}

function setSplitBtn() {
  btnRight.innerHTML = "SPLIT";
  btnRight.classList.add("split");
  btnRight.classList.remove("reset");
}

function setStartBtn() {
  btnLeft.innerHTML = "START";
  btnLeft.classList.toggle("start");
  btnLeft.classList.toggle("stop");
}

function setResetBtn() {
  btnRight.innerHTML = "RESET";
  btnRight.classList.add("reset");
  btnRight.classList.remove("split");
}

// Start/Stop Button
btnLeft.addEventListener("click", function() {
  if (this.classList.contains("start")) {
    setStopBtn();
    chronometer.startClick();
    setSplitBtn();
  } else {
    setStartBtn();
    chronometer.stopClick();
    setResetBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener("click", function() {
  console.log(this);
  if (this.classList.contains("reset")) {
    chronometer.resetClick();
    printTime(chronometer);
  } else {
    printSplit();
    chronometer.splitClick();
  }
});
