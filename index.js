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

/*const start = document.querySelector("btnStart");
const stop = document.querySelector("btnStop");
const reset = document.querySelector("btnReset");
const split = document.querySelector("btnSplit");

btnStart.onclick = printTime;
btnStop.onclick = stopTime;
btnReset.onclick = resetTime;
btnSplit.onclick = printSplit;
*/

function printTime() {
  // ... your code goes here
  setInterval(() => {
   // milDec.innerHTML = printMilliseconds();
   // milUni.innerHTML = "";
    secDec.innerHTML = printSeconds();
    secUni.innerHTML = "";
    minDec.innerHTML = printMinutes();
    minUni.innerHTML = "";
  }, 1000);
}

function printMinutes() {
  // ... your code goes here
  return chronometer.twoDigitsNumber(chronometer.getMinutes());
}

function printSeconds() {
  // ... your code goes here
  return chronometer.twoDigitsNumber(chronometer.getSeconds());
}

// ==> BONUS
/*function printMilliseconds() {
  // ... your code goes here
  milUni.innerText = chronometer.twoDigitsNumber(chronometer.getMilSeconds())(1);
  milDec.innerText = chronometer.twoDigitsNumber(chronometer.getMilSeconds())(0);
}*/


/*function printSplit() {
  // ... your code goes here
  chronometer.startClick(printTime())
  }
*/

/*function clearSplits() {
  // ... your code goes here
  let ulSplits = document.getElementById('splits')
  ulSplits.innerHTML = '';
}
*/

/*function setStopBtn() {
  // ... your code goes here
  btnLeft.className = 'btn stop';
  btnLeft.innerHTML = 'STOP';
}


function setSplitBtn() {
  // ... your code goes here
  btnRight.className = 'btn split';
  btnRight.innerHTML = 'SPLIT';
}

function setStartBtn() {
  // ... your code goes here
  btnLeft.className = 'btn start';
  btnLeft.innerHTML = 'START';
}

function setResetBtn() {
  // ... your code goes here
  btnRight.className = 'btn reset';
  btnRight.innerHTML = 'RESET';
}
*/
// Start/Stop Button
btnLeft.addEventListener('click', () => {
  // ... your code goes here
  if (btnLeft.classList.contains("start")) {
    chronometer.startClick(() => {
      chronometer.currentTime++;
    });
    printTime();
    btnLeft.innerHTML = "STOP";
    btnLeft.className = "btn stop";
    btnRight.innerHTML = "SPLIT";
    btnRight.className = "btn split";
  } else {
    btnLeft.innerHTML = "START";
    btnLeft.className = "btn start";
    btnRight.innerHTML = "RESET";
    btnRight.className = "btn reset";
    chronometer.stopClick();
  }
});

  // Reset/Split Button
  btnRight.addEventListener('click', () => {
  // ... your code goes here
  if (btnRight.classList.contains("reset")) {
    chronometer.resetClick();
    splits.innerHTML = "";
  } else {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(chronometer.splitClick()));
    splits.appendChild(li);
  }
});
