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
  printMinutes()
  printSeconds()
}

function printMinutes() {
  // ... your code goes here
  const minutes=chronometer.twoDigitsNumber(chronometer.getMinutes())
  minDec.textContent = minutes[0]
  minUni.textContent = minutes[1]
}

function printSeconds() {
  // ... your code goes here
  const seconds=chronometer.twoDigitsNumber(chronometer.getSeconds())
  secDec.textContent = seconds[0]
  secUni.textContent = seconds[1]
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  // ... your code goes here
  // document.getElementById('btnLeft').removeClass('btn.start')
  // document.getElementById('btnLeft').addClass('btn.stop')
  //document.getElementByClass('btn start').classList.toggle('btn stop')
  btnLeft.classList.toggle("stop")
  

  if (btnLeft.innerHTML==="START"){
    btnLeft.innerHTML="STOP"
    chronometer.startClick(printTime)

  }else{
    btnLeft.innerHTML="START"
    chronometer.stopClick()
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  // ... your code goes here
  btnRight.classList.toggle("split")

  

  if (btnRight.innerHTML==="RESET"){
    btnRight.innerHTML="SPLIT"
    chronometer.resetClick()

  }else{
    btnRight.innerHTML="RESET"
    chronometer.splitClick()
  }
});
