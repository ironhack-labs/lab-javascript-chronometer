var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
var splitList = document.getElementById('splits');

function printMinutes() {
  console.log(chronometer.twoDigitsNumber(chronometer.getMinutes())[0])
   minDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[0];
   minUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[1];
   console.log(minDec.innerHTML +" "+minUni.innerHTML)
}

function printSeconds() {
  secUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[1];
  secDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[0];
}

function printTime() {
  console.log(printMinutes()+" : "+printSeconds())
  return printMinutes()+" : "+printSeconds()
}

window.setInterval(printTime,1000);

function printMilliseconds() {

}

function printSplit() {
  var a = printTime();
  splitList.innerHTML += `<li> ${a} </li>`;
     

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
     if (btnLeft.className==="btn start"){
        btnLeft.classList.remove("start")
        btnLeft.classList.add("stop")
        btnLeft.textContent="STOP"
        btnRight.classList.replace("reset", "split")
        btnRight.textContent="SPLIT"
        chronometer.startClick()
        printTime();
     }
    
    else if (btnLeft.className==="btn stop"){
        btnLeft.classList.remove("stop")
         btnLeft.classList.add("start")
         btnLeft.textContent="START"
         chronometer.stopClick()
    }
//   btnLeft.classList.remove("start")
//   btnLeft.classList.add("stop")

    // btnLeft.className="btn stop"
    // btnLeft.textContent="STOP"
  


    //   btnLeft.className="btn start"
    //   btnLeft.textContent="START"
  }

);

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if (btnRight.className==="btn reset"){
    btnRight.classList.replace("reset", "split")
    btnRight.textContent="SPLIT"
    chronometer.currentTime = 0;
    splitList.innerHTML = ""

  }
  else if (btnRight.className==="btn split"){
    btnRight.classList.replace("split", "reset")
    btnRight.textContent="RESET"
    printSplit();
  }

  }

);

