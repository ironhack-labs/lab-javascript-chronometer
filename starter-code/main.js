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

Chronometer.prototype.stopTimer = function () {
	clearInterval(time);
}

var splitArray = [];

Chronometer.prototype.split = function () {
	var seconds = String(secCenCounter);
	var seconds10 = String(secDecCounter);
	var minutes = String(minCenCounter);
	var minutes10 = String(minDecCounter);
	if (seconds === -1) {
		seconds = 0;
	}
	if (seconds10 === -1) {
		seconds10 = 0;
	}
	if (minutes === -1) {
		minutes = 0;
	}
	if (minutes10 === -1) {
		minutes10 = 0;
	}

	var now = minutes10 + minutes + ":" + seconds10 + seconds;
	var splitAddition = (splitArray.length+1) + ": " + now;
	splitArray.push(splitAddition);
	var thisIndex = splitArray.length - 1;
	var newLi = "<li>" + splitArray[thisIndex] + "</li>";
	$(newLi).appendTo("ul");
}

	var secDecCounter = 0;
	var secCenCounter = 0;
	var minDecCounter = 0;
	var minCenCounter = 0;
	

Chronometer.prototype.timer = function () {
	var time = setInterval(function () {
		secCenCounter++;
		$("#secCen").text(secCenCounter);
		$("#secDec").text(secDecCounter);
		$("#minDec").text(minDecCounter);
		$("#minCen").text(minCenCounter);
		if (secCenCounter === 9) {
			secDecCounter++;
			secCenCounter = -1;
		}

		if (secDecCounter === 6) {
			minCenCounter++;
			secDecCounter = 0;
		}

		if (minCenCounter === 9) {
			minDecCounter++;
			minCenCounter = 0;
		}
	}, 1000);
	$("#btnLeft").click(function () {
		clearInterval(time);
	});
	$("#btnRight").click(function () {
	if ($(this).hasClass("reset")) {
  	secDecCounter = 0;
	secCenCounter = 0;
	minDecCounter = 0;
	minCenCounter = 0;
	splitArray = [];
	$("#secCen").text(secCenCounter);
	$("#secDec").text(secDecCounter);
	$("#minDec").text(minDecCounter);
	$("#minCen").text(minCenCounter);
	$("#split ul").text(splitArray);
} 
	})
}


var chrono = new Chronometer();

// Start/Stop Button
$("#btnLeft").click(function() {
    console.log("Left button clicked");
    if ($(this).hasClass("start")) {
        chrono.startClick();
        chrono.timer();

        }
    else if($(this).hasClass("stop")){
        chrono.stopClick();
    }
});

// Reset/Split Button
$("#btnRight").click(function () {
  console.log("Right button clicked");
  if($(this).hasClass("split")) {
  	chrono.split();
  }
});

