var chronometer = new Chronometer();

var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
var mySplits    = document.getElementById("splits");


// Start/Stop Button

btnLeft.addEventListener('click', function () {
  if (btnLeft.getAttribute("class") === "btn stop"){
    setStartBtn();
  } else {
    setStopBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if (btnRight.getAttribute("class") === "btn reset"){
    setResetBtn();
  } else {
    setSplitBtn();
  }
});

// Start/Stop Button functions

function setStartBtn() {
  btnLeft.innerHTML="START";
  btnLeft.setAttribute("class","btn start");
  btnRight.innerHTML = "RESET";
  btnRight.setAttribute("class","btn reset");
  chronometer.stopClick();
}

function setStopBtn() {
  btnLeft.innerHTML="STOP";
  btnLeft.setAttribute("class","btn stop");
  btnRight.innerHTML = "SPLIT";
  btnRight.setAttribute("class","btn split");
  chronometer.startClick();
}

// Split/Reset Button functions

function setSplitBtn() {
  printSplit(`${chronometer.timeFormat[0]}:${chronometer.timeFormat[1]}:${chronometer.timeFormat[2]}`);
}

function setResetBtn() {
  chronometer.resetClick();
  clearSplits();
}

// DOM functions

function printMinutes(arrayTime) {
  let minutes = arrayTime[0];
  minDec.innerHTML = minutes.split('')[0];
  minUni.innerHTML = minutes.split('')[1];
}

function printSeconds(arrayTime) {
  let seconds = arrayTime[1];
  secDec.innerHTML = seconds.split('')[0];
  secUni.innerHTML = seconds.split('')[1];
}

function printMilliseconds(arrayTime) {
  let milliseconds = arrayTime[2];
  milDec.innerHTML = milliseconds.split('')[0];
  milUni.innerHTML = milliseconds.split('')[1];
}

function printTime(arrayTime) {
  printMinutes(arrayTime);
  printSeconds(arrayTime);
  printMilliseconds(arrayTime);
}

function printSplit(string) {
  let myNewSplit = document.createElement("li");
  myNewSplit.innerHTML = string;
  mySplits.appendChild(myNewSplit);
}

function clearSplits() {
  for (let i=mySplits.children.length-1; i>=0; i--) {
    mySplits.removeChild(mySplits.children[i]);
  }
}