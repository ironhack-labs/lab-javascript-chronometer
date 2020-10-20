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
  minDec.textContent = printMinutes()[0]
  minUni.textContent = printMinutes()[1]
  secDec.textContent = printSeconds()[0]
  secUni.textContent = printSeconds()[1]
  milDec.textContent = printMilliseconds()[0]
  milUni.textContent = printMilliseconds()[1]
  /*printSeconds();
  printMinutes();
  printMilliseconds();*/
}

function printMinutes() {
  return chronometer.twoDigitsNumber(chronometer.getMinutes());
  //minDec.innerText = minutes[0]
  //minUni.innerText = minutes[1]
}

function printSeconds() {
  return chronometer.twoDigitsNumber(chronometer.getSeconds());
  //secDec.innerText = seconds[0]
  //secUni.innerText = seconde[1]
}

// ==> BONUS
function printMilliseconds() {
  return chronometer.twoDigitsNumber(chronometer.getMilliseconds());
  //milDes.innerText = milliSeconds[0]
 // milUni.innerText = milliSeconds[1]
}

function printSplit() {
  newSplit = document.createElement('li')
  newSplit.innerHTML = chronometer.splitClick()
  splits.appendChild(newSplit)
}

function clearSplits() {
  let clearSplits = document.querySelectorAll("#splits")
  for (let i = 0; i <clearSplits.length; i++){
    clearSplits[i].innerHTML = "";
  }
  count = 0
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
  if (btnLeft.classList.contains("start")){
    btnLeft.className = "btn stop"
    btnLeft.textContent = "STOP";
    btnRight.className = "btn split"
    btnRight.textContent = "SPLIT"
    chronometer.startClick();
    setInterval(()=>{printTime();}, 1);
    
  } else if (btnLeft.classList.contains("stop")){
    btnLeft.className = "btn start"
    btnLeft.textContent = "START";
    btnRight.className = "btn reset"
    btnRight.textContent = "RESET"
    chronometer.stopClick();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if (btnRight.classList.contains("reset")) {
    chronometer.resetClick()  
    clearSplits()
  }
  else  {
    //count +=1
    //chronometer.splitClick();
    printSplit()  
    
  }
});
