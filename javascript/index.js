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
let sphere = document.getElementById('sphere');
let timePrinted=0;

function printTime() {
  // ... your code goes here
  //render time to print
  printMinutes();
  printSeconds();


}

function printMinutes() {
  // ... your code goes here
  //render minutes to print
  minDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[0];
  minUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[1];
}

function printSeconds() {
  // ... your code goes here
  //render minutes to seconds
  secDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[0];
  secUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[1];

}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
  // create a li tag , add time to li tag and add li child to splits lo list
  let liTag = document.createElement('li');
  liTag.innerHTML = chronometer.splitClick() 
  splits.appendChild(liTag);
}

function clearSplits() {
  // ... your code goes here
  //remove every content of lo tag. Every li tags
splits.innerHTML='';
}

function setStopBtn() {
  // ... your code goes here
  //change left btn to stop
  btnLeft.className = "btn stop";
  btnLeft.innerHTML = "STOP";
}

function setSplitBtn() {
  // ... your code goes here
  //change right btn to split
  btnRight.className = "btn split";
  btnRight.innerHTML = "SPLIT";
}

function setStartBtn() {
  // ... your code goes here
   //change left btn to start
  btnLeft.className = "btn start";
  btnLeft.innerHTML = "START";
}

function setResetBtn() {
  // ... your code goes here
  //change right btn to reset
  btnRight.className = "btn reset";
  btnRight.innerHTML = "RESET";
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  // ... your code goes here 
  //Changing buttons texts
 
  if (btnLeft.innerText === "START") {
    //clock stopped. Change left btn to stop and right btn to split. 
    setStopBtn();
    setSplitBtn();
  //start the clock
    chronometer.startClick(printTime);
    
  } else {
    //clock running. Change left btn to start and right btn to reset. 
    setStartBtn();
    setResetBtn();
    //stop the clock
    chronometer.stopClick();
   

  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  // ... your code goes here
  if (btnRight.innerHTML === "RESET") {
    // clear all the data on the clock.
    //  set the minutes and seconds to zero in our clock 
    chronometer.resetClick();
    printTime();
    //remove all the < li > elements that we could have in the list we created in the previous iteration.
    clearSplits();

  } else {
    printSplit();
   

  }
});
