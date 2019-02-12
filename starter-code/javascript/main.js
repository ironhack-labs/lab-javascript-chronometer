var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');

function printTime() {
  printSeconds();
  printMinutes();
  printMilliseconds();
}

function printMinutes() {
  let min = chronometer.setMinutes();
  let strMin = chronometer.twoDigitsNumber(min);

  minDec.innerText = strMin[0];
  minUni.innerText = strMin[1];
}

function printSeconds() {
 let sec = chronometer.setSeconds();
 let strSec = chronometer.twoDigitsNumber(sec);

 secDec.innerText = strSec[0];
 secUni.innerText = strSec[1];
}

function printMilliseconds() {
  let mil = chronometer.setSeconds();
  let strMil = chronometer.twoDigitsNumber(mil);

 milDec.innerText = strMil[0];
 milUni.innerText = strMil[1];
}

function printSplit() {
  let splits = document.getElementById('splits')
  let splitLi = document.createElement('li');
  
  splitLi.innerText = `${minDec.innerText} ${minUni.innerHTML} : ${secDec.innerText} ${secUni.innerText} : ${milDec.innerText} ${milUni.innerText}`
  splits.appendChild(splitLi);
}

function clearSplits() {
  let splits = document.getElementById('splits');
  splits.innerText = "";

}

function setStopBtn() {
  btnLeft.innerText = "STOP";
  btnLeft.className = "btn stop";
}

function setSplitBtn() {
  btnRight.className = "btn split";
  btnRight.innerText = "SPLIT";
}

function setStartBtn() {
  btnLeft.className = "btn start";
  btnLeft.innerText = "START";
}

function setResetBtn() {
  btnRight.className = "btn reset";
  btnRight.innerText = "RESET";
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  if (btnLeft.className === "btn start") {
    setStopBtn()
    setSplitBtn()
    chronometer.startClick();
    setInterval(printTime, 1)
  } else if(btnLeft.className === "btn stop"){
    setStartBtn();
    setResetBtn();
    chronometer.stopClick()
    }

});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if(btnRight.className === "btn split") {
    printSplit();
    
  } else if(btnRight.className === "btn reset") {
    clearSplits();
    chronometer.resetClick();
    
  }
})



