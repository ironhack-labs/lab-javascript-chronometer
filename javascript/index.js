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
  printSeconds();
  printMinutes();

  window.requestAnimationFrame(printTime); // Like the call back without the error on Jasmin
}

function printMinutes() {
  let minutes = chronometer.twoDigitsNumber(chronometer.getMinutes());
  minDec.innerHTML = minutes[0];
  minUni.innerHTML = minutes[1];
}

function printSeconds() {
  let seconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
  secDec.innerHTML = seconds[0];
  secUni.innerHTML = seconds[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  const split = chronometer.splitClick();
  const node = document.createElement("LI"); 
  const textNode = document.createTextNode(split); 
  node.appendChild(textNode); 
  splits.appendChild(node);
}

function clearSplits() {
  if (splits.hasChildNodes()) {
    splits.removeChild(splits.childNodes[0]);
    clearSplits();
  }
}

function setStopBtn() {
  btnLeft.innerHTML = "STOP";
  btnLeft.setAttribute("class", "btn stop");
}

function setSplitBtn() {
  btnRight.innerHTML = "SPLIT";
  btnRight.setAttribute("class", "btn split");
}

function setStartBtn() {
  btnLeft.innerHTML = "START";
  btnLeft.setAttribute("class", "btn start");
}

function setResetBtn() {
  btnRight.innerHTML = "RESET";
  btnRight.setAttribute("class", "btn reset");
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if (btnLeft.getAttribute("class")=== "btn start"){ 
    chronometer.startClick();
    printTime();
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
  if (btnRight.getAttribute("class")=== "btn reset"){
    chronometer.resetClick();
    clearSplits();
  } else {
    printSplit();
  }
});
