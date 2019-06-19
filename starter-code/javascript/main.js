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

}

function printMinutes(min) {
  let twoDigitsMin = chronometer.twoDigitsNumber(min);
  minDec.innerHTML = twoDigitsMin.slice(0,1)
  minUni.innerHTML = twoDigitsMin.slice(1,2)
}

function printSeconds(sec) {
  
  let twoDigitsSec = chronometer.twoDigitsNumber(sec);
  secDec.innerHTML = twoDigitsSec.slice(0,1)
  secUni.innerHTML = twoDigitsSec.slice(1,2)

}

function printMilliseconds() {

}

function printSplit() {
  let minutes = chronometer.twoDigitsNumber(chronometer.getMinutes())
  let seconds = chronometer.twoDigitsNumber(chronometer.getSeconds())
  let newSplit = `<li>${minutes}:${seconds}</li>`
  $('#splits').append(newSplit)

}

function clearSplits() {
  $('#splits').html('');
}


setInterval(()=> {
  printSeconds(chronometer.getSeconds())
  printMinutes(chronometer.getMinutes())},1000)

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  $(this).toggleClass('start stop');
  $(btnRight).toggleClass('reset split');

  //already running
  if(chronometer.isRunning) {
    chronometer.isRunning = !chronometer.isRunning;
    chronometer.stopClick();
    $(this).html('START')
    $(btnRight).html('RESET')


    //not yet running
  } else {
    chronometer.isRunning = !chronometer.isRunning;
    chronometer.startClick();
    
    $(this).html('STOP');
    $(btnRight).html('SPLIT'); 
  }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if(chronometer.isRunning) {
    //the button is "split"
    printSplit()
  }
  else {
    //the button is "reset"
    chronometer.resetClick();
    clearSplits();
  }
});
