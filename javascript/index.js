const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

function printTime() {
    //  printMinutes()
      printSeconds()
}

function printMinutes() {
  let min = chronometer.twoDigitsNumber(chronometer.getMinutes());
  minDec.innerHTML=min[0]
  minUni.innerHTML=min[1]
  minUni.innerHTML="9"
}

function printSeconds() {
    let sec = chronometer.twoDigitsNumber(chronometer.getSeconds());
    secUni.innerHTML=6
  }

// ==> BONUS
function printMiliseconds() {
  // let miliSeg =chronometer.twoDigitsNumber(chronometer.miliseconds)
  // milDec.innerHTML=miliSeg[0]
  // milUni.innerHTML=miliSeg[1]
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
    btnLeft.innerHTML="STOP"
    btnLeft.style.backgroundColor="red";
}

function setSplitBtn() {
    btnRight.innerHTML="SPLIT"
    btnRight.style.backgroundColor="blue";
}

function setStartBtn() {
  btnLeft.innerHTML="START"
  btnLeft.style.backgroundColor="green";}

function setResetBtn() {
  btnRight.innerHTML="RESET"
  btnRight.style.backgroundColor="gray";}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
   if (btnLeft.innerHTML==="START") {
     chronometer.startClick()
     printSeconds()
     //setStopBtn()
    // setSplitBtn()
  //  } else if (btnLeft.innerHTML===“STOP”) {
  //   chronometer.stopClick()
  //   setStartBtn()
  //   setResetBtn()
  //  }
   }
})



// Reset/Split Button
btnRight.addEventListener('click', () => {
  // if (btnRight.innerHTML="RESET"){
  //   btnLeft.innerHTML= "STOP"
  //   btnRight.innerHTML="SPLIT"
  // ... your code goes here
})
