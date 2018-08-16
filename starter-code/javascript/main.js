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
  var intervalId = setInterval(function(){
    printMinutes();  
    printSeconds();
    // printMilliseconds();
  },10)
}

function printMinutes() {
  var minutesStr = chronometer.twoDigitsNumber(chronometer.setMinutes().toString());
  minDec.innerHTML = minutesStr[0]; // changes text for index 0 of minutes
  minUni.innerHTML = minutesStr[1]; // changes text for index 0 of minutes
}

function printSeconds() {
  var secondsStr = chronometer.twoDigitsNumber(chronometer.setSeconds().toString());
  secDec.innerHTML = secondsStr[0];  // changes text for index 0 of seconds
  secUni.innerHTML = secondsStr[1]; // changes text for index 1 of seconds
}

// function printMilliseconds() {
//   var millisecondsStr = chronometer.twoDigitsNumber(chronometer.setMilliseconds().toString());
//   milDec.innerHTML = millisecondsStr[0];  // changes text for index 0 of seconds
//   milUni.innerHTML = millisecondsStr[1]; // changes text for index 1 of seconds
// }

function printSplit() {

}

function clearSplits() {

}

function setStopBtn() {

}

function setSplitBtn() {
  var splits = document.getElementById('splits')
  var listElem = document.createElement('li');

  var minutesStr = chronometer.twoDigitsNumber(chronometer.setMinutes().toString());
  var secondsStr = chronometer.twoDigitsNumber(chronometer.setSeconds().toString());
  // var milisStr = chronometer.twoDigitsNumber(chronometer.setMilliseconds().toString());

  var time = minutesStr + ':' + secondsStr + ':'; // + milisStr;
  var textNode = document.createTextNode(time);
  listElem.appendChild(textNode)
  splits.appendChild(listElem);
}


function setStartBtn() {
}

function setResetBtn() {
  var splits = document.getElementById('splits')
 
  while (splits.hasChildNodes()) {
    splits.removeChild(splits.firstChild);
  }


  minDec.innerHTML = 0;
  minUni.innerHTML = 0;
  secDec.innerHTML = 0;
  secUni.innerHTML = 0;
  milDec.innerHTML = 0;
  milUni.innerHTML = 0;
  chronometer.stopClick();
  chronometer.resetClick();
  
}


// Start/Stop Button
btnLeft.addEventListener('click', function () {
  if (btnLeft.className.includes("start")){
    btnLeft.innerHTML = "STOP";
    btnLeft.className = "btn stop";

    btnRight.innerHTML = "SPLIT";
    btnRight.className = "btn split";
    
    chronometer.startClick();
    printTime();
  }
else{
    btnRight.innerHTML = "RESET";
    btnRight.className = "btn reset"

    btnLeft.innerHTML = "START";
    btnLeft.className = "btn start"
    chronometer.stopClick();

}
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if (btnRight.className.includes('split')) {

    setSplitBtn();
    
  } else {   // if reset button is clicked 
    setResetBtn()
  }
});