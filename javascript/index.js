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


setInterval(printTime, 1000);

function printTime() {
  printMinutes();
  printSeconds();
  // console.log(chronometer.getSeconds());

}

function printMinutes() {
  minUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[1];
  minDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[0];
}

function printSeconds() {
  secUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[1];
  secDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[0];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {

}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  btnLeft.innerText = "START"
  btnLeft.classList.toggle("start");
  btnLeft.classList.toggle("stop");

  btnRight.innerText = "RESET"
  btnRight.classList.toggle("reset");
  btnRight.classList.toggle("split");
  // btnLeft.className = "btn stop";
  chronometer.stopClick();
  console.log(chronometer.getSeconds());
}

function setSplitBtn() {
  chronometer.splitClick();
  console.log(chronometer.getSeconds());
  // splits.innerHTML="<>"+chronometer.splitClick() +"</>";

  let liNewElement = document.createElement("li");
  liNewElement.innerText= chronometer.splitClick()
  splits.appendChild(liNewElement)
}

function setStartBtn() {
  btnLeft.innerText = "STOP";
  // btnLeft.className = "btn start";
  btnLeft.classList.toggle("start");
  btnLeft.classList.toggle("stop");

  btnRight.innerText = "SPLIT"
  btnRight.classList.toggle("reset");
  btnRight.classList.toggle("split");
  chronometer.startClick();
  console.log(chronometer.getSeconds());
}

function setResetBtn() {
  chronometer.resetClick();
  printTime(); 
  //for Debugging
  // console.log(chronometer.getSeconds());
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if (btnLeft.innerText === "START") {
    setStartBtn();
  } else {
    setStopBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if (btnRight.innerText === "RESET") {
    setResetBtn();
  } else {
    setSplitBtn();
  }
});
