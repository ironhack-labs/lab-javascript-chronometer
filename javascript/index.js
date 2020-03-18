const chronometer = new Chronometer();
let id = 0;

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
  id = setInterval(() => {
    printMinutes();
    printSeconds();
    printMilliseconds();
  }, 1000 / 100);

}

function printMinutes() {
  // ... your code goes here
  let minutes = chronometer.twoDigitsNumber(chronometer.getMinutes());
  
  minDec.innerHTML = minutes[0];
  minUni.innerHTML = minutes[1];
}

function printSeconds() {
  // ... your code goes here
  let seconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
  secDec.innerHTML = seconds[0];
  secUni.innerHTML = seconds[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
  let miliseconds = chronometer.twoDigitsNumber(chronometer.getMiliseconds());
  milDec.innerHTML = miliseconds[0];
  milUni.innerHTML = miliseconds[1];
}

function printSplit() {
  // ... your code goes here
  let li = document.createElement("li");
  li.innerHTML = chronometer.splitClick();
  splits.appendChild(li);
}

function clearSplits() {
  // ... your code goes here
  splits.innerHTML = "";
  
}

function setStopBtn() {
  // ... your code goes here
    btnLeft.classList.remove("start");
    btnLeft.classList.add("stop");
    btnLeft.innerHTML = "STOP";
}

function setSplitBtn() {
  // ... your code goes here
    btnRight.classList.remove("reset");
    btnRight.classList.add("split");
    btnRight.innerHTML = "SPLIT";
}

function setStartBtn() {
  // ... your code goes here
  btnLeft.classList.add("start");
  btnLeft.classList.remove("stop");
  btnLeft.innerHTML = "START";
}

function setResetBtn() {
  // ... your code goes here
  btnRight.classList.add("reset");
  btnRight.classList.remove("split");
  btnRight.innerHTML = "RESET";
}

function clearClock() {
      minUni.innerHTML = "0";
      minDec.innerHTML = "0";
      secDec.innerHTML = "0";
      secUni.innerHTML = "0";
      milDec.innerHTML = "0";
      milUni.innerHTML = "0";
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  // ... your code goes here
    if(btnLeft.classList.contains('start')){
      chronometer.startClick();
      setStopBtn();
      setSplitBtn();
      printTime();
    } else if(btnLeft.classList.contains('stop')) {
      chronometer.stopClick();
      clearInterval(id);
      setResetBtn();
      setStartBtn();
    }
    
  });
  
  // Reset/Split Button
  btnRight.addEventListener('click', () => {
    // ... your code goes here
    if(btnLeft.classList.contains('start')){
      chronometer.resetClick();
      clearSplits();
      clearClock();
      
    } else if(btnLeft.classList.contains('stop')) {
      printSplit();
    }
  });
