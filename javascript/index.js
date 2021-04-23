//import { Chronometer } from "./chronometer.js";

const chronometer = new Chronometer();
console.log(chronometer);
// get the buttons:
const btnLeft = document.getElementById("btnLeft");
const btnRight = document.getElementById("btnRight");

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById("minDec");
let minUni = document.getElementById("minUni");
let secDec = document.getElementById("secDec");
let secUni = document.getElementById("secUni");
let milDec = document.getElementById("milDec");
let milUni = document.getElementById("milUni");
let splits = document.getElementById("splits");

function printTime(v) {
  // ... your code goes here
  const secs =  chronometer.getSeconds();
  console.log(chronometer.twoDigitsNumber(secs));
  printMinutes();
  printSeconds();

}

function printMinutes() {
  // ... your code goes here
  const mins =  chronometer.getMinutes();
  // secDec.innerHTML=chronometer.getSeconds();
 let minArray = chronometer.twoDigitsNumber(mins).split("");
 minDec.innerHTML=minArray[0];
 minUni.innerHTML=minArray[1];

}

function printSeconds() {
  // ... your code goes here
  const secs =  chronometer.getSeconds();
  // secDec.innerHTML=chronometer.getSeconds();
 let secArray = chronometer.twoDigitsNumber(secs).split("");
 secDec.innerHTML=secArray[0];
 secUni.innerHTML=secArray[1];

}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit(e) {
  // ... your code goes here
  splits.innerHTML='<li> ${'
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn(e) {
  if (e.target.classList.contains("start")) {
    chronometer.stopClick();
    e.target.classList.add("start");
    e.target.classList.remove("stop");
    e.target.innerHTML="START";
    btnRight.classList.add("reset");
    btnRight.classList.remove("split");
    btnRight.innerHTML="RESET";
  } 

}

function setSplitBtn() {
  // ... your code goes here
  // if (e.target.classList.contains("split")){
  //   chronometer.splitClick();
  //   e.target.classList.add("reset");
  //   e.target.classList.remove("split");
  //   e.target.innerHTML="RESET";
  // }
}

function setStartBtn(e) {
  // ... your code goes here

  if (e.target.classList.contains("start")) {
    chronometer.startClick(printTime);
    printMinutes();
    printSeconds();
    e.target.classList.add("stop");
    e.target.classList.remove("start");
    e.target.innerHTML="STOP";
    btnRight.classList.add("split");
    btnRight.classList.remove("reset");
    btnRight.innerHTML="SPLIT";
  } else {

      e.target.classList.add("start");
      e.target.classList.remove("stop");
      e.target.innerHTML="START";
      btnRight.classList.add("split");
      btnRight.classList.remove("reset");
      btnRight.innerHTML="SPLIT";
  }
}

function setResetBtn(e) {
  // ... your code goes here
  if (e.target.classList.contains("reset")) {
    chronometer.resetClick();
    // e.target.classList.add("split");
    // e.target.classList.remove("reset");
    // e.target.innerHTML="SPLIT";

    
  } else {
    chronometer.splitClick();
    // e.target.classList.add("reset");
    // e.target.classList.remove("split");
    // e.target.innerHTML="RESET";
}}

// Start/Stop Button
btnLeft.addEventListener("click", (e) => {
  
  setStartBtn(e); 
  setStopBtn(e);

  // ... your code goes here
});

// Reset/Split Button
btnRight.addEventListener("click", setResetBtn);


// Demo callback
// function x(clbk) {
//   clbk()
// }

// function y() {
//   console.log("wahou inception")
// }


// x(y)