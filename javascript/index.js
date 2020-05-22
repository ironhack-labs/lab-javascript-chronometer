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
  // ... your code goes here
}




function printMinutes() {
let min = chronometer.twoDigitsNumber(chronometer.getMinutes);
//let min ="11"; to check
minDec.innerHTML = min[0];
minUni.innerHTML = min[1];




  // ... your code goes here
}

//printMinutes();

function printSeconds() {

let second = chronometer.twoDigitsNumber(chronometer.getSeconds);
//let second ="11";
secDec.innerHTML = second [0];
secUni.innerHTML = second[1];
  // ... your code goes here
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

  btnLeft.innerHTML= "START";
  btnLeft.className = "btn start";
  chronometer.stopClick();

  // ... your code goes here
}

function setSplitBtn() {

  btnRight.innerHTML = "SPLIT";
  btnRight.className = "btn split";
  // ... your code goes here
}

function setStartBtn() {
  
  btnLeft.innerHTML="STOP";
  btnLeft.className="btn stop";
  chronometer.startClick();
  printTime();
  // ... your code goes here
}

function setResetBtn() {
  btnRight.className= 'btn reset';
  btnRight.innerHTML='RESET';
  // ... your code goes here
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
if(btnLeft.innerHTML== "START"){
 setStartBtn();
setSplitBtn();
//printTime();

}
else{
setStopBtn();
setResetBtn();
}

});

// Reset/Split Button
btnRight.addEventListener('click', () => {
if (btnRight.innerHTML == "RESET"){
chronometer.resetClick();
}else{


}



});


