const chronometer = new Chronometer();

// const chronometer2 = new Chronometer();
// chronometer2.start(console.log); // callback here is console.log(), will get all arguments
// chronometer2.start((time) => {console.log(time)}) // does the same as line 5 but as anonymous callback function
// here, we have a choice which arguments we pass to console.log()


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

function printTime(currentTime) { //think about where does printTime is called? -> below: in start function -> currentTIme is just a placeholder!!
  printMinutes(currentTime);
  printSeconds(currentTime);
  printMilliseconds(currentTime);
}

function printMinutes(currentTime) {
  minDecElement.innerText = currentTime[0];
  minUniElement.innerText = currentTime[1];
}

function printSeconds(currentTime) {
  secDecElement.innerText = currentTime[3];
  secUniElement.innerText = currentTime[4];
}

// ==> BONUS
function printMilliseconds(currentTime) {
  milDecElement.innerText = currentTime[6];
  milUniElement.innerText = currentTime[7];
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
  //to change the button once we click on start:
  if(btnLeftElement.classList.contains("start")) {
    btnLeftElement.className = "btn stop";
    btnLeftElement.innerText = "STOP";
    btnRightElement.className = "btn split";
    btnRightElement.innerText = "SPLIT";
    chronometer.start(printTime); 
    //will be exectuted once every second - JUST reference to printTime, no CALL!
    //go back to chronometer and look at start function!
  } else {
      //changin back once the clock is running:
      btnLeftElement.className = "btn start";
      btnLeftElement.innerText = "START";
      btnRightElement.className = "btn reset";
      btnRightElement.innerText = "RESET";
      chronometer.stop();
  };
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if(btnRightElement.classList.contains("reset")) {
    chronometer.reset(printTime); // I can pass a function
    while(document.querySelector("#splits").firstChild) {
      document.querySelector("#splits").removeChild(document.querySelector("#splits").lastChild);
    }

  } else {
    let list = document.querySelector("#splits");
    const splitText = document.createElement("li");
    splitText.innerText = chronometer.split();
    list.appendChild(splitText);
    };
});

milDecElement.classList.add("number");
milUniElement.classList.add("number");