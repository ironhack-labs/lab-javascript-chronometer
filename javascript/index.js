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


//*Pregunta: Por qué cuenta los segundos en el Id de minutos??
//Error al copiar y pegar y no cambiar las variables!
function printTime() {
  printMinutes(); 
  printSeconds();
}


function printMinutes() {
 
  
  minDec.innerText = chronometer.twoDigitsNumber(chronometer.getMinutes())[0];
  minUni.innerText = chronometer.twoDigitsNumber(chronometer.getMinutes())[1];
}

function printSeconds() {

 
  secDec.innerText = chronometer.twoDigitsNumber(chronometer.getSeconds())[0];
  secUni.innerText = chronometer.twoDigitsNumber(chronometer.getSeconds())[1];

  //*Nota: Cuidado al copiar y pegar!! 
  // minDec.innerText = chronometer.twoDigitsNumber(chronometer.getSeconds())[0];
  // minUni.innerText = chronometer.twoDigitsNumber(chronometer.getSeconds())[1];

}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  
mySplit = document.createElement("li");
mySplit.innerHTML = chronometer.splitClick();
splits.appendChild(mySplit)

}

//*Pregunta: Se podría hacer con .remove?
function clearSplits() {
 
let puff = document.querySelectorAll("#splits");
for(let i = 0; i < puff.length; i++){
puff[i].innerHTML = "";

}


}

// function setStopBtn() {
//   // ... your code goes here
// }

// function setSplitBtn() {
//   // ... your code goes here
// }

// function setStartBtn() {
//   // ... your code goes here
// }

// function setResetBtn() {
//   // ... your code goes here
// }

// Start/Stop Button
btnLeft.addEventListener('click', () => {

  if (btnLeft.classList.contains("start")){

    btnLeft.classList.replace("start", "stop");
    btnLeft.innerText = "STOP";
    chronometer.startClick();
    setInterval(()=>{printTime()},1000);
    btnRight.classList.replace("reset", "split");
    btnRight.innerText = "SPLIT"

  }else if (btnLeft.classList.contains("stop")){

    btnLeft.classList.replace("stop", "start");
    btnLeft.innerText = "START";
    chronometer.stopClick();
    btnRight.classList.replace("split", "reset");
    btnRight.innerText = "RESET"
    
  }

});

// Reset/Split Button


 
btnRight.addEventListener('click', () => {
  
  if (btnRight.classList.contains("reset")) {
    chronometer.resetClick() ;
    clearSplits();
  }
  else  {

    printSplit();  } 
  });
