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
// do {
  console.log('Fonction Print Time')
  printMinutes()
  printSeconds()

}   
//     while (btnLeft.classList.contains('stop'))
// }

function printMinutes() {
  console.log('Fonction Print Minute 1')
  let min = chronometer.getMinutes()
  minDec.textContent = chronometer.twoDigitsNumber(min)[0]
  minUni.textContent = chronometer.twoDigitsNumber(min)[1]
  console.log('Fonction Print Minute 2')
  if (btnLeft.classList.contains('start')) {
    return
  }
}

function printSeconds() {
  let sec = chronometer.getSeconds()
  while (btnLeft.classList.contains('stop')) {
    secDec.textContent = chronometer.twoDigitsNumber(sec)[0]
    secUni.textContent = chronometer.twoDigitsNumber(sec)[1]
  }
}


// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  btnLeft.classList.toggle('start')
  btnLeft.classList.toggle('stop')
  if (btnLeft.classList.contains('start')) {
    btnLeft.textContent = 'START'
    chronometer.stopClick()
  } else {
    btnLeft.textContent = 'STOP'
    chronometer.startClick()
      printTime()
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  btnRight.classList.toggle('split')
  btnRight.classList.toggle('reset')
  if (btnRight.classList.contains('split')) {
    btnRight.textContent = 'SPLIT'
    
  } else {
    btnRight.textContent = 'RESET'
  }
});
