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

// function printMinutes() {
//   let minutes =  chronometer.getMinutes();
//   minUni.innerHTML = 
//   minDec.innerHTML =
// }

// function printSeconds() {
// let seconds = chronometer.getseconds()
//   secUni.innerHTML = 
//   secDec.innerHTML = 


// }

// ==> BONUS
function printMilliseconds() {

  
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  btnLeft.className = "btn stop";
  btnLeft.textContent = "STOP"


  // ... your code goes here
}

function setSplitBtn() {
  btnRight.className = "btn reset";
  btnRight.textContent = "SPLIT";
  
}

function setStartBtn() {
  btnLeft.className = "btn start";
  btnLeft.textContent = "START"
}

function setResetBtn() {
btnRight.className = "btn reset";
btnRight.textContent = "RESET"


  // ... your code goes here
}


// Start/Stop Button
btnLeft.addEventListener('click', () => {

  if (btnLeft.classList.contains("start")) {
    setStopBtn() 
    setSplitBtn()
    chronometer.startClick(printTime)

  } else { 
    
    setStartBtn()
    setResetBtn();
    chronometer.stopClick();
  }


});


// Reset/Split Button
btnRight.addEventListener('click', () => {
 
 if (btnRight.classList.contains("split")) {
  
  printSplit(); 

 } else { clearSplits ()}
 
});

