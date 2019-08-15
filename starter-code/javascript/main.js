var chronometer = new Chronometer();
var btnLeft = document.getElementById("btnLeft");
var btnRight = document.getElementById("btnRight");
var minDec = document.getElementById("minDec");
var minUni = document.getElementById("minUni");
var secDec = document.getElementById("secDec");
var secUni = document.getElementById("secUni");
var milDec = document.getElementById("milDec");
var milUni = document.getElementById("milUni");
const listSplit = document.getElementById("splits");

function printTime() {
  printMinutes();
  printSeconds();
  printMilliseconds();
}

function printMinutes() {
  minUni.innerHTML = chronometer.twoDigitsNumber(
    chronometer.getMinutes())[1];
  minDec.innerHTML = chronometer.twoDigitsNumber(
    chronometer.getMinutes())[0];
}

function printSeconds() {
  secUni.innerHTML = chronometer.twoDigitsNumber(
    chronometer.getSeconds())[1];
  secDec.innerHTML = chronometer.twoDigitsNumber(
    chronometer.getSeconds())[0];
}

function printMilliseconds() {
  milUni.innerHTML = chronometer.twoDigitsNumber(
    chronometer.getMiliSec())[1];
  milDec.innerHTML = chronometer.twoDigitsNumber(
    chronometer.getMiliSec())[0];
}

function printSplit() {
  const split = document.createElement("li");
  console.log( chronometer.twoDigitsNumber(chronometer.getSeconds()))
  split.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes()) + ":" + chronometer.twoDigitsNumber(chronometer.getSeconds()).slice(0,2) + ":" + chronometer.twoDigitsNumber(chronometer.getMiliSec()).slice(0,2); 
  listSplit.appendChild(split);
}


function clearSplits() {
  listSplit.innerHTML = "";
}

function setStopBtn() {
  // within the start button function 
}

function setSplitBtn() {
  btnRight.innerHTML ="SPLIT"
  btnRight.classList.toggle("reset");
  btnRight.classList.toggle("split");
}

function setStartBtn() {
  if (btnLeft.innerHTML == "START") {
    chronometer.startClick();
    printIntervalID = setInterval(() => {
      printTime();
    }, 10);
    btnLeft.innerHTML = "STOP";
    setSplitBtn();
  } else {
    btnLeft.innerHTML = "START";
    window.clearInterval(printIntervalID);
    chronometer.stopClick();
    setResetBtn();
  }
}

function resetDisplay(){
  clearSplits();
  minUni.innerHTML = 0;
  minDec.innerHTML = 0;
  secUni.innerHTML = 0;
  secDec.innerHTML = 0;
  milUni.innerHTML = 0;
  milDec.innerHTML = 0;
}

function setResetBtn() {
  btnRight.innerHTML ="RESET"
  btnRight.classList.toggle("reset");
  btnRight.classList.toggle("split");

}

// Start/Stop Button
btnLeft.addEventListener("click", function() {
  btnLeft.classList.toggle("start");
  btnLeft.classList.toggle("stop");
  // let printIntervalID;
  setStartBtn();
});

// Reset/Split Button
btnRight.addEventListener("click", function() {
  if (btnRight.innerHTML == "RESET") {
    chronometer.stopClick();
    chronometer.resetClick();
    resetDisplay();  
  } else {
    printSplit()
    
  }
});

