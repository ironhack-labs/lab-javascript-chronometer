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
  printMinutes();
  printSeconds();
}

function printMinutes() {
  console.log('yey counter');

  let minutes = chronometer.getMinutes();

  if (minutes < 10) {
    minDecElement.innerText = minutes;
    minUniElement.innerText = 0;
  } else if (minutes >= 10) {
    minutesString = minutes.toString();
    minDecElement.innerText = minutesString[0];
    minUniElement.innerText = minutesString[1];
  }
}

function printSeconds() {
  let seconds = chronometer.getSeconds();
  console.log('yey counter seconds', seconds);

  if (seconds < 10) {
    secDecElement.innerText = 0;
    secUniElement.innerText = seconds;
  } else if (seconds >= 10) {
    secondsString = seconds.toString();
    secDecElement.innerText = secondsString[0];
    secUniElement.innerText = secondsString[1];
  }
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  const sectionSplit = document.getElementById('splits-container');
  const orderedList = sectionSplit.querySelector('ol');

  let newList = document.createElement('li');
  newList.className = 'list-item';
  newList.innerHTML = `${chronometer.split()}`;
  orderedList.appendChild(newList);
}

function clearSplits() {
  const liElements = document.querySelectorAll('li');

  liElements.forEach((item) => item.remove());
}

function setStopBtn() {
  // ... your code goes here
  console.log('jaló el stop');
  btnLeftElement.className = 'btn stop';
  btnLeftElement.innerHTML = 'STOP';
}

function setSplitBtn() {
  console.log('convirtió a split');
  btnRightElement.className = 'btn split';
  btnRightElement.innerHTML = 'SPLIT';
}

function setStartBtn() {
  console.log('convirtio a start');
  btnLeftElement.className = 'btn start';
  btnLeftElement.innerHTML = 'START';
}

function setResetBtn() {
  console.log('convirtió a RESET');
  btnRightElement.className = 'btn reset';
  btnRightElement.innerHTML = 'RESET';
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  console.log(btnLeftElement);
  // ... your code goes here
  if (btnLeftElement.classList.contains('start')) {
    chronometer.start(printTime);
    setStopBtn();
    setSplitBtn();
    //esto es para cambiar el botón de start por stop.
  } else if (btnLeftElement.classList.contains('stop')) {
    setStartBtn();
    setResetBtn();
    chronometer.stop();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (
    btnRightElement.classList.contains('reset') &&
    btnLeftElement.classList.contains('start')
  ) {
    chronometer.reset();
    secUniElement.innerText = 0;
    minDecElement.innerText = 0;
    minUniElement.innerText = 0;
    secDecElement.innerText = 0;
    secUniElement.innerText = 0;
    milDecElement.innerText = 0;
    milUniElement.innerText = 0;
    clearSplits();

  } else if (btnRightElement.classList.contains('split')) {
    chronometer.split();
    printSplit();
  }
});
