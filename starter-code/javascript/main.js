var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');

//obj instance
let chronometer = new Chronometer();

function printTime() {
  printMinutes();
  printSeconds();
  printMilliseconds();
}

function printMinutes() {
  const min = chronometer.twoDigitsNumber(chronometer.getMinutes());

  minDec.innerHTML = min.substring(0, 1);
  minUni.innerHTML = min.substring(2, 1);
}

function printSeconds() {
  const seg = chronometer.twoDigitsNumber(chronometer.getSeconds());

  secDec.innerHTML = seg.substring(0, 1);
  secUni.innerHTML = seg.substring(2, 1);
}

function printMilliseconds() {
  const milseg = chronometer.twoDigitsNumber(chronometer.getMiliseconds());

  milDec.innerHTML = milseg.substring(0, 1);
  milUni.innerHTML = milseg.substring(2, 1);
}

function printSplit() {
  const printSplit = chronometer.splitClick();
  const printLi = document.createElement("LI");

  printLi.innerHTML = `
  ${chronometer.twoDigitsNumber(chronometer.getMinutes())} :
  ${chronometer.twoDigitsNumber(chronometer.getSeconds())} :
   ${chronometer.twoDigitsNumber(chronometer.getMiliseconds())}
  `
  document.getElementById("splits").appendChild(printLi)
}

function clearSplits() {
  document.getElementById("splits").innerHTML = " ";
}

function setStopBtn() {
  btnLeft.classList.add("stop");
  btnLeft.classList.remove("start");
  btnLeft.innerHTML = "STOP";
}

function setSplitBtn() {
  btnRight.classList.add("split");
  btnRight.classList.remove("reset");
  btnRight.innerHTML = "SPLIT";
}

function setStartBtn() {
  btnLeft.classList.add("start");
  btnLeft.classList.remove("stop");
  btnLeft.innerHTML = "START";
}

function setResetBtn() {
  btnRight.classList.add("reset");
  btnRight.classList.remove("split");
  btnRight.innerHTML = "RESET";
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  if (btnLeft.className.includes("start")){
    chronometer.startClick()
    setStopBtn(btnLeft); //start a stop
    setSplitBtn(btnRight); //reset to split
    setInterval(() => {printTime()}, 1000);

    return
  }
  chronometer.stopClick();
  setStartBtn(btnLeft)
  setResetBtn(btnRight)
  
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if (btnRight.className.includes("reset")){
    chronometer.resetClick();
    clearSplits();
  }

  printSplit();

});