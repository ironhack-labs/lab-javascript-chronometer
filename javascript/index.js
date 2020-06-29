const chronometer = new Chronometer();

const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

function printTime() {
  printMinutes();
  printSeconds();
  printMilliseconds();
}

function printMinutes() {
  const minutes = chronometer.getMinutes();

  if (minutes < 10) {
    minUni.innerText = minutes;
  } else {
    const minArr = minutes.toString().split('');
    minDec.innerText = minArr[0];
    minUni.innerText = minArr[1];
  }
}

function printSeconds() {
  const seconds = chronometer.getSeconds();
  if (seconds < 10) {
    secDec.innerText = 0;
    secUni.innerText = seconds;
  }  else {
    const secArr = seconds.toString().split('');
    secDec.innerText = secArr[0];
    secUni.innerText = secArr[1];
  }
}

// ==> BONUS
function printMilliseconds() {
  const milliSeconds = chronometer.getMilliseconds();
  if (milliSeconds < 10) {
    milDec.innerText = 0;
    milUni.innerText = milliSeconds;
  }  else {
    const milArr = milliSeconds.toString().split('');
    milDec.innerText = milArr[0];
    milUni.innerText = milArr[1];
  }
}

function printSplit() {
  const item = document.createElement('li');
  const timeItem = document.createTextNode(chronometer.splitClick()); 
  item.appendChild(timeItem);                              
  document.getElementById('splits').appendChild(item); 
}

function clearSplits() {
  while (splits.firstChild) {
    splits.removeChild(splits.lastChild);
  }
}

function setStopBtn() {
  btnLeft.classList.remove('start');
  btnLeft.classList.add('stop');
  btnLeft.innerText = 'STOP';
}

function setSplitBtn() {
  btnRight.classList.remove('reset');
  btnRight.classList.add('split');
  btnRight.innerText = 'SPLIT';
}

function setStartBtn() {
  btnLeft.classList.remove('stop');
  btnLeft.classList.add('start');
  btnLeft.innerText = 'START';
}

function setResetBtn() {
  btnRight.classList.remove('split');
  btnRight.classList.add('reset');
  btnRight.innerText = 'RESET';
}

let timeInterval = null;

btnLeft.addEventListener('click', () => {
  if (btnLeft.classList.contains('start')) {
    setStopBtn();
    setSplitBtn(); 
    chronometer.startClick();
    timeInterval = setInterval(() => printTime(), 10)
  } else if (btnLeft.classList.contains('stop')) {
    setStartBtn();
    setResetBtn();
    chronometer.stopClick();
    clearInterval(timeInterval);
  } 
});

btnRight.addEventListener('click', () => {
  if (btnRight.classList.contains('split')) {
    printSplit()
  }

  if (btnRight.classList.contains('reset')) {
    clearSplits();
    chronometer.resetClick();
    printTime();
    clearInterval(timeInterval);
  }
});