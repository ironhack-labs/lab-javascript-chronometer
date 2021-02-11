const chronometer = new Chronometer();
//chronometer.startClick();
// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');
console.log(btnLeft)
const buttons = document.querySelectorAll("button")
console.log(buttons);
// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');
function printTime() {
  printSeconds(chronometer.getSeconds())
  printMinutes(chronometer.getMinutes())
}
function printMinutes(num) {
  if (num >= 10){
    num = num.toString()
    minDec.innerText = num[0];
    minUni.innerText = num[1];
    //secDec.innerText + secUni.innerText = num
  }
  else {
    minUni.innerText = num
  }
}
function printSeconds(num) { 
  if (num >= 10){
    num = num.toString()
    secDec.innerText = num[0];
    secUni.innerText = num[1];
    //secDec.innerText + secUni.innerText = num
  }
  else {
    secUni.innerText = num
  }
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
// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if (btnLeft.innerText === "START") { //chronometer will stop
  btnLeft.innerText = "STOP"
  btnRight.innerText = "SPLIT"
  btnLeft.classList.remove("start")  
  btnLeft.classList.add("stop") 
  btnRight.classList.remove("reset")
  btnRight.classList.add("split")
  chronometer.startClick(printTime);
  }
  else { //chronometer will start (running)
    btnLeft.innerText = "START"
    btnRight.innerText = "RESET"
    btnLeft.classList.add("start")  
    btnLeft.classList.remove("stop")
    btnRight.classList.add("reset")
    btnRight.classList.remove("split")
    chronometer.stopClick(); 
  } 
  //btnLeft.classList.toggle("start")  
  //btnLeft.classList.toggle("stop")  
  //btnRight.classList.toggle("reset")
  //btnRight.classList.toggle("split")
});
// Reset/Split Button
btnRight.addEventListener('click', () => {
  console.log(chronometer.getMinutes())
  });
















