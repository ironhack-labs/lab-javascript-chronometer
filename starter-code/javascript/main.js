var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');


function printTime() {


}

function printMinutes() {


}

function printSeconds() {

}

function printMilliseconds() {

}

function printSplit() {

}

function clearSplits() {

}

function setStopBtn() {

}

function setSplitBtn() {

}

function setStartBtn() {

}

function setResetBtn() {

}

// Start/Stop Button
function main () {

  if (btnLeft.innerText === "START" ){
    btnLeft.innerText = "STOP";
    btnLeft.classList.add('btn');
    btnLeft.classList.add('stop');
  } 

  else if (btnLeft.innerText === "STOP"){
    btnLeft.innerText = "START";
    btnLeft.classList.remove('btn');
    btnLeft.classList.remove('stop');
    btnLeft.classList.add('btn'); 
    btnLeft.classList.add('start');
  }


}

btnLeft.addEventListener('click', main);

// Reset/Split Button
btnRight.addEventListener('click', function () {

  if (btnRight.innerText === "RESET" ){
    btnRight.innerText = "SPLIT";
    btnRight.classList.add('btn');
    btnRight.classList.add('split');
  } 


});

