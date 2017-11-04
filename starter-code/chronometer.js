function Chronometer() {}

Chronometer.prototype.startClick = function() {
  console.log("Left button clicked");
  if ($("#btnLeft").attr("status") === "stopped") {
    $("#btnLeft").css("background-color", "#f14949");
    $("#btnLeft").text("STOP");
    $("#btnLeft").attr("status", "running");
    $("#btnRight").css("background-color", "#0851ab");
    $("#btnRight").text("SPLIT");
    $("#btnRight").attr("status", "running");
  }
  else if (($("#btnLeft").attr("status") === "running")) {
    $("#btnLeft").css("background-color", "#5fca5f");
    $("#btnLeft").text("START");
    $("#btnLeft").attr("status", "stopped");
    $("#btnRight").css("background-color", "#908e8e");
    $("#btnRight").text("RESET");
    $("#btnRight").attr("status", "stopped");
  }
};

Chronometer.prototype.stopClick = function() {
  console.log("Right button clicked");
  if ($("#btnRight").attr("status") === "running") {
    $("#btnRight").text("SPLIT");
  } else if ($("#btnRight").attr("status") === "stopped") {
    $("#btnRight").text("RESET");
  }
};
