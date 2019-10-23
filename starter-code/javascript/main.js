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

  document.getElementById("minDec").innerHTML = min[0];
  document.getElementById("minUni").innerHTML = min[1];
}

function printSeconds(chronometer) {
  var sec = chronometer.twoDigitsNumber(chronometer.getSeconds());

  document.getElementById("secDec").innerHTML = sec[0];
  document.getElementById("secUni").innerHTML = sec[1];
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
  btnLeft.innerHTML = "START";
  btnLeft.classList.remove("stop");
  btnLeft.classList.add("start");
  btnRight.classList.add("reset");
  btnRight.classList.remove("split");
  btnRight.innerHTML = "RESET";
  chronometer.stopClick();
}

function setSplitBtn() {
  printSplit();
  chronometer.splitClick();
}

function setStartBtn() {
  chronometer.startClick();
  btnLeft.innerHTML = "STOP";
  btnLeft.classList.remove("start");
  btnLeft.classList.add("stop");
  btnRight.innerHTML = "SPLIT";
  btnRight.classList.remove("reset");
  btnRight.classList.add("split");
}

function setResetBtn() {
  btnRight.innerHTML = "SPLIT";
  btnRight.classList.remove("reset");
  btnRight.classList.add("split");
  clearSplits();
  chronometer.resetClick();
  printTime(chronometer);
}

// Start/Stop Button
btnLeft.addEventListener("click", function() {
  if (this.classList.contains("start")) {
    setStartBtn();
  } else {
    setStopBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener("click", function() {
  console.log(this);
  if (this.classList.contains("reset")) {
    setResetBtn();
  } else {
    setSplitBtn();
  }
});
