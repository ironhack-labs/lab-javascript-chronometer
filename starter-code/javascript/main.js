var chronometer = new Chronometer();
var btnLeft = document.getElementById('btnLeft');
var btnRight = document.getElementById('btnRight');
var minDec = document.getElementById('minDec');
var minUni = document.getElementById('minUni');
var secDec = document.getElementById('secDec');
var secUni = document.getElementById('secUni');
var milDec = document.getElementById('milDec');
var milUni = document.getElementById('milUni');
var splits = document.getElementById('splits');

function printTime() {
  setInterval(printSeconds, 1000);
  setInterval(printMinutes, 60000);
}

function printMinutes() {
  if (chronometer.minutes < 10) {
    minUni.innerHTML = chronometer.minutes
  }
  else {
    minUni.innerHTML = ""
    minDec.innerHTML = chronometer.minutes
  }
}

function printSeconds() {
  if (chronometer.seconds < 10) {
    secUni.innerHTML = chronometer.seconds
  }
  else {
    secUni.innerHTML = ""
    secDec.innerHTML = chronometer.seconds
  }
}


function printMilliseconds() {

}


function clearSplits() {

}


function setSplitBtn() {
  splits.insertAdjacentHTML("beforeend", '<li>' + minDec.innerHTML + minUni.innerHTML + ':' + secDec.innerHTML + secUni.innerHTML + '</li>')

}


function setResetBtn() {
  chronometer.minutes = 0;
  chronometer.seconds = 0;
  chronometer.currentTime = 0
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {

  if (btnLeft.classList.contains('start')) {
    btnLeft.classList.remove('start');
    btnLeft.classList.add('stop');
    btnLeft.innerHTML = 'STOP';
    btnRight.classList.remove('reset');
    btnRight.classList.add('split');
    btnRight.innerHTML = 'SPLIT';
    chronometer.startClick();
    printTime()

  } else {
    btnLeft.classList.remove('stop');
    btnLeft.classList.add('start');
    btnLeft.innerHTML = 'START';
    btnRight.classList.remove('split');
    btnRight.classList.add('reset');
    btnRight.innerHTML = 'RESET';
    chronometer.stopClick();

  }
});

btnRight.addEventListener('click', function () {
  if (btnRight.classList.contains('reset')) {
    setResetBtn();
  }

  else {
    setSplitBtn()
  }
})

