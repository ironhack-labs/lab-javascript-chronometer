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

  printMinutes();
  printSeconds();

}
function printMinutes() {
  const mins = chronometer.twoDigitsNumber(chronometer.getMinutes());
    minDec.innerText = mins[0];
    minUni.innerHTML = mins[1];
}

function printSeconds() {
  const secs = chronometer.twoDigitsNumber(chronometer.getSeconds());
  secDec.innerText = secs[0];
  secUni.innerHTML = secs[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

  function printSplit() {    
    let splitsCount = document.getElementById('splits')  
    newSplit = document.createElement('li')  
    newSplit.innerHTML = chronometer.splitClick()  
    splitsCount.appendChild(newSplit)}


function clearSplits() {
  document.getElementById("splits").innerHTML = "";
}

function setStopBtn() {
    btnLeft.classList.remove("stop");
    btnLeft.classList.add("start");
    btnLeft.innerHTML = "START";
}

function setSplitBtn() {
    btnRight.classList.remove('reset');
    btnRight.classList.add('split');
    btnRight.innerHTML = 'SPLIT';
}

function setStartBtn() {
    btnLeft.classList.remove("start");
    btnLeft.classList.add("stop");
    btnLeft.innerHTML = "STOP";
}

function setResetBtn() {
    btnRight.classList.remove("split");
    btnRight.classList.add("reset");
    btnRight.innerHTML = "RESET";
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if (btnLeft.classList.contains("start")){
    btnLeft.className = "btn stop";
    btnLeft.textContent = "STOP";
    btnRight.className = "btn split";
    btnRight.textContent = "SPLIT";
    chronometer.startClick();
    let printIntervalId = setInterval (()=>{
    printTime();
    }, 1);
  } else if (btnLeft.classList.contains("stop")){
    btnLeft.className = "btn start";
    btnLeft.textContent = "START";
    btnRight.className = "btn reset";
    btnRight.textContent = "RESET";
    chronometer.stopClick();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if(btnRight.classList.contains("reset")){
    chronometer.resetClick();
    clearSplits();
  } else if (btnRight.classList.contains("split")){
    count +=1;
    chronometer.splitClick();
    printSplit();
  }
});
