$(document).ready(ChronometerConstructor);

function ChronometerConstructor() {
    this.minutes = 0;
    this.seconds = 0;
    this.milliseconds = 0;
    this.secSetIntervalId = "";
    this.minSetIntervalId = "";
    this.millisecSetIntervalId = "";
    this.startClick = () => {
        $("#btnLeft").toggleClass("start stop").html("STOP");
        $("#btnRight").toggleClass("reset split").html("SPLIT");
        var secId = setInterval(this.addSeconds, 1000);
        this.secSetIntervalId = secId;
        var minId = setInterval(this.addMinutes, 60000);
        this.minSetIntervalId = minId;
        var millisecId = setInterval(this.addMilliseconds, 10);
        this.millisecSetIntervalId = millisecId;
    };
};


ChronometerConstructor.prototype.addSeconds = function() {
    switch(true) {
        case (chronometer.seconds < 9):
        //Only one digit
            $("#secUni").html(chronometer.seconds.toString()[0]);
            chronometer.seconds++;
            break;
        case (chronometer.seconds >= 9 && chronometer.seconds < 60):
        //Two digits
            chronometer.seconds++;
            $("#secDec").html(chronometer.seconds.toString()[0]);
            $("#secUni").html(chronometer.seconds.toString()[1]);
            break;
        case (chronometer.seconds >= 60):
        //Restart the count
            $("#secDec").html(0);
            $("#secUni").html(1);
            chronometer.seconds = 0;
            chronometer.seconds++;
            break;
    }
};

ChronometerConstructor.prototype.addMinutes = function() {
    switch(true) {
        case (chronometer.minutes < 9):
        //One digit
            chronometer.minutes++;
            $("#minUni").html(chronometer.minutes.toString()[0]);
            break;
        case (chronometer.minutes >= 9 && chronometer.minutes < 60):
        //Two digits
            chronometer.minutes++;
            $("#minDec").html(chronometer.minutes.toString()[0]);
            $("#minUni").html(chronometer.minutes.toString()[1]);
            break;
        case (chronometer.minutes = 60):
            alert("What are you still doing here? Do something with your life!!");
            break;
    }
};

ChronometerConstructor.prototype.addMilliseconds = function() {
    switch(true) {
        case (chronometer.milliseconds < 9):
        //Only one digit
            $("#milUni").html(chronometer.milliseconds.toString()[0]);
            chronometer.milliseconds++;
            break;
        case (chronometer.milliseconds >= 9 && chronometer.milliseconds < 100):
        //Two digits
            chronometer.milliseconds++;
            $("#milDec").html(chronometer.milliseconds.toString()[0]);
            $("#milUni").html(chronometer.milliseconds.toString()[1]);
            break;
        case (chronometer.milliseconds >= 100):
        //Restart the count
            $("#milDec").html(0);
            $("#milUni").html(1);
            chronometer.milliseconds = 0;
            chronometer.milliseconds++;
            break;
    }
};

ChronometerConstructor.prototype.stop = function() {
    clearInterval(chronometer.secSetIntervalId);
    clearInterval(chronometer.minSetIntervalId);
    clearInterval(chronometer.millisecSetIntervalId);
    $("#btnLeft").toggleClass("start stop").html("START");
    $("#btnRight").toggleClass("reset split").html("RESET");
};

ChronometerConstructor.prototype.split = function() {
    $("#splits").append(`<li>${chronometer.minutes}:${chronometer.seconds}:${chronometer.milliseconds}</li>`);
};

ChronometerConstructor.prototype.resetClick = function() {
    chronometer.minutes = 0;
    $("#minDec").html(0);
    $("#minUni").html(0);
    chronometer.seconds = 0;
    $("#secDec").html(0);
    $("#secUni").html(0);
    chronometer.milliseconds = 0;
    $("#milDec").html(0);
    $("#milUni").html(0);
};

var chronometer = new ChronometerConstructor();

$("#sphere").on("click", ".start", chronometer.startClick);

$("#sphere").on("click", ".stop", chronometer.stop);

$("#sphere").on("click", ".reset", chronometer.resetClick);

$("#sphere").on("click", ".split", chronometer.split);


// $("document").on("click", ".stop", stop);


// $("#btnLeft.stop").click(function() {
//     clearInterval(chronometer.secSetIntervalId);
//     clearInterval(chronometer.minSetIntervalId);
// });

// $(document).on("click", ".stop", function() {
//     clearInterval(chronometer.secSetIntervalId);
//     clearInterval(chronometer.minSetIntervalId);
// });



// function chronometerConstructor(minutes, seconds, someFunction, anotherFunction) {
//     this.minutes = minutes;
//     this.seconds = seconds;
//     this.secSetIntervalId = "";
//     this.minSetIntervalId = "";
//     this.startClick = function(){
//         $("#btnLeft").removeClass("start").addClass("stop").html("STOP");
//         $("#btnRight").removeClass("reset").addClass("split").html("SPLIT");
//         var secId = setInterval(someFunction, 1000);
//         //CHANGE THIS INTO ARROW FUNCTION
//         chronometer.secSetIntervalId = secId;
//         var minId = setInterval(anotherFunction, 60000);
//         chronometer.minSetIntervalId = minId;
//     };
// };




// $(document).ready(ChronometerConstructor);

// function ChronometerConstructor(minutes, seconds) {
//     this.minutes = minutes;
//     this.seconds = seconds;
//     this.secSetIntervalId = "";
//     this.minSetIntervalId = "";
//     this.startClick = () => {
//         $("#btnLeft").toggleClass("start stop").html("STOP");
//         $("#btnRight").toggleClass("reset split").html("SPLIT");
//         // $("#btnLeft").removeClass("start").addClass("stop").html("STOP");
//         // $("#btnRight").removeClass("reset").addClass("split").html("SPLIT");
//         var secId = setInterval(this.addSeconds, 1000);
//         this.secSetIntervalId = secId;
//         var minId = setInterval(this.addMinutes, 60000);
//         this.minSetIntervalId = minId;
//     };
// };

// ChronometerConstructor.prototype.addSeconds = function() {
//     switch(true) {
//         case (chronometer.seconds < 9):
//             $("#secUni").html(chronometer.seconds.toString()[0]);
//             chronometer.seconds++;
//             break;
//         case (chronometer.seconds >= 9 && chronometer.seconds < 60):
//             chronometer.seconds++;
//             $("#secDec").html(chronometer.seconds.toString()[0]);
//             $("#secUni").html(chronometer.seconds.toString()[1]);
//             break;
//         case (chronometer.seconds >= 60):
//             $("#secDec").html(0);
//             $("#secUni").html(1);
//             chronometer.seconds = 0;
//             chronometer.seconds++;
//             console.log("third case", chronometer.seconds);
//             break;
//     }
// };

// ChronometerConstructor.prototype.addMinutes = function() {
//     switch(true) {
//         case (chronometer.minutes < 9):
//             chronometer.minutes++;
//             $("#minUni").html(chronometer.minutes.toString()[0]);
//             break;
//         case (chronometer.minutes >= 9 && chronometer.minutes < 60):
//             chronometer.minutes++;
//             $("#minDec").html(chronometer.minutes.toString()[0]);
//             $("#minUni").html(chronometer.minutes.toString()[1]);
//             break;
//         case (chronometer.minutes = 60):
//             alert("What are you still doing here? Do something with your life!!");
//             break;
//     }
// };

// ChronometerConstructor.prototype.resetClick = function() {
//     chronometer.minutes = 0;
//     $("#minDec").html(0);
//     $("#minUni").html(0);
//     chronometer.seconds = 0;
//     $("#secDec").html(0);
//     $("#secUni").html(0);
// }

// ChronometerConstructor.prototype.stop = function() {
//     clearInterval(chronometer.secSetIntervalId);
//     clearInterval(chronometer.minSetIntervalId);
// }

// var chronometer = new ChronometerConstructor(0, 0);