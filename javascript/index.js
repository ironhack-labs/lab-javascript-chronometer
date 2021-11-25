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




// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  
  if (btnLeftElement.innerText === "START"){
    // if the btn is START:
    // call the START method
    chronometer.start();
  } else 
  { // if the btn is STOP
    // call the STOP method
    chronometer.stop();
  } 
  
  // BUTTON CLASSES AND TEXT 
  if (btnLeftElement.innerText === "START"){
    // if the btn is START:
    // change the text in STOP - SPLIT
    btnLeftElement.innerText = "STOP";
    btnRightElement.innerText = "SPLIT";
    // change the color in RED - BLUE
    btnLeftElement.classList.toggle("stop");
    btnLeftElement.classList.toggle("start");
    btnRightElement.classList.toggle("split");
    btnRightElement.classList.toggle("reset");
  } else 
  { // if the btn is STOP
    // change the text in START - RESET
    btnLeftElement.innerText = "START";
    btnRightElement.innerText = "RESET";
    // change the color in GREEN - GRAY
    btnLeftElement.classList.toggle("start");
    btnLeftElement.classList.toggle("stop");
    btnRightElement.classList.toggle("reset");
    btnRightElement.classList.toggle("split");
  }  

  // every second call the functions printSeconds-printMinutes
  let i = chronometer.currentTime;
  const intervalId = setInterval(() => {
    printSeconds();
    printMinutes();
  }, 1000);
});




function printTime() {
  // create a li tag
  const splitLi = document.createElement("li");
  // add the numbers in the li tag
  splitLi.innerText = minDecElement.innerText + minUniElement.innerText + ":" + secDecElement.innerText + secUniElement.innerText;
  // add the li tag in the ol tag
  splitsElement.appendChild(splitLi);
}

function printMinutes() {
  let min = chronometer.getMinutes();
  minDecElement.innerText = chronometer.computeTwoDigitNumber(min)[0];
  minUniElement.innerText = chronometer.computeTwoDigitNumber(min)[1];
  
}

function printSeconds() {
  let sec = chronometer.getSeconds();
  secDecElement.innerText = chronometer.computeTwoDigitNumber(sec)[0];
  secUniElement.innerText = chronometer.computeTwoDigitNumber(sec)[1];
}





// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.innerText === "SPLIT"){
    // call the print Time method
    printTime();

  } else {
    // reset the display 00:00
    chronometer.currentTime = 0;
    
    // remove all the children of "ol" id "splits"
    while (splitsElement.firstChild) {
      splitsElement.removeChild(splitsElement.firstChild);
    }
  }
  
});




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
