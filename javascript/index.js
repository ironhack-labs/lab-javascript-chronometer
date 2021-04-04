const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');
const sendBtn = document.getElementById('send_btn');
let userInput = document.getElementById('user_input');
let userLabel = document.getElementById('user_label');


sendBtn.addEventListener('click', () => {
  newUser = userInput.value;
  userLabel.innerHTML = newUser.toUpperCase() + "'S" + " TIMER";
  userLabel.className = ('colorChange');
  userInput.className = ('hidden');
  sendBtn.className = ('hidden');
});


function printTime() {
  printMilliseconds();
  printSeconds();
  printMinutes(); 
}

function printMinutes() {
  const minutes =chronometer.twoDigitsNumber(chronometer.getMinutes());
  minDec.innerHTML = minutes[0];
  minUni.innerHTML = minutes[1];
}

function printSeconds() {
  const seconds =chronometer.twoDigitsNumber(chronometer.getSeconds());
  secDec.innerHTML = seconds[0];
  secUni.innerHTML = seconds[1];
}

// ==> BONUS
function printMilliseconds() {
  const milliseconds = chronometer.twoDigitsNumber(chronometer.getMilliseconds())
  console.log('milliseconds '+ milliseconds);
  milDec.innerHTML = milliseconds[0];
  milUni.innerHTML = milliseconds[1];
}

function printSplit() {
  const newSplit = document.createElement('li');
  newSplit.innerHTML = chronometer.splitClick();
  splits.appendChild(newSplit)
}

function clearSplits(splits) {
  while (splits.firstChild) {
    splits.removeChild(splits.firstChild);
  }
}

function setStopBtn() {
  btnLeft.classList.toggle('stop');
  btnLeft.innerHTML = 'STOP';
}

function setSplitBtn() {
  btnRight.classList.toggle('split');
  btnRight.innerHTML = 'SPLIT';
}

function setStartBtn() {
  btnLeft.classList.remove('stop');
  btnLeft.innerHTML = 'START';
}

function setResetBtn() { 
  btnRight.classList.remove('split');
  btnRight.innerHTML = 'RESET';
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if(btnLeft.innerHTML === 'START') {
    chronometer.startClick(printTime);
    setSplitBtn();
    setStopBtn();
  } else {
    chronometer.stopClick();
    clearInterval(chronometer.intervalId);
    setStartBtn();
    setResetBtn(); 
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if(btnRight.innerHTML === 'RESET') {
    clearInterval(chronometer.intervalId);
    chronometer.resetClick();
    minDec.innerHTML = 0;
    minUni.innerHTML = 0;
    secDec.innerHTML = 0;
    secUni.innerHTML = 0;
    milDec.innerHTML = 0;
    milUni.innerHTML = 0;
    clearSplits(splits);
  } else {
    printSplit();
  }
});
