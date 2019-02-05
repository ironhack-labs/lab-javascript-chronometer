var chronometer = new Chronometer();
var btnLeft     = $('#btnLeft');
var btnRight    = $('#btnRight');
var minDec      = $('#minDec');
var minUni      = $('#minUni');
var secDec      = $('#secDec');
var secUni      = $('#secUni');
var milDec      = $('#milDec');
var milUni      = $('#milUni');


function printTime() {

}

function printMinutes() {

}

function printSeconds() {

}

function printMilliseconds() {

}

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
$(btnLeft).click(function(){
  if (btnLeft.hasClass(("start"))) {
    chronometer.startClick();
    btnLeft.removeClass("start");
    btnLeft.addClass("stop");
    btnLeft.html("STOP");
    btnRight.removeClass("reset");
    btnRight.addClass("split");
    btnRight.html("SPLIT");
  }else if (btnLeft.hasClass("stop")) {
    chronometer.stopTime();
    btnLeft.removeClass("stop");
    btnLeft.addClass("start");
    btnLeft.html("START");
    btnRight.removeClass("split");
    btnRight.addClass("reset");
    btnRight.html("RESET");
  }
})


// Reset/Split Button
$(btnRight).click(function(){
  if (btnRight.hasClass("split")){
    var split = chronometer.splitClick();
    $("#splits").append("<li>"+split+"</li>");
  }else if (btnRight.hasClass("reset")){
    chronometer.resetClick();
  }
});