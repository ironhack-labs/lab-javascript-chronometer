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
  
 // printMinutes();
  // printSeconds();
};

function printMinutes() {
  console.log(chronometer.getMinutes())
  
  // let mins = chronometer.getMinutes())
  // if(mins.length === 1){
  //   minDec.innerHTML = '0';
  //   minUni.innerHTML = mins[0];
  // } else {
  //   minDec.innerHTML = mins[0];
  //   minUni.innerHTML = mins[1];
  // }
  // console.log(mins)
};

function printSeconds() {
 
  
};

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
};

function printSplit() {
  
};

function clearSplits() {
  // ... your code goes here
};

function setStopBtn() {
    btnLeft.setAttribute('class', 'btn start');
    btnRight.setAttribute('class', 'btn reset');
    btnLeft.innerHTML = "START";
    btnRight.innerHTML = "RESET";
    chronometer.stopClick();
};

function setSplitBtn() {
  btnRight.setAttribute('class', 'btn split')
  chronometer.splitClick();
};

function setStartBtn() {
    btnLeft.setAttribute('class', 'btn stop');
    btnRight.setAttribute('class', 'btn split');
    btnLeft.innerHTML = "STOP";
    btnRight.innerHTML = "SPLIT";
    chronometer.startClick();
};

function setResetBtn() {
  secUni.innerHTML = chronometer.resetClick();
  secDec.innerHTML = chronometer.resetClick();
  minDec.innerHTML = chronometer.resetClick();
  minUni.innerHTML = chronometer.resetClick();
};

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  btnLeft.onclick = () => {
    if(btnLeft.innerHTML === 'START'){
      setStartBtn();
    } else {
      setStopBtn();
    }
  }
   
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  btnRight.onclick = () =>{
    if(btnRight.innerHTML === "SPLIT"){
      setSplitBtn();
    } else {
      setResetBtn();
    }
  }
});
