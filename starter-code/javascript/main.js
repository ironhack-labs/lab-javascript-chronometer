var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');


function printTime() {
    printMinutes(chronometer.twoDigitsNumber(chronometer.setMinutes()));
    printSeconds(chronometer.twoDigitsNumber(chronometer.setSeconds()));
    printMilliseconds();
    //console.log(cronometer.setTime());
    }

function printMinutes(minutes) {
    minDec.innerHTML=minutes[0];
    minUni.innerHTML=minutes[1];
}

function printSeconds(seconds) {
    secDec.innerHTML=seconds[0];
    secUni.innerHTML=seconds[1];
}

function printMilliseconds() {
    var milTwo=chronometer.twoDigitsNumber(chronometer.setMilliseconds());
    console.log("milis: "+milTwo);//.slice(0,2));
    //var tdig=milTwo.slice(0,2);
    //printMilliseconds(chronometer.twoDigitsNumber(milTwo));
    milDec.innerHTML=milTwo[0];
    milUni.innerHTML=milTwo[1];
}
let lista=document.getElementById('splits');
function printSplit() {
    let elemento=document.createElement('li');
    elemento.innerHTML=chronometer.twoDigitsNumber(chronometer.setMinutes())+":"+chronometer.twoDigitsNumber(chronometer.setSeconds())+":"+chronometer.twoDigitsNumber(chronometer.setMilliseconds());
    lista.appendChild(elemento);
}

function clearSplits() {
    console.log(document.getElementById("splits").children.length);
    let splitsList=document.getElementById("splits");
    let len=splitsList.children.length;
    while(splitsList.firstChild){
        splitsList.removeChild(splitsList.firstChild);
    }
  
    //for(let i=0;i<len;i++){
      //  splitsList.removeChild(splitsList.childNodes[i]);
    //    console.log(i);
//    }
}

function setStopBtn() {

}

function setSplitBtn() {
    
}

function setStartBtn() {
    chronometer.startClick();
    var intervalId=setInterval(function(){
        printTime();    
    },10);
    
    
}

function setResetBtn() {
    chronometer.resetClick();
    //clearInterval(chronometer.intervalId);
    

}

// Start/Stop Button
btnLeft.addEventListener('click', function () {

    if(btnLeft.innerHTML=="START"){
        btnLeft.innerHTML="STOP";
        btnLeft.setAttribute('class','btn stop');
        btnRight.innerHTML="SPLIT";
        btnRight.setAttribute('class','btn split');
        setStartBtn();
    }else{
        btnLeft.innerHTML="START";
        btnLeft.setAttribute('class','btn start');
        btnRight.innerHTML="RESET";
        btnRight.setAttribute('class','btn reset');
        chronometer.stopClick();
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if(btnRight.innerHTML=="SPLIT"){
        printSplit();

    }else{
        clearSplits();
        setResetBtn();
    }
    
});
