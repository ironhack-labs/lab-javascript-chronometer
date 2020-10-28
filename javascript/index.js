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
  


  // ... your code goes here
}


function printMinutes() {

 let minutes = chronometer.twoDigitsNumber(chronometer.getMinutes());
  //minUni.innerHTML = '';

  minDec.innerHTML = minutes[0];
  minUni.innerHTML = minutes[1];
  

  // ... your code goes here
}

function printSeconds() {

  let seconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
  //secUni.innerHTML = '';

  secDec.innerHTML = seconds[0];
  secUni.innerHTML = seconds[1];
  
  
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

if (  btnLeft.innerHTML === 'START') {
   chronometer.startClick(printTime)

   btnRight.innerHTML = 'SPLIT';
    
   btnRight.setAttribute("class", "btn split");

   btnLeft.innerHTML = 'STOP';

   btnLeft.setAttribute("class", "btn stop");

} else if (btnLeft.innerHTML ==='STOP'){
   chronometer.stopClick()

   btnRight.innerHTML = 'RESET';

   btnRight.setAttribute("class", "btn reset");

   btnLeft.innerHTML = 'START';

   btnLeft.setAttribute("class", "btn start");

}
  // ... your code goes here
});

// Reset/Split Button
btnRight.addEventListener('click', () => {

  

  if (btnRight.innerHTML === 'RESET') {

    btnRight.innerHTML = 'SPLIT';
    
    btnRight.setAttribute("class", "btn split");

  } else if (btnRight.innerHTML === 'SPLIT') {

    btnRight.innerHTML = 'RESET';

    btnRight.setAttribute("class", "btn reset");
  }



  // ... your code goes here
});
