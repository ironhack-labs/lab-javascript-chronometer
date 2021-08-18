const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');


// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  // ... your code goes here
  //console.log(chronometer.getSeconds())
  //secUniElement.innerHTML = chronometer.getSeconds()
  printMinutes();
  printSeconds();
}

function printMinutes() {
  // ... your code goes here
  minUniElement.innerText = chronometer.getMinutes() % 10;
	minDecElement.innerText = Math.floor(chronometer.getMinutes() / 10);

}

function printSeconds() {
  // ... your code goes here
  secUniElement.innerText = chronometer.getSeconds()%10;
  secDecElement.innerText = Math.floor(chronometer.getSeconds()/10);
}

// ==> BONUS
function printMilliseconds() {

function printSplit() {
  // ... your code goes here
  splitsElement.innerHTML += `<li>${Math.floor(chronometer.getMinutes() / 10)}${chronometer.getMinutes() %
		10}:${Math.floor(chronometer.getSeconds() / 10)}${chronometer.getSeconds() % 10}</li>`;
}

function clearSplits() {
  // ... your code goes here
  // ... your code goes hereç
  splitsElement.innerHTML = '';
  secUniElement.innerText = '0';
  secDecElement.innerText = '0';
  minUniElement.innerText = '0';
  minDecElement.innerText = '0';
}

function setStopBtn() {
  // ... your code goes here
  btnLeftElement.innerHTML = 'STOP';
  btnLeftElement.className = 'btn stop';
}

function setSplitBtn() {
  // ... your code goes here
    btnRightElement.innerHTML = 'SPLIT'
    btnRightElement.className = 'btn split'

}

function setStartBtn() {
  // ... your code goes here
  btnLeftElement.innerHTML = 'START';
  btnLeftElement.className = 'btn start';
}

function setResetBtn() {
  // ... your code goes here
    btnRightElement.innerHTML = 'RESET';
    btnRightElement.className = 'btn reset';
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here
  if(btnLeftElement.className === 'btn start'){
    setStopBtn();
    setSplitBtn();
    chronometer.start(printTime)
  } else if(btnLeftElement.className === 'btn stop'){
    setStartBtn();
    setResetBtn();
    chronometer.stop();
  }

});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
  if (btnRightElement.className === 'btn reset') {
		clearSplits();
		chronometer.reset();
	} else if (btnRightElement.className === 'btn split') {
		chronometer.split();
		printSplit();
	}
});
