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
  printMinutes();
  printSeconds();
}

function printMinutes() {
  // ... your code goes here
  let minutes = chronometer.twoDigitsNumber(chronometer.getMinutes());
  minDec.innerHTML = minutes[0];
  minUni.innerHTML = minutes[1];
}

function printSeconds() {
  // ... your code goes here
  let seconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
  secDec.innerHTML = seconds[0];
  secUni.innerHTML = seconds[1];
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
btnLeft.addEventListener("click", () => {
  // ... your code goes here
  btnLeft.classList.toggle("stop");

  //why this is not working???

  //const startClassBtn = document.querySelector(".start");
  //console.log(startClassBtn);

  // if(startClassBtn === "stop"){
  //   btnLeft.textContent === "STOP"
  // }

  if (btnLeft.textContent === "START") {
    chronometer.startClick(printTime);
    btnLeft.textContent = "STOP";
  } else {
    //(btnLeft.textContent === "STOP")
    chronometer.stopClick();
    btnLeft.textContent = "START";
    //put stop things
  }
});

// Reset/Split Button
btnRight.addEventListener("click", () => {
  // ... your code goes here
  //btnRight.classList.toggle("split");
  if (btnRight.textContent === "RESET") {
    btnRight.classList.add("split");
    btnRight.textContent = "SPLIT";
  } else if (btnRight.textContent === "SPLIT") {
    btnRight.classList.add("split");
    btnRight.textContent = "RESET";

    //Create ordered list
    const list = (document.innerHTML = chronometer.splitClick());
    const listElement = document.createElement("LI");
    listElement.innerHTML = chronometer.splitClick();
    //let splitHtml = document.querySelector("#splits");

    document.querySelector("#splits").appendChild(listElement);
  }
});
