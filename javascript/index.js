const chronometer = new Chronometer();

// console.log(chronometer.startClick(setInterval))

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

function printTime(minutes, seconds) {
  // ... your code goes here
 printMinutes(minutes)
 printSeconds(seconds)
}

function printMinutes(minutes) {

  if(minutes >= 10)
  {
    let numString = minutes.toString();
    minDec.innerHTML = numString[0];
    minUni.innerHTML = numString[1];
  }
  else
  {
    //<span>--INNER HTML--</span>
    minUni.innerHTML = minutes.toString();
  }
  
}

function printSeconds(seconds) {
  // ... your code goes here
  if(seconds >= 10)
  {
    let numString = seconds.toString();
    minDec.innerHTML = numString[0];
    minUni.innerHTML = numString[1];
  }
  else
  {
    minUni.innerHTML = seconds.toString();
  }
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here

}

function printSplit(texto) {
  // ... your code goes here
  let splitParent = document.querySelector("#splits");
  //genera tag de <li>
  let newLi = document.createElement(`li`);
  newLi.innterHTML = texto;
  
  splitParent.append(newLi);
}

function clearSplits() {
  document.querySelector("#split").innerHTML=""
}

function setStopBtn() {
  btnRight.classList.remove("STOP")
  btnRight.classList.add("START")
}

function setSplitBtn() {
  btnLeft.classList.remove("SPLIT")
  btnLeft.classList.add("RESET")
}

function setStartBtn() {
  btnRight.classList.remove("START")
  btnRight.classList.add("STOP")
  
}

function setResetBtn() {
  btnLeft.classList.remove("RESET")
  btnLeft.classList.add("SPLIT")
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if (btnLeft === "START"){
    chronometer.startClick()
  }
  else {
    chronometer.stopClick()
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if (btnRight === "RESET"){
    chronometer.startClick()
  }
  else {
    chronometer.stopClick()
  }
});



