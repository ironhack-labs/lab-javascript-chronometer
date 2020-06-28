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
  setInterval(() => {
  secDec.innerHTML = printSeconds();
  minDec.innerHTML = printMinutes();
  milDec.innerHTML = printMilliseconds();
  secUni.innerHTML = "";
  minUni.innerHTML = "";
  milUni.innerHTML = "";
},10)
}

function printMinutes() {
  return chronometer.twoDigitsNumber(chronometer.getMinutes());
};

function printSeconds() {
  return chronometer.twoDigitsNumber(chronometer.getSeconds());
};

// ==> BONUS
function printMilliseconds() {
 return chronometer.twoDigitsNumber(chronometer.getMilli());
}

function printSplit() {
  // ... your code goes here
  chronometer.startClick(printTime())
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
    btnLeft.classList.toggle('stop')
    btnRight.classList.toggle('split')

    if(btnLeft.innerHTML === "START"){
      printSplit();
      btnLeft.innerHTML = "STOP"
      btnRight.innerHTML = "SPLIT"
    } else {
      chronometer.stopClick()
      btnLeft.innerHTML = "START"
      btnRight.innerHTML = "RESET"
    }
    
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  
  const parentList = document.getElementById("splits");
  const listItem = document.createElement("li");
  
  
if(btnRight.innerHTML === "SPLIT"){
  listItem.innerHTML = chronometer.splitClick();
  parentList.appendChild(listItem);
} else {
  chronometer.resetClick();
  parentList.innerHTML = "";
}
});
