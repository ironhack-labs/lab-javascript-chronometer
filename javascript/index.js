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
 
}

function printMinutes() {

  const minutes = chronometer.twoDigitsNumber(chronometer.getMinutes());

  minDec.textContent = minutes[0];
  minUni.textContent = minutes[1];
   
}

function printSeconds() {

    const seconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
  
    secDec.textContent = seconds[0];
    secUni.textContent = seconds[1];

}

// ==> BONUS
function printMilliseconds() {
  
}

function printSplit() {

  const lista = document.createElement("li");

  lista.innerHTML = `<p>${chronometer.splitClick()}</p>`;
  splits.appendChild(lista);

  
}

function clearSplits() {

  splits.innerHTML = "";
  
}

function setStopBtn() { 
  btnLeft.textContent = "STOP";
  btnLeft.setAttribute("class", "btn stop");

  
}

function setSplitBtn() {
  btnRight.textContent = "SPLIT";
  btnRight.setAttribute("class", "btn split");
  
}

function setStartBtn() {
  btnLeft.textContent = "START";
  btnLeft.setAttribute("class", "btn start");
  
}

function setResetBtn() {

  btnRight.textContent = "RESET";
  btnRight.setAttribute("class", "btn reset");
  
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {

   if (btnLeft.className === "btn start") {
     setStopBtn();
     setSplitBtn(); 
     chronometer.startClick(printTime);
   } else {
     setStartBtn();
     setResetBtn();
     chronometer.stopClick();
   }

 });

// Reset/Split Button
btnRight.addEventListener('click', () => {

  if (btnRight.className === "btn split") {

    printSplit();
  }else if (btnRight.className === "btn reset") {
    clearSplits();
    chronometer.resetClick();
    printTime();
  }
  
});
