$(document).ready(chronometerConstructor);

function chronometerConstructor(minutes, seconds, someFunction, anotherFunction) {
    this.minutes = minutes;
    this.seconds = seconds;
    this.secSetIntervalId = "";
    this.minSetIntervalId = "";
    this.startClick = function(){
        $("#btnLeft").removeClass("start").addClass("stop").html("STOP");
        $("#btnRight").removeClass("reset").addClass("split").html("SPLIT");
        var secId = setInterval(someFunction, 1000);
        chronometer.secSetIntervalId = secId;
        var minId = setInterval(anotherFunction, 60000);
        chronometer.minSetIntervalId = minId;
    };
};

function addSeconds() {
    switch(true) {
        case (chronometer.seconds < 9):
            $("#secUni").html(chronometer.seconds.toString()[0]);
            chronometer.seconds++;
            break;
        case (chronometer.seconds >= 9 && chronometer.seconds < 60):
            chronometer.seconds++;
            $("#secDec").html(chronometer.seconds.toString()[0]);
            $("#secUni").html(chronometer.seconds.toString()[1]);
            break;
        case (chronometer.seconds >= 60):
            $("#secDec").html(0);
            $("#secUni").html(1);
            chronometer.seconds = 0;
            chronometer.seconds++;
            console.log("third case", chronometer.seconds);
            break;
    }
};

function addMinutes() {
    switch(true) {
        case (chronometer.minutes < 9):
            chronometer.minutes++;
            $("#minUni").html(chronometer.minutes.toString()[0]);
            break;
        case (chronometer.minutes >= 9 && chronometer.minutes < 60):
            chronometer.minutes++;
            $("#minDec").html(chronometer.minutes.toString()[0]);
            $("#minUni").html(chronometer.minutes.toString()[1]);
            break;
        case (chronometer.minutes = 60):
            alert("What are you still doing here? Do something with your life!!");
            break;
    }
};

function resetClick() {
    chronometer.minutes = 0;
    $("#minDec").html(0);
    $("#minUni").html(0);
    chronometer.seconds = 0;
    $("#secDec").html(0);
    $("#secUni").html(0);
}

function stop() {
    clearInterval(chronometer.secSetIntervalId);
    clearInterval(chronometer.minSetIntervalId);
}

var chronometer = new chronometerConstructor(0, 0, addSeconds, addMinutes);

$(".start").click(chronometer.startClick);

$("document").on("click", ".stop", stop);

// $(document).on("click", ".stop", function() {
//     clearInterval(chronometer.secSetIntervalId);
//     clearInterval(chronometer.minSetIntervalId);
// });