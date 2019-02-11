var chronometer = new Chronometer();
var btnLeft = document.getElementById('btnLeft');
var btnRight = document.getElementById('btnRight');
var minDec = document.getElementById('minDec');
var minUni = document.getElementById('minUni');
var secDec = document.getElementById('secDec');
var secUni = document.getElementById('secUni');
var milDec = document.getElementById('milDec');
var milUni = document.getElementById('milUni');


function printTime() {

}

function printMinutes() {
  var minutes = chronometer.twoDigitsNumber(chronometer.setMinutes());
  document.getElementById("minDec").innerHTML = minutes;
}

function printSeconds() {
  var time = chronometer.setTime();

}

function printMilliseconds() {

}

function printSplit() {

}

function clearSplits() {

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
  chronometer.splitClick();
}



var turnStopStart = 0;
var turnResetSplit = 0;

btnLeft.addEventListener('click', function () {




  if (turnStopStart == 0) {
    chronometer.startClick();
    document.getElementById("btnLeft").innerHTML = "STOP";
    document.getElementById("btnLeft").setAttribute("class", "btn stop");
    document.getElementById("btnRight").innerHTML = "SPLIT";
    document.getElementById("btnRight").setAttribute("class", "btn split");
    turnStopStart++;
    
  } else {
    chronometer.stopClick();
    document.getElementById("btnLeft").innerHTML = "START";
    document.getElementById("btnLeft").setAttribute("class", "btn start");
    document.getElementById("btnRight").innerHTML = "RESET";
    document.getElementById("btnRight").setAttribute("class", "btn reset");

    turnStopStart--;
    // turnResetSplit = 0;
  }

});


btnRight.addEventListener('click', function () {

  if (turnStopStart == 1) {

    chronometer.splitClick();
    // document.getElementById("btnRight").innerHTML = "SPLIT";
    // document.getElementById("btnRight").setAttribute("class", "btn split");
    // turnResetSplit--;
    
  } else {
    chronometer.resetClick();
    // document.getElementById("btnRight").innerHTML = "RESET";
    // document.getElementById("btnRight").setAttribute("class", "btn reset");
    // turnResetSplit++;
    
  }

});


// // Start/Stop Button
// btnLeft.addEventListener('click', function () {


//   console.log("is it started");
//   setStartBtn();
//   btnLeft.addEventListener('click', setStopBtn());


// });

// Reset/Split Button
// btnRight.addEventListener('click', function () {

// })