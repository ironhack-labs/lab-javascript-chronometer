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
  setInterval(()=>{
  printMinutes(chronometer.twoDigitsNumber(chronometer.getMinutes()))
  printSeconds(chronometer.twoDigitsNumber(chronometer.getSeconds()))
  printMilliseconds(chronometer.twoDigitsNumber(chronometer.getMilliseconds()))
  },1)
}
function printMinutes(time) {
  minDec.innerHTML = time[0]
  minUni.innerHTML = time[1]
}

function printSeconds(time) {
  secDec.innerHTML = time[0]
  secUni.innerHTML = time[1]
}

// ==> BONUS
function printMilliseconds(time) {
  milDec.innerHTML = time[0]
  milUni.innerHTML = time[1]
}

function printSplit() {
  let newSplit = document.createElement('li')
  newSplit.innerHTML = chronometer.splitClick();
  document.querySelector('ol').appendChild(newSplit)
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  btnLeft.classList.toggle('stop');
  btnLeft.classList.toggle('start');
  if (btnLeft.innerHTML === "START") {
    btnLeft.innerHTML = "STOP";
    btnRight.innerHTML = "SPLIT";
    btnRight.classList.toggle('reset');
    btnRight.classList.toggle('split');
    chronometer.startClick();
  } else {
    btnLeft.innerHTML = "START";
    btnRight.innerHTML = "RESET";
    btnRight.classList.toggle('reset');
    btnRight.classList.toggle('split');
    chronometer.stopClick();
  }
})

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if (btnRight.innerHTML === "RESET") {
    chronometer.resetClick();
    document.querySelector('ol').innerHTML=('')
  } else {
    printSplit();
  }
});

window.addEventListener('load', () => {
  printTime();
})