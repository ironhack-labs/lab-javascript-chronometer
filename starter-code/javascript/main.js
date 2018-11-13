var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
var splits      = document.getElementById('splits');


function printTime() {
  return chronometer.splitClick();
}

function printMinutes() {
  if (chronometer.setMinutes() < 10){
    minUni.innerHTML = chronometer.setMinutes();
  } else {
    minUni.innerHTML = "";
    minDec.innerHTML = chronometer.setMinutes();
  }
}

function printSeconds() {
  //secDec.innerHTML = chronometer.setSeconds();
  if (chronometer.setSeconds() < 10) {
    secDec.innerHTML = "0";
    secUni.innerHTML = chronometer.setSeconds();
  } else {
    secUni.innerHTML = "";
    secDec.innerHTML = chronometer.setSeconds();
  }
}

function printMilliseconds() {
  if (chronometer.setMilli() < 10) {
    milDec.innerHTML = "0";
    milUni.innerHTML = chronometer.milliseconds;
  } else {
    milDec.innerHTML = chronometer.milliseconds;
    milUni.innerHTML = "";
  }
}

function printSplit() {
  var node = document.createElement("li");
  var textnode = document.createTextNode(printTime());
  node.appendChild(textnode);
  splits.appendChild(node);
}

function clearSplits() {
  while(splits.firstChild){
     splits.removeChild(splits.firstChild);
   }
}

function setStopBtn() {
  btnLeft.innerHTML = "START"
  btnLeft.classList.remove("stop");
  btnLeft.classList.add("start");
}

function setSplitBtn() {
  btnRight.innerHTML = "SPLIT";
  btnRight.classList.remove("reset");
  btnRight.classList.add("split");
}

function setStartBtn() {
  btnLeft.innerHTML = "STOP"
  btnLeft.classList.remove("start");
  btnLeft.classList.add("stop");
}

function setResetBtn() {
  btnRight.innerHTML = "RESET";
  btnRight.classList.remove("split");
  btnRight.classList.add("reset");
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  if (btnLeft.innerHTML == "START") {
    setStartBtn()
    chronometer.startClick()
    setSplitBtn()
    setInterval(() => {
      printMinutes();
      printSeconds();
      printMilliseconds();
    }, 1000);
  } else {
    setStopBtn()
    chronometer.stopClick()
    setResetBtn()
  }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if (btnRight.innerHTML == "RESET") {
    chronometer.resetClick();
    clearSplits();
  } else {
    printSplit();
  }
});
