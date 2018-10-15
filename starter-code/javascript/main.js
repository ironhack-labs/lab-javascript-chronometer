var chronometer = new Chronometer();
var btnLeft = document.getElementById("btnLeft");
var btnRight = document.getElementById("btnRight");
var minDec = document.getElementById("minDec");
var minUni = document.getElementById("minUni");
var secDec = document.getElementById("secDec");
var secUni = document.getElementById("secUni");
var milDec = document.getElementById("milDec");
var milUni = document.getElementById("milUni");

var Clock = new Chronometer();

btnLeft.onclick = () => {
  if (btnLeft.className.includes("start")){
    btnLeft.classList.add("stop");
    btnLeft.innerText = "STOP";
  btnLeft.classList.remove("start");
  Clock.startClick();
  minDec.innerText = (Clock.setTime().toString())[0][0]
  minUni.innerText = (Clock.setTime().toString())[0][1]
  secDec.innerText = (Clock.setTime().toString())[1][0]
  secDec.innerText = (Clock.setTime().toString())[1][1]
  console.log((Clock.setTime().toString())[1])

  } else if (btnLeft.className.includes("stop")) {
  btnLeft.classList.remove("stop");
  btnLeft.classList.add("start");
  btnLeft.innerText = "START";
};
   
}

btnRight.onclick = () => {
  if (btnRight.className.includes("reset")){
    btnRight.classList.add("split");
    btnRight.innerText = "SPLIT";
  btnRight.classList.remove("reset");
  } else if (btnRight.className.includes("split")) {
  btnRight.classList.remove("split");
  btnRight.classList.add("reset");
  btnRight.innerText = "RESET";
}
}

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
btnLeft.addEventListener("click", function() {});

// Reset/Split Button
btnRight.addEventListener("click", function() {});
