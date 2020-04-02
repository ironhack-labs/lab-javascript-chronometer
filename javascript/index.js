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
  printMinutes();
  printSeconds();
}

function printMinutes() {
minDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[0];
minUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[1];
}

function printSeconds() {
secDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[0]
secUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[1]
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  //create html elements to store the data and print there the time -
  splits.innerHTML += `<li>${chronometer.splitClick()}</li>`
}

function clearSplits() {
  splits.innerHTML = "";
}

function setStopBtn() {
  btnLeft.classList.toggle("stop");
  btnLeft.classList.toggle("start");
document.querySelector(".btn.stop").textContent = "STOP"
}

function setSplitBtn() {
  btnRight.classList.toggle("reset");
  btnRight.classList.toggle("split");
 document.querySelector(".btn.split").textContent = "SPLIT";

}

function setStartBtn() {
  btnLeft.classList.toggle("start");
  btnLeft.classList.toggle("stop");
  document.querySelector(".btn.start").textContent = "START"
  
}

function setResetBtn() {
  btnRight.classList.toggle("reset");
  btnRight.classList.toggle("split"); 
  document.querySelector('.btn.reset').textContent = "RESET"
}

// Start/Stop Button

btnLeft.addEventListener('click', ()=>{

if(document.querySelector(".btn.stop")) {
  chronometer.stopClick();
  setStartBtn();
  setResetBtn();
} else if (document.querySelector(".btn.start")) {
  chronometer.startClick(printTime)
  setStopBtn();
  setSplitBtn();
};
}); 

  // reset Button 

btnRight.addEventListener('click', ()=>{
if (document.querySelector('.btn.reset')) {
  clearSplits();
  chronometer.resetClick();
  printTime();

} else if (document.querySelector(".btn.split")) {
  printSplit();

};
});



