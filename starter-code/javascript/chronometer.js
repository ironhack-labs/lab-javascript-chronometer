// Constructor
var currentTime = 0;
var intervalId;
var isRunning = false;
var minutes;
var seconds;
var setMinutes = 0;
var setSeconds = 0;

var startButton = document.querySelector("#btnLeft");
startButton.addEventListener("click", function() {
    if (isRunning === true) {
        stopClick();
    } else {
        startClick();
    }
});

function twoDigitsNumber(number) {
    return (number < 10 ? "0" : "") + number;
}

//Chronometer.prototype.startClick = function() {
function startClick() {
    isRunning = true;
    document.querySelector("#btnLeft").innerHTML = "STOP";
    intervalId = setInterval(
        function() {
            currentTime++;
            setSeconds++;

            if (currentTime % 60 === 0) {
                setMinutes++;
                setSeconds = 0;
            }
            function setTime() {
                minutes = twoDigitsNumber(setMinutes);
                seconds = twoDigitsNumber(setSeconds);
                function printSeconds() {
                    var secString = seconds.toString();
                    secUni.innerHTML = secString[1];
                    secDec.innerHTML = secString[0];
                    console.log(secString);
                }
                printSeconds();
                function printMinutes() {
                    var minString = minutes.toString();
                    minUni.innerHTML = minString[1];
                    minDec.innerHTML = minString[0];
                    console.log(minString);
                }
                printMinutes();
            }
            setTime();
        }.bind(this),
        1000
    );
}
var resetButton = document.querySelector("#btnRight");
resetButton.addEventListener("click", function() {
    isRunning = false;
    currentTime = 0;
    setSeconds = 0;
    setMinutes = 0;
    minUni.innerHTML = 0;
    minDec.innerHTML = 0;
    secUni.innerHTML = 0;
    secDec.innerHTML = 0;
});

function stopClick() {
    isRunning = false;
    clearInterval(intervalId);
}

/*
var startButton = document.querySelector("#btnLeft");
startButton.addEventListener("click", function() {
    if (isRunning === true) {
        stopClick();
    } else {
        startClick();
    }
});

*/

//startButton.removeEventListener("click", stopClick);

// Chronometer.prototype.setMinutes = function () {

// };

// Chronometer.prototype.setSeconds = function () {

// };

// Chronometer.prototype.setTime = function () {

// };

// Chronometer.prototype.setMilliseconds = function () {

// };

// Chronometer.prototype.stopClick = function () {

// };

// Chronometer.prototype.resetClick = function () {

// };

// Chronometer.prototype.splitClick = function () {

// };
