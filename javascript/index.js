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

let set = 0;

function printTime() {
  set = setInterval(function() {
    printMilliseconds();
    printSeconds();
    printMinutes();
  }, 1);
}

function printMinutes() {
  let minutes =chronometer.twoDigitsNumber(chronometer.getMinutes())
  minDec.innerHTML = minutes[0];
  minUni.innerHTML = minutes[1];
}

function printSeconds() {
  let seconds =chronometer.twoDigitsNumber(chronometer.getSeconds())
  secDec.innerHTML = seconds[0];
  secUni.innerHTML = seconds[1];
}

// ==> BONUS
function printMilliseconds() {
  let milliseconds = chronometer.twoDigitsNumber(chronometer.getMilliseconds())
  console.log('milliseconds '+ milliseconds)
  milDec.innerHTML = milliseconds[0];
  milUni.innerHTML = milliseconds[1];
}

function printSplit() {
  let newSplit = document.createElement('li');
  newSplit.innerHTML = chronometer.splitClick();
  splits.appendChild(newSplit)
}

function clearSplits(splits) {
  while (splits.firstChild) {
    splits.removeChild(splits.firstChild);
  }
}

function setStopBtn() {
  btnLeft.classList.toggle('stop')
  btnLeft.innerHTML = 'STOP'
}

function setSplitBtn() {
  btnRight.classList.toggle('split')
  btnRight.innerHTML = 'SPLIT'
}

function setStartBtn() {
  btnLeft.classList.remove('stop')
  btnLeft.innerHTML = 'START'
}

function setResetBtn() { 
  btnRight.classList.remove('split')
  btnRight.innerHTML = 'RESET'
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if(btnLeft.innerHTML === 'START') {
    printTime();
    chronometer.startClick();
    setSplitBtn()
    setStopBtn()
  } else {
    chronometer.stopClick();
    clearInterval(set)
    setStartBtn()
    setResetBtn() 
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if(btnRight.innerHTML === 'RESET') {
    clearInterval(set)
    chronometer.resetClick();
    minDec.innerHTML = 0;
    minUni.innerHTML = 0;
    secDec.innerHTML = 0;
    secUni.innerHTML = 0;
    milDec.innerHTML = 0;
    milUni.innerHTML = 0;
    clearSplits(splits);
  } else {
    printSplit();
  }
});
