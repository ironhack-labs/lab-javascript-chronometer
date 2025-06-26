
const chronometer = new Chronometer();

console.log('hola');

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

console.log('variables declaradas');

function printTime() {
  printMinutes();
  printSeconds();
}

function printMinutes() {
  const numMin = chronometer.computeTwoDigitNumber(
    chronometer.getMinutes());


    minDecElement.textContent = numMin[0];
  minUniElement.textContent = numMin[1];
}

function printSeconds() {
  const numSec = chronometer.computeTwoDigitNumber(
    chronometer.getSeconds());


secDecElement.textContent = numSec[0];
  secUniElement.textContent = numSec[1];
}

// ==> BONUS
function printMilliseconds() {}

function printSplit() {
  const split = chronometer.split();

  splitsElement.textContent = split;
}

function clearSplits() {
  splitsElement.innerHTML = '';
}

function setStopBtn() {
  chronometer.stop();

  btnLeftElement.textContent = 'START';
  btnLeftElement.className = 'btn start';
  btnRightElement.textContent = 'RESET';
  btnRightElement.className = 'btn reset';
}

function setSplitBtn() {
  const split = chronometer.split();
 const splitItem = document.createElement('li');
    splitItem.textContent = split;
    splitsElement.appendChild(splitItem);
}

function setStartBtn() {
  chronometer.start(printTime);

  btnLeftElement.textContent = 'STOP';
  btnLeftElement.className = 'btn stop';

   btnRightElement.textContent = 'SPLIT';
  btnRightElement.className = 'btn split';
}
function setResetBtn() {
  chronometer.reset();

  btnLeftElement.textContent = 'START';
  btnLeftElement.className = 'btn start';
  btnRightElement.textContent = 'RESET';
  btnRightElement.className = 'btn reset';

  minDecElement.textContent = '0';
  minUniElement.textContent = '0';
  secDecElement.textContent = '0';
  secUniElement.textContent = '0';
  milDecElement.textContent = '0';
  milUniElement.textContent = '0';
  splitsElement.textContent = '0';
  // document.querySelector('#clock').innerHTML=`
  //       <div id="sphere">
  //         <span id="minDec" class="number">0</span>
  //         <span id="minUni" class="number">0</span>
  //         <span>:</span>
  //         <span id="secDec" class="number">0</span>
  //         <span id="secUni" class="number">0</span>
  //         <div id="milliseconds">
  //           <span id="milDec">0</span>
  //           <span id="milUni">0</span>
  //         </div>
  //       </div>
  //     
  // 
  
  clearSplits();
  
}

btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.textContent.includes('START')) {
    
    setStartBtn();
    
  } else {
    setStopBtn();
    
  }
});

btnRightElement.addEventListener('click', () => {
  if (btnRightElement.textContent.includes('RESET')) {

    setResetBtn();
  } else {
    setSplitBtn();
  }
});