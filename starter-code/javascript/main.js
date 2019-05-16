var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');


function printTime () {
  printMinutes();
  printSeconds();
};

let minutes = 0;
let minString ='00';
function printMinutes() {

  if (printSeconds() === "00") {
    if(minutes === 0){
      minutes = 0;
    }
    let visibleMinutes = chronometer.twoDigitsNumber(minutes);
    splitted = visibleMinutes.split('');
    minUni.innerText = splitted[1];
    minDec.innerText = splitted[0];
    minString = visibleMinutes;
    minutes++;
    } else if(minutes > 59) {
    minutes = 0;
  } 
}

function printSeconds() {
  let visibleSegundos = chronometer.twoDigitsNumber(chronometer.getSeconds());
  splitted = visibleSegundos.split('');
  secUni.innerText = splitted[1];
  secDec.innerText = splitted[0];
  return visibleSegundos;
}
let milliseconds = 0;
function printMilliseconds() {
    let visibleMilliseconds = chronometer.twoDigitsNumber(milliseconds);
    splitted = visibleMilliseconds.split('');
    milUni.innerText = splitted[1];
    milDec.innerText = splitted[0];
    milliseconds++;
    if(milliseconds > 99){
      milliseconds = 0;
    }
    return visibleMilliseconds;
}

function printSplit() {
  let splitOrden = document.createElement('li');
  segundosSplit = printSeconds();
  milisegSplit = printMilliseconds();
  splitOrden.innerHTML = `${minString}:${segundosSplit}:${milisegSplit}`
  document.getElementById('splits').appendChild(splitOrden);
}

function clearSplits() {
  let listaSplits = document.getElementById('splits');
  listaSplits.innerHTML = '';
}

function setStopBtn() {
  chronometer.stopClick();
}

function setSplitBtn() {  
  chronometer.splitClick();
}


function setStartBtn() {  
  chronometer.startClick();
  printTime();  
}

function setResetBtn() {
  chronometer.resetClick();
}

// Start/Stop Button
let intervalId = 0;
btnLeft.addEventListener('click', function () {
  if(btnLeft.innerText ==="START"){
    btnLeft.innerText = "STOP";
    btnLeft.setAttribute('class','btn stop');
    btnRight.innerText = "SPLIT";
    btnRight.setAttribute('class','btn split'); 
    setStartBtn();
    let minutesSeconds = () => {
      printTime();
    };
    let millisecondsCount = () => {
      printMilliseconds();
    };
    intervalId = setInterval(minutesSeconds, 1000);
    intervalIdMilliseconds = setInterval(millisecondsCount, 1)
  }
  else if(btnLeft.innerText==='STOP'){
    btnLeft.innerText = 'START';
    btnLeft.setAttribute('class','btn start');
    btnRight.innerText='RESET';
    btnRight.setAttribute('class','btn reset');
    setStopBtn();
    clearInterval(intervalId);
    clearInterval(intervalIdMilliseconds)
  }
});

// Reset/Split Button
btnRight.addEventListener("click", function() {
if(btnRight.innerText === 'SPLIT'){
  setSplitBtn();
  printSplit();

} else if (btnRight.innerText === "RESET"){
  setResetBtn();
  minutes = 0;
  minString= '00'
  secUni.innerText = '0';
  secDec.innerText = '0';
  milUni.innerText = '0';
  milDec.innerText = '0';
  minUni.innerText = '0';
  minDec.innerText = '0';
  clearSplits();
}
});

