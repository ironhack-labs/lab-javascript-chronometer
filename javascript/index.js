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

function printTime() {
  printSeconds(chronometer.getSeconds());
  printMinutes(chronometer.getMinutes());
}

function printMinutes(min) {
    minDec.innerHTML = min.slice(0,1);
    minUni.innerHTML = min.slice(1);
}

function printSeconds(sec) {
    secDec.innerHTML = sec.slice(0,1);
    secUni.innerHTML = sec.slice(1);
}

// ==> BONUS
function printMilliseconds(milsec) {
    milDec.innerHTML = milsec.slice(0,1);
    milUni.innerHTML = milsec.slice(1);
}

function printSplit() {
  let liElem = document.createElement('li');
  let data = chronometer.getMinutes() + ':' + chronometer.getSeconds() + ':' + chronometer.getMilliseconds()
  liElem.innerHTML = data;
  splits.appendChild(liElem);
}

function clearSplits() {
  splits.innerHTML = '';
}

function setStopBtn() {
  chronometer.stopClick()
  btnLeft.innerHTML = "START";
  btnLeft.className = "btn start";
  btnRight.innerHTML = "RESET";
  btnRight.className = "btn reset";
}

function setSplitBtn() {
  printSplit();
}

function setStartBtn() {
    chronometer.startClick(printTime, printMilliseconds)
    btnLeft.innerHTML = "STOP";
    btnLeft.className = "btn stop";
    btnRight.innerHTML = "SPLIT";
    btnRight.className = "btn split";
}

function setResetBtn() {
  printSeconds('00');
  printMinutes('00');
  printMilliseconds('00')
  chronometer.resetClick()
  clearSplits();
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
    if(btnLeft.className === 'btn start'){
      setStartBtn();
    } else {
      setStopBtn();
    }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if(btnRight.className === 'btn reset'){
    setResetBtn();
  } else {
    setSplitBtn();
  }
});
