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
 minUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[1]
 minDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[0]
}

function printSeconds() {
  secUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[1]
  secDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[0]
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  
}

function setStopBtn() {
  btnLeft.innerHTML = 'stop'
  btnLeft.className = 'btn stop'
}

function setSplitBtn() {
  btnLeft.innerHTML = 'split'
  btnLeft.className = 'btn split'
}

function setStartBtn() {
  btnLeft.innerHTML = 'start'
  btnLeft.className = 'btn start'
}

function setResetBtn() {
  btnLeft.innerHTML = 'reset'
  btnLeft.className = 'btn reset'
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if([...btnLeft.classList].includes("start")){
    chronometer.startClick()
    printTime()
    setStartBtn()
  } else{ 
    setStopBtn
    chronometer.stopClick()
  }

  })
  
  /*[...btnLeft.classList].includes("stop")
  btnLeft.className = 'start'
  btnLeft.classList.toggle('start')
  chronometer.stopClick()
  btnLeft.classList.toggle('stop')
  chronometer.startClick()*/

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if([...btnLeft.classList].includes("reset")){
    chronometer.resetClick()
  } else{ 
    
  }
  })

/*
  // Start/Stop Button
btnLeft.addEventListener("click", () => {
  if (btnLeft.className == "btn start") {
    setStartBtn();
    chronometer.startClick();
    printTime();
  } else {
    setStopBtn();
    chronometer.stopClick();
  }
});
// Reset/Split Button
btnRight.addEventListener("click", () => {
  if (btnRight.className == "btn reset") {
    setResetBtn();
  } else {
    setSplitBtn();
  }
});
*/