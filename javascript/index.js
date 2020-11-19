var chronometer = new Chronometer();
 
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


let status = false; 


function printTime() {
  // ... your code goes here
 

  setInterval(() => {
    // console.log("print time here");
    printMinutes();
    printSeconds();
  }, 1000);
}

function printMinutes() {
  // ... your code goes here
  let mins = chronometer.twoDigitsNumber(chronometer.getMinutes());
  // console.log("print mins", mins);
  
  
  minUni.textContent = mins%10;
  minDec.textContent = ((mins-(mins%10))/10);
 
}


function printSeconds() {
  
  let secs = chronometer.twoDigitsNumber(chronometer.getSeconds());
  // console.log(secs,typeof secs);
  
  secUni.textContent = (secs%10);
  secDec.textContent = ((secs-secs%10)/10);
  

}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
    let element = document.createElement("li");
    element.textContent = (chronometer.twoDigitsNumber(chronometer.getMinutes()) + ":" + chronometer.twoDigitsNumber(chronometer.getSeconds()));
    // console.log(printMinutes);
    // console.log(printSeconds);
    splits.appendChild(element);
}

function clearSplits() {
  // ... your code goes here
      // console.log(splits);
      let lis = document.querySelectorAll('#splits li');
      console.log(lis);
      document.getElementById(splits).removeChild(lis);
  
}

function setStopBtn() {
  // ... your code goes here
  btnLeft.classList.toggle("start");
  btnLeft.classList.toggle("stop");
  btnLeft.textContent = "START";
  chronometer.stopClick();
  
}

function setSplitBtn() {
  // ... your code goes here
  if (status) {
      btnRight.textContent= "SPLIT" ;
      btnRight.classList.toggle("split");
      btnRight.classList.toggle("reset");
  }
}

function setStartBtn() {
  // ... your code goes here
    // btnLeft.onclik = handleClick;

    btnLeft.textContent = "STOP";
    btnLeft.classList.toggle("start");
    btnLeft.classList.toggle("stop");
    chronometer.startClick();
    printTime();
    
}

function setResetBtn() {
  // ... your code goes here
  if (!status) {
  btnRight.textContent= "RESET" 
  btnRight.classList.toggle("split");
  btnRight.classList.toggle("reset");
  }
}



// Start/Stop Button
btnLeft.addEventListener('click', () => {
  // ... your code goes here
  status = ! status;
        if (status) {
          setStartBtn(); 
          setSplitBtn();
        } else {
          setStopBtn();
          setResetBtn();
      }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  // ... your code goes here
  if(status) {
      printSplit();

  } else {
      chronometer.resetClick();
      clearSplits();
  }
});
