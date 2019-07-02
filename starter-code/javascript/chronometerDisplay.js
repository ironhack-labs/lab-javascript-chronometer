class ChronometerDisplay {

  constructor() {
    this.btnLeft = document.getElementById('btnLeft');
    this.btnRight = document.getElementById('btnRight');
    this.minDec = document.getElementById('minDec');
    this.minUni = document.getElementById('minUni');
    this.secDec = document.getElementById('secDec');
    this.secUni = document.getElementById('secUni');
    this.milDec = document.getElementById('milDec');
    this.milUni = document.getElementById('milUni');
  }  

  printTime(mins, secs) {
    document.getElementById("minDec").innerHTML = mins[0];
    document.getElementById("minUni").innerHTML = mins[1];
    document.getElementById("secDec").innerHTML = secs[0];
    document.getElementById("secUni").innerHTML = secs[1];
  }
};
  

// function printMinutes() {

// }

// function printSeconds() {

// }

// function printMilliseconds() {

// }

// function printSplit() {

// }

// function clearSplits() {

// }

// function setStopBtn() {

// }

// function setSplitBtn() {

// }

// function setStartBtn() {

// }

// function setResetBtn() {

// }
