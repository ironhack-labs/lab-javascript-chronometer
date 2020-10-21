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
  // ... your code goes here

  // WHat you want in the end is to call both printMinutes
  // and printSeconds in here

  // printMinutes();
  let fetchedSec= printSeconds();
  secDec.innerHTML=fetchedSec[0];
  secUni.innerHTML=fetchedSec[1];
  let fetchedMin=printMinutes();
  minDec.innerHTML=fetchedMin[0];
  minUni.innerHTML=fetchedMin[1];
  
  
}

function printMinutes() {
  // ... your code goes here
 
  let fetchMin= chronometer.twoDigitsNumber(chronometer.getMinutes());
  return fetchMin;
  
}

function printSeconds() {
  // ... your code goes here
  //chronometer.getSeconds();
  let fetchSec= chronometer.twoDigitsNumber(chronometer.getSeconds());
  return fetchSec;
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button

 document.getElementById('btnLeft').addEventListener("click", () => {
  const btnLeftClassName = document.getElementById('btnLeft').className;
  if(btnLeftClassName==="btn start"){
   chronometer.startClick(printTime);
  btnLeft.innerHTML="STOP";
  btnLeft.className="btn stop"
  btnRight.className="btn split"
  btnRight.innerHTML="SPLIT"
  //;
   }

 if(btnLeftClassName==="btn stop"){
  btnLeft.innerHTML="STOP";
  btnLeft.className="btn stop"
  btnRight.className="btn reset"
  chronometer.stopClick()
  btnRight.innerHTML="RESET"
 }
  });





// Reset/Split Button
btnRight.addEventListener('click', () => {
  // ... your code goes here
  const btnRighttClassName = document.getElementById('btnRight').className;
  if(btnRighttClassName==="btn reset"){
  btnRight.innerHTML="SPLIT";
  btnLeft.className="btn stop";
  btnRight.className="btn split";
  btnLeft.innerHTML="STOP"
  
 // var selectULElement=document.querySelector("#splits")
  
//document.getElementById("myList").appendChild(node);
 // var textnode = selectULElement.createTextNode(chronometer.splitClick());
 
  //console.log(chronometer.resetClick());
  chronometer.resetClick();
 
  }
  if(btnRighttClassName==="btn split"){
    btnRight.innerHTML="RESET";
    btnLeft.className="btn start"
    btnRight.className="btn reset"
    var childElement = document.createElement("LI");

    childElement.innerHTML = chronometer.splitClick()
    

    splits.appendChild(childElement);

  
   }

});
