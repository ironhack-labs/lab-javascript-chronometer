var chronometer = new Chronometer();
var btnLeft = document.getElementById('btnLeft');
var btnRight = document.getElementById('btnRight');
var minDec = document.getElementById('minDec');
var minUni = document.getElementById('minUni');
var secDec = document.getElementById('secDec');
var secUni = document.getElementById('secUni');
var milDec = document.getElementById('milDec');
var milUni = document.getElementById('milUni');
let splitList=document.getElementById('splits');


function printTime() {
    printSeconds() 
    printMinutes() 
    
   
}

function printMinutes() {
    let minuteNum = chronometer.twoDigitsNumber(chronometer.getMinutes());
    minDec.innerHTML = minuteNum[0];
    minUni.innerHTML = minuteNum[1];
}

function printSeconds() {
    let secondNum = chronometer.twoDigitsNumber(chronometer.getSeconds());
    secDec.innerHTML = secondNum[0];
    secUni.innerHTML = secondNum[1];
}

function printMilliseconds() {

}

function printSplit() {
    
   
   let newSplit = document.createElement('li');
   let stringToPrint = document.createTextNode(`${minDec.innerHTML}${minUni.innerHTML}:${secDec.innerHTML}${secUni.innerHTML}`);
   newSplit.appendChild(stringToPrint);
   splitList.appendChild(newSplit);
}

function clearSplits() {
    chronometer.resetClick();
    minDec.innerHTML=0
    minUni.innerHTML=0
    secDec.innerHTML=0
    secUni.innerHTML=0
    let splitListItems = document.querySelectorAll('li');

    splitListItems.forEach(element => {
        splitList.removeChild(element);
    });


}

function setStopBtn() {
    btnLeft.className = `btn stop`;
    btnLeft.innerHTML = `STOP`;
    
    
}

function setSplitBtn() {
    btnRight.className = `btn split`;
    btnRight.innerHTML = `SPLIT`;
}

function setStartBtn() {
    btnLeft.className = `btn start`;
    btnLeft.innerHTML = `START`;
}

function setResetBtn() {
    btnRight.className = `btn reset`;
    btnRight.innerHTML = `RESET`;
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    if (btnLeft.className === `btn start`) {
        setStopBtn()
        setSplitBtn()
        chronometer.startClick();
    } else {
        setStartBtn()
        setResetBtn()
        chronometer.stopClick()

    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if (btnRight.className === `btn reset`) {
        clearSplits() 
        


    } else  {
       
       printSplit()
    }
});