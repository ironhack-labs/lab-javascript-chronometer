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
  // ... your code goes here
  minUni.innerHTML = printMinutes()[1];
  minDec.innerHTML = printMinutes()[0];
  secUni.innerHTML = printSeconds()[1];
  secDec.innerHTML = printSeconds()[0];
  milUni.innerHTML = printMilliseconds()[1];
  milDec.innerHTML = printMilliseconds()[0];
}

function clearTime(){
  minUni.innerHTML = "0";
  minDec.innerHTML = "0";
  secUni.innerHTML = "0";
  secDec.innerHTML = "0";
  milUni.innerHTML = "0";
  milDec.innerHTML = "0";

  chronometer.resetClick();
}

function printMinutes() {
  // ... your code goes here
  return chronometer.twoDigitsNumber(chronometer.getMinutes());
}

function printSeconds() {
  // ... your code goes here
  return chronometer.twoDigitsNumber(chronometer.getSeconds());
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
  return chronometer.twoDigitsNumber(chronometer.getCentiSeconds());
}

function printSplit() {
  // ... your code goes here
  let splitLi = document.createElement("li");
  splitLi.innerHTML = chronometer.splitClick();
  splits.appendChild(splitLi);
}

function clearSplits() {
  // ... your code goes here
  splits.innerHTML='';
}

function setStopBtn() {
  // ... your code goes here
  btnLeft.innerHTML = "STOP";
}

function setSplitBtn() {
  // ... your code goes here
  btnRight.innerHTML = "SPLIT";
}

function setStartBtn() {
  // ... your code goes here
  btnLeft.innerHTML = "START";
}

function setResetBtn() {
  // ... your code goes here
  btnRight.innerHTML = "RESET";
}

// Start/Stop Button
let intervalId;
btnLeft.addEventListener('click', () => {

  // ... your code goes here
 if (btnLeft.classList[1]==="start"){
    setStopBtn();
    chronometer.startClick();
    intervalId = setInterval(printTime,10);
    btnRight.classList.toggle("reset");
    btnRight.classList.toggle("split");
    setSplitBtn();
 }else{
    setStartBtn();
    chronometer.stopClick();
    clearInterval(intervalId);
    btnRight.classList.toggle("reset");
    btnRight.classList.toggle("split");
    setResetBtn();
 }  
  
  btnLeft.classList.toggle("start");
  btnLeft.classList.toggle("stop");

});

// Reset/Split Button

btnRight.addEventListener('click', () => {
  // ... your code goes here
  if(btnRight.classList[1]==="split")printSplit();
  else {
    clearSplits();
    clearTime();
  }
  
});
