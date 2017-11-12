function Chronometer(btnLeft, btnRight, sphere) {
    this.btnLeft = document.getElementById(btnLeft);
    this.btnRight = document.getElementById(btnRight);
    this.sphere = document.getElementById(sphere);
    // status = "Running | Stopped (default)"
    this.status = "Stopped";
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
    this.btnLeft.innerHTML = "STOP";
    this.btnLeft.className = "btn stop";
}

Chronometer.prototype.setStop = function() {
    this.status = "Stopped";
    this.btnLeft.innerHTML = "START";
    this.btnLeft.className = "btn start";
}

Chronometer.prototype.startClick = function() {
    console.log("START CLICK");
    this.setStart();
    this.setSplit();

}

Chronometer.prototype.stopClick = function() {
    console.log("STOP CLICK");
    this.setStop();
    this.setReset();
}