const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');


// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  let interval;
  if(btnLeftElement.classList.contains("start")) {
    //start class => running
    btnLeftElement.classList.add("stop");
    btnLeftElement.classList.remove("start");
    btnLeftElement.innerHTML = "STOP";

    btnRightElement.classList.add("split");
    btnRightElement.classList.remove("reset");
    btnRightElement.innerHTML = "SPLIT";

    chronometer.start();

    interval = setInterval(this.printTime, 500);

  } else {
    //stop class => Stopped
    btnLeftElement.classList.add("start")
    btnLeftElement.classList.remove("stop")
    btnLeftElement.innerHTML = "START"

    btnRightElement.classList.add("reset")
    btnRightElement.classList.remove("split")
    btnRightElement.innerHTML = "RESET"

    chronometer.stop();

    clearInterval(interval);
  }
  // ... your code goes here
});


// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  let listEl = document.createElement("li");
  let splitNow = document.createTextNode(chronometer.split());

  if(btnRightElement.classList.contains("split")) {
  listEl.appendChild(splitNow);
  splitsElement.appendChild(listEl);
  } else {
    chronometer.reset();
    this.printTime()
    while(splitsElement.firstChild) {
      splitsElement.removeChild(splitsElement.firstChild);
    }
  }
  





  // ... your code goes here
});

//  if(splitsElement.hasChildNodes()) 


// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');


function printTime() {
  let minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  let seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());

  let time = minutes + seconds;
  time = time.split("");

  secUniElement.innerHTML = time[3];
  secDecElement.innerHTML = time[2];

  minUniElement.innerHTML = time[1];
  minDecElement.innerHTML = time[0];


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
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
}
