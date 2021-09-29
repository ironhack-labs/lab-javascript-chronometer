 //const Chronometer = require("./chronometer");
//import Chronometer from "./chronometer";

const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  // ... your code goes here
}

function printMinutes() {
  // ... your code goes here
}

function printSeconds() {
  // ... your code goes here
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
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
  // if (btnLeftElement.className === 'btn start') {
  //   chronometer.setStartBtn
  //}
  // ... your code goes here
}

function setResetBtn() {
  this.currentTime === 0;
  // ... your code goes here
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // if (chronometer.stop === true ) {
  // btnLeftElement.classList.toggle('btn start')
  // }
       if (btnLeftElement.getAttribute("class") == "btn start") {
         btnLeftElement.setAttribute("class", "btn stop");
         btnLeftElement.innerHTML = 'STOP';

        btnRightElement.setAttribute("class", "btn split");
         btnRightElement.innerHTML = 'SPLIT';
       }
        else {
         btnLeftElement.setAttribute("class", "btn start");
         btnLeftElement.innerHTML = 'START';

         btnRightElement.setAttribute("class", "btn reset");
         btnRightElement.innerHTML = 'RESET';
       }
       
      
       
    });
  // console.log('hello')
  // btnLeftElement.innerHTML = 'STOP';
  // btnLeftElement.className = 'btn stop';

  // if (chronometer.setStartBtn === true) {
  //   btnLeftElement.innerHTML = 'START';
  //   btnLeftElement.className = 'btn start';

  //   btnRightElement.innerHTML = 'RESET';
  //   btnRightElement.className = 'btn reset';
  // }

//});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {

if (btnRightElement.getAttribute("class") == "btn reset") {
         btnRightElement.setAttribute("class", "btn split");
         btnRightElement.innerHTML = 'SPLIT';

         btnLeftElement.setAttribute("class", "btn stop");
         btnLeftElement.innerHTML = 'STOP';
       } else {
         btnRightElement.setAttribute("class", "btn reset");
         btnRightElement.innerHTML = 'RESET';

         btnLeftElement.setAttribute("class", "btn start");
         btnLeftElement.innerHTML = 'START';
       }

//   btnRightElement.innerHTML = 'SPLIT';
//   btnRightElement.className = 'btn split';
// });
})


// chronometer.setResetBtn();