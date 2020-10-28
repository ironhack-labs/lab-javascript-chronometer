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
  // ... your code goes here
  const minutes = chronometer.getMinutes();
  const seconds = chronometer.getSeconds();
  //const milliseconds = chronometer.getMilliseconds();
  const formattedMinutes = chronometer.twoDigitsNumber(minutes);
  const formattedSeconds = chronometer.twoDigitsNumber(seconds);
  //const formattedMilliseconds = String(milliseconds).slice(0, 2);
  //console.log(formattedMinutes, formattedSeconds, formattedMilliseconds);
  minDec.innerHTML = formattedMinutes[0];
  secDec.innerHTML = formattedSeconds[0];
  //milDec.innerHTML = formattedMilliseconds[0];
  minUni.innerHTML = formattedMinutes[1];
  secUni.innerHTML = formattedSeconds[1];
  //milUni.innerHTML = formattedMilliseconds[1];
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
  const newListItem = document.createElement("li");
  newListItem.innerHTML = chronometer.splitClick();
  const parentNode = document.getElementById("splits");
  parentNode.appendChild(newListItem);
}

function clearSplits() {
  // ... your code goes here
  const parentNode = document.getElementById("splits");
  const allListItems = document.querySelectorAll("li");
  allListItems.forEach((listItem) => {
    parentNode.removeChild(listItem);
  });
}

function setStopBtn() {
  // ... your code goes here
  btnLeft.classList.remove("start");
  btnLeft.classList.add("stop");
  btnLeft.innerHTML = "STOP";
  //btnLeft.removeEventListener("click", setStopBtn);
}

function setSplitBtn() {
  // ... your code goes here
  btnRight.classList.remove("reset");
  btnRight.classList.add("split");
  btnRight.innerHTML = "SPLIT";
}

function setStartBtn() {
  // ... your code goes here
  btnLeft.classList.remove("stop");
  btnLeft.classList.add("start");
  btnLeft.innerHTML = "START";
  //btnLeft.removeEventListener("click", setStartBtn);
}

function setResetBtn() {
  // ... your code goes here
  btnRight.classList.remove("split");
  btnRight.classList.add("reset");
  btnRight.innerHTML = "RESET";
}

// Start/Stop Button
btnLeft.addEventListener("click", function () {
  //btnLeft.classList.toggle("btn.start");
  if (btnLeft.innerHTML === "START") {
    chronometer.startClick(printTime);
    //chronometer.startMilliseconds();
    setStopBtn();
    setSplitBtn();
  } else if (btnLeft.innerHTML === "STOP") {
    chronometer.stopClick();
    setStartBtn();
    setResetBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener("click", () => {
  // ... your code goes here
  if (btnRight.innerHTML === "SPLIT") {
    printSplit();
  } else if (btnRight.innerHTML === "RESET") {
    chronometer.resetClick();
    printTime();
    clearSplits();
  }
});
