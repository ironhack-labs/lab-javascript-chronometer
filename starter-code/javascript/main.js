var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
var splitList   = document.querySelector('#splits');
var counter;

function printTime() {
  printSeconds(chronometer.twoDigitsNumber(chronometer.setSeconds()));
  printMinutes(chronometer.twoDigitsNumber(chronometer.setMinutes()));
}

function printMinutes(minutes) {
  minDec.innerText = minutes[0];
  minUni.innerText = minutes[1];
}

function printSeconds(seconds) {
  secDec.innerText = seconds[0];
  secUni.innerText = seconds[1];
}

function printMilliseconds() {

}

function printSplit() {
  var time = chronometer.splitClick();
  var li = document.createElement("li");
  li.innerText = time;
  splitList.appendChild(li);
}

function clearSplits() {
  splitList.innerHTML = '';

}

function setStopBtn() {

}

function setSplitBtn() {

}

function setStartBtn() {

}

function setResetBtn() {

}
function reset() {
  chronometer.resetClick();
  secDec.innerText = "0";
  secUni.innerText = "0";
  minDec.innerText = "0";
  minUni.innerText = "0";
}

function startCounter() {
  counter = setInterval(function() {
    printTime();
  }, 1000);
}

function stopCounter() {
  clearInterval(counter);
}

function updateBtnLeft() {
  btnLeft.classList.toggle('start');
  btnLeft.classList.toggle('stop');
  if(btnLeft.innerText === 'START') {
    btnLeft.innerText = 'STOP';
  } else {
    btnLeft.innerText = 'START';
  }  
}
function updateBtnRight() {
  if(btnLeft.className.includes('stop')) {
    btnRight.classList.add('split');
    btnRight.classList.remove('reset');
    btnRight.innerText = 'SPLIT'
  } else {
    btnRight.classList.remove('split');
    btnRight.classList.add('reset');
    btnRight.innerText = 'RESET'
  }
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  if(btnLeft.className.includes("start")) {
    chronometer.startClick();
    startCounter();
  } else if(btnLeft.className.includes("stop")) {
    chronometer.stopClick();
    stopCounter();
  }
  updateBtnLeft();
  updateBtnRight();
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if(btnRight.className.includes('split')){
   printSplit();
  } else {
    reset();
    clearSplits();
  }
  updateBtnRight();
});


