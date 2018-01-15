var chronometer = new Chronometer();
var btnLeft = document.getElementById("btnLeft");
var btnRight = document.getElementById("btnRight");
var minDec = document.getElementById("minDec");
var minUni = document.getElementById("minUni");
var secDec = document.getElementById("secDec");
var secUni = document.getElementById("secUni");
var milDec = document.getElementById("milDec");
var milUni = document.getElementById("milUni");

var set = 0;
function printTime() {
  set = setInterval(function() {
    printSeconds();
    printMinutes();
  }, 1000);
}

function printMinutes() {
  var minDec = document.getElementById("minDec");
  var minUni = document.getElementById("minUni");
  minDec.innerText = parseInt(chronometer.min / 10);
  minUni.innerText = chronometer.min % 10;
}

function printSeconds() {
  var secDec = document.getElementById("secDec");
  var secUni = document.getElementById("secUni");
  secDec.innerText = parseInt(chronometer.sec / 10);
  secUni.innerText = chronometer.sec % 10;
}

function printMilliseconds() {}

function printSplit() {
    console.log("hola")
    var liSplit = document.createElement("li");
    console.log(liSplit)
    liSplit.innerText = chronometer.min + ":" + chronometer.sec;
    var padreLi = document.getElementById('splits')
    console.log(padreLi)
    padreLi.appendChild(liSplit);
}

function clearSplits() {}

function setStopBtn() {}

function setSplitBtn() {}

function setStartBtn() {}

function setResetBtn() {}

// Start/Stop Button
btnLeft.addEventListener("click", function() {
  var btnRight = document.getElementById("btnRight");
  var btnLeft = document.getElementById("btnLeft");
  if (btnLeft.innerText == "START") {
    btnLeft.innerText = "STOP";
    btnLeft.className = "btn stop";
    chronometer.startClick();
    printTime();
    btnRight.innerText = "SPLIT";
    btnRight.className = "btn split";
  } else {
    btnLeft.innerText = "START";
    btnLeft.className = "btn start";
    chronometer.stopClick();
    clearInterval(set);
    btnRight.innerText = "RESET";
    btnRight.className = "btn reset";
  }
});

// Reset/Split Button
btnRight.addEventListener("click", function() {
  var btnRight = document.getElementById("btnRight");
  var btnLeft = document.getElementById("btnLeft");
  if (btnRight.innerText == "RESET") {
    chronometer.resetClick();
  } else {
      printSplit();
  }
});
