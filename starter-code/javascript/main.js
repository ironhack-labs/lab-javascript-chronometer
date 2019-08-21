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

btnLeft.onclick = () => {
  if (btnLeft.className.includes('start')) {
    chronometer.startClick();
    window.requestAnimationFrame(printTime);
  } else {
    console.log('stop');
    chronometer.stopClick();
    console.log(chronometer.intervalId);
  }
  if (chronometer.intervalId) {
    btnRight.innerHTML = 'SPLIT';
    btnLeft.innerHTML = 'STOP';
    btnRight.className = 'btn split';
    btnLeft.className = 'btn stop';
  } else {
    btnRight.innerHTML = 'RESET';
    btnLeft.innerHTML = 'START';
    btnRight.className = 'btn reset';
    btnLeft.className = 'btn start';
  }
};

btnRight.onclick = () => {
  if (btnRight.className.includes('split')) {
    printSplit();
    return;
  }
  chronometer.currentTime = 0;
  splits.innerHTML = '';
  printTime();
};

function printTime() {
  // milDec.innerHTML = chronometer.getMiliseconds()[0];
  // milUni.innerHTML = chronometer.getMiliseconds()[1];
  minDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[0];
  minUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[1];
  secDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[0];
  secUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[1];
  window.requestAnimationFrame(printTime);
}

// function printMinutes() {}

// function printSeconds() {}

// function printMilliseconds() {}

function printSplit() {
  let li = document.createElement('li');
  li.innerHTML = `${chronometer.twoDigitsNumber(chronometer.getMinutes())}:${chronometer.twoDigitsNumber(
    chronometer.getSeconds()
  )}`;
  splits.appendChild(li);
}

// function clearSplits() {}

// function setStopBtn() {}

// function setSplitBtn() {}

// function setStartBtn() {}

// function setResetBtn() {}

// Start/Stop Button
// btnLeft.addEventListener('click', function() {});

// Reset/Split Button
// btnRight.addEventListener('click', function() {});
