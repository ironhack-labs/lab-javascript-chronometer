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
    var timeToPrint = chronometer.setTime()
    minUni.innerHTML = timeToPrint[1];
    minDec.innerHTML = timeToPrint[0];
    secUni.innerHTML = timeToPrint[3];
    secDec.innerHTML = timeToPrint[2];
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    if(document.getElementsByClassName("start")[0]){ //stopped->running
        btnLeft.innerHTML = "STOP";
        btnLeft.className = "btn stop";
        btnRight.innerHTML = "SPLIT";
        btnRight.className = "btn split";
        chronometer.startClick()
    }
    else{ //running->stopped
        chronometer.stopCLick()
        btnLeft.innerHTML = "START";
        btnLeft.className = "btn start";
        btnRight.innerHTML = "RESET";
        btnRight.className = "btn reset"
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if(document.getElementsByClassName("btn reset")[0]){
        chronometer.resetClick()
    }
    else{
        var newSplit = document.createElement("li");                 // Create a <li> node
        var splitTime = document.createTextNode(`${chronometer.setTime()[0]+chronometer.setTime()[1]}:${chronometer.setTime()[2]+chronometer.setTime()[3]}`);         // Create a text node
        newSplit.appendChild(splitTime);                              // Append the text to <li>
        document.getElementById("splits").appendChild(newSplit);     // Append <li> to <ul> with id="splits"
    }

});
