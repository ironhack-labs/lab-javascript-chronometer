var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');

var result      = chronometer.setTime();

//-------- NOT WORKING ----------//
function printTime() {
    //document.getElementById('minDec').innerHTML = ;
    this.printMinutes();
    this.printSeconds();
    console.log('hello');
    
    // document.getElementById('minDec').innerText = result[0];

}

//-------- NOT WORKING ----------//
function printMinutes() {
    this.minDec  = this.result[0];
    this.minUni  = this.result[1];
    //document.getElementById('minDec').innerText = chronometer.setMinutes();
    //document.getElementById('minUni').innerText = '2';
    console.log(this.result)
    return minDec + minUni;
}

//-------- NOT WORKING ----------//
function printSeconds() {
    //document.getElementById('secDec').innerText = chronometer.setSeconds();
    //document.getElementById('secUni').innerText = '4';
    this.secDec = this.result[5];
    this.secUni = this.result[6];

    return secDec + secUni;
}

// function printMilliseconds() {
//     return chronometer.printMinutes();
// }

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
    printTime();

    // document.getElementById('btnLeft').classList.toggle('stop');

    if (document.getElementById("btnLeft").classList.contains("start")) {
        document.getElementById("btnLeft").classList.replace("start", "stop");
        chronometer.startClick();
      } else {
        document.getElementById("btnLeft").classList = "btn start";
        chronometer.stopClick();
      }

    if (document.getElementById('btnLeft').innerText === "STOP") {
        document.getElementById('btnLeft').innerText = "START";
    } else {
        document.getElementById('btnLeft').innerText = "STOP";
        chronometer.stopClick();
    }
    
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    //document.getElementById('btnRight').classList.toggle('btn split')
    if (document.getElementById("btnRight").classList.contains("reset")) {
        document.getElementById("btnRight").classList.replace("reset", "split");
    } else {
        document.getElementById("btnRight").classList = "btn reset";
    }


    if (document.getElementById('btnRight').innerText === "RESET") {
        document.getElementById('btnRight').innerText = "SPLIT";
    } else {
        document.getElementById('btnRight').innerText = "RESET";
    }



});
