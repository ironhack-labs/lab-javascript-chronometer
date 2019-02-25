// var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');

var clickBtn = false;

function printTime() {
    var countMilUni = 0;
    var countMilDec = 0;
    var countSecUni = 0;
    var countSecDec = 0;
    var countMinUni = 0;
    var countMinDec = 0;

    var interval = setInterval(function(){
        if (countMilUni < 9){
            countMilUni++;
        } else {
            countMilUni = 0;
            countMilDec++;
        }
        if (countMilDec > 9){
            countSecUni++;
            countMilDec = 0;
        }
        if (countSecUni > 9) {
            countSecDec++;
            countSecUni = 0;
        }
        if (countSecDec > 5) {
            countMinUni++;
            countSecDec = 0;
        }
        if (countMilUni > 9) {
            countMinDec++;
            countMinUni = 0;
        }
        if (countMinDec > 5) {
            countMilUni = 0;
            countMilDec = 0;
            countSecUni = 0;
            countSecDec = 0;
            countMinUni = 0;
            countMinDec = 0;
        }

        milUni.innerHTML = countMilUni;
        milDec.innerHTML = countMilDec;
        secUni.innerHTML = countSecUni;
        secDec.innerHTML = countSecDec;
        minUni.innerHTML = countMinUni;
        minDec.innerHTML = countMinDec;
    }, 10)
    
}


// function printMinutes() {

// }

// function printSeconds() {

// }

function printMilliseconds() {

}

// function printSplit() {

// }

// function clearSplits() {

// }

// function setStopBtn() {

// }

// function setSplitBtn() {

// }

// function setStartBtn() {

// }

// function setResetBtn() {

// }

// Start/Stop Button
btnLeft.addEventListener('click', function(){
    if (clickBtn === false){
    printTime();
    } else {
    clearInterval(interval);
    clickBtn = true;
    }

});

// // Reset/Split Button
// btnRight.addEventListener('click', function () {

// });
