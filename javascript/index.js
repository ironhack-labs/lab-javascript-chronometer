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
  return{
    mainDisplay: () => {
      printMinutes();
      printSeconds();
    },
    millisDisplay: () => {
      printMilliseconds();
    }

  }

}

function printMinutes() {
  const minutes = chronometer.getMinutes();
  const minutesToString = chronometer.computeTwoDigitNumber(minutes);

  minDecElement.textContent = minutesToString[ 0 ];
  minUniElement.textContent = minutesToString[ 1 ];
}

function printSeconds() {
  const seconds = chronometer.getSeconds();
  const secondsToString = chronometer.computeTwoDigitNumber(seconds);

  secDecElement.textContent = secondsToString[ 0 ];
  secUniElement.textContent = secondsToString[ 1 ];
}

// ==> BONUS
function printMilliseconds() {
  const milliseconds = chronometer.getMilliseconds();
  const millisecondsToString = chronometer.computeTwoDigitNumber(milliseconds);
  milDecElement.textContent = millisecondsToString[ 0 ];
  milUniElement.textContent = millisecondsToString[ 1 ];

}

function printSplit(listItem) {
  splitsElement.append(listItem)
}

function clearSplits() {
   splitsElement.innerHTML = '';
}

function setStopBtn() {
  chronometer.stop();
  btnLeftElement.textContent = "START"
  btnLeftElement.className = "btn start";
  btnRightElement.textContent = "RESET";
  btnRightElement.className = "btn reset";
}

function setSplitBtn() {
  const split= chronometer.split()
  const listItem=document.createElement('li')
  listItem.className="list-item"
  listItem.textContent=split;
  printSplit(listItem);
  
}


function setStartBtn() {
  chronometer.start(printTime); // pasamos el callback para que actualize UI del timer
  btnLeftElement.textContent = "STOP";
  btnLeftElement.className = "btn stop";
  btnRightElement.textContent = "SPLIT";
  btnRightElement.className = "btn split";
}

function setResetBtn() {
  // resetea el crhono
  chronometer.reset();

  // resetea los splits
  clearSplits();

  // resetea la UI
  minDecElement.textContent = '0';
  minUniElement.textContent = '0';
  secDecElement.textContent = '0';
  secUniElement.textContent = '0';
  milDecElement.textContent = '0';
  milUniElement.textContent = '0';
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  (btnLeftElement.textContent === "START") ? setStartBtn() : setStopBtn();
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  (btnRightElement.textContent === "RESET") ? setResetBtn() : setSplitBtn();
});
