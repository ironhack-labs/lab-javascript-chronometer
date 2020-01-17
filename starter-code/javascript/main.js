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
  /* let sec = printSeconds(chronometer.twoDigitsNumber(chronometer.getSeconds()));
  console.log(sec); */
  let secs = printSeconds();
  let mins = printMinutes();
  console.log(secs);
  console.log(mins);
  let secsDigits = chronometer.twoDigitsNumber(secs);
  let minsDigits = chronometer.twoDigitsNumber(mins);
  secUni.innerHTML = secsDigits[1];
  secDec.innerHTML = secsDigits[0];
  minUni.innerHTML = minsDigits[1];
  minDec.innerHTML = minsDigits[0];
}

function printMinutes() {
  console.log(chronometer.getMinutes());
  let minutes = chronometer.getMinutes();
  return minutes;
  
 // minDec.innerHTML = digits[0];
 // minUni.innerHTML = digits[1];
}

function printSeconds() {
  return chronometer.getSeconds();
  // secUni.innerHTML = seconds[0];
  //secDec.innerHTML = seconds[1];
}

function printMilliseconds() {}

function printSplit() {}

function clearSplits() {}

function setStopBtn() {
  document.getElementById("btnLeft") = this.stopClick();
}

function setSplitBtn() {
  this.splitClick();
}

function setStartBtn() {
  this.startClick();
}

function setResetBtn() {
  this.resetClick();
}

// Start/Stop Button

btnLeft.addEventListener("click", function() {
  if (chronometer.currentTime === 0) {
    chronometer.startClick();
  } else {
    if (btnLeft.innerHTML === "START") {
      //chronometer.resetClick();
      btnLeft.innerHTML = "STOP";
      btnLeft.setAttribute("class", "btn stop");
      btnRight.setAttribute("class", "btn reset");
      btnRight.innerHTML = "RESET";
    } else {
      btnLeft.innerHTML = "START";
      chronometer.stopClick();
      btnLeft.setAttribute("class", "btn start");
      btnRight.setAttribute("class", "btn split");
      btnRight.innerHTML = "SPLIT";
    }
  }
});

setInterval(() => {
  printTime();
}, 1000);

// Reset/Split Button
btnRight.addEventListener("click", function() {});
