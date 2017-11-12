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
    var minDec = parseInt((document.getElementById("minDec").innerHTML),10);
    var minCen = parseInt((document.getElementById("minCen").innerHTML),10);
    var secDec = parseInt((document.getElementById("secDec").innerHTML),10);
    var secCen = parseInt((document.getElementById("secCen").innerHTML),10);
    // Always sum 1 to secCen
    secCen += 1;
    if(secCen > 9) {
        secCen = 0;
        secDec += 1;
        if(secDec > 9) {
            secDec = 0;
            minCen += 1;
            if(minCen > 9) {
                minCen = 0;
                minDec += 1;
                if(minDec > 9) {
                    alert("PARA YA!!");
                }
            }
        }
    }
    console.log("M:" + minDec + "m:" + minCen + "S:" + secDec + "s:" + secCen);
    // Print values
    document.getElementById("minDec").innerHTML = minDec;
    document.getElementById("minCen").innerHTML = minCen;
    document.getElementById("secDec").innerHTML = secDec;
    document.getElementById("secCen").innerHTML = secCen;
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