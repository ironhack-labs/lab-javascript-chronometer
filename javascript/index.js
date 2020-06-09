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
let list = document.querySelector("ol");

function printTime() {
  setInterval(printSeconds, 1000)
  setInterval(printMinutes, 60000)

}

function printMinutes() {
  minDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[0]
  minUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[1]
}

function printSeconds() {
  secDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[0]
  secUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[1]
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
let flag1 = true;
btnLeft.addEventListener('click', (e) => {
  e.target.classList.toggle("stop", flag1);
  btnRight.classList.toggle("split", true)
  
  if(flag1) {
    e.target.innerHTML = "STOP"
    btnRight.innerHTML = "SPLIT"
    chronometer.startClick(printTime);

    
  } else {
    e.target.innerHTML = "START"
    btnRight.classList.toggle("split", false)
    btnRight.innerHTML = "RESET"
    chronometer.stopClick();
  } 
  flag1 = !flag1;
});

// Reset/Split Button
let flag2 = true;
btnRight.addEventListener('click', (e) => {
  if([...e.target.classList].includes("split")) {
    const newLi = document.createElement("li");
    newLi.innerHTML = chronometer.splitClick(chronometer.getMinutes(), chronometer.getSeconds())
    list.appendChild(newLi)
  } else {
    chronometer.resetClick();
    document.querySelectorAll("li").forEach(li => li.remove())
  } 
});

