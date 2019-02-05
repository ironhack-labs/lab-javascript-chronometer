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

$(document).ready(chronometerConstructor);

function chronometerConstructor(minutes, seconds, someFunction) {
    this.minutes = minutes;
    this.seconds = seconds;
    this.setIntervalId = "";
    this.startClick = function(){
        var myVar = setInterval(someFunction, 1000);
        chronometer.setIntervalId = myVar;
    };
};

//TO STOP SETINTERVAL
//clearInterval(chronometer.setIntervalId)

function myFunction() {
    chronometer.seconds++;
    console.log(chronometer.seconds);
    if(chronometer.seconds == 60) {
        chronometer.seconds = -1;
        chronometer.minutes++;
        console.log(chronometer.minutes);
    }
};


var chronometer = new chronometerConstructor(0, 0, myFunction);

// $("#btnLeft").click(chronometer.startClick());

// $(".paragraph").click(function(){
//     alert("Yayyy it works!!!");
// })

// $(".p-btn").click(function(){
//     $(this).siblings().remove();
// })

// $("#btn").click(function(){
//     $("p").remove();
// })