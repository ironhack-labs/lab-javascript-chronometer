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
  }; 

  printTime(mins, secs, ms) {
    this.minDec.innerHTML = mins[0];
    this.minUni.innerHTML = mins[1];
    this.secDec.innerHTML = secs[0];
    this.secUni.innerHTML = secs[1];
    this.milDec.innerHTML = ms[0];
    this.milUni.innerHTML = ms[1];
  };

  printSplit(mins, secs, ms) {
    var newSplitLi = document.createElement('li');
    newSplitLi.innerHTML = `${mins}:${secs}:${ms}`;
    document.getElementById("splits").appendChild(newSplitLi);
  };

  clearSplits() {
    let splitsList = document.getElementById("splits");
    while (splitsList.firstChild) {
      splitsList.removeChild(splitsList.firstChild);
    };
  };

};
  



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
