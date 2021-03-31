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
 let min= chronometer.twoDigitsNumber(chronometer.getMinutes()) 
 minDec.innerText = min[0]
 minUni.innerText = min[1]
}

function printSeconds() {
let sec = chronometer.twoDigitsNumber(chronometer.getSeconds()) 
  secDec.innerText = sec[0]
  secUni.innerText = sec[1]
}

// ==> BONUS
function printMilliseconds() {
  let mil = 
  milDec.innerText = mil[0]
  milUni.innerText = mil[1]
}

function printSplit() {
  splits.innerHTML += `<li>${chronometer.splitClick()}</li>`  
  }

function clearSplits() {
  splits.innerHTML = ``
}

function setStopBtn() {
  btnLeft.innerText = 'STOP'
  btnLeft.classList.remove('start');
  btnLeft.classList.add('stop');
}

function setSplitBtn() {
  btnRight.innerText = 'SPLIT'
  btnRight.setAttribute('class','btn split')
}

function setStartBtn() {
  btnLeft.innerText = 'START'
  btnLeft.classList.remove('stop');
  btnLeft.classList.add('start');
 
}

function setResetBtn() {
  btnRight.innerText = 'RESET'
  btnRight.setAttribute('class','btn reset');
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if(btnLeft.innerText == 'STOP'){
    setStartBtn();
    setResetBtn();
    chronometer.stopClick();
  }else{
    setStopBtn();
    setSplitBtn();
    chronometer.startClick(printTime)
  }
  
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if(btnRight.innerText =='RESET'){
    chronometer.resetClick();
    printTime()
    clearSplits();
  } else if (btnRight.innerText ='SPLIT'){
    printSplit()
  }

});

