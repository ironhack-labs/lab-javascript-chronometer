var chronometer = new Chronometer();
var btnLeft = document.getElementById("btnLeft");
var btnRight = document.getElementById("btnRight");
var minDec = document.getElementById("minDec");
var minUni = document.getElementById("minUni");
var secDec = document.getElementById("secDec");
var secUni = document.getElementById("secUni");
var milDec = document.getElementById("milDec");
var milUni = document.getElementById("milUni");
let intervalId = 0;
let minutes = 0;
let milliseconds = 0;
let interval;
let minString ='00';

let printTime = () => {
  printMinutes();
  printSeconds();
};

function printMinutes() {

  if (printSeconds() === "00") {
    let printableMinutes = chronometer.twoDigitsNumber(minutes);
    splitted = printableMinutes.split('');
    minUni.innerText = splitted[1];
    minDec.innerText = splitted[0];
    minString = printableMinutes;
    minutes++;
    }
  
  if(minutes > 59) {
    minutes = 0;
  } 
  
}

function printSeconds() {
  let printableSeconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
  splitted = printableSeconds.split('');
  secUni.innerText = splitted[1];
  secDec.innerText = splitted[0];
  return printableSeconds;
}

function printMilliseconds() {
  
    let printableMilliseconds = chronometer.twoDigitsNumber(milliseconds);
    splitted = printableMilliseconds.split('');
    milUni.innerText = splitted[1];
    milDec.innerText = splitted[0];
    milliseconds++;

    if(milliseconds > 99){
      milliseconds = 0;
    }

    return printableMilliseconds;
}

function printSplit() {}

function clearSplits() {}

function setStopBtn() {}

function setSplitBtn() {}

function setStartBtn() {}

function setResetBtn() {}

// Start/Stop Button
btnLeft.addEventListener("click", function() {
  if (btnLeft.innerText === "START") {
    btnLeft.innerText = "STOP";
    btnRight.innerText = "SPLIT";
    chronometer.startClick();
    let countMinutesSeconds = () => {
      printTime();
    };
    let countMilliseconds = () => {
      printMilliseconds();
    };
    intervalId = setInterval(countMinutesSeconds, 100);
    intervalIdMilliseconds = setInterval(countMilliseconds, 1)
  } else if (btnLeft.innerText === "STOP") {
    btnLeft.innerText = "START";
    btnRight.innerText = "RESET";
    chronometer.stopClick();
    clearInterval(intervalId);
    clearInterval(intervalIdMilliseconds)
  }
});

// Reset/Split Button
btnRight.addEventListener("click", function() {

if(btnRight.innerText === "RESET"){
  chronometer.resetClick();
  minutes = 0;
  minString = '00'
  secUni.innerText = '0';
  secDec.innerText = '0';
  milUni.innerText = '0';
  milDec.innerText = '0';
  minUni.innerText = '0';
  minDec.innerText = '0';
  let cleanSplitList = () =>{
    let ul = document.getElementById('splits');
    ul.innerHTML = '';
}
cleanSplitList();
}
else if(btnRight.innerText === 'SPLIT'){
  let li = document.createElement('li');
  splitSec = printSeconds();
  splitMil = printMilliseconds();

  li.innerHTML = `${minString}:${splitSec}:${splitMil}`
  document.getElementById('splits').appendChild(li);
}



});
