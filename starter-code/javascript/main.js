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
  //var time = chronometer.setTime(); //"00:05"
  printMinutes();
  printSeconds();
  printMilliseconds();
}

function printMinutes() {
  var minutes = chronometer.twoDigitsNumber(chronometer.setMinutes()); //"09"
  minUni.innerHTML = minutes[1];
  minDec.innerHTML = minutes[0];

  //Display en html
}

function printSeconds() {
  var seconds = chronometer.twoDigitsNumber(chronometer.setSeconds()); //"25"
  //Display en html
  secUni.innerHTML = seconds[1];
  secDec.innerHTML = seconds[0];

}

function printMilliseconds() {
  var milliseconds = chronometer.twoDigitsNumber(chronometer.setMilliseconds());
  milUni.innerHTML = milliseconds[1];
  milDec.innerHTML = milliseconds[0];
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
  splitsArray = []; //Reset control variables
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

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  //insertar que cuando le des click aparezca start en verde, y viceversa stop rojo
  var status = btnLeft.getAttribute("class");
  if (status === 'btn start') {
    chronometer.startClick(); 
    setStopBtn();
    setSplitBtn();

    interval = setInterval(() => {
      printTime();
    },1);
    // cambir  STOP, cambiar la clase y color
  } else {
    chronometer.stopClick();
    setStartBtn();
    setResetBtn();

    clearInterval(interval);
   // cambiar a START, etc
  }

});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  var status = btnRight.getAttribute("class");
  if (status === 'btn reset') {
    chronometer.currentTime = 0;
    clearSplits();
    printTime();
  } else {
    printSplit();
    //Split 
  }

});

