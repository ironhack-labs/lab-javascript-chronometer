var chronometer = new Chronometer();
var btnLeft = document.getElementById('btnLeft');
var btnRight = document.getElementById('btnRight');
var minDec = document.getElementById('minDec');
var minUni = document.getElementById('minUni');
var secDec = document.getElementById('secDec');
var secUni = document.getElementById('secUni');
var milDec = document.getElementById('milDec');
var milUni = document.getElementById('milUni');


function printTime() {
  // chronometer.startClick
}

function printMinutes() {

}

function printSeconds() {

}

function printMilliseconds() {

}

function printSplit() {

}

function clearSplits() {

}

function setStopBtn() {
  btnLeft.className = "btn stop";
  btnLeft.innerHTML = "STOP";
};

function setSplitBtn() {
  btnRight.className = "btn split";
  btnRight.innerHTML = "SPLIT";
};

function setStartBtn() {
  btnLeft.className = "btn start";
  btnLeft.innerHTML = "START";
};

function setResetBtn() {
  btnRight.className = "btn reset";
  btnRight.innerHTML = "RESET";
};

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  //console.log(btnLeft.className); // className will return "btn start"
  if (btnLeft.className == "btn start") {
    setStopBtn();
    setSplitBtn();
    chronometer.startClick();
  } else if (btnLeft.className == "btn stop") {
    setStartBtn();
    setResetBtn();
    chronometer.stopClick();
  }
  // this.startClick();
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if (btnRight.className == "btn split") {
    // split click
    chronometer.splitClick();
  } else if (btnRight.className == "btn reset") {
    // reset click
    chronometer.resetClick();
    // removing childeren of splits list
    var splits = document.getElementById("splits");
    while (splits.firstChild) {
      splits.removeChild(splits.firstChild);
    }
  }
});
