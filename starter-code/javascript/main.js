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

printMinutes(minutes);
printSeconds(seconds);

}

function printMinutes() {

}

function printSeconds() {

  secDec.innerHTML=seconds.split("")[0];
  secUni.innerHTML=seconds.split("")[1];

}

function printMilliseconds() {

}

function printSplit() {

    var splitContainer=document.getElementById("splits");
      var minutes=chronometer.twoDigitsNumber(chronometer.setMinutes());
      var seconds=chronometer.twoDigitsNumber(chronometer.setSeconds());
      var hourSplit=minutes+":"+seconds;
      var splitDisplay=document.createElement('li');
        splitDisplay.innerHTML=hourSplit;
        splitContainer.appendChild(splitDisplay);

}

function clearSplits() {

}

function setStopBtn() {

}

function setSplitBtn() {

}

function setStartBtn() {

}

function setResetBtn() {

}

// Start/Stop Button
btnLeft.addEventListener('click', function () {

         if (btnLeft.innerHTML == "START") {
                    btnLeft.innerHTML = "STOP";
                    btnLeft.setAttribute("class", "btn stop");
                    btnRight.innerHTML = "SPLIT";
                    btnRight.setAttribute("class", 	"btn split");
                    chronometer.startClick();
                    printTime();
          } else {
                btnLeft.innerHTML = "START";
                btnLeft.setAttribute("class", "btn start");
                btnRight.innerHTML = "RESET";
                btnRight.setAttribute("class", 	"btn reset");
                chronometer.stopClick();
          }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {

    if (btnRight.innerHTML == "RESET") {

        btnRight.innerHTML = "SPLIT";
        btnRight.setAttribute("class", "btn split");

    } else {
        btnRight.innerHTML = "RESET";
        btnRight.setAttribute("class", "btn reset");
        printSplit();
    }
});
