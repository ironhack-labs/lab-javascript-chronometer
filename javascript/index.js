const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById("btnLeft");
const btnRight = document.getElementById("btnRight");

function changeLeftBtn() {
  if (btnLeft.classList.contains("start")) {
    btnLeft.textContent = "STOP";
    btnLeft.classList.replace("start", "stop");
    btnRight.textContent = "SPLIT";
    btnRight.classList.replace("reset", "split");
  } else {
    btnLeft.textContent = "START";
    btnLeft.classList.replace("stop", "start");
    btnRight.textContent = "RESET";
    btnRight.classList.replace("split", "reset");
  }
}

function leftClick() {
  if (btnLeft.classList.contains("stop")) {
    return chronometer.startClick();
  } else return chronometer.stopClick();
}

btnLeft.onclick = function () {
  changeLeftBtn();
  leftClick()
  printTime();
};

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById("minDec");
let minUni = document.getElementById("minUni");
let secDec = document.getElementById("secDec");
let secUni = document.getElementById("secUni");
let milDec = document.getElementById("milDec");
let milUni = document.getElementById("milUni");
let splits = document.getElementById("splits");

function printTime() {
  let minutes = chronometer.getMinutes();
  let seconds = chronometer.getSeconds();
  minutes = chronometer.twoDigitsNumber(minutes);
  seconds = chronometer.twoDigitsNumber(seconds);
  minDec.textContent = minutes[0];
  minUni.textContent = minutes[1];
  secDec.textContent = seconds[0];
  secUni.textContent = seconds[1];
}

function printSplit() {
  let minutes = chronometer.getMinutes();
  let seconds = chronometer.getSeconds();
  let time = chronometer.splitClick(minutes,seconds);
  splits.innerHTML+=`<li>${time}</li>`;
}

function clear() {
    chronometer.currentTime=0;
    printTime();
    splits.innerHTML="";
}

btnRight.onclick = function () {
  if (btnRight.classList.contains("split")) 
    printSplit();
  
  else 
  clear();
  }
