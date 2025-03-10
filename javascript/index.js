const chronometer = new Chronometer();
const secondChronometer = new Chronometer();

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
  // ... your code goes here
  printMinutes();
  printSeconds();
}

function printMinutes() {
  // ... your code goes here
  const minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  minDecElement.innerHTML = minutes[0];
  minUniElement.innerHTML = minutes[1];

}

function printSeconds() {
  // ... your code goes here
  const seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  secDecElement.textContent = seconds[0];
  secUniElement.textContent = seconds[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
  const splitTime = chronometer.split();
  const newSplit = document.createElement("li");
  newSplit.textContent = splitTime;
  splitsElement.appendChild(newSplit);
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
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here
  if(btnLeft.classList.contains("start"))
    {
    chronometer.start(printTime);
    btnLeftElement.classList.remove('start');
    btnLeftElement.classList.add('stop');
    btnLeftElement.textContent = 'STOP';
    btnRightElement.classList.remove('stop');
    btnRightElement.classList.add('split');
    btnRightElement.textContent = 'Split';
  } else if(btnLeft.classList.contains("stop"))
  {
    chronometer.stop();
    btnLeftElement.classList.remove('stop');
    btnLeftElement.classList.add('start');
    btnLeftElement.textContent = 'START';
    btnRightElement.classList.remove('split');
    btnRightElement.classList.add('reset');
    btnRightElement.textContent = 'RESET';

    const splitsElement = document.getElementById("splits");
    splitsElement.innerHTML=" "

    minDecElement.innerHTML = 0;
    minUniElement.innerHTML = 0;
    secDecElement.textContent = 0;
    secUniElement.textContent = 0;
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
  if(btnRight.classList.contains('split'))
    {
      chronometer.split();
      const newListItem = document.createElement("li");
      newListItem.className = "list-item";
      newListItem.innerHTML = chronometer.split();
      const splitsElement = document.getElementById("splits");
      splitsElement.appendChild(newListItem);
    }else if(btnRightElement.classList.contains("reset"))
      {
        clearSplits(); 
        chronometer.reset();
      }

});
