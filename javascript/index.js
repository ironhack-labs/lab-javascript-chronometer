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

let printTimeInt = 0;
  let printMilInt = 0;

function printTime() {
  printMinutes();
  printSeconds();
}

function printMinutes() {
  minutes = chronometer.twoDigitsNumber(chronometer.getMinutes());
  minDec.innerText = minutes[0];
  minUni.innerText = minutes[1]
}

function printSeconds() {
  seconds = chronometer.twoDigitsNumber(chronometer.getSeconds())
  secDec.innerText = seconds[0];
  secUni.innerText = seconds[1];
}

// ==> BONUS
function printMilliseconds() {
  milliseconds = chronometer.twoDigitsNumber(chronometer.getMilliseconds())
  milDec.innerText = milliseconds[0];
  milUni.innerText = milliseconds[1];
}

function printSplit() {
  return chronometer.splitClick()
  // ... your code goes here
}

function clearSplits() {
  document.getElementById('splits').innerHTML = ''
}

function setStopBtn() {
  chronometer.stopClick()
  btnLeft.setAttribute('class', 'btn start')
  btnLeft.innerText = 'START'
  btnRight.setAttribute('class', 'btn split')
  btnRight.innerText = 'RESET';
  clearInterval(printTimeInt);
  clearInterval(printMilInt);
  // ... your code goes here
}

function setSplitBtn() {
  let li = document.createElement('li');
  li.innerText = printSplit()
  console.log(li)
  document.getElementById('splits').append(li)

  // ... your code goes here
}

function setStartBtn() {
  chronometer.startClick();
  btnLeft.setAttribute('class', 'btn stop')
  btnLeft.innerText = 'STOP'
  btnRight.setAttribute('class', 'btn reset')
  btnRight.innerText = 'SPLIT'
  printTimeInt = setInterval(()=>printTime(),1000)
  printMilInt = setInterval(()=>printMilliseconds(),1)
  // ... your code goes here
}

function setResetBtn() {
  chronometer.resetClick();
  clearSplits()
  printTime();
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if(btnLeft.innerText === 'STOP'){
    setStopBtn()
  } else {
    setStartBtn()
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if(btnRight.innerText === 'RESET'){
    setResetBtn()
  } else {
    setSplitBtn()
  }
});
