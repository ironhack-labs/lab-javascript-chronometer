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


function printMinutes() {
  time = chronometer.getMinutes();
  minutes = chronometer.twoDigitsNumber(time);
  minDec.innerHTML = minutes[0];
  minUni.innerHTML = minutes[1];
  window.requestAnimationFrame(printMinutes);
}

function printSeconds() {
    time = chronometer.getSeconds();
    seconds = chronometer.twoDigitsNumber(time);
    secDec.innerHTML = seconds[0];
    secUni.innerHTML = seconds[1];
    window.requestAnimationFrame(printSeconds);
}

// ==> BONUS
function printMilliseconds() {
  time = chronometer.getMilliSeconds();
  milliseconds = chronometer.twoDigitsNumber(time);
  milDec.innerHTML = milliseconds[0];
  milUni.innerHTML = milliseconds[1];
  window.requestAnimationFrame(printMilliseconds);
}

function printSplit() {
  seconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
  minutes = chronometer.twoDigitsNumber(chronometer.getMinutes());
  milliseconds = chronometer.twoDigitsNumber(chronometer.getMilliSeconds());
  var splitTime = document.createElement('li');
  splitTime.innerHTML = `${minutes}:${seconds}:${milliseconds}`;
  splits.appendChild(splitTime);

}

function clearSplits() {
  splits.innerHTML = "";
}

function setStopBtn() {
    btnLeft.className="btn stop";
    btnLeft.innerHTML="STOP";
  
}
function setSplitBtn() {
  btnRight.className = "btn split";
  btnRight.innerHTML = "SPLIT";
}
function setStartBtn() {
    btnLeft.className = "btn start";
    btnLeft.innerHTML="START";
  
}
function setResetBtn() {
  btnRight.className = "btn reset";
  btnRight.innerHTML = "RESET";
}


// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if (btnLeft.className ==='btn start'){
      setStopBtn();
      chronometer.startClick();
      setSplitBtn();
      printSeconds();
      printMinutes();
      printMilliseconds();
  }else{
      setStartBtn();
      chronometer.stopClick();
      setResetBtn();
      clearSplits();
  }
});
// Reset/Split Button
btnRight.addEventListener('click', () => {
  if (btnRight.className === 'btn reset') {
    setSplitBtn()
    chronometer.resetClick()
  }else{
    chronometer.splitClick()
    printSplit()
  }

});


