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
  // ... your code goes here
  printMinutes();
  printSeconds();

}

function printMinutes() {
  // ... your code goes here
  setInterval(()=>{
  minDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes()).slice(0,1);
  minUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes()).slice(1);
  },1000);
}

function printSeconds() {
  // ... your code goes here
  setInterval(() => {
    secDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds()).slice(0,1);
    secUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds()).slice(1);
  },1000)
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
  setInterval(() =>{
    // Sería algo asi como cojer la función getSeconds % 60
  })
}

function printSplit() {
  // ... your code goes here
  splits.innerHTML += `<li>${chronometer.splitClick()}</li>`;

}

function clearSplits() {
  // ... your code goes here
  splits.innerHTML ="";
}

function setStopBtn() {
  // ... your code goes here
  btnLeft.innerHTML= 'STOP';
  btnLeft.setAttribute('class', 'btn stop');
}

function setSplitBtn() {
  // ... your code goes here
  btnRight.innerHTML = 'SPLIT';
  btnRight.setAttribute('class', 'btn split');
}

function setStartBtn() {
  // ... your code goes here
  btnLeft.innerHTML = 'START';
  btnLeft.setAttribute('class', 'btn start');
}

function setResetBtn() {
  // ... your code goes here
  btnRight.innerHTML = 'RESET';
  btnRight.setAttribute('class', 'btn reset');
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  // ... your code goes here
  printTime()
  if(btnLeft.innerHTML === 'START'){
    chronometer.startClick();
    setStopBtn();
    setSplitBtn();
  }else{
    chronometer.stopClick();
    setStartBtn();
    setResetBtn();
  }  
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  // ... your code goes here
  if(btnRight.innerHTML === 'RESET') {
    chronometer.resetClick();
    clearSplits();
  }else{
    setSplitBtn();
    printSplit();
  }
})
