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


function printTime(Chronometer) {
  var chronoTime = setInterval ( () => {
    printMinutes(Chronometer);
    printSeconds(Chronometer);}, 1000)  
  
  
}

function printMinutes(Chronometer) {
  var minutes = Chronometer.twoDigitsNumber(Chronometer.getMinutes());
  minDec.innerText = minutes.charAt(0);
  minUni.innerText = minutes.charAt(1);
}

function printSeconds(Chronometer) {
  var seconds = Chronometer.twoDigitsNumber(Chronometer.getSeconds());
  secDec.innerText = seconds.charAt(0);
  secUni.innerText = seconds.charAt(1);
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  var time = chronometer.splitClick();
  splits.innerHTML += `<li> ${time} </li>`;
}

function clearSplits() {
  splits.innerHTML = "";
}

function setStopBtn() {
  btnLeft.textContent = `STOP`;
  btnLeft.classList.remove("start");
  btnLeft.classList.add("stop");
}

function setSplitBtn() {
  btnRight.textContent = `SPLIT`;
  btnRight.classList.remove("reset");
  btnRight.classList.add("split");
}

function setStartBtn() {
  btnLeft.textContent = `START`;
  btnLeft.classList.remove("stop");
  btnLeft.classList.add("start");
}

function setResetBtn() {
  btnRight.textContent = `RESET`;
  btnRight.classList.remove("split");
  btnRight.classList.add("reset");
}

// Start/Stop Button
btnLeft.addEventListener("click", () => {
  //var minutes = chronometer.twoDigitsNumber(chronometer.getMinutes());
  //var seconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
  if (btnLeft.classList.contains("start")) {
    chronometer.startClick();
    setStopBtn();
    setSplitBtn();

    //console.log( minutes.charAt(0), minutes.charAt(1) +":"+ seconds.charAt(0), seconds.charAt(1));
    
  } else {
    chronometer.stopClick();
    setStartBtn();
    setResetBtn();
    //console.log(minutes.charAt(0), minutes.charAt(1) +":"+ seconds.charAt(0), seconds.charAt(1));
  }
});

// Reset/Split Button
btnRight.addEventListener("click", () => {
  if (btnRight.classList.contains("split")) {
    printSplit();
  } else {
    chronometer.resetClick();
    clearSplits();
  }
});



printTime(chronometer);