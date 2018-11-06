var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
var intervalo;

function printTime() {
//aqui meto todo
}

function printMinutes() {
    minUni.innerText = chronometer.setMinutes();
}

function printSeconds() {
    secUni.innerText = chronometer.setSeconds();
}

function printMilliseconds() {

}

function printSplit() {
    let omarZagal = document.createElement('li');
    console.log(minUni.innerText);
    console.log(secUni.innerText);
    console.log(document.getElementById('milDec').innerHTML);
    omarZagal.innerHTML = minUni.innerText+' : '+secUni.innerText;
    document.getElementById('splits').appendChild(omarZagal);
}

function clearSplits() {

}

function setStopBtn() {
    //chronometer.stopClick();
    console.log('lol');
    clearInterval(chronometer.intervalId);
    clearInterval(intervalo);
}

function setSplitBtn() {

}

function setStartBtn() {
    chronometer.startClick();
    intervalo = setInterval(()=>{
        printSeconds();
        printMinutes();
    },1000);
    printSeconds();


}

function setResetBtn() {
    chronometer.resetClick();
    secUni.innerText = 0;
    minUni.innerText = 0;
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    console.log('start');
    if(btnLeft.innerHTML == 'START'){
        btnLeft.className = 'btn stop';
        btnLeft.innerText = 'STOP';
        btnRight.className = 'btn split';
        btnRight.innerText = 'SPLIT';

        setStartBtn();
    }else if(btnLeft.innerHTML =='STOP'){
        btnLeft.className = 'btn start';
        btnLeft.innerText = 'START';
        btnRight.className = 'btn reset';
        btnRight.innerText = 'RESET';
        setStopBtn();
    }

});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    console.log('click reset');
    if(btnRight.innerHTML == 'RESET'){
        console.log('reseteando');
        btnRight.innerText = 'SPLIT';
        btnRight.className = 'btn split';
        setResetBtn();
    }else if (btnRight.innerHTML == 'SPLIT'){
        console.log('split');
        printSplit();
    }
});
