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
    printMinutes()
    printSeconds()  
}

function printMinutes() {

    minDec.innerText = chronometer.twoDigitsNumber(chronometer.getMinutes())[0]
    minUni.innerText = chronometer.twoDigitsNumber(chronometer.getMinutes())[1]

  // ... your code goes here
}

function printSeconds() {

    secDec.innerText = chronometer.twoDigitsNumber(chronometer.getSeconds())[0]
    secUni.innerText = chronometer.twoDigitsNumber(chronometer.getSeconds())[1]
  // ... your code goes here
}

// ==> BONUS
function printMilliseconds() {

//     milDec.innerText = chronometer.twoDigitsNumber(chronometer.currentTime())[0]
//     milUni.innerText = chronometer.twoDigitsNumber(chronometer.currentTime())[1]
//   // ... your code goes here


function printSplit() {
  // ... your code goes here
}

function clearSplits() {
   // ... your code goes here
}

function setStopBtn() {
    btnLeft.classList.remove("start")
    btnLeft.classList.add("stop")
    btnLeft.innerText = "STOP";
  // ... your code goes here
}

function setSplitBtn() {
  btnRight.classList.remove('reset')
    btnRight.classList.add('split')
    btnRight.innerText = 'SPLIT';
  // ... your code goes here
}

function setStartBtn() {
  
    btnLeft.classList.remove("stop")
    btnLeft.classList.add("start")
    btnLeft.innerText = "START";
  // ... your code goes here
}

function setResetBtn() {
    
    btnRight.classList.remove('split')
    btnRight.classList.add('reset')
    btnRight.innerText = 'RESET';
  // ... your code goes here
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
     if(btnLeft.classList.contains('start')){
            setStopBtn()
            setSplitBtn()
        } else {
            setStartBtn()
            setResetBtn()
        }
    });
};

// Reset/Split Button
btnRight.addEventListener('click', () => {
    if(btnRight.classList.contains('reset')){
        printSplit()
        } else {
        clearSplits()
        
            
    };
  
});




// document.querySelectorAll('.green-pepper').forEach(oneGreenPepper => {
//     if (state.greenPeppers) {
//       oneGreenPepper.style.visibility = 'visible';
//     } else {
//       oneGreenPepper.style.visibility = 'hidden';
//     }