const chronometer = new Chronometer();

const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  setInterval(() => {
    let seconds = printSeconds();
    let minutes = printMinutes();

    minDecElement.innerText = minutes[0];
    minUniElement.innerText = minutes[1];
    secUniElement.innerText = seconds[1];
    secDecElement.innerText = seconds[0];
  }, 1000);
}

function printMinutes() {
  return chronometer.computeTwoDigitNumber(chronometer.getMinutes());
}

function printSeconds() {
  return chronometer.computeTwoDigitNumber(chronometer.getSeconds());
}

function printSplit() {
  let timestamp = chronometer.split();

  let listItemElement = document.createElement('li');
  listItemElement.innerText = timestamp;
  splitsElement.appendChild(listItemElement);
}

function clearSplits() {
  splitsElement.innerHTML = '';
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

btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.innerText === 'START') {
    setStopBtn();
    chronometer.start();
    printTime();
    setSplitBtn();
  } else {
    setStartBtn();
    setResetBtn();
    chronometer.stop();
  }
});

btnRightElement.addEventListener('click', () => {
  if (btnRightElement.innerText === 'RESET') {
    chronometer.stop();
    chronometer.reset();
    minDecElement.innerText = '0';
    minUniElement.innerText = '0';
    secUniElement.innerText = '0';
    secDecElement.innerText = '0';
    clearSplits();
  } else {
    printSplit();
  }
});