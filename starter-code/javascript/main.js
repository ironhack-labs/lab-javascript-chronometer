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
}

function printMinutes() {
  minDec.innerHTML = newChrono.twoDigitsNumber(newChrono.setMinutes())[0];
  minUni.innerHTML = newChrono.twoDigitsNumber(newChrono.setMinutes())[1];
}

function printSeconds() {
secDec.innerHTML = newChrono.twoDigitsNumber(newChrono.setSeconds())[0];
secUni.innerHTML = newChrono.twoDigitsNumber(newChrono.setSeconds())[1];
}

function printMilliseconds() {

}

function printSplit() {
var splitLi = document.createElement("li");
splitLi.innerHTML= newChrono.twoDigitsNumber(newChrono.setMinutes()) + ":" + newChrono.twoDigitsNumber(newChrono.setSeconds());
document.querySelector('#splits').appendChild(splitLi);
}

function clearSplits() {
  document.querySelector('#splits').innerHTML="";
}

function setStopBtn() {
  btnLeft.setAttribute("class", "btn stop");
}

function setSplitBtn() {
  btnRight.setAttribute("class", "btn split");
}

function setStartBtn() {
  btnLeft.setAttribute("class", "btn start");

}

function setResetBtn() {
  btnRight.setAttribute("class", "btn reset");

}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  
  if (btnLeft.getAttribute("class") === 'btn start') {
    setStopBtn();
    setSplitBtn();
    newChrono.startClick();
    printTime();

 } else {
   setStartBtn();
   setResetBtn();
    newChrono.stopClick();

 }

});

// Reset/Split Button
btnRight.addEventListener('click', function () {

  if (btnLeft.getAttribute("class") === 'btn start') {
      newChrono.resetClick();
  } else {
    newChrono.splitClick();
  }
});

var newChrono = new Chronometer;

// function btnLeftClick() {
//   if (newChrono.intervalId === 0) {
//      newChrono.startClick();
//   } else {
//     newChrono.stopClick();
//     newChrono.intervalId = 0;
//   }
// }

// function btnRightClick() {
//   newChrono.resetClick();
// }


function display() {

}