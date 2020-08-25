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
  minDec = chronometer.twoDigitsNumber(getMinutes())
  // ... your code goes here
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

    if (btnLeft.className ==='btn start') {

      chronometer.startClick() //call the Chronometer startClick method if the button has the start class

      btnLeft.classList.add('stop') //cambiar la clase de btnLeft quitar start y poner stop 
      btnLeft.classList.remove('start')

      btnLeft.innerText = 'STOP'  //cambiar el texto de btnLeft a STOP
      
      btnRight.classList.add('split')
      btnRight.classList.remove('reset')

      btnRight.innerText = 'SPLIT'


    }

    else{
      chronometer.stopClick()

      btnLeft.classList.add('start') //cambiar la clase de btnLeft quitar start y poner stop 
      btnLeft.classList.remove('stop')

      btnLeft.innerText = 'START'  //cambiar el texto de btnLeft a STOP
      
      btnRight.classList.add('reset')
      btnRight.classList.remove('split')

      btnRight.innerText = 'RESET'
      //cambiar la clase de btnLeft quitar stop y poner start
      //cambiar el texto de btnLeft a START
      //cambiar la clase de btnRight a reset
      //cambiar el texto de btnRight a SPLIT
    }




  
  // ... your code goes here
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  // ... your code goes here
});
