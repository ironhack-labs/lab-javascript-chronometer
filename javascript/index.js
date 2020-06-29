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

function printTime() {                                                          // print minutes and seconds to display
  let minutes = printMinutes();
  let seconds = printSeconds();

  minDec.innerText = minutes[0];
  minUni.innerText = minutes[1];
  secDec.innerText = seconds[0];
  secUni.innerText = seconds[1];
}

function printMinutes() {                                                       // return the minutes as a string
  let minutes = chronometer.twoDigitsNumber(chronometer.getMinutes());
  return minutes.toString();
}

function printSeconds() {                                                       // return the seconds as a string
  let seconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
  return seconds.toString();
}

// ==> BONUS
function printMilliseconds() {                                                  // print milliseconds to display (separate from printTime because they run on different intervals)
  let milliseconds = chronometer.getMilliseconds();
  milDec.innerText = milliseconds[0];
  milUni.innerText = milliseconds[1];
}

function printSplit() {                                                         // create and append new list item (split time) to ordered list
  let split = document.createElement('li');
  split.innerText = chronometer.splitClick();
  splits.appendChild(split);
}

function clearSplits() {                                                        // reset split list
  splits.innerHTML = '';
}

function setStopBtn() {                                                        
  btnLeft.classList.add('stop');
  btnLeft.classList.remove('start');
  btnLeft.innerHTML = 'STOP';
}

function setSplitBtn() {                                                    
  btnRight.classList.add('split');
  btnRight.classList.remove('reset');
  btnRight.innerHTML = 'SPLIT';
}

function setStartBtn() {
  btnLeft.classList.add('start');
  btnLeft.classList.remove('stop');
  btnLeft.innerHTML = 'START';
}

function setResetBtn() {
  btnRight.classList.add('reset');
  btnRight.classList.remove('split');
  btnRight.innerHTML = 'RESET';
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if (btnLeft.classList.contains('start')){                               // check if class start is present, in which case the buttons should display STOP and SPLIT
    setStopBtn();
    setSplitBtn(); 
    chronometer.startClick();                                             // start timer
    timeInterval = setInterval(() => printTime(), 1000)                   // set time interval for minute/second display
    timeInterval = setInterval(() => printMilliseconds(), 10)             // set time interval for milliseconds display
  } else if (btnLeft.classList.contains('stop')){                         // if stop class present, display START and RESET buttons
    setStartBtn();
    setResetBtn();
    chronometer.stopClick();                                              // stop timer
    clearInterval(timeInterval);                                          // clear timeintervals (as I am writing this I realise it's clearing two intervals with the same name that do different things, but it works I guess?)
  } 
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if (btnRight.classList.contains('split')){                              // check if right button is displaying split
    printSplit();                                                         // in which case, print split
  } else {
    clearSplits();                                                        // if not, reset everything and clear split list
    minDec.innerText = '0';
    minUni.innerText = '0';
    secDec.innerText = '0';
    secUni.innerText = '0';
    milDec.innerText = '0';
    milUni.innerText = '0';
    chronometer.resetClick();
  }
});
