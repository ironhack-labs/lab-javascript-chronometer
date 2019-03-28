var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');

var splitsOrderedList  = document.getElementById('splits');

var interv1 = null;
var interv2 = null;

function printTime() {

}

function printMinutes() {
  var getMinDec = function () {
    minUni.innerHTML = (chronometer.twoDigitsNumber(chronometer.getMinutes()).charAt(1));
  };

  var getMinUni = function () {
    minDec.innerHTML = (chronometer.twoDigitsNumber(chronometer.getMinutes()).charAt(0));
  }

  interv1 = setInterval(function () {
    getMinDec();
    getMinUni();
}, 1000);
}

function printSeconds() {

  var getSecDec = function () {
    secUni.innerHTML = (chronometer.twoDigitsNumber(chronometer.getSeconds()).charAt(1));
  };

  var getSecUni = function () {
    secDec.innerHTML = (chronometer.twoDigitsNumber(chronometer.getSeconds()).charAt(0));
  }

  interv2 = setInterval(function () {
    getSecDec();
    getSecUni();
}, 1000);
}

function printMilliseconds() {

}

function printSplit() {
  var splitsLi = document.createElement("li");

  var splitsLiContent = document.createTextNode(chronometer.twoDigitsNumber(chronometer.getMinutes())+":"+chronometer.twoDigitsNumber(chronometer.getSeconds()));

  splitsLi.appendChild(splitsLiContent);
  splitsOrderedList.appendChild(splitsLi);
}

function clearSplits() {
  splitsOrderedList.innerHTML = "";
}

function resetClick() {
  secUni.innerHTML = 0;
  secDec.innerHTML = 0;
  minUni.innerHTML = 0;
  minDec.innerHTML = 0;
}

function setStopBtn() {
  btnLeft.className = "btn stop";
  btnLeft.innerHTML = "STOP"
}

function setSplitBtn() {
  btnRight.className = "btn split";
  btnRight.innerHTML = "SPLIT"
}

function setStartBtn() {
  btnLeft.className = "btn start";
  btnLeft.innerHTML = "START"
}

function setResetBtn() {
  btnRight.className = "btn reset";
  btnRight.innerHTML = "RESET"
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  if (btnLeft.className === "btn start") {
    setStopBtn();
    printSeconds();
    printMinutes();
    setSplitBtn();
    chronometer.startClick();
  } else {setStartBtn();
    chronometer.stopClick();
    setResetBtn();
  };
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if (btnLeft.className === "btn stop") {
    setSplitBtn();
    printSplit();
  } else {setResetBtn();
    clearSplits();
    resetClick();
  };
});