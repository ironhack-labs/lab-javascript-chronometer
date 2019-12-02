var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
//Store the empty 'ol' already created in the index.html into a variable
var splits      = document.getElementById('splits');

function printTime() {
    printMinutes();
    printSeconds();
}

function printMinutes() {
    let minutes = chronometer.twoDigitsNumber(chronometer.getMinutes());
    console.log(minutes);
    minUni.textContent = minutes.charAt(1)
    minDec.textContent = minutes.charAt(0);
}

function printSeconds() {
    let seconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
    console.log(seconds);
    secUni.textContent = seconds.charAt(1);
    secDec.textContent = seconds.charAt(0);
}

function printMilliseconds() {

}

function printSplit() {
    let split = document.createElement('li');
    splits.appendChild(split);
    split.textContent = chronometer.splitClick(); 
    //split.innerText = chronometer.splitClick(); //also works!
}

function clearSplits() {
    splits.innerHTML = "";
}

function setStopBtn() {
    btnLeft.classList.toggle('stop');
	btnLeft.classList.toggle('start');
	btnLeft.textContent = 'STOP';
}

function setSplitBtn() {
    btnRight.classList.toggle('split');
	btnRight.classList.toggle('reset');
	btnRight.textContent = 'SPLIT';
}

function setStartBtn() {
    btnLeft.classList.toggle('stop');
	btnLeft.classList.toggle('start');
	btnLeft.textContent = 'START';
}

function setResetBtn() {
    btnRight.classList.toggle('split');
	btnRight.classList.toggle('reset');
	btnRight.textContent = 'RESET';
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    if(btnLeft.className === "btn start"){
        setStopBtn();
        setSplitBtn();
        chronometer.startClick();
        setInterval(function(){
            printTime();
        }, 1000);
    }else{
        setStartBtn();
        setResetBtn();
        chronometer.stopClick();
    }
    
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if(btnRight.className === "btn split"){
        printSplit()
    }else{
        chronometer.resetClick();
        clearSplits();
    }  
});
