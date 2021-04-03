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
  printMinutes()
  printSeconds()
}

function printMinutes() { 
  if(chronometer.getMinutes() < 10){
    minDec.innerHTML = '0'
    return  minUni.innerHTML = chronometer.getMinutes()
  }
  minUni.innerHTML= ''
  minDec.innerHTML = chronometer.getMinutes()
 
}

function printSeconds() { 
  if(chronometer.getSeconds() < 10){
    secDec.innerHTML= '0'
    return secUni.innerHTML = chronometer.getSeconds()
  }
  secUni.innerHTML= ''
  secDec.innerHTML = chronometer.getSeconds()
}

// ==> BONUS
function printMilliseconds() {
  if(chronometer.getMiliseconds() < 10){
    milDec.innerHTML= '0'
    return milUni.innerHTML = chronometer.getMiliseconds()
  }
  milUni.innerHTML= ''
  milDec.innerHTML = chronometer.getMiliseconds()
}

function printSplit() {
  const li = document.createElement('li');
  li.innerHTML = chronometer.splitClick();
  splits.appendChild(li);
}

function clearSplits() {
  chronometer.currentTime = 0,
  chronometer.intervalId = 0;
  minUni.innerHTML = '0'
  minDec.innerHTML = '0'
  secUni.innerHTML = '0'
  secDec.innerHTML = '0'
  while (splits.hasChildNodes()) {  
    splits.removeChild(splits.firstChild);
  }
}

function setStopBtn() {
  btnLeft.setAttribute('class', 'btn stop');
    btnLeft.innerHTML = 'STOP';
}

function setSplitBtn() {
  btnRight.setAttribute('class', 'btn split');
  btnRight.innerHTML = 'SPLIT';
}

function setStartBtn() {
  btnLeft.setAttribute('class', 'btn start');
  btnLeft.innerHTML = 'START';
}

function setResetBtn() {
  btnRight.setAttribute('class', 'btn reset');
  btnRight.innerHTML = 'RESET';
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if (btnLeft.classList.contains('start')) {
    setStopBtn()
    setSplitBtn()
    chronometer.startClick(printTime);
  }else{
    setStartBtn()
    setResetBtn()
    chronometer.stopClick();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if (btnRight.classList.contains('split') ) {
    printSplit()
  }else{
    clearSplits()
  }
});
