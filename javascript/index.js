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
  // ... your code goes here
  minDec.textContent = printMinutes()[0];
  minUni.textContent = printMinutes()[1];
  secDec.textContent = printSeconds()[0];
  secUni.textContent = printSeconds()[1];
  milDec.textContent = printMilliseconds()[0];
  milUni.textContent = printMilliseconds()[1];

}

function printMinutes() {
  // ... your code goes here
  return chronometer.twoDigitsNumber(chronometer.getMinutes())
}

function printSeconds() {
  // ... your code goes here
  return chronometer.twoDigitsNumber(chronometer.getSeconds())
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
  return chronometer.twoDigitsNumber(chronometer.getMiliseconds())
}

function printSplit() {
  //Obtener el valor de split
  let valorSplit = chronometer.splitClick()
  //Crear una nueva lista
  let newSplits = splits.cloneNode(false)
  //Anidarla donde corresponde
  let parent = document.getElementById('splits-container')
  parent.appendChild(newSplits)
  //Meter el valor del split
  newSplits.textContent = `${count}. ${valorSplit}`
}

function clearSplits() {
  // ... your code goes here
  // let splitsList = document.querySelectorAll("#splits")
  let child = document.querySelectorAll("#splits")
  for (let i = 0; i <child.length; i++){
    child[i].innerHTML = "";
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
    let printIntervalId = setInterval(()=>{
      printTime();
    }, 1);
  } else if (btnLeft.classList.contains("stop")){
    btnLeft.className = "btn start"
    btnLeft.textContent = "START";
    btnRight.className = "btn reset"
    btnRight.textContent = "RESET"
    chronometer.stopClick();
  }


  // ... your code goes here
});

// Reset/Split Button
let count = 0
btnRight.addEventListener('click', () => {
  if (btnRight.classList.contains("reset")){
    chronometer.resetClick();
    clearSplits()
  } else if (btnRight.classList.contains("split")){
    count +=1
    chronometer.splitClick();
    printSplit()
  }
  // ... your code goes here
});
