const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  //We call the functions below
  printMilliseconds();
  printMinutes();
  printSeconds();
}

function printMinutes() {
  //Minutes need to have two digits, so we call the function .computeTwoDigitNumber() from the chronometer.js file with the getMinutes() as a parameter
  let minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  minUniElement.innerHTML = `${minutes[1]}`; //Second number
  minDecElement.innerHTML = `${minutes[0]}`; //First number (so it shows 0)
}

function printSeconds() {
  //Seconds need to have two digits, so we call the function .computeTwoDigitNumber() from the chronometer.js file with the getSeconds() as a parameter

  let seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  secUniElement.innerHTML = `${seconds[1]}`;
  secDecElement.innerHTML = `${seconds[0]}`;
}

// ==> BONUS
function printMilliseconds() {
  let milliseconds = chronometer.computeTwoDigitNumber(chronometer.getMilliseconds());
  milDecElement.innerHTML = `${milliseconds [1]}`
  milUniElement.innerHTML = `${milliseconds [0]}`
}

function printSplit() {
  let minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  let seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  splitsElement.innerHTML += '<li>' + minutes + ':' + seconds + '</li>'; //???????? Is there another way like we saw in class?
}
//`<li>${minutes}:${seconds}</li>`;
function clearSplits() {
  splitsElement.innerHTML = '';
}
//------------>If we press botton:
function setStopBtn() {
  btnLeftElement.className = 'btn stop'; //class changes the color (because of the class in css)
  btnLeftElement.innerHTML = 'STOP'; //changes the text
}

function setSplitBtn() {
  btnRightElement.className = 'btn split';
  btnRightElement.innerHTML = 'SPLIT';
}

function setStartBtn() {
  btnLeftElement.className = 'btn start';
  btnLeftElement.innerHTML = 'START';
}

function setResetBtn() {
  btnRightElement.className = 'btn reset';
  btnRightElement.innerHTML = 'RESET';
}

// Start / Stop -- Button
btnLeftElement.addEventListener('click', () => {
  switch (btnLeftElement.className) {
    case 'btn start':
      setStopBtn();
      setSplitBtn();
      chronometer.start();
      setInterval(() => printTime(), 10);

      break;
    case 'btn stop':
      setStartBtn();
      setResetBtn();
      chronometer.stop();
      break;
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  switch (btnRightElement.className) {
    case 'btn reset':
      setResetBtn();
      chronometer.reset();
      clearSplits();
      break;
    case 'btn split':
      setSplitBtn();
      chronometer.split();
      printSplit();
      break;
  }
});