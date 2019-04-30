var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');


function printTime() {
  printSeconds()
  printMinutes()
}

function clearTime() {
  document.getElementById("minUni").innerHTML = "0"
  document.getElementById("minDec").innerHTML = "0"
  document.getElementById("secUni").innerHTML = "0"
  document.getElementById("secDec").innerHTML = "0"
  document.getElementById("milUni").innerHTML = "0"
  document.getElementById("milDec").innerHTML = "0"

}

function printMinutes() {
  let mins = chronometer.getMinutes()
  let twoDigits = chronometer.twoDigitsNumber(mins)
  let units = twoDigits[1]
  let tens = twoDigits[0]
  document.getElementById("minUni").innerHTML = units
  document.getElementById("minDec").innerHTML = tens
}

function printSeconds() {
  let seconds = chronometer.getSeconds()
  let twoDigits = chronometer.twoDigitsNumber(seconds)
  let units = twoDigits[1]
  let tens = twoDigits[0]
  document.getElementById("secUni").innerHTML = units
  document.getElementById("secDec").innerHTML = tens
}

function printMilliseconds() {
  let millSeconds = chronometer.getMillSeconds()
  let twoDigits = chronometer.twoDigitsNumber(millSeconds)
  let units = twoDigits[1]
  let tens = twoDigits[0]
  console.log(twoDigits)
  milUni.innerHTML = units
  milDec.innerHTML = tens
}

function printSplit() {
  let li = document.createElement("li")
  let mins = chronometer.getMinutes()
  let secs = chronometer.getSeconds()
  let mills = chronometer.getMillSeconds()
  let minTwoDigits = chronometer.twoDigitsNumber(mins)
  let secTwoDigits = chronometer.twoDigitsNumber(secs)
  let millsTwoDigits = chronometer.twoDigitsNumber(mills)
  li.innerHTML = `${minTwoDigits}:${secTwoDigits}:${millsTwoDigits}`
  document.getElementById("splits").appendChild(li)
  
}

function clearSplits() {
  var parent = document.getElementById("splits");
  
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
}
}

function setStopBtn() {
  btnLeft.className = "btn stop"
  btnLeft.innerHTML = "STOP"
}

function setSplitBtn() {
  btnRight.className = "btn split"
  btnRight.innerHTML = "SPLIT"
}

function setStartBtn() {
  btnLeft.className = "btn start"
  btnLeft.innerHTML = "START"
}

function setResetBtn() {
  btnRight.className = "btn reset"
  btnRight.innerHTML = "RESET"
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
 
 
  if (btnLeft.className == "btn start") {
    chronometer.startClick()
    printTime()
    setStopBtn()
    setSplitBtn()
 } else if (btnLeft.className == "btn stop"){
    chronometer.stopClick()
    setStartBtn()
    setResetBtn()
 }
});      

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if (btnRight.className == "btn split") {
    printSplit()
  } else if (btnRight.className == "btn reset"){
    chronometer.resetClick()
    clearTime()
    clearSplits()
  }
});
