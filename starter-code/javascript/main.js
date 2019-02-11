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

}

function printSeconds() {


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


/*When we start application we should see on screen STOP and SPLIT button. While
chronometer is running we can split time in every moment. When we stop chronometer we should see START button on the left and RESET button on the right.
If we press again START, reset should become SPLIT. If we pres reset => call resetClick() => set everything on 00:00:00 and clean split result on
the left side of screen.

*/

var turnStopStart = 0;  //with this variable check appearance of buttons on screen.
var turnResetSplit = 0;


//listen for click event on btnLeft. If turnStopStart = 0 => we should start chronometer and change btnLeft to STOP, and btnRight to SPLIT.
//turnStopStart increase to 1. => next time when we click the same button code in else statement will be executed.

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
    
  }

});


btnRight.addEventListener('click', function () {


  //as long as turnStopStart = 1 => chronometer is running. and we can split our time. If that is not a case => our apllication is stopped
  // and we should see START button on teh left and RESET button on the right side of screen. As long as we don't press RESET button, we can 
  //start chronometer again. In the case that we press RESET =>  time is on 00:00:00, turnStopStart = 0 and we can start chronometer again.
  
  if (turnStopStart == 1) {

    chronometer.splitClick();
    

  } else {
    chronometer.resetClick();
  

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