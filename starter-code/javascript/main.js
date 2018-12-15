var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
var splits      = document.getElementById('splits');
var printInterval;


function printTime(chronometer) {
  printInterval = setInterval (function (){
    printMinutes(chronometer.setMinutes());
    printSeconds(chronometer.setSeconds());
    printMilliseconds(chronometer.setMilliseconds());
  },1);
}

function printMinutes(number) {
  let dec = 0;
  let uni = number;
  if (number > 9){
    dec = parseInt(number/10);
    uni = number%10;
  }
  minDec.innerText = dec;
  minUni.innerText = uni;
}

function printSeconds(number) {
  let dec = 0;
  let uni = number;
  if (number > 9){
    dec = parseInt(number/10);
    uni = number%10;
  }
  secDec.innerText = dec;
  secUni.innerText = uni;
}

function printMilliseconds(number) {
  let dec = 0;
  let uni = number;
  if (number > 9){
    dec = parseInt(number/10);
    uni = number%10;
  }
  milDec.innerText = dec;
  milUni.innerText = uni;
}

function resetChronometer(chronometer){

  //Las siguientes sentencias producian lag y no cambiaba los números antes de que se pusiese a 0 el cronometro
    // chronometer.resetClick();
    // printTime(chronometer);
    // clearInterval(printInterval);

  chronometer.resetClick();
  printMinutes(0);
  printSeconds(0);
  printMilliseconds(0);
  
  clearSplits();
}

function printSplit() {
  let li = document.createElement("li");
  li.innerText = `${chronometer.setTime()}`;
  splits.appendChild(li);
}

function clearSplits() {
  //No funciona porque la lista de nodos se va actualizando
  // splits.childNodes.forEach((li)=>splits.removeChild(li))
  
  //Borra todos los nodos pero hay que hacerlo del ultimo al primero
  // for (let i = splits.children.length-1; i >=0; i--) {
  //   splits.removeChild(splits.children[i]); 
  // }

  splits.innerHTML='';
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
  if(btnLeft.className.includes("start")){
    btnLeft.innerText = "STOP";
    btnLeft.className = "btn stop";
    btnRight.innerText = "SPLIT";
    btnRight.className = "btn split";
    chronometer.startClick();
    printTime(chronometer);
  }else{
    btnLeft.innerText = "START";
    btnLeft.className = "btn start";
    btnRight.innerText = "RESET";
    btnRight.className = "btn reset";
    chronometer.stopClick();
    clearInterval(printInterval);
  }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if (btnLeft.className.includes("start")){
    resetChronometer(chronometer);
  }else{
    printSplit();
  }
});
