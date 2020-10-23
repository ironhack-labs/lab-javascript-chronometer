const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

//START - STOP BUTTON
btnLeft.addEventListener('click', function(){
  if(document.getElementById("btnLeft").className.includes("start")){
    document.getElementById("btnLeft").setAttribute('class', 'btn stop')
    document.getElementById("btnLeft").innerHTML = "STOP"
    document.getElementById("btnRight").setAttribute('class', 'btn split')
    document.getElementById("btnRight").innerHTML = "SPLIT"
    
    chronometer.startClick(printTime);

  } else {
    document.getElementById("btnLeft").setAttribute('class', 'btn start')
    document.getElementById("btnLeft").innerHTML = "START"
    document.getElementById("btnRight").setAttribute('class', 'btn reset')
    document.getElementById("btnRight").innerHTML = "RESET"
    chronometer.stopClick()
  }

})



// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

function printTime() {
  
  printSeconds();
  printMinutes();

}

function printMinutes() {
  
  minDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[0]
  minUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[1]

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
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  
  chronometer.stopClick()
}

function setSplitBtn() {
  // ... your code goes here

  
}

function setStartBtn() {
  // ... your code goes here
  
}

function setResetBtn() {
  
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  // ... your code goes here
});



// Reset/Split Button
btnRight.addEventListener('click', () => {
  
  // if(document.getElementById("btnRight").className.includes("reset")) {
  //   chronometer.resetClick();
  // } 

  // if(document.getElementById("btnLeft").className.includes("start")){
  //   document.getElementById("btnLeft").setAttribute('class', 'btn stop')
  //   document.getElementById("btnLeft").innerHTML = "STOP"
  //   document.getElementById("btnRight").setAttribute('class', 'btn split')
  //   document.getElementById("btnRight").innerHTML = "SPLIT"
    
  //   chronometer.startClick(printTime);

  // } else {
  //   document.getElementById("btnLeft").setAttribute('class', 'btn start')
  //   document.getElementById("btnLeft").innerHTML = "START"
  //   document.getElementById("btnRight").setAttribute('class', 'btn reset')
  //   document.getElementById("btnRight").innerHTML = "RESET"
  //   chronometer.stopClick()
  // }

});
