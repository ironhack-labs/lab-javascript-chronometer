var chronometer = new Chronometer();
var btnLeft = document.getElementById('btnLeft');
var btnRight = document.getElementById('btnRight');
var minDec = document.getElementById('minDec');
var minUni = document.getElementById('minUni');
var secDec = document.getElementById('secDec');
var secUni = document.getElementById('secUni');
var milDec = document.getElementById('milDec');
var milUni = document.getElementById('milUni');
var split = document.getElementById('splits');




function printTime(minutes, seconds) {

  minutes = printMinutes();
  seconds = printSeconds();
  minDec.innerHTML = minutes.charAt(0).toString();
  minUni.innerHTML = minutes.charAt(1).toString();
  secDec.innerHTML = seconds.charAt(0).toString();
  secUni.innerHTML = seconds.charAt(1).toString();

}

function printMinutes() {
  return chronometer.twoDigitsNumber(chronometer.getMinutes())
}

function printSeconds() {
  return chronometer.twoDigitsNumber(chronometer.getSeconds())
}

function printMilliseconds() {

}

function printSplit(minutes, seconds) {
  minutes = printMinutes();
  seconds = printSeconds();
  let timestamp = minutes + ":" + seconds;

  let node = document.createElement("LI");
  node.innerHTML = timestamp;
  splits.appendChild(node);



}

function clearSplits() {

}

function setStopBtn() {

}

function setSplitBtn() {

}

function setStartBtn() {

}

function setResetBtn() {

}

let isStopped = true;

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  if (isStopped) {
    isStopped = !isStopped
    btnLeft.classList.replace(`start`, `stop`);
    btnLeft.innerHTML = "STOP";
    btnRight.classList.replace(`reset`, `split`);
    btnRight.innerHTML = "SPLIT";
    chronometer.startClick();
    setInterval(() => {
      printTime(chronometer.getMinutes(), chronometer.getSeconds());
    }, 1000);

  } else {
    isStopped = !isStopped
    btnLeft.classList.replace(`stop`, `start`);
    btnLeft.innerHTML = "START";
    btnRight.classList.replace(`split`, `reset`);
    btnRight.innerHTML = "RESET";
    chronometer.stopClick();
  }

});

// Reset/Split Button
btnRight.addEventListener('click', function () {

  if (!isStopped) {

    printSplit();
  } else {
    chronometer.resetClick();
    split.innerHTML = "";
  }

});