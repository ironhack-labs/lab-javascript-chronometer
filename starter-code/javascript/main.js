var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
var split       = document.getElementById('splits');

console.log(split);


function printTime() {
    // printSeconds();
}

function printMinutes() {
    minDec.innerHTML = chronometer.minutes[0];
    minUni.innerHTML = chronometer.minutes[1];
}

function printSeconds() { 
    secDec.innerHTML = chronometer.seconds[0];
    secUni.innerHTML = chronometer.seconds[1];
}

function printMilliseconds() {

}

function printSplit() {
let li = document.createElement("li"); 
    li.innerHTML = chronometer.minutes+':'+chronometer.seconds;
    split.appendChild(li);


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
    if (btnLeft.innerText ==  "START"){
            this.className = "btn stop";
            btnLeft.innerText = "STOP";
            btnRight.innerText ="SPLIT";
            btnRight.className = "btn split"
            const self=this;
            chronometer.startClick();
            setInterval(function(){
            printMinutes();
            printSeconds();
        },1000)
    }else
    {
        chronometer.stopClick();
        btnLeft.innerText = "START";
        this.className = "btn start";
    }

});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    this.className = "btn split";
    this.innerHTML = "SPLIT";
        const self=this;
        if (btnRight.innerText == "SPLIT"){
            printSplit();
            chronometer.stopClick();
        }    
        chronometer.startClick();
        setTimeout(function(){
        self.printSeconds();
    },1000)
});
