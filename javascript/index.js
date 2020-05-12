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
  minDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[0];
  minUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[1];
}

function printSeconds() {
  secDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[0];
  secUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  let liSplit = document.createElement('li');
  liSplit.innerHTML = chronometer.splitClick();
  let placeSplitHere = document.querySelector('#splits');
  placeSplitHere.appendChild(liSplit);
}

function clearSplits() {
  if (document.querySelectorAll('#splits li')[0]) {
    let allSplitElements = document.querySelectorAll('#splits li');
    let parent = document.querySelector('#splits');
    for (let i = 0; i < allSplitElements.length; i++) {
      parent.removeChild(allSplitElements[i]);
    }
  }
}

function setStopBtn() {
  btnLeft.style.backgroundColor = "red";
  btnLeft.innerHTML = "STOP";
}

function setSplitBtn() {
  btnRight.style.backgroundColor = "#0851ab";
  btnRight.innerHTML = "SPLIT"
}

function setStartBtn() {
  btnLeft.style.backgroundColor = "green";
  btnLeft.innerHTML = "START";
}

function setResetBtn() {
  btnRight.style.backgroundColor = "#908e8e";
  btnRight.innerHTML = "RESET";
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if(btnLeft.innerText === "START"){
    chronometer.startClick(printTime);
    setStopBtn();
    setSplitBtn();
    printMinutes();
    printSeconds();
  } else {
    chronometer.stopClick();
    setStartBtn();
    setResetBtn();
  }
  
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if(btnRight.innerHTML === "RESET"){
    minDec.innerHTML = "0";
    minUni.innerHTML = "0";
    secDec.innerHTML = "0";
    secUni.innerHTML = "0";
    clearSplits();
  } else {
    printSplit();
  }
});
