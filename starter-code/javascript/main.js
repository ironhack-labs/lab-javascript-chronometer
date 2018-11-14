var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');


var splitsCollection = document.getElementById('splits');
var splitsArray = [];
var splitsCounter = 0;

function printTime() {
  printMinutes();
  printSeconds();
  printMilliseconds();
}

function printMinutes() {
  var min = chronometer.twoDigitsNumber(chronometer.setMinutes());
  minUni.innerHTML = min[1];
  minDec.innerHTML = min[0];
}

function printSeconds() {
  var seg = chronometer.twoDigitsNumber(chronometer.setSeconds());
  secUni.innerHTML = seg[1];
  secDec.innerHTML = seg[0];

}

function printMilliseconds() {
  var mili = chronometer.twoDigitsNumber(chronometer.setMilliseconds());
  milUni.innerHTML = mili[1];
  milDec.innerHTML = mili[0];
}

function printSplit() {
  splitsArray.push(chronometer.setTime());
  var timeNode = document.createElement("li");
  var textNode = document.createTextNode(splitsArray[splitsCounter]);
  timeNode.appendChild(textNode);
  splitsCollection.appendChild(timeNode);
  splitsCounter++;
}

function clearSplits() {
  splitsArray = [];  
  splitsCounter = 0;
  splitsCollection.innerHTML = "";
}

function setStopBtn() {
  btnLeft.setAttribute("class", 'btn stop');
  btnLeft.innerHTML = "STOP";
}

function setSplitBtn() {
  btnRight.setAttribute("class", 'btn split');
  btnRight.innerHTML = "SPLIT";
}

function setStartBtn() {
  btnLeft.setAttribute("class", 'btn start');
  btnLeft.innerHTML = "START";
}

function setResetBtn() {
  btnRight.setAttribute("class", 'btn reset');
  btnRight.innerHTML = "RESET";
}
 
btnLeft.addEventListener('click', function () { 
  var status = btnLeft.getAttribute("class");
  if (status === 'btn start') {
    chronometer.startClick(); 
    setStopBtn();
    setSplitBtn();

    interval = setInterval(() => {
      printTime();
    },1); 
  } else {
    chronometer.stopClick();
    setStartBtn();
    setResetBtn();

    clearInterval(interval); 
  }

});
 
btnRight.addEventListener('click', function () {
  var status = btnRight.getAttribute("class");
  if (status === 'btn reset') {
    chronometer.currentTime = 0;
    clearSplits();
    printTime();
  } else {
    printSplit(); 
  }

});