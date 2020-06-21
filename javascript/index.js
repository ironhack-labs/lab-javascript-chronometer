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
  window.setInterval(() =>{
    let min = "";
    if(chronometer.getMinutes()<10){
      min = `0${chronometer.getMinutes()}`;
    }else{
      min = `${chronometer.getMinutes()}`;
    };
    minUni.innerHTML = min[1];
    minDec.innerHTML = min[0];
  },1000)
}

function printSeconds() {
  window.setInterval(()=>{
    let sec = "";
    if(chronometer.getSeconds()<10){
      sec = `0${chronometer.getSeconds()}`;
    }else{
      sec = `${chronometer.getSeconds()}`;
    };
    secUni.innerHTML = sec[1];
    secDec.innerHTML = sec[0];
  },1000)
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  
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
  if(btnLeft.innerHTML === "START"){
    btnLeft.innerHTML = "STOP"
    btnRight.innerHTML = "SPLIT"
    chronometer.startClick();
  } else{
    btnLeft.innerHTML = "START"
    btnRight.innerHTML = "RESET"
    chronometer.stopClick();
  };
  btnLeft.classList.toggle(`stop`);
  btnRight.classList.toggle(`split`);
  printTime();
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if(btnRight.innerHTML === "SPLIT"){
    let node = document.createElement("LI");
    let textnode = document.createTextNode(`${chronometer.splitClick()}`)
    node.appendChild(textnode);
    splits.appendChild(node);
  } else{
    splits.innerHTML = '';
    chronometer.currentTime = 0;
  };
});
