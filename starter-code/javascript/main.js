
const chronometer = new Chronometer();
const btnLeft     = document.getElementById('btnLeft');
const btnRight    = document.getElementById('btnRight');
const minDec      = document.getElementById('minDec');
const minUni      = document.getElementById('minUni');
const secDec      = document.getElementById('secDec');
const secUni      = document.getElementById('secUni');
const milDec      = document.getElementById('milDec');
const milUni      = document.getElementById('milUni');

// Start/Stop Button
btnLeft.addEventListener('click', function () {

  if (btnLeft.className === "btn start") {
    chronometer.startClick()
    printTime()
    btnLeft.className = "btn stop"
    btnLeft.innerHTML = "STOP"
    btnRight.className = "btn split"
    btnRight.innerHTML = "SPLIT"
    
  }
  else  {
    btnLeft.className = "btn start"
    btnLeft.innerHTML = "START"
    btnRight.className = "btn reset"
    btnRight.innerHTML = "RESET"
  
  
  }
  
  });
  
  // Reset/Split Button
  btnRight.addEventListener('click', function () {
    //if (btnLeft.className === "btn stop") {
    //  btnRight.className = "btn split" 
    //  btnRight.innerHTML = "SPLIT"
    //} else {
    //  btnRight.className = 'btn reset'
    //  btnRight.innerHTML = "RESET"
    //}
  
  });
  

function printTime() {
  printMinutes()
  printSeconds()
}

function printMinutes() {
    setInterval(() => {
    minDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[0]
    minUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[1]
  
    },60000)

  

}

function printSeconds() {
  setInterval(() => {
    secDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[0]
    secUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[1]
  
  },1000)
    
}

function printMilliseconds() {
  setInterval(() => {
    milDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[0]
    milUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[1]
  
  },10)
}

function printSplit() {

}

function clearSplits() {

}

function setStopBtn() {

}

function setSplitBtn() {

}

function setStartBtn() {
  
}

function setResetBtn() {

}