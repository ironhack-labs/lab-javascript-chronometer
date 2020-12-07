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
  printMinutes(chronometer.twoDigitsNumber(chronometer.getMinutes()));
  printSeconds(chronometer.twoDigitsNumber(chronometer.getSeconds()));
}

function printMinutes(min) {
  minDec.innerHTML= min.split('')[0];
  minUni.innerHTML= min.split('')[1];
}

function printSeconds(sec) {
  secDec.innerHTML= sec.split('')[0];
  secUni.innerHTML= sec.split('')[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {

let child = document.createElement('li');
 child.innerHTML= chronometer.splitClick();
 splits.appendChild(child);
}

function clearSplits() {
  document.getElementById('splits').innerHTML='';
}

function setStopBtn() {
  //console.log('stop')
  document.getElementById('btnLeft').className='btn start';
  document.getElementById('btnLeft').innerHTML='START';
  document.getElementById('btnRight').className='btn reset';
  document.getElementById('btnRight').innerHTML='RESET';
  chronometer.stopClick();
}

function setSplitBtn() {
  printSplit()
}

function setStartBtn() {
  //console.log('start')
  btnLeft.className='btn stop';
  btnLeft.innerHTML='STOP';
  btnRight.className='btn split';
  btnRight.innerHTML='SPLIT';
  chronometer.startClick(printTime);
}

function setResetBtn() {
  
  chronometer.resetClick();
  clearSplits();
  printTime();
 
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  
  if(btnLeft.className==='btn start'){
    setStartBtn()
  }else{
    setStopBtn()
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  
  if(btnRight.className==='btn reset'){
    setResetBtn()
  }else{
    setSplitBtn()
  }
});
