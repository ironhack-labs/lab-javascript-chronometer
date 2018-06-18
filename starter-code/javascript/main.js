var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
var splits      = document.getElementById("splits");
var ueltas=1;
var mostrarId;
var mostrarId2;

function printTime() {
    var min=chronometer.setMinutes();
    if(min>10){
        
        minDec.innerText=min/10;
        minUni.innerText=min%10;
    }

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
btnLeft.addEventListener('click', function () {
    if(btnLeft.innerText=="START"){
        btnLeft.className="btn stop"
        btnLeft.innerText="STOP";
       
        btnRight.innerText="SPLIT";
        btnRight.className="btn split";
        chronometer.startClick();
        mostrarId=setInterval(function(){
            var time=chronometer.setTime();
            minDec.innerText=time[0];
            minUni.innerText=time[1];
            secDec.innerText=time[3];
            secUni.innerText=time[4];
            milDec.innerText=time[6];
            milUni.innerText=time[7];
        },1000);
        mostrarId2=setInterval(function(){
            var time=chronometer.setTime();
            milDec.innerText=time[6];
            milUni.innerText=time[7];
        },10)
    }else{
        clearInterval(mostrarId);
        clearInterval(mostrarId2);
        chronometer.stopClick();
        
        btnLeft.className="btn start"
        btnLeft.innerText="START";
        btnRight.className="btn reset"
        btnRight.innerText="RESET";
        
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if(btnRight.innerText==="RESET"){
        if(mostrarId!==undefined){
            clearInterval(mostrarId);
            clearInterval(mostrarId2);
        }
        chronometer.stopClick();
        chronometer.resetClick();
        minDec.innerText="0";
        minUni.innerText="0";
        secDec.innerText="0";
        secUni.innerText="0";
        milDec.innerText="0";
        milUni.innerText="0";
       splits.innerHTML = '';

    }else{
        var li=document.createElement("li");
        splits.appendChild(li);
        li.innerText=chronometer.setTime();
        

    }
});
