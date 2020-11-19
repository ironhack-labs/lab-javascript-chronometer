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

function printMinutes() {
  // ... your code goes here
  setInterval(() => {
    minUni.textContent = chronometer.twoDigitsNumber(chronometer.getMinutes()).slice(1);
    minDec.textContent = chronometer.twoDigitsNumber(chronometer.getMinutes()).slice(0,1);
  }, 1000);
}
  

function printSeconds() {
  setInterval(() => {
    secUni.textContent = chronometer.twoDigitsNumber(chronometer.getSeconds()).slice(1);
    secDec.textContent = chronometer.twoDigitsNumber(chronometer.getSeconds()).slice(0,1);
  }, 1000);
  
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
  printTime();
  if(btnLeft.className == "btn start"){
    chronometer.startClick();
    btnLeft.classList.replace("start","stop");
    btnLeft.textContent="STOP";
    if(btnRight.className == "btn reset"){
      btnRight.classList.replace("reset","split");
      btnRight.textContent="SPLIT";
    }
  }else{
    btnLeft.classList.replace("stop","start");
    chronometer.stopClick();
    btnLeft.textContent="START";
      if(btnRight.className == "btn split"){
        btnRight.classList.replace("split","reset");
        btnRight.textContent="RESET";
      }
  }
});
btnRight.addEventListener("click", () => {
  let createLis = document.createElement("li");
  createLis.textContent = `${chronometer.splitClick()}`;
  if(btnRight.className == "btn split") {
    splits.appendChild(createLis);
  }else {
    chronometer.resetClick();
    clearSplits();
    splits.querySelectorAll('*').forEach(n => n.remove());
  }
});
