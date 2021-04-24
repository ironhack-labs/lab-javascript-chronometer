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
  const secs =  chronometer.getSeconds();
  console.log(chronometer.twoDigitsNumber(secs));
  printMinutes();
  printSeconds();
}


function printMinutes() {
  let minutes = chronometer.getMinutes()
  let twoDigitsMinutes = chronometer.twoDigitsNumber(minutes)

  minDec.innerText = twoDigitsMinutes[0]
  minUni.innerText = twoDigitsMinutes[1]
}

function printSeconds() {
  chronometer.getSeconds() 
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  let newListItem = document.createElement('li')
  newListItem.innerText = chronometer.splitClick()
  splits.appendChild(newListItem)

}

function clearSplits() {
  chronometer.resetClick()
}

function setStopBtn() {
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
 

}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  // ... your code goes here
  const buttonLeft = document.querySelector('#btnLeft').innerText
    switch(buttonLeft) {
    case "START":
    document.querySelector('#btnLeft').classList.toggle('start');
    document.querySelector('#btnLeft').classList.toggle('stop');
    document.querySelector('#btnLeft').innerText = 'STOP';
    chronometer.startClick(printTime)
    
    break;
    case "STOP":
      document.querySelector('#btnLeft').classList.toggle('stop');
      document.querySelector('#btnLeft').classList.toggle('start');
      document.querySelector('#btnLeft').innerText = 'START';
      chronometer.stopClick()
  break;
  }
 
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  // ... your code goes here

  const buttonRight = document.querySelector('#btnRight').innerText;
  switch(buttonRight) {
    case "RESET":
    document.querySelector('#btnRight').classList.toggle('reset');
    document.querySelector('#btnRight').classList.toggle('split');
    document.querySelector('#btnRight').innerText = 'SPLIT';
    clearSplits()
    
    break;
    case "SPLIT":
      document.querySelector('#btnRight').classList.toggle('split');
      document.querySelector('#btnRight').classList.toggle('reset');
      document.querySelector('#btnRight').innerText = 'RESET';
      printSplit()
  break;
  }

  
});
