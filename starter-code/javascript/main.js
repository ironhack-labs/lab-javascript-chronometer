let chronometer = new Chronometer();
let btnLeft     = document.getElementById('btnLeft');
let btnRight    = document.getElementById('btnRight');
let minDec      = document.getElementById('minDec');
let minUni      = document.getElementById('minUni');
let secDec      = document.getElementById('secDec');
let secUni      = document.getElementById('secUni');
let milDec      = document.getElementById('milDec');
let milUni      = document.getElementById('milUni');

let listaSplits = document.getElementById('splits');

let isRunning = false;


function printTime() {
  setInterval(() => {
    printSeconds()
    printMinutes()
    printMilliseconds()
  }, 10)
  

}

function printMinutes() {
  let arrMin = chronometer.twoDigitsNumber(chronometer.getMinutes()).split('')
  minUni.innerText = arrMin[1]
  minDec.innerText = arrMin[0]
}

function printSeconds() {
  let arrSec = chronometer.twoDigitsNumber(chronometer.getSeconds()).split('')
  secUni.innerText = arrSec[1]
  secDec.innerText = arrSec[0]
}

function printMilliseconds() {
  let miliSec = null;
  miliSec = chronometer.getMiliSeconds().split('')
  milUni.innerText = miliSec[1]
  milDec.innerText = miliSec[0]
}

function printSplit() {
  let capturaInfo = `${minDec.innerHTML}${minUni.innerHTML} : ${secDec.innerHTML}${secUni.innerHTML} : ${milDec.innerHTML}${milUni.innerHTML}`
  let captura = document.createElement('li')
  captura.innerHTML = capturaInfo
  listaSplits.append(captura)
}

function clearSplits() {
  listaSplits.innerHTML= null;
}

function setStopBtn() {
  chronometer.stopClick()
}

function setSplitBtn() {
  printSplit()
}

function setStartBtn() {
  chronometer.startClick()
  printTime()
}

function setResetBtn() {
  chronometer.resetClick()
  milUni.innerText = "0"
  milDec.innerText = "0"
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  if(isRunning){
    setStopBtn()
    isRunning = false;
  }else {
    setStartBtn()
    isRunning = true;
  }
  if(btnLeft.firstChild.data === "START"){
    btnLeft.classList.toggle('stop')
    btnLeft.firstChild.data = "STOP"
    btnRight.classList.toggle('split')
    btnRight.firstChild.data = "SPLIT"
  }else {
    btnLeft.classList.toggle('stop')
    btnLeft.firstChild.data = "START"
    btnRight.classList.toggle('split')
    btnRight.firstChild.data = "RESET"
  }
  
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if(btnRight.firstChild.data === "RESET"){
    clearSplits()
    setResetBtn()    
  }else {
    setSplitBtn()
  }
});
