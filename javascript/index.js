const chronometer = new Chronometer();


const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');
const clockElememt = document.querySelectorAll('#clock')




// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');
 
function printTime(minutes, seconds) {

  if (minutes > 0) {

    this.printMinutes(minutes);
  }
    this.printSeconds(seconds);
     
  
}

function printMinutes(minutes) {
  minDec.innerHTML = minutes[0];
  minUni.innerHTML = minutes[1];
}

function printSeconds(seconds) {
  secDec.innerHTML = seconds[0];
  secUni.innerHTML = seconds[1];

}


function printMilliseconds(milliseconds) {
  milDec.innerHTML = milliseconds[0];
  milUni.innerHTML = milliseconds[1];

}

function printSplit(minutes, seconds, milliseconds) {
  let split = minutes + ':' + seconds + ':' + milliseconds;
  let li = document.createElement('li');
  li.innerHTML = split;
  document.getElementById('splits').appendChild(li);
  
}

function clearSplits() {
  document.getElementById('splits').innerHTML = '';
}

function setStopBtn() {
  btnLeft.innerHTML = 'STOP';
  btnLeft.className = 'btn stop';
}

function setSplitBtn() {
  btnRight.innerHTML = 'SPLIT';
  btnRight.className = 'btn split';
}

function setStartBtn() {
  btnLeft.innerHTML = 'START';
  btnLeft.className = 'btn start';

}

function setResetBtn() {
  btnRight.innerHTML = 'RESET';
  btnRight.className = 'btn reset';
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
   if (btnLeft.className.indexOf('start') > 0){
    chronometer.start(printTime);
    setStopBtn();
    setSplitBtn();
  } else {
    chronometer.stop();
    setStartBtn();
    setResetBtn();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRight.className.indexOf('reset') > 0) {
    chronometer.reset();
  } else {
    chronometer.split();
  }
});
