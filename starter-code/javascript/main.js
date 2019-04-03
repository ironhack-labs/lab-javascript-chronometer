let chronometer = new Chronometer();

let btnLeft = document.getElementById('btnLeft');
let btnRight = document.getElementById('btnRight');
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

let renderTimer = null;

const state = {
  playing: true,
  toggle() {
    this.playing = this.playing ? false : true;
  }
};

function printTime() {
  printMinutes();
  printSeconds();
  printMilliseconds();
  printSplit();
}

function printMinutes() {
  const [dec, uni] = chronometer
    .twoDigitsNumber(chronometer.getMinutes())
    .split('');

  minUni.innerText = uni;
  minDec.innerText = dec;
}

function printSeconds() {
  const [dec, uni] = chronometer
    .twoDigitsNumber(chronometer.getSeconds())
    .split('');

  secUni.innerText = uni;
  secDec.innerText = dec;
}

function printMilliseconds() {
  const [dec, uni] = chronometer
    .twoDigitsNumber(chronometer.getMilliseconds())
    .split('');

  milUni.innerText = uni;
  milDec.innerText = dec;
}

function printSplit() {
  const splitsList = chronometer.splits
    .map(
      split =>
        `<li>${chronometer.twoDigitsNumber(
          split.minutes
        )}:${chronometer.twoDigitsNumber(
          split.seconds
        )}:${chronometer.twoDigitsNumber(split.milliseconds)}</li>`
    )
    .join('');

  splits.innerHTML = splitsList;
}

function clearSplits() {
  splits.innerHTML = '';
}

function setStopBtn() {
  chronometer.stopClick();
}

function setSplitBtn() {
  chronometer.splitClick();
}

function setStartBtn() {
  chronometer.startClick();
}

function setResetBtn() {
  chronometer.resetClick();
}

// Start/Stop Button
btnLeft.addEventListener('click', function() {
  if (state.playing) {
    setStartBtn();

    btnLeft.innerText = 'Stop';
    btnRight.innerText = 'Split';

    renderTimer = setInterval(printTime, 10);
  } else {
    setStopBtn();

    btnLeft.innerText = 'Start';
    btnRight.innerText = 'Reset';

    clearInterval(renderTimer);
  }

  btnLeft.classList.toggle('start');
  btnLeft.classList.toggle('stop');
  btnRight.classList.toggle('reset');
  btnRight.classList.toggle('split');

  state.toggle();
});

// Reset/Split Button
btnRight.addEventListener('click', function() {
  if (state.playing) {
    setResetBtn();

    clearSplits();
  } else {
    setSplitBtn();
  }
});
