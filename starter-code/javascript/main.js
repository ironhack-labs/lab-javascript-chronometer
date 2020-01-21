var chronometer = new Chronometer();
var btnLeft = document.getElementById("btnLeft");
var btnRight = document.getElementById("btnRight");
var minDec = document.getElementById("minDec");
var minUni = document.getElementById("minUni");
var secDec = document.getElementById("secDec");
var secUni = document.getElementById("secUni");
var milDec = document.getElementById("milDec");
var milUni = document.getElementById("milUni");

var chrono = new Chronometer();

function printTime() {}

function printMinutes() {
  console.log();
}

function printSeconds() {}

function printMilliseconds() {}

function printSplit() {}

function clearSplits() {}

function setStopBtn() {}

function setSplitBtn() {}

function setStartBtn() {

  btnLeft.innerHTML = "STOP";
  btnLeft.classList.add("stop");
  chronometer.startClick();
  
}

function setResetBtn() {}

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
  // printMinutes();
  // printSeconds();

      }
});


// Reset/Split Button
btnRight.addEventListener("click", function() {
  console.log(chronometer.currentTime);
  //alert('hola');
});
