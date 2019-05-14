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
let time = 0;
let minutes = 0;
let milliseconds = 0;
let interval;

let printTime = () => {
  printMinutes();
  printSeconds();
};

function printMinutes() {
  if (printSeconds() === "00") {
      
      printableMinutes = chronometer.twoDigitsNumber(minutes);
      splitted = printableMinutes.split('');
      document.getElementById("minUni").innerText = splitted[1];
      document.getElementById("minDec").innerText = splitted[0];
      minutes++;
    }

  if(minutes >= 59) {
    minutes = 0;
  } 
}

function printSeconds() {
  let printableSeconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
  splitted = printableSeconds.split('');
  document.getElementById("secUni").innerText = splitted[1];
  document.getElementById("secDec").innerText = splitted[0];
  return printableSeconds;
}

function printMilliseconds() {
  
    let printableMilliseconds = chronometer.twoDigitsNumber(milliseconds);
    splitted = printableMilliseconds.split('');
    document.getElementById("milUni").innerText = splitted[1];
    document.getElementById("milDec").innerText = splitted[0];
    milliseconds++;

    if(milliseconds >= 99){
      milliseconds = 0;
    }

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
    intervalId = setInterval(countMinutesSeconds, 1000);
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
btnRight.addEventListener("click", function() {});
