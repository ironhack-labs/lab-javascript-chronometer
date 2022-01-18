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

function printTime(currentTime) {
  printSeconds(currentTime);
  printMinutes(currentTime);
}

function printMinutes(currentTime) {
  if (chronometer.getMinutes(currentTime) < 10) {
    minUniElement.innerHTML = chronometer.getMinutes(currentTime);
    minDecElement.innerHTML = '0';
  } else {
    minUniElement.innerHTML = '';
    minDecElement.innerHTML = chronometer.computeTwoDigitNumber(
      chronometer.getMinutes()
    );
  }
}

function printSeconds(currentTime) {
  if (currentTime < 10) {
    secUniElement.innerHTML = currentTime;
    secDecElement.innerHTML = '0';
  } else {
    secUniElement.innerHTML = '';
    secDecElement.innerHTML = chronometer.computeTwoDigitNumber(
      chronometer.getSeconds()
    );
  }
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  let liElement = document.createElement('li');
  liElement.innerHTML = chronometer.split();
  splitsElement.appendChild(liElement);
}

function clearSplits() {
  splitsElement.innerHTML = '';
}

function setStopBtn() {
  chronometer.stop();
  toggleBtn({
    element: btnLeftElement,
    classToRemove: 'stop',
    classToToggle: 'start',
    elementText: 'START'
  });
  toggleBtn({
    element: btnRightElement,
    classToRemove: 'split',
    classToToggle: 'reset',
    elementText: 'RESET'
  });
}

function setSplitBtn() {
  chronometer.split();
  printSplit();
}

function setStartBtn() {
  chronometer.start(printTime);
  toggleBtn({
    element: btnLeftElement,
    classToRemove: 'start',
    classToToggle: 'stop',
    elementText: 'STOP'
  });
  toggleBtn({
    element: btnRightElement,
    classToRemove: 'reset',
    classToToggle: 'split',
    elementText: 'SPLIT'
  });
}

function setResetBtn() {
  chronometer.reset();
  clearSplits();
  printTime(0);
}

// Start/Stop Button
let toggleBtn = ({ element, classToRemove, classToToggle, elementText }) => {
  element.classList.remove(classToRemove);
  element.classList.toggle(classToToggle);
  element.innerHTML = elementText;
};
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.innerHTML === 'STOP') {
    setStopBtn();
  } else {
    setStartBtn();
  }
});

// Reset/Split Button
btnRightElement.addEventListener(
  'click',
  () => {
    if (btnRightElement.innerHTML === 'SPLIT') {
      setSplitBtn();
    } else {
      setResetBtn();
    }
  }

  // ... your code goes here
);
