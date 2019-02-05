// Constructor
// function Chronometer() {

// }

// Chronometer.prototype.startClick = function () {

// };

// Chronometer.prototype.setMinutes = function () {
  
// };

// Chronometer.prototype.setSeconds = function () {
  
// };

// Chronometer.prototype.twoDigitsNumber = function () {
  
// };

// Chronometer.prototype.setTime = function () {

// };

// Chronometer.prototype.setMilliseconds = function () {

// };

// Chronometer.prototype.stopClick = function () {
  
// };

// Chronometer.prototype.resetClick = function () {

// };


// };

function chronometerConstructor(minutes, seconds, testFunction) {
    this.minutes = minutes;
    this.seconds = seconds;
    this.addSeconds = setInterval(testFunction, 1000);
};

// currentTime, intervalId

var chronometer = new chronometerConstructor(0, 0, startClick);


// var chronometer = {
//     startBtn: setInterval(myTimer, 1000)
// };

// function startClick() {
//     chronometer.seconds++;
//     console.log(chronometer.seconds);
// }