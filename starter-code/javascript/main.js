var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');


function printTime() {
  printSeconds();
  printMinutes();
  printMilliseconds();
}

function printMinutes() {
  let i = chronometer.getMinutes();
  minUni.innerHTML = i%10;
  minDec.innerHTML = Math.floor(i/10);
}

function printSeconds() {
  let i = chronometer.getSeconds();
  secUni.innerHTML = i%10;
  secDec.innerHTML = Math.floor(i/10);
  // console.log(chronometer.currentTime);
}

function printMilliseconds() {
  let i = chronometer.getMilliSeconds();
  console.log(i);
  milUni.innerHTML = i%10;
  milDec.innerHTML = Math.floor(i/10)%10;
  
}

function printSplit() {
  let ol = document.getElementById('splits')
  let li = document.createElement('li');
  ol.append(li);
  li.innerHTML = chronometer.splitClick();
}

function clearSplits() {
 document.getElementById('splits').innerHTML = "";
}

function setStopBtn() {
  chronometer.stopClick();
}

function setSplitBtn() {

}

function setStartBtn() {
  chronometer.startClick();
}

function setResetBtn() {
  chronometer.resetClick();
  clearSplits();
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  btnLeft.classList.toggle('start');
  btnLeft.classList.toggle('stop');
  btnRight.classList.toggle('split');
  btnRight.classList.toggle('reset');

  if (btnLeft.classList.contains("stop")) {
    btnLeft.innerText = "STOP";
    btnRight.innerText = "SPLIT";
    setStartBtn();
    setInterval(() => printTime(), 10);
  } 
  else if (btnLeft.classList.contains("start")) {
    btnLeft.innerText= "START";
    btnRight.innerText = "RESET";
    setStopBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if (btnRight.classList.contains("split")) {
    printSplit();
  }   
  else if (btnRight.classList.contains("reset")) {
    setResetBtn(); 
  }
});

