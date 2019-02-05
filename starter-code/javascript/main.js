// Declaring variables
var chronometer = new Chronometer();
var btnLeft = $('#btnLeft');
var btnRight = $('#btnRight');
var minDec = $('#minDec');
var minUni = $('#minUni');
var secDec = $('#secDec');
var secUni = $('#secUni');
var milDec = $('#milDec');
var milUni = $('#milUni');
var ol = $('#splits');
var splitList = '';

// Event listener on left side button Start/Stop
btnLeft.click(() => {
    if(btnLeft.hasClass('start')) {
        chronometer.startClick();
        btnLeft.addClass("stop");
        btnLeft.removeClass("start");
        btnLeft.html("STOP");
        btnRight.addClass("split");
        btnRight.removeClass("reset");
        btnRight.html("SPLIT");
    } else if (btnLeft.hasClass('stop')) {
        chronometer.stopClick();
        btnLeft.addClass("start");
        btnLeft.removeClass("stop");
        btnLeft.html("START");
        btnRight.addClass("reset");
        btnRight.removeClass("split");
        btnRight.html("RESET");
    }
})


// Event listener on right side button Reset
btnRight.click(() => {
    if(btnRight.hasClass('reset')) {
        chronometer.resetClick();
    } else if (btnRight.hasClass('split')) {
        splitList += `<li>${Math.floor(chronometer.minutes / 10) % 10}${chronometer.minutes % 10}:${Math.floor(chronometer.seconds / 10) % 10}${chronometer.seconds % 10}:${Math.floor(chronometer.miliSeconds / 10) % 10}${chronometer.miliSeconds % 10}</li>`;
        ol.html(splitList);
    }
});


