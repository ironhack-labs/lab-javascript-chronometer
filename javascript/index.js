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
  let split = printSplit();
  split.innerHTML = chronometer.splitClick();
  document.getElementById('splits').appendChild(split);
}

function printMinutes() {
  
  let interval = setInterval(function() {
    let mins = chronometer.getMinutes();
    
    if (mins > 59) {
      mins = 0;
    } else if (mins === 0) {
      minDec.innerHTML = 0;
      minUni.innerHTML = 0;
    } else if (mins > 0 && mins < 10) {
      minUni.innerHTML = mins;
    } else {
      minDec.innerHTML = Math.floor((mins / 10));
      minUni.innerHTML = mins % 10;
    }
    
  }, 60000);

  return interval;
}

function printSeconds() {

  let interval = setInterval(function() {
    let secs = chronometer.getSeconds();
    
    if (secs > 59) {
      secs = 0;
    } else if (secs === 0) {
      secDec.innerHTML = 0;
      secUni.innerHTML = 0;
    } else if (secs > 0 && secs < 10) {
      secUni.innerHTML = secs;
    } else {
      secDec.innerHTML = Math.floor((secs / 10));
      secUni.innerHTML = secs % 10;
    }
    
  }, 1000);
  return interval;
}


// ==> BONUS
function printMilliseconds() {
  
  let interval = setInterval(function() {
    let miliSecs = chronometer.getMiliseconds();
    
    if (miliSecs > 99) {
      chronometer.miliSeconds = 0;
      miliSecs = 0;
    } else if (miliSecs === 0) {
      milDec.innerHTML = 0;
      milUni.innerHTML = 0;
    } else if (miliSecs > 0 && miliSecs < 10) {
      milUni.innerHTML = chronometer.getMiliseconds();
    } else {
      milDec.innerHTML = Math.floor((miliSecs / 10));
      milUni.innerHTML = miliSecs % 10;
    }
    
  }, 10);
  return interval;
}

function printSplit() {
  return document.createElement('li');
}

function clearSplits() {
  document.getElementById('splits').innerHTML = '';
}

function setStopBtn() {
  btnLeft.innerHTML = 'STOP';
}

function setSplitBtn() {
  btnRight.innerHTML = 'SPLIT';
}

function setStartBtn() {
  btnLeft.innerHTML = 'START';
}

function setResetBtn() {
  btnRight.innerHTML = 'RESET';
}

function clear() {
  
  chronometer.currentTime = 0;
  chronometer.miliSeconds = 0;

  
  minDec.innerHTML = 0;
  minUni.innerHTML = 0;
  secDec.innerHTML = 0;
  secUni.innerHTML = 0;
  milDec.innerHTML = 0;
  milUni.innerHTML = 0;
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {

  btnLeft.classList.toggle('stop');
  btnRight.classList.toggle('split');

  if (btnLeft.innerHTML === 'START') {
    timeInterval = chronometer.startClick();
    milSecInterval = printMilliseconds();
    secsInterval = printSeconds();
    minInterval = printMinutes();
    setStopBtn();
    } else {
      chronometer.stopClick();
      setStartBtn();
    }

    if (btnRight.innerHTML === 'RESET') {
      setSplitBtn();
    } else {
      setResetBtn();
    }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
 
  if (btnRight.innerHTML === 'RESET') {
    clear();
    clearSplits();
  } else {
    printTime();
  
  }
});
