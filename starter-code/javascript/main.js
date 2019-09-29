let chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');

function printTime() {
  printMilliseconds();
  printSeconds();
  printMinutes();
}

function printMinutes(min) {
  minDec.innerText = chronometer.twoDigitsNumber(chronometer.getMinutes()).slice(0, 1);
  minUni.innerText = chronometer.twoDigitsNumber(chronometer.getMinutes()).slice(1);
}

function printSeconds(sec) {
  secDec.innerText = chronometer.twoDigitsNumber(chronometer.getSeconds()).slice(0, 1);
  secUni.innerText = chronometer.twoDigitsNumber(chronometer.getSeconds()).slice(1);
}

function printMilliseconds() {
  milDec.innerText = chronometer.twoDigitsNumber(chronometer.getMiliseconds()).slice(-2, -1);
  milUni.innerText = chronometer.twoDigitsNumber(chronometer.getMiliseconds()).slice(-1);
}

function printSplit() {
  const printSplit = chronometer.splitClick();
  const printLi = document.createElement("LI");

  printLi.innerHTML = `${chronometer.twoDigitsNumber(chronometer.getMinutes())} :
    ${chronometer.twoDigitsNumber(chronometer.getSeconds())} :
    ${chronometer.twoDigitsNumber(chronometer.getMiliseconds())}`
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
    setStopBtn(btnLeft); 
    setSplitBtn(btnRight); 
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
