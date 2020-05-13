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
  // ... your code goes here
}

function printMinutes() {
  let minutes = chronometer.twoDigitsNumber(chronometer.getMinutes());
  minDec.innerHTML = minutes[0];
  minUni.innerHTML=minutes[1];
  // ... your code goes here
}

function printSeconds() {
  let seconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
  secDec.innerHTML = seconds[0]
  console.log('print seconds')
  secUni.innerHTML = seconds[1];
  // ... your code goes here
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  let listSplits = document.getElementById('splits');
  let newSplitForList = document.createElement('li');
  newSplitForList.innerHTML=chronometer.splitClick();
  listSplits.appendChild(newSplitForList);

  // ... your code goes here
}

function clearSplits() {
  let list = document.getElementById('splits');
  var last = list.lastElementChild;  
      while (last) { 
          list.removeChild(last); 
          last = list.lastElementChild; 
      }
  chronometer.stopClick();
  chronometer.resetClick();
  clearInterval(loop);
  printMinutes('00');
  printSeconds('00');
  // ... your code goes here
}

function setStopBtn() {
  btnLeft.innerHTML = 'STOP';
  btnLeft.classList.toggle('start');
  btnLeft.classList.toggle('stop');
  setResetBtn();
  // ... your code goes here
}

function setSplitBtn() {
  btnRight.innerHTML = 'RESET';
  btnRight.classList.toggle('reset');
  btnRight.classList.toggle('split');
  // ... your code goes here
}

function setStartBtn() {
  btnLeft.innerHTML = 'START';
    btnLeft.classList.toggle('start');
    btnLeft.classList.toggle('stop');
    setSplitBtn();
  // ... your code goes here
}

function setResetBtn() {
  btnRight.innerHTML = 'SPLIT';
  btnRight.classList.toggle('reset');
  btnRight.classList.toggle('split');
  // ... your code goes here
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  console.log('hello');
  if (btnLeft.classList.contains('start')) {
    setStopBtn();
    chronometer.startClick(printTime);
  } else if (btnLeft.classList.contains('stop')) {
    setStartBtn();
    chronometer.stopClick();
  }
  // ... your code goes here
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if (btnRight.classList.contains('reset')) {
    clearSplits();
  }

  if (btnRight.classList.contains('split')) {
    printSplit();
  }
  // ... your code goes here
});
