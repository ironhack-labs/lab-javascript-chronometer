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
  let ol = document.getElementById("splits");
  let li = document.createElement("li");
  li.innerHTML = chronometer.splitClick();
  ol.appendChild(li)
}

function clearSplits() {
  let ol = document.getElementById("splits");
  ol.innerHTML = "";
  chronometer.resetClick();
  printTime();
}

function setStopBtn() {
  btnLeft.innerHTML = "STOP";
  btnLeft.setAttribute("class", "btn stop")
}

function setSplitBtn() {
  btnRight.innerHTML = "SPLIT";
  btnRight.setAttribute("class", "btn split")
}

function setStartBtn() {
  btnLeft.innerHTML = "START";
  btnLeft.setAttribute("class", "btn start")
}

function setResetBtn() {
  btnRight.innerHTML = "RESET";
  btnRight.setAttribute("class", "btn reset")
}

// Start/Stop Button
// ik zie de tijd lopen startClick
// ik zie de stop knop verschijnen setStopBtn
// ik zie de split knop verschijnen setSplitBtn
// ik zie de tijd geprint
btnLeft.addEventListener('click', () => {
  if(btnLeft.innerHTML === "START"){
    chronometer.startClick(printTime);
    setStopBtn();
    setSplitBtn();
  
      
  }else{
    
    chronometer.stopClick();
    setStartBtn();
    setResetBtn();
  }}
);

// Reset/Split Button
btnRight.addEventListener('click', () => {
 if(btnRight.innerHTML === "SPLIT"){
   printSplit()
 }else(
   clearSplits()
 )

  }
);

