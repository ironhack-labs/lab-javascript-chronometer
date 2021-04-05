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

}

function printMinutes() {
  
  setInterval(() => {
    minUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[1];
    minDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[0];
    }, 100);
  

}

function printSeconds() {
  
  setInterval(() => {
    secUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[1];
    secDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[0];
    }, 100);
  
  
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
  btnLeft.className = 'btn start'
  btnLeft.innerHTML = 'START'
}

function setSplitBtn() {

  btnRight.className = 'btn split'
  btnRight.innerHTML = 'SPLIT'
}

function setStartBtn() {
  btnLeft.setAttribute('class', 'btn stop')
  btnLeft.innerHTML = 'STOP'
  
}

function setResetBtn() {
  btnRight.setAttribute('class', 'btn reset');
  btnRight.innerHTML = 'RESET';
  chronometer.stopClick();
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  
  if(btnLeft.innerHTML === "START"){

    chronometer.startClick();
    setSplitBtn();
    setStartBtn();
    printSeconds();
    printMinutes();
    
  }
  else{

    chronometer.stopClick();
    setResetBtn()
    setStopBtn()  
  }
  
});


// Reset/Split Button
btnRight.addEventListener('click', () => {
  
  if(btnRight.innerHTML === "RESET"){
    //reset by call the resetclick method
    chronometer.resetClick(); 
    //setting the ol in a variable to loop through deleting each child element
    const orderList = document.getElementById("splits")
    while (orderList.firstChild) {
    orderList.removeChild(orderList.firstChild);
    }
  }
  else{

    const min1 = chronometer.twoDigitsNumber(chronometer.getMinutes());
    const sec1 = chronometer.twoDigitsNumber(chronometer.getSeconds());    
    const timeSplit  = `${min1}:${sec1}`

    const ol = document.getElementById("splits");
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(`${timeSplit}`));
    ol.appendChild(li);
  }
});
