'use strict'

var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');

let printMiliId;
let printTimeId;
function printTime() {
  printTimeId = setInterval(function() {
    printMinutes();
    printSeconds();    
  },1000); 
};

function printMinutes() {
  minDec.innerHTML = (chronometer.twoDigitsNumber(chronometer.setMinutes()))[0];
  minUni.innerHTML = (chronometer.twoDigitsNumber(chronometer.setMinutes()))[1];
};

function printSeconds() {
  secDec.innerHTML = (chronometer.twoDigitsNumber(chronometer.setSeconds()))[0];
  secUni.innerHTML = (chronometer.twoDigitsNumber(chronometer.setSeconds()))[1];
};

function printMilliseconds() { 
  
};

function printSplit() {
  let list = document.createElement('li');
  list.innerHTML = chronometer.setTime();
  parent.appendChild(list);
};

function clearSplits() {
  document.getElementById('splits').innerHTML = '';
};

function setStopBtn() {
  btnLeft.innerHTML = 'STOP';        
  btnLeft.classList.remove('start');
  btnLeft.classList.add ('stop');      
};

function setSplitBtn() {
  btnRight.innerHTML = 'SPLIT';
  btnRight.classList.remove('reset');
  btnRight.classList.add('split');  
};

function setStartBtn() {
  btnLeft.innerHTML = "START";
  btnLeft.classList.remove("stop");
  btnLeft.classList.add("start");  
};

function setResetBtn() {
  btnRight.innerHTML = 'RESET';
  btnRight.classList.remove('split');
  btnRight.classList.add('reset');
};

let btnL = btnLeft.classList;
let btnR = btnRight.classList;
// Start/Stop Button
btnLeft.addEventListener('click', function () {
  switch(btnL[1]) {
    case 'start':
    setStopBtn();
    setSplitBtn();
    chronometer.startClick();
    printTime();
    break;
    case 'stop':
    setStartBtn();
    setResetBtn();
    chronometer.stopClick();
    break;
  }    
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if (btnRight.innerHTML === 'RESET') {
    chronometer.resetClick();  
    clearSplits();    
  } else if (btnRight.innerHTML === 'SPLIT') {
      printSplit();      
  }  
});

let parent = document.getElementById('splits');

