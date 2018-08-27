var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');


function printTime(minutes, seconds) {
  minDec.innerHTML = minutes[0];
  minUni.innerHTML = minutes[1];
  secDec.innerHTML = seconds[0];
  secUni.innerHTML = seconds[1];
}

// function printMilliseconds() {

// }

function printSplit() {
  var split = document.createElement("LI");
  split.innerHTML = chronometer.minutes + ":" + chronometer.seconds;
  var ol = document.getElementById("splits");
  ol.appendChild(split);
}

function clearSplits() {
  var deadSplit = document.getElementsByTagName("LI");
  for(var i = deadSplit.length - 1; i >= 0; i--){
    deadSplit[i].remove();
  }

}


// Start/Stop Button
btnLeft.addEventListener('click', function () {
  if (btnLeft.classList.contains("start")){
    btnLeft.classList.remove("start");
    btnLeft.classList.add("stop");
    btnLeft.innerHTML = "STOP";
    chronometer.startClick();
    btnRight.classList.remove("reset");
    btnRight.classList.add("split");
    btnRight.innerHTML = "SPLIT";
    
  } else if (btnLeft.classList.contains("stop")){
    btnLeft.classList.remove("stop");
    btnLeft.classList.add("start");
    btnLeft.innerHTML = "START";
    chronometer.stopClick();
    btnRight.classList.remove("split");
    btnRight.classList.add("reset");
    btnRight.innerHTML = "RESET";
  }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if (btnRight.classList.contains("split")){
    printSplit();
  } else {
    chronometer.resetClick();
    minDec.innerHTML = "0";
    minUni.innerHTML = "0";
    secDec.innerHTML = "0";
    secUni.innerHTML = "0";
    clearSplits();
  }
});
