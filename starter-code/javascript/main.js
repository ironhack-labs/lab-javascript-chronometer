var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
var splitList = document.getElementById("splits");


function printTime() {
  var seconds = printSeconds();
  var minutes = printMinutes();
  secUni.innerText = seconds[1];
  secDec.innerText = seconds[0];
  minUni.innerText = minutes[1];
  minDec.innerText = minutes[0];
}

function printMinutes() {
  return  chronometer.twoDigitsNumber( chronometer.setMinutes() );
}

function printSeconds() {
  return chronometer.twoDigitsNumber( chronometer.setSeconds() );
}

function printMilliseconds() {

}

function printSplit() {
  var li = document.createElement("li");
  var split = printMinutes() + ":" + printSeconds();
  li.innerText = split;
  splitList.appendChild(li);
}

function clearSplits() {
  splitList.innerHTML = "";
}

function setStopBtn() {
  btnLeft.className = "btn stop";
  btnLeft.innerText = "STOP";
}

function setSplitBtn() {
  btnRight.className = "btn split";
  btnRight.innerText = "SPLIT";
}

function setStartBtn() {
  btnLeft.className = "btn start";
  btnLeft.innerText = "START";
}

function setResetBtn() {
  btnRight.className = "btn reset";
  btnRight.innerText = "RESET";
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  // if the button calss is set to `start`
  if ( btnLeft.className.includes("start") ) {
    // the chronometer starts
    chronometer.startClick();
    // 
    var displayTime = setInterval( printTime, 1000 );
    // change buttons property
    setStopBtn();
    setSplitBtn();
  } // if the button class is set to `stop`
  else if ( btnLeft.className.includes("stop") )  {
    // the chronometer stops
    chronometer.stopClick();
    //
    clearInterval(displayTime);
    // change buttons property 
    setStartBtn();
    setResetBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  // if button class is set to `reset`
  if ( btnRight.className.includes("reset") ) {
    // call resetClick() on chronometer
    chronometer.resetClick();
    // reset the display
    printTime();
    clearSplits();
  } else if ( btnRight.className.includes("split") ) {
    printSplit();
  }
});