// Tomasz Walasek
// Novermber 2019

// Note: 
// In the bonus part the IronHack instructions say about 
// milliseconds. But, the HTML clock contains only two span 
// tags for the millisecond digits: milDec and milUni. 
// Therefore, in my design I chose my clock to tick every 
// 10 milliseconds (i.e. 1/100 of a second). 
// That's OK, because ticking every millisecond would be pointless
//  - even in athletics the smalles unit of time is 1/100 second. 
// For eample, the current 100 m men's world record is 9.58 second.

var chronometer = new Chronometer();
var printIntervalId = 0;
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
var splitList   = document.getElementById('splits');

function printTime() {
  printIntervalId = setInterval(function () {
    printMinutes();
    printSeconds();
    printMilliseconds();
  }, 10);
}

function printMinutes() {
  let twoDigits = chronometer.getMinutes();
  minDec.innerHTML = twoDigits.charAt(0);  
  minUni.innerHTML = twoDigits.charAt(1);
}

function printSeconds() {
  let twoDigits = chronometer.getSeconds();
  secDec.innerHTML = twoDigits.charAt(0);
  secUni.innerHTML = twoDigits.charAt(1);
}

function printMilliseconds() {
  let twoDigits = chronometer.getMilliseconds();
  milDec.innerHTML = twoDigits.charAt(0);
  milUni.innerHTML = twoDigits.charAt(1);
}

function printSplit() {
  let node = document.createElement("li");
  node.innerHTML = 
    chronometer.getMinutes() 
    + ":" 
    + chronometer.getSeconds()
    + ":" 
    + chronometer.getMilliseconds();
  splitList.appendChild(node);
}

function clearSplits() {
  while (splitList.hasChildNodes()) {
    splitList.removeChild(splitList.childNodes[0]);
  }
}

function setStopBtn() {
  btnLeft.className = "btn stop";
  btnLeft.innerHTML = "STOP";
}

function setSplitBtn() {
  btnRight.className = "btn split";
  btnRight.innerHTML = "SPLIT";
}

function setStartBtn() {
  btnLeft.className = "btn start";
  btnLeft.innerHTML = "START";
}

function setResetBtn() {
  btnRight.className = "btn reset";
  btnRight.innerHTML = "RESET";
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  if (btnLeft.className.includes("btn start")) {
    setStopBtn();
    setSplitBtn();
    chronometer.startClick();
    printTime();
  }
  else {
    setStartBtn();
    setResetBtn();
    chronometer.stopClick();
    clearInterval(printIntervalId);
  }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if (btnRight.className.includes("btn split"))
    printSplit();
  else {
    chronometer.stopClick();
    chronometer.resetClick();
    minDec.innerHTML = 0;  
    minUni.innerHTML = 0; 
    secDec.innerHTML = 0;
    secUni.innerHTML = 0;
    milDec.innerHTML = 0;
    milUni.innerHTML = 0;
    clearSplits(); 
  }
});
