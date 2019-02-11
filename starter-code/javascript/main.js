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
  printSeconds();
  printMinutes();
  printMilliseconds();

  
}

function printMinutes() {
  const minutes = chronometer.setMinutes();
  const stringMinutes = chronometer.twoDigitsNumber(minutes);

  minDec.innerText = stringMinutes[0];
  minUni.innerText = stringMinutes[1];

}

function printSeconds() {
  const seconds = chronometer.setSeconds();
  const stringSeconds = chronometer.twoDigitsNumber(seconds);

  secDec.innerText = stringSeconds[0];
  secUni.innerText = stringSeconds[1];

}

function printMilliseconds() {
  const milliseconds = chronometer.setMilliseconds();
  const stringMilliseconds = chronometer.twoDigitsNumber(milliseconds);

  milDec.innerText = stringMilliseconds[0];
  milUni.innerText = stringMilliseconds[1];
}

function printSplit() {
  let splits = document.getElementById('splits');
  let split = document.createElement('li');
  split.className = "splitNumber";

  split.innerText = minDec.innerText + minUni.innerText + " : " + secDec.innerText + secUni.innerText + " : " + milDec.innerText + milUni.innerText;
  splits.appendChild(split);
}

function clearSplits() {
  let splits = document.getElementById('splits');

  while (splits.hasChildNodes()) {   
    splits.removeChild(splits.firstChild);
  }

  minDec.innerText = "0";
  minUni.innerText = "0";
  secDec.innerText = "0";
  secUni.innerText = "0";
  milDec.innerText = "0";
  milUni.innerText = "0";

  chronometer.currentTime = 0;

}

function setStopBtn() {
  btnLeft.innerHTML = "STOP";
  btnLeft.className = "btn stop";
}

function setSplitBtn() {
  btnRight.innerHTML = "SPLIT";
  btnRight.className = "btn split";
}

function setStartBtn() {
  btnLeft.innerHTML = "START";
  btnLeft.className ="btn start";
}

function setResetBtn() {
  btnRight.innerHTML = "RESET";
  btnRight.className = "btn reset";
}


// Start/Stop Button
btnLeft.addEventListener('click', function () {
  if (btnLeft.innerText === "START"){
    setStopBtn();
    setSplitBtn();
    chronometer.startClick();
    setInterval(printTime, 1);
  }else if (btnLeft.innerText === "STOP"){
    setStartBtn();
    setResetBtn();
    chronometer.stopClick();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if (btnRight.innerText === "SPLIT"){
    printSplit();
  } else if (btnRight.innerText === "RESET"){
    clearSplits();
  }
});



