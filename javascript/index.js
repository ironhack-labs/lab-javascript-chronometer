const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  console.log(chronometer.getMinutes())
  printMinutes(chronometer.getMinutes());
  printSeconds(chronometer.getSeconds());
}

function printMinutes(minutes) {
  minDecElement.innerHTML = minutes[0];
  minUniElement.innerHTML = minutes[1];
}

function printSeconds(seconds) {
  console.log(seconds)
  secDecElement.innerHTML = seconds[0];
  secUniElement.innerHTML = seconds[1];
}
// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

// function printSplit() {
//   let split = minutes + ':' + seconds;
//   let li = document.createElement('li');
//   li.innerHTML = split;
//   document.getElementById('splits').appendChild(li);
// }

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  chronometer.stop(); 
  btnLeftElement.className = 'btn start';
  document.querySelector('#btnLeft').textContent = 'START'
  console.log('stopped')
 
}

function setSplitBtn() {
  
  btnRightElement.className = 'btn split ';
  document.querySelector('#btnRight').textContent = 'SPLIT'
}

function setStartBtn() {
  chronometer.start(printTime);  
  btnLeftElement.className = 'btn stop';
  document.querySelector('#btnLeft').textContent = 'STOP'
  console.log('started')
}

function setResetBtn() {
 
  btnRightElement.className = 'btn reset ';
  document.querySelector('#btnRight').textContent = 'RESET'
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.innerHTML == 'START') {
      setStartBtn()
      setSplitBtn()
  }
  else{
    setStopBtn()
    setResetBtn()
  }
})
// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.innerHTML == 'SPLIT') {
    chronometer.split(); 
  }
  else{
    chronometer.reset();
  }
});
