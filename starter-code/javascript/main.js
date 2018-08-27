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
 printMinutes();
 printSeconds();
}

function printMinutes() {
 minDec.innerText = chronometer.minutes[0];
 minUni.innerText = chronometer.minutes[1];
}

function printSeconds() {
  secDec.innerText = chronometer.seconds[0];
  secUni.innerText = chronometer.seconds[1];
}

function printMilliseconds() {

}

function printSplit() {
  return chronometer.minutes + ":" + chronometer.seconds

}

function clearSplits() {
  var allSplits = document.getElementById("splits");
  allSplits.innerHTML = "";

}

function setStopBtn() {
  chronometer.stopClick();
}

function setSplitBtn() {
  var allSplits = document.getElementById("splits");
  var newSplit = document.createElement("li");
  newSplit.innerHTML = printSplit();
  allSplits.appendChild(newSplit);
}

function setStartBtn() {
  chronometer.startClick();
  var printInterval = setInterval(function() {
    printTime();
  }, 1000);
}

function setResetBtn() {
  chronometer.resetClick();
  printTime();
  clearSplits();


}


btnLeft.addEventListener('click', function () {
  if (btnLeft.getAttribute("class") == "btn start") {
    setStartBtn();
    btnLeft.setAttribute("class","btn stop");
    btnLeft.innerText = "STOP";
    btnRight.setAttribute("class", "btn split");
    btnRight.innerText = "SPLIT";
  } else if (btnLeft.getAttribute("class") == "btn stop") {
    setStopBtn();
    btnLeft.setAttribute("class","btn start");
    btnLeft.innerText = "START";
    btnRight.setAttribute("class", "btn reset");
    btnRight.innerText = "RESET"; 
  }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
 if (btnRight.getAttribute("class") == "btn split") {
   setSplitBtn();
 } else {
   setResetBtn();
 }
});
