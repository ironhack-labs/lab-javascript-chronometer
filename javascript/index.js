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
  const chronoMinutes = chronometer.getMinutes();
  const chronoSeconds = chronometer.getSeconds();
  printMinutes(chronoMinutes);
  printSeconds(chronoSeconds);
}

function printMinutes(minutes) {
  constminutesString = chronometer.computeTwoDigitNumber(minutes);
  minDecElement.innerHTML = minutesString[0];
  minUniElement.innerHTML = minutesString[i];
  //innerHtml or innerText or textContent 
}

function printSeconds() {
  constsecondsString = chronometer.computeTwoDigitNumberNumber(minutes);
  secDecElement.innerHTML = secondString[0];
  secUniElement.innerHTML = secondString[i];
  //innerHtml or innerText or textContent 
}

// // ==> BONUS
// function printMilliseconds() {
//   // ... your code goes here
// }

function printSplit() {
  const myNewListElement = document.createElement('li');
  myNewListElement.textContent = chronometer.split();
  splitsElement.appendChild(myNewListElement);
}


function clearSplits() {
  splitsElement.replaceChildren();
}

//(actvateStop)
function setStopBtn() {
chronometer.stop();
btnLeftElement.className = 'btn start';
btnLeftElement.textContent = 'START';
btnRightElement.className = 'btn reset';
btnRightElement.textContent = 'RESET';
}

function setSplitBtn() {
  const myNewListElement = document.createElement('li');
  myNewListElement.textContent = chronometer.split();
  splitsElement.appendChild(myNewListElement);
}

//(activateStart)
function setStartBtn() {
 chronometer.start(printTime);
 btnLeftElement.className = 'btn stop';
 btnLeftElement.textContent = 'STOP';
 btnLeftElement.className = 'btn split';
 btnRightElement.textContent = "SPLIT";
}

function setResetBtn() {
 chronometer.reset();
 clearSplits();
 printTime();
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if(buttonLeftElement.classList.contains('start')){
    setStartBtn();
  } else {
  setStartBtn();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
    if(buttonRightElement.classList.contains('reset')){
      setResetBtn();
    } else {
      setSplitBtn();
});
