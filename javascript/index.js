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
    printMinutes();
    printSeconds();     
}

function printMinutes() {
  minDec.innerText = String(chronometer.twoDigitsNumber(chronometer.getMinutes()))[0];
  minUni.innerText = String(chronometer.twoDigitsNumber(chronometer.getMinutes()))[1];
}

function printSeconds() {
  secDec.innerText = String(chronometer.twoDigitsNumber(chronometer.getSeconds()))[0];
  secUni.innerText = String(chronometer.twoDigitsNumber(chronometer.getSeconds()))[1]; 
}

// ==> BONUS
function printMilliseconds(milliseconds) {
  milDec.innerText = String(chronometer.twoDigitsNumber(milliseconds))[0]; 
  milUni.innerText = String(chronometer.twoDigitsNumber(milliseconds))[1]; 

}

function printSplit() {
  splits.innerHTML += `<li>${chronometer.splitClick()}</li>`
}

function clearSplits() {
  document.getElementById('splits').innerHTML = ""
}

function setStopBtn() {
  chronometer.startClick(printTime, printMilliseconds);
  document.getElementById("btnLeft").className = "btn stop";
   btnLeft.innerText = "STOP";
}

function setSplitBtn() {
  document.getElementById("btnRight").className = "btn split";
  btnRight.innerText = "SPLIT";
}

function setStartBtn() {
  chronometer.stopClick();
  document.getElementById("btnLeft").className = "btn start";
  btnLeft.innerText = "START";
}

function setResetBtn() {
  document.getElementById("btnRight").className = "btn reset";
  btnRight.innerText = "RESET";
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  
  if (btnLeft.className === "btn start") {
    
    setStopBtn();
    setSplitBtn()    
    
  } else {

    setStartBtn()
    setResetBtn()

  }  
  
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if (btnRight.className === "btn reset") {

    chronometer.resetClick();
    clearSplits()

  } else {

    printSplit();  

  }  
});
