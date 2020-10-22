{/* <section id="clock">
<div id="sphere">
  <span id="minDec" class="number">0</span><span id="minUni" class="number">0</span><span>:</span
  ><span id="secDec" class="number">0</span><span id="secUni" class="number">0</span>

  <div id="milliseconds"><span id="milDec">0</span><span id="milUni">0</span></div>

  <button id="btnLeft" class="btn start">START</button> <button id="btnRight" class="btn reset">RESET</button>
</div>
</section>
 */}

const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

function printTime() {
  printMinutes();
  printSeconds();
}

//return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}`

function printMinutes() {
  minDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[0]
  minUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[1]
}

function printSeconds() {
  secDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[0]
  secUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[1]
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  splits.innerHTML = ""
}

function setStopBtn() {
  btnLeft.classList.toggle("START")
  btnLeft.classList.toggle("STOP")
  btnLeft.innerHTML = "STOP"
}

function setSplitBtn() {
  btnRight.classList.toggle("RESET")
  btnRight.classList.toggle("SPLIT")
  btnRight.innerHTML = "SPLIT"

}

function setStartBtn() {
  btnLeft.classList.toggle("STOP")
  btnLeft.classList.toggle("START")
  btnLeft.innerHTML = "START"
}	

function setResetBtn() {
  btnRight.classList.toggle("SPLIT")
  btnRight.classList.toggle("RESET")
  btnRight.innerHTML = "RESET"
}

// Start/Stop Button
//si je clique sur start le compte a rebours commence - sinon tout s'arrete 
/* startClick(callback) {
  setInterval(() => {
  this.currentTime++;
},1000); */
/* stopClick() {
  clearInterval(this.intervalId)
} */

btnLeft.addEventListener('click', () => {
 if 
}


// Reset/Split Button
//si je clique sur reset le compte a rebours se mets à 0 ? - on doit faire un reset appeller fonction reset clique
btnRight.addEventListener('click', () => {
}

