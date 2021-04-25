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

  }


function printMinutes() {
 
 }

function printSeconds() {

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
  while (splits.firstChild) {
    splits.removeChild(splits.firstChild);
}
  
}

/* function setStopBtn() {
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {

}

function setResetBtn() {
  // ... your code goes here
} */

// Start/Stop Button

btnLeft.addEventListener('click', () => {
  
  const buttonLeft = btnLeft.innerText
  switch (buttonLeft) {
    case "START":
      document.querySelector('#btnLeft').classList.toggle('start');
      document.querySelector('#btnLeft').classList.toggle('stop');
      document.querySelector('#btnLeft').innerText = 'STOP';
      document.querySelector('#btnRight').classList.toggle('reset');
      document.querySelector('#btnRight').classList.toggle('split');
      document.querySelector('#btnRight').innerText = 'SPLIT';
      chronometer.startClick()
      break;

    case "STOP":
      document.querySelector('#btnLeft').classList.toggle('stop');
      document.querySelector('#btnLeft').classList.toggle('start');
      document.querySelector('#btnLeft').innerText = 'START';
      document.querySelector('#btnRight').classList.toggle('split');
      document.querySelector('#btnRight').classList.toggle('reset');
      document.querySelector('#btnRight').innerText = 'RESET';
      chronometer.stopClick()
      break;
  }

});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  // ... your code goes here
  const buttonRight = btnRight.innerText;
  switch (buttonRight) {
    case "RESET":
      clearSplits()

      break;
    case "SPLIT":

      printSplit()
      break;
  }


});
