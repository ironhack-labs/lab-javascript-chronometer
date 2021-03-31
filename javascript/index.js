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
  let updateMinutes = chronometer.splitClick()
  minDec.innerHTML = updateMinutes[0]
  minUni.innerHTML = updateMinutes[1]
}

function printSeconds() {
  let updateSeconds = chronometer.splitClick()
  secDec.innerHTML = updateSeconds[3]
  secUni.innerHTML = updateSeconds[4]
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  const splitContent = document.createElement('li');
  splitContent.innerHTML = chronometer.splitClick();
  splits.appendChild(splitContent);
}

function clearSplits() {
  splits.innerHTML ="";
}

function setStopBtn() {
  btnLeft.className = "btn stop"
  btnLeft.textContent ="STOP"
  
  
  
}

function setSplitBtn() {
  btnRight.textContent ="SPLIT"
  btnRight.className ="btn split"
  
  
}

function setStartBtn() {
  btnLeft.className = "btn start"
  btnLeft.textContent ="START"
  
  
  
}

function setResetBtn() {
  btnRight.textContent ="RESET";
  btnRight.className ="btn reset"
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  printTime();
  if (btnLeft.classList.contains("start")){
    setStopBtn();
    setSplitBtn();
    chronometer.startClick(printTime);
  } else{
    setStartBtn(); 
    setResetBtn();
    chronometer.stopClick()
  }
  
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if (btnRight.textContent === 'RESET'){
    clearSplits();
    chronometer.resetClick()
    printTime()
  }else{
    printSplit();
  }
});
