const chronometer = new Chronometer();
// get the buttons:
const btnLeft = document.getElementById("btnLeft");
const btnRight = document.getElementById("btnRight");

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById("minDec");
let minUni = document.getElementById("minUni");
let secDec = document.getElementById("secDec");
let secUni = document.getElementById("secUni");
let milDec = document.getElementById("milDec");
let milUni = document.getElementById("milUni");
let splits = document.getElementById("splits");

function printTime() {
  printMinutes();
  printSeconds();
}

function printMinutes() {
  let minutes = chronometer.twoDigitsNumber(chronometer.getMinutes());
  //console.log(minutes);
  // Position index 0, eg. 03 minutes
  minDec.innerHTML = minutes[0]; // 0
  minUni.innerHTML = minutes[1]; // 3
}

function printSeconds() {
  let seconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
  //console.log(seconds);
  // Position index 0, e.g. 12 seconds
  secDec.innerHTML = seconds[0]; //1
  secUni.innerHTML = seconds[1]; //2
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // create new list to add to the list
  let newList = document.createElement("li");
  // add classname to the list
  newList.className = "list-item";
  newList.innerHTML = chronometer.splitClick();
  //splitClick function returns xx:yy
  splits.appendChild(newList);
  // parentNode.appendChild(childNode)
}

function clearSplits() {
  // used when clicked reset
  splits.innerHTML = "";
}

function setStopBtn() {
// stop button with class btn stop and STOP 
  btnLeft.className = "btn stop";
  btnLeft.textContent = "STOP";
}

function setSplitBtn() {
// split button with class btn split and SPLIT
  btnRight.className = "btn split";
  btnRight.textContent = "SPLIT";
  
}

function setStartBtn() {
  btnLeft.className = "btn start";
  btnLeft.textContent = "START";
}

function setResetBtn() {
  btnRight.className = "btn reset";
  btnRight.textContent = "RESET";
}

// Start/Stop Button
btnLeft.addEventListener("click", () => {
  if (btnLeft.classList.contains("start")) {
    chronometer.startClick(printTime);
    setStopBtn();
    setSplitBtn();
  } else {
    chronometer.stopClick();
    setStartBtn();
    setResetBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener("click", () => {
  if (btnRight.classList.contains("reset")) {
    chronometer.resetClick();
    clearSplits();
    printTime();
  } else {
    printSplit();
  }
});
