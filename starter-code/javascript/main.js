var chronometer = new Chronometer();
var btnLeft = document.getElementById('btnLeft');
var btnRight = document.getElementById('btnRight');
var minDec = document.getElementById('minDec');
var minUni = document.getElementById('minUni');
var secDec = document.getElementById('secDec');
var secUni = document.getElementById('secUni');
var milDec = document.getElementById('milDec');
var milUni = document.getElementById('milUni');
let miliseconds = 0;


function printTime() {
  printMilliseconds();
  printSeconds();
  printMinutes();
}

function printMinutes() {
  minDec.innerText = chronometer.twoDigitsNumber(chronometer.getMinutes()).slice(0, 1);
  minUni.innerText = chronometer.twoDigitsNumber(chronometer.getMinutes()).slice(1);
}

function printSeconds() {
  secDec.innerText = chronometer.twoDigitsNumber(chronometer.getSeconds()).slice(0, 1);
  secUni.innerText = chronometer.twoDigitsNumber(chronometer.getSeconds()).slice(1);
}

function printMilliseconds() {
  milDec.innerText = chronometer.twoDigitsNumber(chronometer.currentTime).slice(-2, -1);
  milUni.innerText = chronometer.twoDigitsNumber(chronometer.currentTime).slice(-1);
}

function printSplit() {
  text = `${minDec.innerText}${minUni.innerText}:${secDec.innerText}${secUni.innerText}:${milDec.innerText}${milUni.innerText}`;
  var splits = document.getElementById("splits");
  splits.innerHTML = splits.innerHTML + `<li class="split">${text}</li>`;
}

function clearSplits() {
  document.getElementById("splits").innerHTML = "";
}

function setStopBtn() {
  btnLeft.setAttribute("class", "btn stop");
  btnLeft.innerText = "STOP";
}

function setSplitBtn() {
  btnRight.setAttribute("class", "btn split");
  btnRight.innerText = "SPLIT";
}

function setStartBtn() {
  btnLeft.setAttribute("class", "btn start");
  btnLeft.innerText = "START";
}

function setResetBtn() {
  btnRight.setAttribute("class", "btn reset");
  btnRight.innerText = "RESET";
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  if (btnLeft.className === "btn start") {
    btnLeft.onclick = function () {
      chronometer.startClick();
      setStopBtn();
      setSplitBtn();
    };
  } else {
    btnLeft.onclick = function () {
      chronometer.stopClick();
      setResetBtn();
      setStartBtn();
    };
  }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if (btnRight.className === "btn reset") {
    btnRight.onclick = function () {
      chronometer.resetClick();
      setStartBtn();
      clearSplits();
      printTime();
    };
  } else {
    btnRight.onclick = function () {
      chronometer.splitClick();
      printSplit();
    };
  }
});