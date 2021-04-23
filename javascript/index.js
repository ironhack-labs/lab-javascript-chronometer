const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
//start btn//
const btnRight = document.getElementById('btnRight');
//reset btn//


// get the DOM elements that will serve us to display the time:


let minDec = document.getElementById('minDec');
// first 0
let minUni = document.getElementById('minUni');
// second 0
let secDec = document.getElementById('secDec');
// thrid 0
let secUni = document.getElementById('secUni');
//fourth 0
let milDec = document.getElementById('milDec');
// 5
let milUni = document.getElementById('milUni');
// 6


let splits = document.getElementById('splits');
// ol 


function printTime(min, sec) {
  printSeconds();
  printMinutes();
}

function printMinutes(min1, min2) {
  min1.textContent = "";
  min2.textContent = "";
  if (min1 <= 9) {
    chronometer.twoDigitsNumber;
    min1 ++;
  }
  if (min1 == 9) {
    chronometer.twoDigitsNumber;
    min2 ++;
  }

  // show minute aside
}


function printSeconds(sec1, sec2) {
  sec1.textContent = "";
  sec2.textContent = "";
  if (sec1 <= 9) {
    chronometer.twoDigitsNumber;
    sec1 ++
  } 
  if (sec1 == 9) {
    chronometer.twoDigitsNumber;
    sec2 +1;
  }
}

// ==> BONUS
// function printMilliseconds(ms) {
//   // 1000 ms => 1 sec 
//   // make this 2 first 0 start to run 
//   milDec.textContent = 0;
//   milUni.textContent = 0;
// }

function printSplit() {
  const li = document.createElement('li');
  li.appendChild(document.createTextNode('splits'));
  printTime();
}

function clearSplits() {
  chronometer.resetClick;
  // remove 
}

// ------- Left Button ------- //

function setStopBtn() {
  btnLeft.textContent = "STOP";
  btnLeft.className = "btn stop"
}

function setStartBtn() {
  btnLeft.textContent = "START";
  btnLeft.className = "btn start";

}

// ------- Right Button ------- //

function setSplitBtn() {
  btnRight.textContent = "SPIT";
  btnRight.className = "btn split";
}

function setResetBtn() {
  btnRight.textContent = "RESET";
  btnRight.className = "btn reset";
  chronometer.resetClick;
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if (btnLeft.textContent === "START") {
    chronometer.startClick();
    setStopBtn();
    setSplitBtn();
  } else if (btnLeft.textContent === "STOP") {
    chronometer.stopClick();
    setResetBtn();
    setStartBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  //console.log("cliked stop");
  if (btnRight.textContent === "RESET") {
    clearSplits();
  } else if (btnRight.textContent === "SPLIT") {
    printSplit();
  }
});