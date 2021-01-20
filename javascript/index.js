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
  const min = chronometer.getMinutes();
  const sec = chronometer.getSeconds();  
  printMinutes(min)
  printSeconds(sec)
}

function printMinutes(min) {
 
 
 minDec.textContent= min.toString()[0]
 minUni.textContent= min.toString()[1]

}

function printSeconds(sec) {
  
  secDec.textContent= sec.toString()[0]
  secUni.textContent= sec.toString()[1]
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
   
  const newLi = document.createElement('li');
  newLi.innerHTML = `${chronometer.getMinutes()} : ${chronometer.getSeconds()}`
    
  splits.appendChild(newLi);
}

function clearSplits() {
  
    splits.textContent = "";
  
}

/*var list = document.getElementById("myList");   // Get the <ul> element with id="myList"
list.removeChild(list.childNodes[0]);    */


function setStopBtn() {
  // chronometer.stopClick()
  btnLeft.classList = "btn stop"
    btnLeft.textContent = "STOP";
}

function setSplitBtn() {
  
  btnRight.classList= "btn split"
    btnRight.textContent = "SPLIT";

  }
 

function setStartBtn() {
 // chronometer.startClick()
  btnLeft.textContent = "START";
  btnLeft.classList = "btn start"

}

function setResetBtn() {
  //chronometer.resetClick()
    btnRight.classList= "btn reset"
    btnRight.textContent = "RESET";

  }

// Start/Stop Button
btnLeft.addEventListener("click", (event) => {

  
  if (btnLeft.innerHTML === "START") {
    setStopBtn()
    setSplitBtn()

    chronometer.startClick(printTime)

  } else {
   
    setResetBtn()
    setStartBtn()
    chronometer.stopClick()
    
  }
});

// Reset/Split Button
btnRight.addEventListener("click", (event) => {

    if (btnRight.innerHTML === "RESET") {
    setStartBtn()
    
    chronometer.resetClick()

    secDec.textContent= 0
    secUni.textContent= 0
    clearSplits()
    }
    if (btnRight.innerHTML === "SPLIT") {
      printSplit()
      }
});



