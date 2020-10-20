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
  printMilliseconds();
}

function printMinutes() {
  minDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[0];
  minUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[1];

}

function printSeconds() {
   secDec.innerText = chronometer.twoDigitsNumber(chronometer.getSeconds())[0];
   secUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[1];
}

// ==> BONUS
function printMilliseconds() {
  milDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[0];
  milDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[1]
}

function printSplit(time) {
  let newSplit = document.getElementById('splits');
  let newListSplit = document.createElement('li');
  let timeSet = document.createTextNode(time);
    newListSplit.appendChild(time);
    newSplit.appendChild(newListSplit);
}

function clearSplits() {
  let delete = document.getElementById('#splits-container').reset();
} 
  /*document.getElementById('btnRight').onclick();
  document.getElementById('#splits-container').reset();*/


}

function setStopBtn() {
  
} 

function setSplitBtn() {
  /*let split = document.getElementById('btnRight').onclick();*/
}

function setStartBtn() {
    
  /* if (chronometer.intervalId == 0){
    chronometer.currentTime = 1;
    increment();
    document.getElementById('btnLeft').innerHTML = 'Stop'; 
  } else {
    chronometer.currentTime = 0;
    document.getElementById('btnLeft').innerHTML = 'Start';
  }
  } */ 
  

/* let start = document.getElementById('btnLeft').onclick();*/
}

function setResetBtn() {
    
  /*document.getElementById("reset").onclick*/
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  // ... your code goes here
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  // ... your code goes here
});
