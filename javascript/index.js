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

  /*const secs = chronometer.twoDigitsNumber(chronometer.getSeconds());
  const mins = chronometer.twoDigitsNumber(chronometer.getMinutes());*/
  printMinutes();
  printSeconds();

  // ... your code goes here
}

function printMinutes() {

  const minutes = chronometer.twoDigitsNumber(chronometer.getMinutes());

  minDec.textContent = minutes[0];
  minUni.textContent = minutes[1];

  /*let updateMinutes = chronometer.splitClick()

  minDec.innerHTML = updateMinutes[0];
  minUni.innerHTML = updateMinutes[1];

  /*minUni.textContent = v[1];
  minDec.textContent = v[0];*/

  /*if (chronometer.getMinutes() < 10 ){
    minDec.textContent = '0';

    return minUni.textContent = chronometer.getMinutes();
  } 

  minDec.textContent = chronometer.getMinutes();*/

  // ... your code goes here 
}

function printSeconds() {

    const seconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
  
    secDec.textContent = seconds[0];
    secUni.textContent = seconds[1];

  
  /*let updateSeconds = chronometer.splitClick()

  secDec.innerHTML = updateSeconds[3];
  secUni-innerHTML = updateSeconds[4];
  /*if (chronometer.getSeconds() < 10 ){
    secDec.textContent = '0';

    return secUni.textContent = chronometer.getSeconds();
  } 

  secDec.textContent = chronometer.getSeconds();*/
  // ... your code goes here
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {

  const lista = document.createElement("li");

  lista.innerHTML = `<p>${chronometer.splitClick()}</p>`;
  splits.appendChild(lista);

  // ... your code goes here
}

function clearSplits() {

  splits.innerHTML = "";
  // ... your code goes here
}

function setStopBtn() { 
  btnLeft.textContent = "STOP";
  btnLeft.setAttribute("class", "btn stop");

  // ... your code goes here
}

function setSplitBtn() {
  btnRight.textContent = "SPLIT";
  btnRight.setAttribute("class", "btn split");
  // ... your code goes here
}

function setStartBtn() {
  btnLeft.textContent = "START";
  btnLeft.setAttribute("class", "btn start");
  // ... your code goes here
}

function setResetBtn() {

  btnRight.textContent = "RESET";
  btnRight.setAttribute("class", "btn reset");
  // ... your code goes here
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
//     // btnLeft.textContent = "STOP";
//     // btnLeft.setAttribute("class", "btn stop");
//     // btnRight.className === "btn reset";
//     // btnRight.textContent = "SPLIT";
//     // btnRight.setAttribute("class", "btn split");
//     // chronometer.startClick(printSeconds);
//     } else if (btnLeft.className === "btn stop") {
//       // btnLeft.textContent = "START";
//       // btnLeft.setAttribute("class", "btn start");
//     //   btnRight.className === "btn split";
//     //   btnRight.textContent = "RESET";
//     //   btnRight.setAttribute("class", "btn reset");
//     // }

//   // ... your code goes here
 });

// Reset/Split Button
btnRight.addEventListener('click', () => {

  // if (btnRight.className === "btn reset") {
  //   btnRight.textContent = "SPLIT";
  
  // }
  // ... your code goes here
});
