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
    // Set display to 0
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

// return Chrono time in string mode
Chronometer.prototype.getChronoTime = function() {
    var minDec = document.getElementById("minDec").innerHTML;
    var minCen = document.getElementById("minCen").innerHTML;
    var secDec = document.getElementById("secDec").innerHTML;
    var secCen = document.getElementById("secCen").innerHTML;
    var msH = document.getElementById("msH").innerHTML;
    var msM = document.getElementById("msM").innerHTML;
    var msL = document.getElementById("msL").innerHTML;
    var chronoTime = minDec + minCen + ":" + secDec + secCen + ":" + msH + msM + msL;
    return chronoTime;
}

// Convert time to string
Chronometer.prototype.timeToString = function(d) {
    if(!d) {
        d = new Date();
    }
    var m = (d.getMinutes() < 10 ? "0" : "") + d.getMinutes();
    var s = (d.getSeconds() < 10 ? "0" : "") + d.getSeconds();
    var ms = d.getMilliseconds();
    return m + ":" + s + ":" + ms;
}

// Convert string to time
Chronometer.prototype.stringToTime = function(d) {
    var dNew = new Date();
    d = d.split(":");
    dNew.setMinutes(d[0]);
    dNew.setSeconds(d[1]);
    dNew.setMilliseconds(d[2]);
    return dNew;
}


Chronometer.prototype.getSplitTime = function() {
    this.stopTime = this.getChronoTime();
    this.splitTimes.push(this.stopTime);
    //console.log(this.stopTime);
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
    var msH = document.getElementById("msH").innerHTML;
    var msM = document.getElementById("msM").innerHTML;
    var msL = document.getElementById("msL").innerHTML;
    var minutes = parseInt((minDec + minCen), 10);
    var seconds = parseInt((secDec + secCen), 10);
    var ms = parseInt((msH + msM + msL), 10);
    ms += 10;
    if(ms > 999) {
        ms = 0;
        seconds += 1;
        if(seconds > 59) {
            seconds = 0;
            minutes += 1;
            if (minutes > 59) {
                minutes = 0;
                console.log("STOP MAN!!");
            }
        }
    }
    console.log("M: " + minutes + " S: " + seconds + " ms: " + ms);
    mH = minutes.toString().length > 1 ? minutes.toString()[(minutes.toString().length) - 2] : 0;
    mL = minutes.toString()[(minutes.toString().length) - 1];
    sH = seconds.toString().length > 1 ? seconds.toString()[(seconds.toString().length) - 2] : 0;
    sL = seconds.toString()[(seconds.toString().length) - 1];
    msH = ms.toString().length > 2 ? ms.toString()[(ms.toString().length) - 3] : 0;
    msM = ms.toString().length > 1 ? ms.toString()[(ms.toString().length) - 2] : 0;
    msL = ms.toString()[(ms.toString().length) - 1];

    document.getElementById("minDec").innerHTML = "";
    document.getElementById("minCen").innerHTML = "";
    document.getElementById("secDec").innerHTML = "";
    document.getElementById("secCen").innerHTML = "";
    document.getElementById("msH").innerHTML = "";
    document.getElementById("msM").innerHTML = "";
    document.getElementById("msL").innerHTML = "";

    document.getElementById("minDec").appendChild((document.createTextNode(mH)));
    document.getElementById("minCen").appendChild((document.createTextNode(mL)));
    document.getElementById("secDec").appendChild((document.createTextNode(sH)));
    document.getElementById("secCen").appendChild((document.createTextNode(sL)));
    document.getElementById("msH").appendChild((document.createTextNode(msH)));
    document.getElementById("msM").appendChild((document.createTextNode(msM)));
    document.getElementById("msL").appendChild((document.createTextNode(msL)));
}

Chronometer.prototype.runChrono = function() {

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
    this.intervalID = window.setInterval(this.runCounter, 10);
}

Chronometer.prototype.stopClick = function() {
    //console.log("STOP CLICK");
    clearInterval(this.intervalID);
    this.setStop();
    this.setReset();
    this.stopTime = this.getChronoTime();
}