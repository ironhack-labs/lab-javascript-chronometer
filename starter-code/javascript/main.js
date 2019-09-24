var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var btnClean    = document.getElementById('btnClean');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var miliSeconds = document.getElementById('miliSeconds');
var splits      = document.getElementById('splits');
var listSplits  = splits.childNodes;

// Functions that add or remove the Left and Right Button class.
function turnButton (buttonLeft){
    if(buttonLeft.classList.contains("start")){
        buttonLeft.classList.remove('start');
        buttonLeft.classList.add('stop');
        buttonLeft.innerText = "STOP";

        btnRight.classList.remove('reset');
        btnRight.classList.add('split');
        btnRight.innerText = "SPLIT";

    }
    else{
        buttonLeft.classList.remove('stop');
        buttonLeft.classList.add('start');
        buttonLeft.innerText = "START";

        btnRight.classList.remove('split');
        btnRight.classList.add('reset');
        btnRight.innerText = "RESET";
    }
}
//Function Initialize time, stop or reset chronometer;
function startTimeOrStoped (statusButton){
    if(statusButton.classList.contains('start')){
        chronometer.startClick();
    }
    else if (statusButton.classList.contains('stop')){
        chronometer.stopClick();
    }
    else if (statusButton.classList.contains('reset')){
        chronometer.resetClick();
    }
}
function UpdateSeconds (){
    setInterval(() => {
        if(chronometer.getSeconds() <= 9 ){
            secDec.innerText = 0;
            secUni.innerText = chronometer.getSeconds();
        }
        else if(chronometer.getSeconds() >= 10){
            secUni.innerText = "";
            secDec.innerText = chronometer.getSeconds();   
        }
    }, 1);
}
function updateMinutes (){
    setInterval(() => {
        if(chronometer.getMinutes() <= 9){
            minDec.innerText = 0;
            minUni.innerText = chronometer.getMinutes();
        }
        else if (chronometer.getMinutes() >= 10){
            minUni.innerText = "";
            minDec.innerText = chronometer.getMinutes();
        }
    }, 1);
}
function updateMiliseconds(){
    setInterval(() => {
        miliSeconds.innerText = chronometer.getmiliseconds();
    }, 1);
}

function split (button){
    if(listSplits.length >= 20){
        splits.childNodes[0].remove('li');
    }
    if(button.classList.contains('split')){
        let li = document.createElement('li');
            li.innerText = `${chronometer.twoDigitsNumber(chronometer.getMinutes())}:${chronometer.twoDigitsNumber(chronometer.getSeconds())}:${chronometer.treeDigitsNumber(chronometer.getmiliseconds())}`
        splits.appendChild(li);
    }   
}
function cleanSplits(){
    splits.innerHTML = "";
}   
//Call functions
btnLeft.onclick = function(){
    startTimeOrStoped(btnLeft);
    updateMiliseconds();
    UpdateSeconds();
    updateMinutes();
    turnButton(btnLeft);
}
btnRight.onclick = function (){
    startTimeOrStoped(btnRight);
    split(btnRight);
}
btnClean.onclick = function (){
    cleanSplits();   
}
// Start/Stop Button
btnLeft.addEventListener('click', function () {

});

// Reset/Split Button
btnRight.addEventListener('click', function () {

});
