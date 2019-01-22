let chronometer = new Chronometer();
let btnLeft     = document.getElementById('btnLeft');
let btnRight    = document.getElementById('btnRight');
let minDec      = document.getElementById('minDec');
let minUni      = document.getElementById('minUni');
let secDec      = document.getElementById('secDec');
let secUni      = document.getElementById('secUni');
let milDec      = document.getElementById('milDec');
let milUni      = document.getElementById('milUni');
let list        = document.getElementById('split');


function printTime(sec, min) {
    minDec.innerText = min[0]
    minUni.innerText = min[1]
    secDec.innerText = sec[0]
    secUni.innerText = sec[1]
}

function printMinutes() {
  
}


function printSeconds() {
  
}

function printMilliseconds() {

}

function printSplit() {
  let listElements = document.createElement("li")
  listElements.innerHTML = compl
  list.appendChild(listElements)
}

function clearSplits() {

}

function setStopBtn() {
  
}

function setSplitBtn() {
    
}

function setStartBtn() {

}

function setResetBtn() {

}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  if (btnLeft.innerText === "START") {
    btnLeft.innerText = "STOP"
    btnRight.innerText = "SPLIT"
    btnLeft.className = "btn stop"
    btnRight.className = "btn split"
    chronometer.startClick ()
  } else if (btnLeft.innerText === "STOP") {
    btnLeft.innerText = "START"
    btnRight.innerText = "RESET"
    btnLeft.className = "btn start"
    btnRight.className = "btn reset"
    chronometer.stopClick()
  }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if (btnRight.innerText === "SPLIT") {
    // let split = 
    // // split.innerHTML =  minDec[0] +
    // // minUni[1] + " : " + secDec[0] + secUni[1]
    // // list.appendChild(split)
    // split.innerHTML = setTime()
    // list.appendChild(split)
    // printSplit(Complete)
  } else if (btnRight.innerText === "RESET") {
    // chronometer.resetClick()
  }
});
