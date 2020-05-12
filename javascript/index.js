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

let timeLoop;

function printTime() {
  timeLoop = setInterval(() => {
    let timestr = chronometer.splitClick();
    printMinutes(timestr.slice(0,2));
    printSeconds(timestr.slice(3,5));
  }, 1000);
}

function printMinutes(mins) {
  minDec.innerHTML = mins.slice(0,1);
  minUni.innerHTML = mins.slice(1,2);
}

function printSeconds(secs) {
  secDec.innerHTML = secs.slice(0,1);
  secUni.innerHTML = secs.slice(1,2);
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  let splitList = document.getElementById('splits');
  let newListItem = document.createElement('li');
  newListItem.innerText = chronometer.splitClick();
  newListItem.classList.add('split-item');
  splitList.appendChild(newListItem);
}

function clearSplits() {
  let list = document.getElementById('splits');
  var child = list.lastElementChild;  
        while (child) { 
            list.removeChild(child); 
            child = list.lastElementChild; 
        }
  chronometer.stopClick();
  chronometer.resetClick();
  clearInterval(timeLoop);
  printMinutes('00');
  printSeconds('00');
}

function setStopBtn() {
    btnLeft.innerHTML = 'STOP';
    btnLeft.classList.toggle('start');
    btnLeft.classList.toggle('stop');
    setResetBtn();
}

function setSplitBtn() {
  btnRight.innerHTML = 'RESET';
  btnRight.classList.toggle('reset');
  btnRight.classList.toggle('split');
}

function setStartBtn() {
    btnLeft.innerHTML = 'START';
    btnLeft.classList.toggle('start');
    btnLeft.classList.toggle('stop');
    setSplitBtn();
}

function setResetBtn() {
  btnRight.innerHTML = 'SPLIT';
  btnRight.classList.toggle('reset');
  btnRight.classList.toggle('split');
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {

  if (btnLeft.classList.contains('start')) {
    setStopBtn();
    chronometer.startClick();
    printTime();
  } else if (btnLeft.classList.contains('stop')) {
    setStartBtn();
    chronometer.stopClick();
  }
  //chronometer.startClick();
  //printTime();
  //chronometer.stopClick();
  //printSplit();

});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if (btnRight.classList.contains('reset')) {
      clearSplits();
  }

  if (btnRight.classList.contains('split')) {
    printSplit();
  }

});
