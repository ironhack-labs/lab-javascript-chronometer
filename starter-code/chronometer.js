function Chronometer(btnLeft, btnRight, sphere) {
    this.btnLeft = document.getElementById(btnLeft);
    this.btnRight = document.getElementById(btnRight);
    this.sphere = document.getElementById(sphere);
    // status = "Running | Stopped (default)"
    this.status = "Stopped";
    //this.startTime = 0;
    this.stopTime = 0;
    this.splitTimes = [];
    this.intervalID = null;
}

Chronometer.prototype.runCounter = function() {
    var minDec = document.getElementById("minDec").innerHTML;
    var minCen = document.getElementById("minCen").innerHTML;
    var secDec = document.getElementById("secDec").innerHTML;
    var secCen = document.getElementById("secCen").innerHTML;
    var minutes = parseInt((minDec + minCen), 10);
    var seconds = parseInt((secDec + secCen), 10);
    seconds += 1;
    if(seconds > 59) {
        seconds = 0;
        minutes += 1;
        if (minutes > 59) {
            alert("STOP MAN!!");
        }
    }
    console.log("M: " + minutes + " S: " + seconds);
    document.getElementById("minDec").innerHTML = minutes.toString().length > 1 ? minutes.toString()[0] : 0;
    document.getElementById("minCen").innerHTML = minutes.toString().length > 1 ? minutes.toString()[1] : minutes.toString()[0];
    document.getElementById("secDec").innerHTML = seconds.toString().length > 1 ? seconds.toString()[0] : 0;
    document.getElementById("secCen").innerHTML = seconds.toString().length > 1 ? seconds.toString()[1] : seconds.toString()[0];
}

Chronometer.prototype.setReset = function() {    
    this.btnRight.innerHTML ="RESET";
    this.btnRight.className = "btn reset";
}

Chronometer.prototype.setSplit = function() {
    this.btnRight.innerHTML = "SPLIT";
    this.btnRight.className = "btn split";
}

Chronometer.prototype.setStart = function() {
    this.status = "Running";
    this.stopTime = 0;
    this.btnLeft.innerHTML = "STOP";
    this.btnLeft.className = "btn stop";
}

Chronometer.prototype.setStop = function() {
    this.status = "Stopped";
    this.btnLeft.innerHTML = "START";
    this.btnLeft.className = "btn start";
    clearInterval(this.intervalID);
}

Chronometer.prototype.startClick = function() {
    console.log("START CLICK");
    this.setStart();
    this.setSplit();
    this.intervalID = setInterval(this.runCounter, 1000);
}

Chronometer.prototype.stopClick = function() {
    console.log("STOP CLICK");
    this.setStop();
    this.setReset();
}