var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
var myList = document.querySelector("#splits");
var myListLi = document.createElement("li");

function printTime() {
  
}

function printMinutes() {
  let minutes = setInterval (() => {
    minUni.innerHTML=""
    minDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())
    // console.log(this.currentTime)
  },1)
}

function printSeconds() {
  let seconds = setInterval (() => {
    secUni.innerHTML=""
    secDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())
    // console.log(this.currentTime)
  },1)
  
}

function printMilliseconds() {

}

function printSplit() {
  var myListLi = document.createElement("li");

myList.appendChild(myListLi).innerHTML = (`${chronometer.twoDigitsNumber(chronometer.getMinutes())}:${chronometer.twoDigitsNumber(chronometer.getSeconds())}`)
  console.log("hola")

}

function clearSplits() {

}

function setStopBtn() {

}

function setSplitBtn() {

}

function setStartBtn() {
  // chronometer 


}

function setResetBtn() {

  myList.innerHTML = ""
  chronometer.currentTime = 0

}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  if (btnLeft.innerHTML=== "START"){
    
    btnLeft.className = "btn stop"
    btnLeft.innerHTML = "STOP"
    btnRight.className = "btn split"
    btnRight.innerHTML = "SPLIT"
    chronometer.startClick()
    printSeconds()
    printMinutes()
    
    // console.log(chronometer.currentTime)
  } else {
    btnLeft.className = "btn start"
    btnLeft.innerHTML = "START"
    btnRight.className = "btn reset"
    btnRight.innerHTML = "RESET"
    chronometer.stopClick()
  }




});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if (btnLeft.innerHTML=== "STOP") {
    printSplit()
  } else {
    setResetBtn()
  }
  
  


});
