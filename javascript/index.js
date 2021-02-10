const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');
const splitList= document.getElementById('splits')

function HandleClick(event, chronometer){
  if (event.target.classList.contains ('start')){
    event.target.innerText= 'STOP';
    btnRight.innerText='SPLIT';
    chronometer.startClick(printTime);

  }else {event.target.innerText= 'START';
  btnRight.innerText='RESET';
  chronometer.stopClick();
}

    event.target.classList.toggle('start');
    event.target.classList.toggle('stop');
    btnRight.classList.toggle('split');
    btnRight.classList.toggle('reset')
  

}

function HandleClickRight(event){
  if(event.target.classList.contains('split')){
  let actualChrono= chronometer.splitClick();
  splitList.innerHTML += `<li>${actualChrono}</li>`}
  else{
    chronometer.resetClick() 
    printTime()
  }
}

btnLeft.addEventListener("click", (event)=>HandleClick(event, chronometer))
// btnLeft.addEventListener("click", function (event){HandleClick(event, chronometer)})
btnRight.addEventListener('click', HandleClickRight)



// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

function printTime() {
  printMinutes()
  printSeconds()
}

function printMinutes() {
  let actualChrono= chronometer.splitClick();

  minDec.innerText=actualChrono[0]
  minUni.innerText=actualChrono[1]}

function printSeconds() {
  let actualChrono= chronometer.splitClick();

  secDec.innerText=actualChrono[3]
  secUni.innerText=actualChrono[4]}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  // ... your code goes here
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  // ... your code goes here
});
