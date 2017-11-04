function Chronometer () {
}

Chronometer.prototype.startClick = function () {
    $("#btnLeft").text("STOP");
    $("#btnLeft").attr("class", "btn stop");
    $("#btnRight").text("SPLIT");
    $("#btnRight").attr("class","btn split");
};

Chronometer.prototype.stopClick = function () {
    $("#btnLeft").text("START");
    $("#btnLeft").attr("class","btn start");
    $("#btnRight").text("RESET");
    $("#btnRight").attr("class","btn reset");
};
