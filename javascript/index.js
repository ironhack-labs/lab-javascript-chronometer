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
  let min = chronometer.getMinutes();
  let digitsNum = chronometer.twoDigitsNumber(min);
  minDec.innerText = digitsNum[0];
  minUni.innerText = digitsNum[1];
}

function printSeconds() {
  let sec = chronometer.getSeconds();
  let digitsSec = chronometer.twoDigitsNumber(sec);
  secDec.innerText = digitsSec[0];
  secUni.innerText = digitsSec[1];
}

function printMilliseconds() {
  let mil = chronometer.milCurTime;
  let digitsMil = chronometer.twoDigitsNumber(mil);
  milDec.innerText = digitsMil[0];
  milUni.innerText = digitsMil[1];
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if(btnLeft.classList.contains('stop')) {
    //start
    chronometer.stopClick();
    btnLeft.innerText = 'START'; 
    btnLeft.classList.toggle('stop');
    btnRight.innerText = 'RESET'; 
    btnRight.classList.toggle('split');
  } else if(btnLeft.classList.contains('start')) {
    //stop
    chronometer.startClick(printTime, printMilliseconds);
    btnLeft.innerText = 'STOP'; 
    btnLeft.classList.toggle('stop');
    btnRight.innerText = 'SPLIT'; 
    btnRight.classList.toggle('split');
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if(btnRight.classList.contains('split')) {
    let splitTime = chronometer.splitClick();
    let li = document.createElement('li');
    li.innerText = splitTime;
    splits.appendChild(li);
  } else {
    chronometer.resetClick();
    printTime();
    printMilliseconds();
    splits.innerHTML = '';
  }
});
