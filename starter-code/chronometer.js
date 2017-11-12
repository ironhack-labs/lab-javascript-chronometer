function Chronometer(btnLeft, btnRight, sphere) {
    this.btnLeft = document.getElementById(btnLeft);
    this.btnRight = document.getElementById(btnRight);
    this.sphere = document.getElementById(sphere);
}

Chronometer.prototype.startClick = function() {
    console.log("START CLICK");
    this.btnLeft.innerHTML = "STOP";
    this.btnLeft.className = "btn stop";
    this.btnRight.innerHTML = "SPLIT";
    this.btnRight.className = "btn split";
}

Chronometer.prototype.stopClick = function() {
    console.log("STOP CLICK");
    this.btnLeft.innerHTML = "START";
    this.btnLeft.className = "btn start";
    this.btnRight.innerHTML ="RESET";
    this.btnRight.className = "btn reset";
}