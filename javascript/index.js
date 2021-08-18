

const chronometer = new Chronometer();

// get the buttons:
let btnLeftElement = document.getElementById('btnLeft');
let btnRightElement = document.getElementById('btnRight');

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

  printSeconds();
  printMinutes();

}

function printMinutes() {
  // ... your code goes here

  minDecElement.innerText = chronometer.split()[1];
  minUniElement.innerText = chronometer.split()[0];


}

function printSeconds() {
  // ... your code goes here

  secUniElement.innerText = chronometer.split()[4];
  secDecElement.innerText = chronometer.split()[3];

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
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {

  btnLeftElement = document.getElementById('btnLeft');

  if(btnLeftElement.innerText == "START"){

    btnLeftElement.innerText = "STOP"
    
    btnLeftElement.setAttribute("class","btn start");
    //btnLeftElement.style.backgroundColor = "#f14949";

    chronometer.start(printTime());
  

  }else{

    btnLeftElement.innerText = "START"
    //btnLeftElement.style.backgroundColor = "#5fca5f"
    btnLeftElement.setAttribute("class","btn stop");
    //btnLeftElement.classList.replace = "btn.start"
    chronometer.stop();
    

  }
  


  //["btn", "start", value: "btn start"]

  // ... your code goes here



});

// Reset/Split Button
btnRightElement.addEventListener('click', start => {
  // ... your code goes here
});
