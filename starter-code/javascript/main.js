let chronometer = new Chronometer();
let btnLeft = document.getElementById('btnLeft');
let btnRight = document.getElementById('btnRight');
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits')

const printTime = () => {
  printMinutes();
  printSeconds();
  printMilliseconds();
}


const printMinutes = () => {
  let minutes = chronometer.twoDigitsNumber(chronometer.getMinutes());
  minUni.innerHTML = minutes[1];
  minDec.innerHTML = minutes[0];
};

const printSeconds = () => {
  let seconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
  secUni.innerHTML = seconds[1];
  secDec.innerHTML = seconds[0];
};

function printMilliseconds() {
  let miliseconds = chronometer.twoDigitsNumber(chronometer.getMiliSeconds());
  milDec.innerHTML = miliseconds[0];
  milUni.innerHTML = miliseconds[1];

}

const printSplit = () => {
  splits.innerHTML += `<li>${chronometer.twoDigitsNumber(chronometer.getMinutes())}:${chronometer.twoDigitsNumber(chronometer.getSeconds())}:${chronometer.twoDigitsNumber(chronometer.getMiliSeconds())}</li>`
}

const clearSplits = () => {
  splits.innerHTML = "";
};

const setStopBtn = () => {
  btnLeft.classList.remove('start');
  btnLeft.classList.add('stop');
  btnLeft.innerHTML = 'STOP';
}

const setSplitBtn = () => {
  btnRight.classList.remove('reset');
  btnRight.classList.add('split');
  btnRight.innerHTML = 'SPLIT';
}

const setStartBtn = () => {
  btnLeft.classList.remove('stop');
  btnLeft.classList.add('start');
  btnLeft.innerHTML = 'START';
}

const setResetBtn = () => {
  btnRight.classList.remove('split');
  btnRight.classList.add('reset');
  btnRight.innerHTML = 'RESET';
};

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  if (btnLeft.classList.contains('start')) {
    setStopBtn();
    setSplitBtn();
    chronometer.startClick();
    interval = setInterval(printTime, 1)
  } else {
    setStartBtn();
    setResetBtn();
    chronometer.stopClick();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if (btnRight.classList.contains('split')) {
    printSplit();
  } else {
    clearSplits();
    chronometer.splitClick();
  }
})
