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
  printMilliseconds();
}

function printMinutes() {
  const minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  minDecElement.textContent = minutes[0];
  minUniElement.textContent = minutes[1];
}

function printSeconds() {
  const seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  secDecElement.textContent = seconds[0];
  secUniElement.textContent = seconds[1];
}

// ==> BONUS
function printMilliseconds() {
  const miliseconds = chronometer.computeTwoDigitNumber(
    chronometer.getMiliseconds()
  );
  milDecElement.textContent = miliseconds[0];
  milUniElement.textContent = miliseconds[1];
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.className === 'btn start') {
    btnLeftElement.className = 'btn stop';
    btnLeftElement.textContent = 'STOP';
    btnRightElement.className = 'btn split';
    btnRightElement.textContent = 'SPLIT';
    chronometer.start();
    printTime();
    intervalId = setInterval(printTime, 1);
  } else {
    btnLeftElement.className = 'btn start';
    btnLeftElement.textContent = 'START';
    btnRightElement.className = 'btn reset';
    btnRightElement.textContent = 'RESET';
    chronometer.stop();
    clearInterval(intervalId);
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnLeftElement.className === 'btn start') {
    console.log('Has pulsado Reset');
    chronometer.reset();
    splitsElement.innerHTML = ``;
    printTime();
  } else {
    console.log('Has pulsado Split');
    let splitN = chronometer.split();
    splitsElement.innerHTML += `<li class="list-item">${splitN}</li>`;
  }
});
