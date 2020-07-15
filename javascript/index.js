const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');


function printTime() {
  printMinutes();
  printSeconds();
  printMilliseconds();
}

function printMinutes() {
  let minsFirstDig = chronometer.twoDigitsNumber(chronometer.getMinutes())[0];
  let minsSecDig = chronometer.twoDigitsNumber(chronometer.getMinutes())[1];
  document.querySelector('#minDec').innerText = minsFirstDig;
  document.querySelector('#minUni').innerText = minsSecDig;
}

function printSeconds() {
  let secsFirstDig = chronometer.twoDigitsNumber(chronometer.getSeconds())[0];
  let secsSecDig = chronometer.twoDigitsNumber(chronometer.getSeconds())[1];
  document.querySelector('#secDec').innerText = secsFirstDig;
  document.querySelector('#secUni').innerText = secsSecDig;
}

function printMilliseconds() {
  let milsFirstDig = chronometer.twoDigitsNumber(chronometer.getMilliseconds())[0];
  let milsSecDig = chronometer.twoDigitsNumber(chronometer.getMilliseconds())[1];
  document.querySelector('#milDec').innerText = milsFirstDig;
  document.querySelector('#milUni').innerText = milsSecDig;
}


// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if (btnLeft.classList.contains('start')) {
    btnLeft.classList.replace('start', 'stop');
    btnRight.classList.replace('reset', 'split');
    btnLeft.innerText = 'STOP';
    btnRight.innerText = 'SPLIT';
    chronometer.startClick(printTime);
  }
  else {
    btnLeft.classList.replace('stop', 'start');
    btnRight.classList.replace('split', 'reset');
    btnLeft.innerText = 'START';
    btnRight.innerText = 'RESET';
    chronometer.stopClick();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if (btnRight.classList.contains('split')) {
    let newSplitTime = document.createElement('li');
    newSplitTime.innerText = chronometer.splitClick();
    document.querySelector('#splits').appendChild(newSplitTime);
  }
  else {
    document.querySelector('#minDec').innerText = 0;
    document.querySelector('#minUni').innerText = 0;
    document.querySelector('#secDec').innerText = 0;
    document.querySelector('#secUni').innerText = 0;
    document.querySelector('#milDec').innerText = 0;
    document.querySelector('#milUni').innerText = 0;
    while (document.querySelector('#splits').firstChild) {
      document.querySelector('#splits').removeChild(document.querySelector('#splits').firstChild);
  }
  }
});
