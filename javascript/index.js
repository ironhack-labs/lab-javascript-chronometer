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
  // ... your code goes here
  setInterval(() => {
    printMinutes();
    printSeconds();
    printMilliseconds();
  }, 10);
}

function printMinutes() {
  // ... your code goes here
  let minutes = Math.trunc(chronometer.getMinutes())
  let doubleMinutes = chronometer.twoDigitsNumber(minutes)
  minDec.innerHTML = doubleMinutes[0]
  minUni.innerHTML = doubleMinutes[1]
}

function printSeconds() {
  // ... your code goes here
  let seconds = Math.trunc(chronometer.getSeconds())
  let doubleSeconds = chronometer.twoDigitsNumber(seconds)
  secDec.innerHTML = doubleSeconds[0]
  secUni.innerHTML = doubleSeconds[1]
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
  let centiSeconds = chronometer.getCentiSeconds()
  let doubleCentiSeconds = chronometer.twoDigitsNumber(centiSeconds)
  milDec.innerHTML = doubleCentiSeconds[0]
  milUni.innerHTML = doubleCentiSeconds[1]
}

function printSplit() {
  // ... your code goes here
  let listFather = document.getElementById('splits')
  let listChild = document.createElement("li")
  listFather.appendChild(listChild)
  let lastChild = document.getElementById("splits").lastChild
  let minutes = Math.trunc(chronometer.getMinutes())
  let doubleMinutes = chronometer.twoDigitsNumber(minutes)
  let seconds = Math.trunc(chronometer.getSeconds())
  let doubleSeconds = chronometer.twoDigitsNumber(seconds)
  let centiSeconds = chronometer.getCentiSeconds()
  let doubleCentiSeconds = chronometer.twoDigitsNumber(centiSeconds)
  lastChild.innerHTML = `${doubleMinutes}:${doubleSeconds}:${doubleCentiSeconds}`
}

function clearSplits() {
  // ... your code goes here
  let listFather = document.getElementById('splits')
  listFather.innerHTML = ''
}

function setStopBtn() {
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
}

let status

function setStartBtn() {
  // ... your code goes here
  let btnClass = document.getElementById('btnLeft').classList
  let btnName = document.getElementById('btnLeft')
  if (btnClass.contains('start')) {
    btnClass.toggle('stop');
    btnClass.toggle('start');
    btnName.innerHTML = 'STOP';
    chronometer.startClick();
    status = 'running';
    setResetBtn();
    printTime();
    } else {
      btnClass.toggle('stop');
      btnClass.toggle('start');
      btnName.innerHTML = 'START';
      status = 'stopped';
      setResetBtn();
      chronometer.stopClick();
    }
}

function setResetBtn() {
  // ... your code goes here
  let btnClass = document.getElementById('btnRight').classList
  let btnName = document.getElementById('btnRight')
  if (btnClass.contains('split') && status === 'running') {
    printSplit();
    } else if (btnClass.contains('reset') && status === 'stopped') {
      clearSplits();
      chronometer.resetClick();     
    } else if ((btnClass.contains('split') && status === 'stopped')) {
      btnClass.toggle('split');
      btnClass.toggle('reset');
      btnName.innerHTML = 'RESET';
    } else if (btnClass.contains('reset') && status === 'running') {
      btnClass.toggle('split');
      btnClass.toggle('reset');
      btnName.innerHTML = 'SPLIT';
    }
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  // ... your code goes here
  setStartBtn()
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  // ... your code goes here
  setResetBtn()
});
