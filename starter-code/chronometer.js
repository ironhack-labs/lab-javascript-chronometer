function Chronometer(btnLeft, btnRight, sphere) {
    this.btnLeft = document.getElementById(btnLeft);
    this.btnRight = document.getElementById(btnRight);
    this.sphere = document.getElementById(sphere);
    // status = "Running | Stopped (default)"
    this.status = "Stopped";
    this.startTimes = 0;
    this.stopTime = "00:00";
    this.splitTimes = [];
    this.intervalID = null;
}

Chronometer.prototype.doReset = function() {
    this.stopTime = "00:00";
    this.startTimes = 0;
    document.getElementById("minDec").innerHTML = "0";
    document.getElementById("minCen").innerHTML = "0";
    document.getElementById("secDec").innerHTML = "0";
    document.getElementById("secCen").innerHTML = "0";
    // remove li elements 
    var ol = document.getElementById("splits-ol");
    while (ol.firstChild) {
      ol.removeChild(ol.firstChild);
    }
}

Chronometer.prototype.getChronoTime = function() {
    var minDec = document.getElementById("minDec").innerHTML;
    var minCen = document.getElementById("minCen").innerHTML;
    var secDec = document.getElementById("secDec").innerHTML;
    var secCen = document.getElementById("secCen").innerHTML;
    var chronoTime = minDec + minCen + ":" + secDec + secCen;
    return chronoTime;
}

Chronometer.prototype.getSplitTime = function() {
    this.stopTime = this.getChronoTime();
    this.splitTimes.push(this.stopTime);
    console.log(this.stopTime);
    var node = document.createElement("li");
    var splitTime = document.createTextNode(this.stopTime);
    node.appendChild(splitTime);
    document.getElementById("splits-ol").appendChild(node);
}

Chronometer.prototype.runCounter = function() {
    // this is a window object because setInterval calls the function
    // console.log(this);
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
            minutes = 0;
            console.log("STOP MAN!!");
        }
    }
    //console.log("M: " + minutes + " S: " + seconds);
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
    this.startTimes += 1;
    this.stopTime = 0;
    this.btnLeft.innerHTML = "STOP";
    this.btnLeft.className = "btn stop";
}

Chronometer.prototype.setStop = function() {
    this.status = "Stopped";
    this.btnLeft.innerHTML = "START";
    this.btnLeft.className = "btn start";
}

Chronometer.prototype.startClick = function() {
    //console.log("START CLICK");
    this.setStart();
    this.setSplit();
    this.intervalID = window.setInterval(this.runCounter, 1000);
}

Chronometer.prototype.stopClick = function() {
    //console.log("STOP CLICK");
    clearInterval(this.intervalID);
    this.setStop();
    this.setReset();
    this.stopTime = this.getChronoTime();
}