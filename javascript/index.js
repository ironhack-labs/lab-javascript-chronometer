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
  if (chronometer.currentTime < 600) {
    minDec.innerText = 0;
    minUni.innerText = chronometer.getMinutes();
  } else {
    let time = chronometer.getMinutes().toString();
    let minutesDec = time.charAt(0);
    let minutesUni = time.charAt(1);
    minDec.innerHTML = Number(minutesDec);
    minUni.innerHTML = Number(minutesUni);
  }
}

function printSeconds() {
  if (chronometer.currentTime < 10) {
    secDec.innerText = 0;
    secUni.innerText = chronometer.getSeconds();
  } else {
    let time = chronometer.getSeconds().toString();
    let secondsDec = time.charAt(0);
    let secondsUni = time.charAt(1);
    secDec.innerHTML = Number(secondsDec);
    secUni.innerHTML = Number(secondsUni);
  }
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
  if (btnLeft.className === "btn start") {
    btnLeft.textContent = "STOP";
    btnLeft.className = "btn stop";
    btnRight.textContent = "SPLIT";
    btnRight.className="btn split";
    chronometer.startClick(printTime());
  } else {
    btnLeft.textContent = "START";
    btnLeft.className = "btn start";
    btnRight.textContent = "RESET";
    btnRight.className="btn reset";
    chronometer.stopClick();
  }
 
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if (btnRight.className === "btn reset")
  {
    if (btnLeft.className === "btn start") {chronometer.resetClick();}
  } else {
    chronometer.splitClick();
    printSplit()
  }
});
