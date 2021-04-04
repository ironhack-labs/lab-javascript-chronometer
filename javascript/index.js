

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');
const splitsList = document.getElementById("splits");



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
  printMilliseconds();
}

function printMinutes() {
  let minutes = chronometer.getMinutes();
  let dec = Math.floor(minutes / 10);
  let uni = Math.floor(minutes % 10); 
  document.getElementById("minDec").innerText = dec;
  document.getElementById("minUni").innerText = uni;
}

function printSeconds() {
  let seconds = chronometer.getSeconds();
  let dec = Math.floor(seconds / 10);
  let uni = Math.floor(seconds % 10); 
  document.getElementById("secDec").innerText = dec;
  document.getElementById("secUni").innerText = uni;
}

// ==> BONUS
function printMilliseconds() {
  let ms = chronometer.getMiliseconds();
  let dec = Math.floor(ms / 10);
  let uni = Math.floor(ms % 10); 
  document.getElementById("milDec").innerText = dec;
  document.getElementById("milUni").innerText = uni;
}

function printSplit(split) {
  let newLi = document.createElement("LI");
  let liContent = document.createTextNode(split);
  newLi.appendChild(liContent);
  splitsList.appendChild(newLi);
}

function clearSplits() {
  splitsList.innerHTML = "";
    
}

function setStopBtn() {
  btnLeft.innerText = "STOP";
  btnLeft.classList = "btn stop";
}

function setSplitBtn() {
  btnRight.innerText = "SPLIT";
  btnRight.classList = "btn split";
}

function setStartBtn() {
  btnLeft.innerText = "START";
  btnLeft.classList = "btn start";
}

function setResetBtn() {
  btnRight.innerText = "RESET";
  btnRight.classList = "btn reset"; 
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if(chronometer.isStopped()){
    chronometer.startClick();
    setStopBtn();
    setSplitBtn();
  } else {
    chronometer.stopClick();
    setStartBtn();
    setResetBtn();
  } 
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if(chronometer.isStopped()){
    chronometer.resetClick();
    clearSplits ();
  } else {
    printSplit(chronometer.splitClick());
  } 
});



const chronometer = new Chronometer();
window.setInterval(printTime, 10);