const chronometer = new Chronometer();
// get the buttons:

const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');
let status= {
  startStopBtn: true,
}
// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

function printTime() {
  printSeconds();
  printMinutes();
}

function printMinutes() {
  minUni.innerHTML = (chronometer.getMinutes())%10;
  minDec.innerHTML = Math.floor((chronometer.getMinutes())/10);
}

function printSeconds() {
  secUni.innerHTML = (chronometer.getSeconds())%10;
  secDec.innerHTML = Math.floor((chronometer.getSeconds())/10);
}

// ==> BONUS
function printMilliseconds() {
  milUni.innerHTML = (chronometer.getMiliSecons())%10;
  milDec.innerHTML = Math.floor((chronometer.getMiliSecons())/10)
}
//Are these necesary?
// function printSplit() {
//   // ... your code goes here
// }

// function clearSplits() {
//   // ... your code goes here
// }

//Start/Stop buttons
function setStartStopBtn() {
  if(status.startBtn){
    status.startBtn = !status.startBtn;
    chronometer.startClick(printTime, printMilliseconds);
    btnLeft.classList.remove('start');
    btnLeft.classList.add('stop');
    btnLeft.innerHTML = 'STOP';
    btnRight.classList.remove('reset');
    btnRight.classList.add('split');
    btnRight.innerHTML = 'SPLIT';

  }
  else{
    status.startBtn = !status.startBtn;
    chronometer.stopClick();
    btnLeft.classList.remove('stop');
    btnLeft.classList.add('start');
    btnLeft.innerHTML = 'START';
    btnRight.classList.remove('split');
    btnRight.classList.add('reset');
    btnRight.innerHTML = 'RESET';
  }
}

//Reset/Split buttons
function setResetSplitBtn() {
  console.log('rbc')
  if(status.startBtn){
    chronometer.resetClick();
    secUni.innerHTML = 0;
    secDec.innerHTML = 0;
    minUni.innerHTML = 0;
    minDec.innerHTML = 0;
    milUni.innerHTML = 0;
    milDec.innerHTML = 0;
    splitChildrens = splits.querySelectorAll('li');
    splitChildrens.forEach(child => {
      splits.removeChild(child); 
    });
  }
  else{
    
    let MyNewSplitLi = document.createElement('li');
    MyNewSplitLi.innerHTML = chronometer.splitClick();
    splits.appendChild(MyNewSplitLi);
  }
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
setStartStopBtn();
  
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  setResetSplitBtn();
  
});
