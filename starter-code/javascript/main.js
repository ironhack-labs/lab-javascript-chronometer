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
    btnLeft.innerHTML="START";
    btnLeft.setAttribute("class","btn start");
    btnRight.innerHTML = "RESET";
    btnRight.setAttribute("class","btn reset");
    chronometer.stopClick();
  } else {
    btnLeft.innerHTML="STOP";
    btnLeft.setAttribute("class","btn stop");
    btnRight.innerHTML = "SPLIT";
    btnRight.setAttribute("class","btn split");
    chronometer.startClick();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if (btnRight.getAttribute("class") === "btn reset"){
    chronometer.resetClick();
    clearSplits();
  } else {
    printSplit(`${chronometer.timeFormat[0]}:${chronometer.timeFormat[1]}`);
  }
});

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

// function printMilliseconds() {

// }

function printTime(arrayTime) {
  printMinutes(arrayTime);
  printSeconds(arrayTime);
  // printMilliseconds(arrayTime);
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

function setStopBtn() {

}

function setSplitBtn() {

}

function setStartBtn() {

}

function setResetBtn() {

}