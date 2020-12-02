const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
//console.log (btnLeft)
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
  // ... your code goes here
  printSeconds()
  printMinutes()
}

function printMinutes() {
  // ... your code goes here
    setInterval (() =>{
      minDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes()).slice (0,1)
      minUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes()).slice(1)
    }, 1000)
}

function printSeconds() {
  // ... your code goes here
  setInterval(() => {
    secDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds()).slice(0, 1)
    secUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds()).slice(1)
  }, 1000)
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
  const splitTime = document.getElementById("splits")
  //console.log(splitTime)
  const time = document.createElement("li")
  time.classList.add("eachSplit")
  time.innerHTML = chronometer.splitClick(printTime())
  splitTime.appendChild(time)
}

function clearSplits() {
  // ... your code goes here
  const splitTime = document.getElementById("splits")
  //console.log(splitTime)
  const eachSplit = document.getElementsByClassName("eachSplit")
  //console.log(eachSplit)
  const eachSplitArray = [...eachSplit]
  eachSplitArray.forEach(split => {
    splitTime.removeChild(split)
  });
  
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
  chronometer.resetClick()
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  // ... your code goes here
});

btnLeft.onclick = (event) => {
  //console.log (event.target.className)
  if (event.target.className == "btn start") {
    btnRight.className = "btn split"
    btnRight.innerHTML = "SPLIT"
    event.target.className = "btn stop"
    event.target.innerHTML = "STOP"
    chronometer.startClick(printTime())
  }
  //console.log (event.target.className)
  else if (event.target.className !== "btn start") {
    btnRight.className = "btn reset"
    btnRight.innerHTML = "RESET"
    event.target.className = "btn start"
    event.target.innerHTML = "START"
    chronometer.stopClick()
  }
}

// Reset/Split Button
btnRight.addEventListener('click', () => {
  // ... your code goes here
});


btnRight.onclick = (event) => {
  // console.log (event.target.className)
  if (btnLeft.className !== "btn start") {
    event.target.className = "btn split"
    event.target.innerHTML = "SPLIT"
    printSplit()
  }
  //console.log (event.target.className)
  else if (btnLeft.className == "btn start"){
    event.target.className = "btn reset"
    event.target.innerHTML = "RESET"
    setResetBtn()
    clearSplits()
  }
}
