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
const ol = document.querySelector('#splits');

function printTime() {
  setInterval(() => {
    const seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());

    secUniElement.innerText = seconds[1];
    secDecElement.innerText = seconds[0];

    const minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());

    minUniElement.innerText = minutes[1];
    minDecElement.innerText = minutes[0];
  }),
    1000;
  // ... your code goes here
}

// function printMinutes() {
//   // ... done(see above) (OK)
// }

// function printSeconds() {
//   //... done(see above) here (OK)
// }

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here

  let milliseconds = chronometer.computeTwoDigitNumber(
    chronometer.currentMilliseconds
  );
  milDecElement.textContent = milliseconds[0];
  milUniElement.textContent = milliseconds[1];
}

function printSplit() {
  // ... your code goes here
  // btnRightElement.innerText = 'SPLIT';
  // btnRightElement.className = 'btn split';
  let node = document.createElement('li');
  var textnode = document.createTextNode(`${chronometer.split()} `);

  node.appendChild(textnode);
  document.getElementById('splits').appendChild(node);
}

function clearSplits() {
  chronometer.reset();
  ol.innerHTML = '';
}

function setStopBtn() {
  btnLeftElement.innerText = 'STOP';
  btnLeftElement.className = 'btn stop';
}
function setSplitBtn() {
  btnRightElement.innerText = 'SPLIT';
  btnRightElement.className = 'btn split';
}
function setStartBtn() {
  btnLeftElement.innerText = 'START';
  btnLeftElement.className = 'btn start';
}
function setResetBtn() {
  btnRightElement.innerText = 'RESET';
  btnRightElement.className = 'btn reset';
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.innerText === 'START') {
    setStopBtn();
    setSplitBtn();
    printTime();
    chronometer.start();
  } else {
    setStartBtn();
    setResetBtn();
    chronometer.stop();
  }
});
// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.innerText === 'SPLIT') printSplit();
  if (btnRightElement.innerText === 'RESET') clearSplits();
  // ... your code goes here
});
