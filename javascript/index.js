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
  console.log('Hello')
  /*
  console.log('Google ma maman')
  secUni.innerHTML = Number(secUni.innerHTML) + 1
  */
  /*
  if(Number(secUni.innerHTML) > 9){
    secUni.innerHTML = 0
    secDec.innerHTML = Number(secDec.innerHTML) + 1
  }
  if(Number(secDec.innerHTML) > 5 && Number(secUni.innerHTML) > 9){
    secUni.innerHTML = 0
    secDec.innerHTML = 0
    secDec.innerHTML = Number(secDec.innerHTML) + 1
  }
  */
}

function printMinutes() {
  // ... your code goes here
}

function printSeconds() {
  // ... your code goes here
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
  btnLeft.innerHTML = 'STOP'
  btnLeft.className = 'btn stop'
}

function setSplitBtn() {
  // ... your code goes here
  btnRight.innerText = 'SPLIT'
  btnRight.className = 'btn split'
}

function setStartBtn() {
  // ... your code goes here
  btnLeft.innerText = 'START'
  btnLeft.className = 'btn start'
}

function setResetBtn() {
  // ... your code goes here
  btnRight.innerText = 'RESET'
  btnRight.className = 'btn reset'
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  // ... your code goes here
  if(btnLeft.innerText === 'START'){
    setStopBtn()
    chronometer.startClick(printTime)
    setSplitBtn()
  } else {
    setStartBtn()
    setResetBtn()
    chronometer.stopClick()
  }

  
 

  //console.log('left button works')
  //chronometer.startClick(printTime)
  //secUni.innerHTML = chronometer.currentTime
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  // ... your code goes here
  if(btnRight.innerText === 'RESET'){
    //setSplitBtn()
    chronometer.startClick(printTime)
    //setStopBtn()
  } else {
    //setResetBtn()
    //setStartBtn()
    chronometer.stopClick()
  }
  
});



