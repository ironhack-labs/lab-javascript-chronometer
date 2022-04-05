const chronometer = new Chronometer();

const chronometerStatus = 'stopped';

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

function printTime() 
{
  console.log(chronometer.currentTime)
  this.printMinutes()
  this.printSeconds()
}

function printMinutes() 
{
  chronometer.computeTwoDigitNumber(chronometer.getMinutes())
}

function printSeconds() 
{
  chronometer.computeTwoDigitNumber(chronometer.getSeconds())
}

// ==> BONUS
function printMilliseconds() 
{
  // ... your code goes here
}

function printSplit() 
{
  // ... your code goes here
}

function clearSplits() 
{
  // ... your code goes here
}

function setStopBtn() 
{
  console.log('stop')
  chronometer.stop()
}

function setSplitBtn() 
{
  console.log('split')
}

function setStartBtn() 
{
  console.log("start")
  chronometer.start()
}

function setResetBtn() 
{
  console.log('reset')
  chronometer.rest()
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if(this.chronometerStatus === undefined  || this.chronometerStatus === 'stopped')
  {
    this.setStartBtn()
    this.intervalId = setInterval(() =>
    {printTime(), 1000)
      
    this chronometerStatus = 'Running'}

    else
    {
      this.setStopBtn()
      this.chronometerStatus = 'Stopped'
      console.log(chronometer.currentTime)
    }
    console.log(this.chronometerStatus)
    console.log(chronometer.currentTime)
  }
);

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (this.chronometerStatus === undefined || this.chronometerStatus === 'stopped'){
    this.setResetBtn()
  }
  else {
    this.setSplitBtn()
  }
  console.log(this.chronometerStatus)
});
