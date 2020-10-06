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
}

function printMinutes() {
  // ... your code goes here
}

function printSeconds() {
  // ... your code goes here
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
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

let chron = new Chronometer();
let printTiID = 0;

function printValues(){
  printTiID = setInterval(() => {
    let minStr = chron.twoDigitsNumber(chron.getMinutes());
    let secStr = chron.twoDigitsNumber(chron.getSeconds());
    let centiStr = chron.twoDigitsNumber(chron.getMilliseconds());

    minDec.innerHTML = minStr[0];
    minUni.innerHTML = minStr[1];

    secDec.innerHTML = secStr[0];
    secUni.innerHTML = secStr[1];

    milDec.innerHTML = centiStr[0];
    milUni.innerHTML = centiStr[1];
  }, 10);

}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if(btnLeft.classList.contains("start")){
    btnLeft.classList.remove("start");
    btnLeft.classList.add("stop");

    btnRight.classList.add("split");
    btnRight.classList.remove("reset");

    btnLeft.innerHTML = "STOP";
    btnRight.innerHTML = "SPLIT";

    chron.startClick(printValues);


  }else{
    btnLeft.classList.add("start");
    btnLeft.classList.remove("stop");

    btnRight.classList.add("reset");
    btnRight.classList.remove("split");

    btnLeft.innerHTML = "START";
    btnRight.innerHTML = "RESET";

    chron.stopClick();
    clearInterval(printTiID);
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if(btnRight.classList.contains("split")){
    let li = document.createElement("li");
    li.innerHTML = chron.splitClick();
    splits.appendChild(li);
  }else{
    chron.resetClick();
    while(splits.firstChild){
      splits.removeChild(splits.lastChild);
    }
    minUni.innerHTML = minDec.innerHTML = secUni.innerHTML = secDec.innerHTML = milUni.innerHTML = milDec.innerHTML = "0";
  }
});