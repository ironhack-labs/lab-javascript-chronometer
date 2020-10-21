const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');
btnRight.className='btn split'
btnRight.innerHTML='SPLIT'

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
  const min= chronometer.twoDigitsNumber(chronometer.getMinutes())
  minDec.innerText=min[0]
  minUni.innerText=min[1]
}

function printSeconds() {
  const sec=chronometer.twoDigitsNumber(chronometer.getSeconds())
  secDec.innerText=sec[0]
  secUni.innerText=sec[1]
  
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
minDec.innerText=printTime(0);
minUni.innerText=printTime(1);
secDec.innerText=printTime(3);
secUni.innerText=printTime(4);
}

function clearSplits() {
splits.innerHTML=" "
}

function setStopBtn() {
  chronometer.stopClick()
}

function setSplitBtn() {
let split= document.createElement('li')
split.innerHTML=`${chronometer.splitClick()}`
splits.appendChild(split)
}

function setStartBtn() {
  chronometer.startClick()
  printTime()
}

function setResetBtn() {
  chronometer.resetClick()
  minDec.innerText=0;
  minUni.innerText=0;
  secDec.innerText=0;
  secUni.innerText=0;
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if(btnLeft.className=='btn start'){
    btnLeft.innerText='STOP'
    btnLeft.className='btn stop'
    setStartBtn() 
  }
  else{
    btnLeft.className='btn start'
    btnLeft.innerText='START'
    setStopBtn() 
  }
}
);

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if(btnRight.className=='btn split'){
    btnRight.innerText='RESET'
    btnRight.className='btn reset'
    setSplitBtn() 
  }
  else{
    btnRight.className='btn split'
    btnRight.innerText='SPLIT'
    setResetBtn() 
  }

});
