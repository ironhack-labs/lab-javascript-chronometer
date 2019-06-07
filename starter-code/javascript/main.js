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
  setInterval(() => {
    printSeconds();
    printMinutes();
  }, 1000);

}


function printMinutes() {
  minDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes());
  minUni.innerHTML = "";



}

function printSeconds() {
  secDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds());
  secUni.innerHTML = "";



}

function printMilliseconds() {

}

function printSplit() {
  var li = document.createElement("li");
  document.getElementById("splits").appendChild(li);
  li.innerHTML = chronometer.splitClick();


}

function clearSplits() {
  chronometer.resetClick();
  document.getElementById("splits").innerHTML = "";

}

function setStopBtn() {
  btnLeft.classList.replace("stop", "start");
  btnLeft.textContent = "START"

}

function setSplitBtn() {
  btnRight.classList.replace("reset", "split");
  btnRight.textContent = "SPLIT"
}

function setStartBtn() {
  btnLeft.classList.replace("start", "stop");
  btnLeft.textContent = "STOP"
}


function setResetBtn() {
  btnRight.classList.replace("split", "reset");
  btnRight.textContent = "RESET"

}



// Start/Stop Button
btnLeft.addEventListener('click', function () {
  if (btnLeft.classList.contains("start")) {
    setStartBtn();
    setSplitBtn();
    chronometer.startClick();
    printTime();

  } else if (btnLeft.classList.contains("stop")) {
    setStopBtn();
    setResetBtn();
    chronometer.stopClick();
  }
});



// Reset/Split Button
btnRight.addEventListener('click', function () {
  if (btnRight.classList.contains("split")) {
    setSplitBtn();
    printSplit();
  } else if (btnRight.classList.contains("reset")) {
    clearSplits();
  }


});