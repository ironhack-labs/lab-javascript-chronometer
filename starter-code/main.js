function Chronometer() {
}

Chronometer.prototype.startClick = function() {
    $("#btnLeft").addClass('stop').removeClass('start');
    $("#btnLeft").text("STOP");
    $("#btnLeft").next().addClass('split').removeClass('reset');
    $("#btnLeft").next().text("SPLIT");
}

Chronometer.prototype.stopClick = function () {
    $('#btnLeft').addClass('start').removeClass('stop');
    $('#btnLeft').text("START");
    $('#btnLeft').next().addClass('reset').removeClass('split');
    $('#btnLeft').next().text("RESET");
}


var chrono = new Chronometer();

// Start/Stop Button
$("#btnLeft").click(function() {
    console.log("Left button clicked");
    if ($(this).hasClass("start")) {
        chrono.startClick();
        var secDecCounter = 0;
        var secCenCounter = 0;
        var minDecCounter = 0;
        var minCenCounter = 0;
        var time = setInterval(function () {
          secCenCounter++;
          $("#secCen").text(secCenCounter);

          if (secCenCounter === 9) {
            secDecCounter++;
            secCenCounter = 0;
          }
        }, 1000);

        }
    else if($(this).hasClass("stop")){
        chrono.stopClick();
    }
});

// Reset/Split Button
$("#btnRight").click(function () {
  console.log("Right button clicked");

});
