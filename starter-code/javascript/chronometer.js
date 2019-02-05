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

function chronometerConstructor(minutes, seconds, someFunction, anotherFunction) {
    this.minutes = minutes;
    this.seconds = seconds;
    this.secSetIntervalId = "";
    this.minSetIntervalId = "";
    this.startClick = function(){
        var secId = setInterval(someFunction, 1000);
        chronometer.secSetIntervalId = secId;
        var minId = setInterval(anotherFunction, 20000);
        chronometer.minSetIntervalId = minId;
    };
};

function addSeconds() {
    switch(true) {
        case (chronometer.seconds < 9):
            chronometer.seconds++;
            $("#secUni").html(chronometer.seconds.toString()[0]);
            console.log(chronometer.seconds);
            break;
        case (chronometer.seconds >= 9 && chronometer.seconds < 20):
            chronometer.seconds++;
            $("#secDec").html(chronometer.seconds.toString()[0]);
            $("#secUni").html(chronometer.seconds.toString()[1]);
            console.log(chronometer.seconds);
            break;
        case (chronometer.seconds >= 20):
            chronometer.seconds = -1;
            chronometer.seconds++;
            $("#secDec").html(chronometer.seconds.toString()[0]);
            $("#secUni").html(chronometer.seconds.toString()[1]);
            console.log(chronometer.seconds);
            break;
    }
};

function addMinutes() {
    switch(true) {
        case (chronometer.minutes < 9):
            chronometer.minutes++;
            console.log("minutes" + chronometer.minutes);
            $("#minUni").html(chronometer.minutes.toString()[0]);
            break;
        case (chronometer.minutes >= 9 && chronometer.minutes < 60):
            chronometer.minutes++;
            console.log("minutes" + chronometer.minutes);
            $("#minDec").html(chronometer.minutes.toString()[0]);
            $("#minUni").html(chronometer.minutes.toString()[1]);
            break;
        case (chronometer.minutes = 60):
            alert("What are you still doing here? Do something with your life!!");
            break;
    }
};

var chronometer = new chronometerConstructor(0, 0, addSeconds, addMinutes);

$("#btnLeft").click(chronometer.startClick);

$("#btnRight").click(function(){
    clearInterval(chronometer.secSetIntervalId);
    clearInterval(chronometer.minSetIntervalId)
});

// $(".paragraph").click(function(){
//     alert("Yayyy it works!!!");
// })

// $(".p-btn").click(function(){
//     $(this).siblings().remove();
// })

// $("#btn").click(function(){
//     $("p").remove();
// })



// function chronometerConstructor(minutes, seconds, someFunction) {
//     this.minutes = minutes;
//     this.seconds = seconds;
//     this.setIntervalId = "";
//     this.startClick = function(){
//         var myVar = setInterval(someFunction, 1000);
//         chronometer.setIntervalId = myVar;
//     };
// };

// //TO STOP SETINTERVAL
// //clearInterval(chronometer.setIntervalId)

// function myFunction() {
//     switch(true) {
//         case (chronometer.seconds < 9 && chronometer.minutes < 9):
//             chronometer.seconds++;
//             $("#secUni").html(chronometer.seconds.toString()[0]);
//             console.log(chronometer.seconds);
//             break;
//         case (chronometer.seconds >= 9 && chronometer.seconds < 20 && chronometer.minutes < 9):
//             chronometer.seconds++;
//             $("#secDec").html(chronometer.seconds.toString()[0]);
//             $("#secUni").html(chronometer.seconds.toString()[1]);
//             console.log(chronometer.seconds);
//             break;
//         case (chronometer.seconds >= 20 && chronometer.minutes < 9):
//             chronometer.seconds = -1;
//             chronometer.seconds++;
//             $("#secDec").html(chronometer.seconds.toString()[0]);
//             $("#secUni").html(chronometer.seconds.toString()[1]);
//             chronometer.minutes++;
//             $("#minUni").html(chronometer.minutes.toString()[0]);
//             console.log("seconds" + chronometer.seconds);
//             console.log("minutes" + chronometer.minutes);
//             break;
//         case (chronometer.seconds < 9 && chronometer.minutes >= 9):
//             chronometer.seconds++;
//             $("#secUni").html(chronometer.seconds.toString()[0]);
//             chronometer.minutes++;
//             $("#minUni").html(chronometer.minutes.toString()[1]);
//             $("#minDec").html(chronometer.minutes.toString()[0]);
//             console.log("seconds" + chronometer.seconds);
//             console.log("minutes" + chronometer.minutes);
//             break;
//         case (chronometer.seconds >= 9 && chronometer.seconds < 20 && chronometer.minutes >= 9):
//             chronometer.seconds++;
//             $("#secDec").html(chronometer.seconds.toString()[0]);
//             $("#secUni").html(chronometer.seconds.toString()[1]);
//             chronometer.minutes++;
//             $("#minUni").html(chronometer.minutes.toString()[1]);
//             $("#minDec").html(chronometer.minutes.toString()[0]);
//             console.log("seconds" + chronometer.seconds);
//             console.log("minutes" + chronometer.minutes);
//             break;
//         case (chronometer.seconds >= 20 && chronometer.minutes >= 9):
//             chronometer.seconds = -1;
//             chronometer.seconds++;
//             $("#secDec").html(chronometer.seconds.toString()[0]);
//             $("#secUni").html(chronometer.seconds.toString()[1]);
//             chronometer.minutes++;
//             $("#minUni").html(chronometer.minutes.toString()[1]);
//             $("#minDec").html(chronometer.minutes.toString()[0]);
//             console.log("seconds" + chronometer.seconds);
//             console.log("minutes" + chronometer.minutes);
//             break;
//     }
// };
