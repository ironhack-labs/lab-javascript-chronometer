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
  printSeconds();
  printMinutes();
  printMilliseconds();
}

function printMinutes() {

  currentTime = chronometer.currentTime;
  minutes = chronometer.getMinutes(currentTime);
  secDigits = chronometer.computeTwoDigitNumber(minutes)

  minDecElement.innerHTML = secDigits[0];
  minUniElement.innerHTML = secDigits[1];

}

function printSeconds() {

  currentTime = chronometer.currentTime;
  seconds = chronometer.getSeconds(currentTime);
  secDigits = chronometer.computeTwoDigitNumber(seconds)

  secDecElement.innerHTML = secDigits[0];
  secUniElement.innerHTML = secDigits[1];

}

// ==> BONUS
function printMilliseconds() {
  
currentTime = chronometer.currentTime;
milliseconds = chronometer.getMilliseconds(currentTime)
millisecDigits = chronometer.computeTwoDigitNumber(milliseconds);

milDecElement.innerHTML = millisecDigits[0];
milUniElement.innerHTML = millisecDigits[1];


}

function printSplit() {
  currentTime = chronometer.currentTime;
  currentSplit = chronometer.split(currentTime);
  
  parent = document.getElementById('splits');

  newLi = document.createElement('li');
  newLi.innerHTML = `${currentSplit}`

  newLi.classList.add('split-time');

  parent.appendChild(newLi);

}

function clearSplits() {

  child = document.querySelectorAll('.split-time');
  parent = document.getElementById('splits')

  for (let i=0; i<child.length; i++) {
    parent.removeChild(child[i]);
  }
  
  
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.innerHTML === "START") {
    btnLeftElement.innerHTML = "STOP";
    btnLeftElement.classList.toggle("start");
    btnLeftElement.classList.toggle("stop");
    btnRightElement.innerHTML = "SPLIT"
    btnRightElement.classList.toggle("reset");
    btnRightElement.classList.toggle("split");
    btnLeftElement.addEventListener('click', chronometer.start(printTime));
    

  } else if (btnLeftElement.innerHTML === "STOP") {
    btnLeftElement.innerHTML = "START";
    btnLeftElement.classList.toggle("stop");
    btnLeftElement.classList.toggle("start");
    btnRightElement.innerHTML = "RESET"
    btnRightElement.classList.toggle("split");
    btnRightElement.classList.toggle("reset");
    btnLeftElement.addEventListener("click", chronometer.stop());
  };
  
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {

  if (btnRightElement.innerHTML === "RESET") {
    chronometer.reset();
    printTime();
    clearSplits();
    


  } else if (btnRightElement.innerHTML === "SPLIT") {
    chronometer.split();
    printSplit();
  }

});
