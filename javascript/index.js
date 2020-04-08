const chronometer = new Chronometer();

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

function printTime() {
  // ... regardless of event listeners, this should work all the time, right? and be called on main level?
  // okay sos i would have probably solved this whole thing in a diff way and now i cant grasp anything bc i 
  // have my own and the assigmnent-guided way of working all mixed up.. just cant pull it together :/
  printSeconds();


}

function printMinutes() {
  // ... your code goes here
  let minutes = chronometer.twoDigitsNumber(chronometer.getMinutes);
  console.log(minutes);
}

function printSeconds() {
  // ... your code goes here
  let seconds = chronometer.twoDigitsNumber(chronometer.getSeconds);
  console.log(seconds);
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
btnLeft.addEventListener('click', () => {
  // ... your code goes here
  btnLeft.classList.toggle("start"); // btn start OR btn stop
  btnLeft.classList.toggle("stop");  
  console.log(btnLeft.className);
  // start running time IF the class is stop
  if (btnLeft.className === "btn stop") { // so yes this is the oppsite
    // so i just didnt wrap this inside a function, ah bit messy i know :/
    chronometer.startClick(printTime);
    btnLeft.innerHTML = "STOP";  
  } else {
    chronometer.stopClick();
    btnLeft.innerHTML = "START";
  }
  console.log(btnLeft.className);
  //chronometer.startClick(someArgumentThatIsAFunc);
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  // ... your code goes here
  btnRight.classList.toggle("reset");
  btnRight.classList.toggle("split");
  if (btnRight.className === "btn split") {
    console.log("btn right class såplit");
    chronometer.innerHTML = "SPLIT";
  } else {
    btnRight.innerHTML = "RESET";
    chronometer.resetClick();
  }
});
