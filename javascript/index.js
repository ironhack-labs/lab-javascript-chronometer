let chronometer = new Chronometer();


let btnLeft = document.getElementById('btnLeft');


let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');

let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');

function printTime() {
  // ... your code goes here
  //callbacks of startClick prints the time, so you have to pass this when calling the startClick function

  printMinutes();
  printSeconds();
  printMilliseconds();
}

function printMinutes() {
  // ... your code goes here
  let min = chronometer.twoDigitsNumber(chronometer.getMinutes());
  minDec.innerHTML = min[0];
  minUni.innerHTML = min[1];

}

function printSeconds() {
  // ... your code goes here
  let seconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
  secDec.innerHTML = seconds[0];
  secUni.innerHTML = seconds[1];

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
  btnLeft.className = 'btn stop';
  btnLeft.innerText = 'STOP'; // ... your code goes here
}

function setSplitBtn() {
  btnRight.className = 'btn split';
  btnRight.innerText = 'SPLIT';// ... your code goes here
}

function setStartBtn() {
  btnLeft.className = 'btn start';
  btnLeft.innerText = 'START'; // ... your code goes here
}

function setResetBtn() {
  btnRight.className = 'btn reset';
  btnRight.innerText = 'RESET'; // ... your code goes here
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  // ... your code goes here

  // alert('Hello Katie');
  if (btnLeft.classList.contains('start') === true) {
    chronometer.startClick(() => {
      printTime();
    });
    setStopBtn();
    setSplitBtn();
  } else if (btnLeft.classList.contains('stop') === true) {
    chronometer.stopClick();
    setStartBtn();
    setResetBtn();
  }

});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  // ... your code goes here

});