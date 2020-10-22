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
  // ... your code goes here
  printMinutes();
  printSeconds();  
}

function printMinutes() {
  // ... your code goes here
  var minutos = chronometer.twoDigitsNumber(chronometer.getMinutes());
  minDec.innerHTML = minutos[0];
  minUni.innerHTML = minutos[1];
}

function printSeconds() {
  // ... your code goes here
  var segundos = chronometer.twoDigitsNumber(chronometer.getSeconds());
  secDec.innerHTML = segundos[0];
  secUni.innerHTML = segundos[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit(time) {

  let newSplit = document.createElement("li")

  newSplit.innerHTML = time

  splits.appendChild(newSplit)

}


function clearSplits() {
  
  splits.innerHTML = ""

}

function setStopBtn() {
  
  btnLeft.innerHTML = "STOP";
  btnLeft.setAttribute('class', 'btn stop');
  

}

function setSplitBtn() {

  btnRight.innerHTML = "SPLIT"
  btnRight.setAttribute('class', 'btn split')

}

function setStartBtn() {

  btnLeft.innerHTML = "START";
  btnLeft.setAttribute('class', 'btn start');
  
}

function setResetBtn() {
  
  btnRight.innerHTML = "RESET";
  btnRight.setAttribute('class', 'btn reset');

}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if (btnLeft.innerHTML == "START") {
    chronometer.startClick();
    setStopBtn();
    setSplitBtn()
  } else {
    chronometer.stopClick();
    setStartBtn();
    setResetBtn() 
  }

});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  
  if (btnRight.innerHTML == "RESET") {
    chronometer.resetClick()
    clearSplits()

  } else {
    printSplit(chronometer.splitClick())
    
  }

});
