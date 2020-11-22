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
  // the minutes were divided so the printMinutes() function must be too
  minDec.innerHTML = printMinutes().split('')[0];
  minUni.innerHTML = printMinutes().split('')[1];
  //idem for the seconds
  secDec.innerHTML = printSeconds().split('')[0];
  secUni.innerHTML = printSeconds().split('')[1];
}

function printMinutes() {
  return chronometer.twoDigitsNumber(chronometer.getMinutes());
}

function printSeconds() {
  return chronometer.twoDigitsNumber(chronometer.getSeconds());
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  
    const li = document.createElement("li"); // create a list
    li.innerHTML = chronometer.splitClick(); // display the time before split
    splits.appendChild(li); // link it to the splits element
  
}

function clearSplits() {
  
    splits.innerHTML = ""; // clear the split element
    minDec.innerHTML = chronometer.resetClick(); // currentTime put at 0
    minUni.innerHTML = chronometer.resetClick(); // idem
    secUni.innerHTML = chronometer.resetClick(); // idem
    secDec.innerHTML = chronometer.resetClick(); // idem
  
}

function setStopBtn() {
  btnLeft.classList.remove("start"); 
  btnLeft.classList.add("stop");
  btnLeft.innerHTML = "STOP";
  // btnLeft.classList.toggle("stop");
  
  
}

function setSplitBtn() {
  btnRight.classList.remove("reset"); 
  btnRight.classList.add("split");
  // btnRight.classList.toggle("split");
  btnRight.innerHTML = "SPLIT";
}

function setStartBtn() {
  
  btnLeft.classList.remove("stop"); 
  btnLeft.classList.add("start");
  btnLeft.innerHTML = "START";
  // btnLeft.classList.toggle("start"); 
  
  
}

function setResetBtn() {
  // btnRight.classList.toggle("reset");
  btnRight.classList.remove("split"); 
  btnRight.classList.add("reset");
  btnRight.innerHTML = "RESET";
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if (btnLeft.innerHTML == "START") {
    
    chronometer.startClick(printTime);
    setStopBtn();
    setSplitBtn();
    
  }
  else if (btnLeft.innerHTML == "STOP") { 
    setStartBtn();
    setResetBtn();
    chronometer.stopClick();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if (btnRight.innerHTML == "SPLIT") {
  setResetBtn();
  printSplit();
  
} else if (btnRight.innerHTML == "RESET") {
  
  setSplitBtn();
  clearSplits();
}
});
