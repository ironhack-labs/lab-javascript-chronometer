
var chronometer = new Chronometer();
var btnLeft = document.getElementById('btnLeft');
var btnRight = document.getElementById('btnRight');
var minDec = document.getElementById('minDec');
var minUni = document.getElementById('minUni');
var secDec = document.getElementById('secDec');
var secUni = document.getElementById('secUni');
var milDec = document.getElementById('milDec');
var milUni = document.getElementById('milUni');
var oList = document.querySelector("#splits");

function printTime() {
  printSeconds();
  printMinutes();
}

function printMinutes() {
  var minString = chronometer.twoDigitsNumber(chronometer.setMinutes());
  minDec.innerHTML = minString[0];
  minUni.innerHTML = minString[1];
}

function printSeconds() {
  var secString = chronometer.twoDigitsNumber(chronometer.setSeconds());
  secDec.innerHTML = secString[0];
  secUni.innerHTML = secString[1];
}

// function printMilliseconds() {
//     milDec.innerHTML =
//     milUni.innerHTML =
// }

function printSplit() {
    var newLi = document.createElement("li");
    oList.appendChild(newLi);
    newLi.innerHTML = (minDec.innerHTML + minUni.innerHTML + ":" + secDec.innerHTML + secUni.innerHTML).toString();

}

function clearSplits() {
    var orderedList = document.querySelector("#splits");
    var listCollection = document.querySelectorAll("li");
    var listElementsArray = Array.from(listCollection);
    listElementsArray.forEach(function(el){
        orderedList.removeChild(el);
    });
}

function setStopBtn() {}
function setSplitBtn() {}
function setStartBtn() {}

function setResetBtn() {
    chronometer.resetClick();
    minDec.innerHTML = "0";
    minUni.innerHTML = "0";
    secDec.innerHTML = "0";
    secUni.innerHTML = "0";
}

// Start/Stop Button
btnLeft.addEventListener('click', function() {
  btnLeft.classList.toggle('stop');
  if (btnLeft.innerHTML === 'STOP') {
    btnLeft.innerHTML = 'START';
    btnRight.innerHTML = 'RESET';
    chronometer.stopClick();
  } else {
    btnLeft.innerHTML = 'STOP';
    btnRight.innerHTML = 'SPLIT';
    chronometer.startClick();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', function() {
  if (btnRight.innerHTML === 'RESET') {
    clearSplits();
    setResetBtn();
  } else {
    printSplit();
  }
});

