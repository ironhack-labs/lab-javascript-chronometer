var chronometer = new Chronometer();
var btnLeft = document.getElementById("btnLeft");
var btnRight = document.getElementById("btnRight");
var minDec = document.getElementById("minDec");
var minUni = document.getElementById("minUni");
var secDec = document.getElementById("secDec");
var secUni = document.getElementById("secUni");
var milDec = document.getElementById("milDec");
var milUni = document.getElementById("milUni");
var that = this

function printTime() {}

function printMinutes() {
  setInterval(function(){ 
    milDec.innerText = chronometer.setTime()[0]
    milUni.innerText = chronometer.setTime()[1]
  }, 0); 
}

function printSeconds() {
  setInterval(function(){ 
    secDec.innerHTML = chronometer.setTime()[2]
    secUni.innerHTML = chronometer.setTime()[3]
  }, 0);
}

function printMilliseconds() {}

function printSplit() {}

function clearSplits() {}

function setStopBtn() {}

function setSplitBtn() {}

function setStartBtn() {
  if (btnLeft.classList == "btn stop"){
    chronometer.startClick()
  } else if (btnLeft.classList == "btn start"){
    chronometer.stopClick()
  }
}

function setResetBtn() {
  if (btnRight.classList == "btn split") {
    chronometer.resetClick()
  } else {
    chronometer.splitClick()
  }
}

// Start/Stop Button
btnLeft.addEventListener("click", function() {
  var btnLeft = document.getElementById("btnLeft");
  if (btnLeft.innerText === "START") {
   btnLeft.innerText = "STOP"
   btnLeft.classList = 'btn stop'
   printMinutes()
   printSeconds()
  } else {
   btnLeft.innerText = "START";
   btnLeft.classList = 'btn start'
  }
 setStartBtn()
});

// Reset/Split Button
btnRight.addEventListener("click", function() {
  var btnRight = document.getElementById("btnRight");
  if (btnRight.innerText === "RESET") {
    btnRight.innerText = "SPLIT";
    btnRight.classList = 'btn split'
    setResetBtn()
  } else {
    btnRight.innerText = "RESET";
    btnRight.classList = 'btn reset'
  }
});
