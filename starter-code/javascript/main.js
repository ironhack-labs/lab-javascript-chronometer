var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
var splitOL     = document.getElementById("splits");
var dInterval=0;


function printTime() {
  var time=chronometer.setTime();
  //console.log(time);
  minDec.innerText=time[0];
  minUni.innerText=time[1];
  secDec.innerText=time[3];
  secUni.innerText=time[4];
  milDec.innerText=time[6];
  milUni.innerHTML=time[7];
  // secDec.innerText=time[1];
}

function printMinutes() {

}

function printSeconds() {

}

function printMilliseconds() {

}

function printSplit() {
  var splitLI = document.createElement("li");
  splitLI.innerText=chronometer.setTime();
  splitOL.appendChild(splitLI);
}

function clearSplits() {
  while (splitOL.children.length>0) {
    splitOL.removeChild(splitOL.firstChild);
  }
}

function setStopBtn() {
  btnLeft.innerText="STOP";
  btnLeft.className="btn stop";
}

function setSplitBtn() {
  btnRight.innerText="SPLIT";
  btnRight.className="btn split";
}

function setStartBtn() {
  btnLeft.innerText="START";
  btnLeft.className="btn start";
}

function setResetBtn() {
  btnRight.innerText="RESET";
  btnRight.className="btn reset";
}

function startDisplay() {
  dInterval = setInterval(function(){
    printTime();
  },50);
}

function haltDisplay() {
  clearInterval(dInterval);
  dInterval=0;
}

/************************************************
 * PLEASE NOTE:
 * I decided to have a bit of fun by 
 * defining a display interval different 
 * from the running clock interval b/c it looks 
 * nicer.
 * I also made the watch behave more like a 
 * classic stopwatch, where the display 
 * would halt for the Split / lap time
 * and would continue w/ the current running
 * time when the SPLIT button is pressed once
 * more.
 * 
 * So these two things are intentional. :)
 * 
 * The easy way would of course have been to
 * just call chronometer.setTime() when the 
 * split button is pressed and append its 
 * return value to the splits list without
 * halting the display.
 * 
 */

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  if (btnLeft.innerText==="START") {
    setStopBtn();
    setSplitBtn();
    chronometer.startClick();
    startDisplay();
  } else {
    setStartBtn();
    setResetBtn();
    chronometer.stopClick();
    haltDisplay();
    printTime();
  }

});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if (btnLeft.innerText==="START") {
    chronometer.resetClick();
    clearSplits();
    printTime();
  } else {
    if (dInterval===0) {
      startDisplay();
    } else {
      printSplit();
      haltDisplay();
    }
  }
});
