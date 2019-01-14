var chronometer = new Chronometer();
var btnLeft = document.getElementById('btnLeft');
var btnRight = document.getElementById('btnRight');
var minDec = document.getElementById('minDec');
var minUni = document.getElementById('minUni');
var secDec = document.getElementById('secDec');
var secUni = document.getElementById('secUni');
var milDec = document.getElementById('milDec');
var milUni = document.getElementById('milUni');

var startIntervalId = 0;
var milliIntervalId = 0;

/*********************************
 * Start/Stop Button
 *********************************/
btnLeft.addEventListener('click', function() {
  // Check if it is a start or stop button by checking the classname of the button,

  if (btnLeft.classList.contains('start')) {
    setStopBtn();
    setSplitBtn();
    // start and update the clock every second
    chronometer.startClick();
    startIntervalId = setInterval(function() {
      printTime();
    }, 1000);
    // update millisecond
    milliIntervalId = setInterval(function() {
      printMilliseconds();
    }, 10);
  } else if (btnLeft.classList.contains('stop')) {
    setStartBtn();
    setResetBtn();
    // stop clock
    chronometer.stopClick();
    clearInterval(startIntervalId);
    clearInterval(milliIntervalId);
  }
});

/*********************************
 * Reset/Split Button
 *********************************/
btnRight.addEventListener('click', function() {
  if (btnRight.classList.contains('reset')) {
    // reset clock
    chronometer.resetClick();
    printTime();
    printMilliseconds();
    clearSplits();
  } else if (btnRight.classList.contains('split')) {
    // print split
    printSplit();
  }
});

/*********************************
 * Print Time
 *********************************/
function printMinutes() {
  var minutes = chronometer.setTime()[0];
  minDec.innerHTML = minutes[0];
  minUni.innerHTML = minutes[1];
}

function printSeconds() {
  var seconds = chronometer.setTime()[1];
  secDec.innerHTML = seconds[0];
  secUni.innerHTML = seconds[1];
}

function printMilliseconds() {
  var milliseconds = chronometer.twoDigitsNumber(chronometer.milliSeconds);
  milDec.innerHTML = milliseconds[0];
  milUni.innerHTML = milliseconds[1];
}

function printTime() {
  printMinutes();
  printSeconds();
}

/*********************************
 * Print and Clear Split
 *********************************/
function printSplit() {
  var time =
    chronometer.setTime().join(':') +
    ':' +
    chronometer.twoDigitsNumber(chronometer.milliSeconds);
  var ol = document.getElementById('splits');

  var li = document.createElement('li');
  li.innerHTML = time;

  ol.appendChild(li);
}

function clearSplits() {
  var liArr = [...document.querySelectorAll('li')];
  var ol = document.getElementById('splits');

  liArr.forEach(function(li) {
    ol.removeChild(li);
  });
}

/*********************************
 * Set Button
 *********************************/
// set the button to start, stop, reset or split
function setStopBtn() {
  btnLeft.textContent = 'STOP';
  btnLeft.className = 'btn stop';
}

function setSplitBtn() {
  btnRight.textContent = 'SPLIT';
  btnRight.className = 'btn split';
}

function setStartBtn() {
  btnLeft.textContent = 'START';
  btnLeft.className = 'btn start';
}

function setResetBtn() {
  btnRight.textContent = 'RESET';
  btnRight.className = 'btn reset';
}
