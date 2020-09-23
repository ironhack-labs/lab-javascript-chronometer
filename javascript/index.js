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
  secUni.innerHTML = chronometer.getSeconds()

  // ... your code goes here
}

function printMinutes() {
  //My idea is that I need to use double digit function and somehow get the first and second numbers. 
  // I dont know how but for example, for minDec using [0] position of the 2 numbers
  //and for the minUni the [1] position.  I dont know how!!

  
  
    
  
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

  btnLeft.innerHTML ='STOP'
  btnLeft.setAttribute = ('class', 'btn stop')// wont change color, but split does. why?
  console.log ()
  
  // ... your code goes here
}

function setSplitBtn() {
  btnRight.innerHTML = ('SPLIT')
  btnRight.setAttribute ('class', 'btn split')
 
  // ... your code goes here
}

function setStartBtn() {
  btnLeft.innerHTML = 'START'
  btnLeft.setAttribute = ('class', 'btn start')
 
  
  // ... your code goes here
}

function setResetBtn() {
  btnRight.innerHTML = ('RESET')
  btnRight.setAttribute ('class', 'btn reset')
  
  
  // ... your code goes here
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if (btnLeft.innerHTML === 'START') {
    
    chronometer.startClick(printTime);
    setStopBtn();
    setSplitBtn();
    console.log ('start works')

  } else {
    chronometer.stopClick();//doesnt stop timer!
    setStartBtn();
    setResetBtn();
    console.log('stop works')
 
  }
});


// Reset/Split Button
btnRight.addEventListener('click', () => {
  if (btnRight.innerHTML === 'RESET') {
    chronometer.resetClick();
    clearSplits();
    console.log('reset works')
  } else {
    chronometer.splitClick();
    console.log('split works')
  }

});

