var chronometer = new Chronometer();
var btnLeft = document.getElementById('btnLeft');
var btnRight = document.getElementById('btnRight');
var minDec = document.getElementById('minDec');
var minUni = document.getElementById('minUni');
var secDec = document.getElementById('secDec');
var secUni = document.getElementById('secUni');
var milDec = document.getElementById('milDec');
var milUni = document.getElementById('milUni');
var splitList = document.getElementById("splits");
var refresh;

function printTime() {
  printMinutes();
  printSeconds();
  printMilliseconds();
}

function printMinutes() {
  minDec.textContent = chronometer.setTime().substring(0, 1);
  minUni.textContent = chronometer.setTime().substring(1, 2);
}

function printSeconds() {
  secDec.textContent = chronometer.setTime().substring(3,4);
  secUni.textContent = chronometer.setTime().substring(4,5);
}

function printMilliseconds() {
 milDec.textContent = (chronometer.setTime()).substring(6,7);
 milUni.textContent = (chronometer.setTime()).substring(7,8);
}

function printSplit() {
}

function clearSplits() {
    while (splitList.hasChildNodes()){
      splitList.removeChild(splitList.firstChild);
    }
}

function setStopBtn() {
  chronometer.stopClick();
}

function setSplitBtn() {
   var splitItem;
   splitItem = document.createElement('li');
   splitItem.innerHTML = chronometer.setTime();
   splitList.appendChild(splitItem);
}

function setStartBtn() {
  chronometer.startClick();
  refresh = window.setInterval(function () {
    printTime();
  }, 10);
}

function setResetBtn() {
  chronometer.resetClick();
  clearInterval(refresh);
  clearSplits();
  printTime();
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  if (btnLeft.className === 'btn start') {
    setStartBtn();
    btnRight.className = 'btn split';
    btnRight.textContent = 'SPLIT';
    btnLeft.className = 'btn stop';
    btnLeft.textContent = 'STOP';
  } else {
    setStopBtn();
    btnLeft.className = 'btn start';
    btnLeft.textContent = 'START';
    btnRight.className = 'btn reset';
    btnRight.textContent = 'RESET';
  }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if (btnRight.className === 'btn reset') {
    setResetBtn();
  } else {
    setSplitBtn();
  }
});

