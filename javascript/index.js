const chronometer = new Chronometer();

// ----------------------------

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
  
  // ... your code goes here llama a min i sec
}

function printMinutes() {
  
  // ... your code goes here agafar chrono i obtindre minut
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
  btnLeft.innerHTML = "STOP";
  btnLeft.setAttribute('class', 'btn stop');
};


function setSplitBtn() {
  btnRight.innerHTML = "SPLIT";
  btnRight.setAttribute('class', 'btn split');
};

function setStartBtn() {
  btnLeft.innerHTML = "START";
  btnLeft.setAttribute('class', 'btn start');
};

function setResetBtn() {
  btnRight.innerHTML = "RESET";
  btnRight.setAttribute('class', 'btn reset');
};

// Start/Stop Button
btnLeft.addEventListener('click', (event) => {
  if (btnLeft.innerHTML === "START"){
    chronometer.startClick();
    setStopBtn();
    setSplitBtn();
  } else {
    chronometer.stopClick();
    setStartBtn();
    setResetBtn();
  };
});


// Reset/Split Button
btnRight.addEventListener('click', () => {
  // ... your code goes here
});
