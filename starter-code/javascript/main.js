/*var chronometer = new Chronometer();
var btnLeft = document.getElementById('btnLeft');
var btnRight = document.getElementById('btnRight');
var minDec = document.getElementById('minDec');
var minUni = document.getElementById('minUni');
var secDec = document.getElementById('secDec');
var secUni = document.getElementById('secUni');
var milDec = document.getElementById('milDec');
var milUni = document.getElementById('milUni');


function printTime() {

}

function printMinutes() {


}

function printSeconds() {

}

function printMilliseconds() {

}

function printSplit() {

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


////
// Start/Stop Button
const leftBtnlistener = () => {
    if (btnLeft.className == 'btn start') {
        btnLeft.classList = 'btn stop';
        btnLeft.textContent = 'STOP';

        chronometer.startClick();
     
        window.setInterval(() => {
            let getMin = chronometer.twoDigitsNumber(chronometer.getMinutes());
            let getSec = chronometer.twoDigitsNumber(chronometer.getSeconds());
            
        
            secDec.textContent = getSec.charAt(0);
            secUni.textContent = getSec.charAt(1);
            if (secDec.textContent == 5 && secUni.textContent == 9) {
                console.log("yeeeeeh");
                minDec.textContent = getMin.charAt(0);
                minUni.textContent = getMin.charAt(1);
            }
        });
    }
    else {
        btnLeft.className = 'btn start';
        btnLeft.textContent = 'START';
        chronometer.stopClick();
    }
};
// Event
btnLeft.onclick = leftBtnlistener;
// Reset/Split Button
btnRight.addEventListener('click', () => {
    if (btnRight.className == 'btn reset') {
        btnRight.classList = 'btn split';
        btnRight.textContent = 'SPLIT';
        chronometer.resetClick()
    }
    else if (btnRight.className == 'btn split') {
        btnRight.className = 'btn reset';
        btnRight.textContent = 'RESET';
        chronometer.resetClick()
    }
   
    
});*/

//////////////////final/////////

var chronometer = new Chronometer();
var btnLeft = document.getElementById('btnLeft');
var btnRight = document.getElementById('btnRight');
var minDec = document.getElementById('minDec');
var minUni = document.getElementById('minUni');
var secDec = document.getElementById('secDec');
var secUni = document.getElementById('secUni');
var milDec = document.getElementById('milDec');
var milUni = document.getElementById('milUni');
var splits = document.getElementById('splits');

// Start/Stop Button
const leftBtnlistener = () => {
  if (btnLeft.className == 'btn start') {
    btnLeft.classList = 'btn stop';
    btnLeft.textContent = 'STOP';
    btnRight.classList = 'btn split';
    btnRight.textContent = 'SPLIT';
    chronometer.startClick();
  } else {
    btnLeft.className = 'btn start';
    btnLeft.textContent = 'START';
    btnRight.classList = 'btn reset';
    btnRight.textContent = 'RESET';
    chronometer.stopClick();
  }

window.setInterval(() => {
let getSec = chronometer.twoDigitsNumber(chronometer.getSeconds());
    secDec.textContent = getSec.charAt(0);
    secUni.textContent = getSec.charAt(1);
let getMin = chronometer.twoDigitsNumber(chronometer.getMinutes());
    minDec.textContent = getMin.charAt(0);
    minUni.textContent = getMin.charAt(1);
  });
};

// Event
btnLeft.onclick = leftBtnlistener;
//

// Reset/Split Button
const rightBtnListener = () => {
  if (btnRight.className == 'btn reset') {
    chronometer.resetClick();
    while (splits.firstChild) {
      splits.removeChild(splits.firstChild);
    }
    // splits.children.
  } else {
    const li = document.createElement('li');
    const newSplit = document.createTextNode(chronometer.splitClick());
    li.appendChild(newSplit);
    splits.appendChild(li);
  }
};

btnRight.onclick = rightBtnListener;
