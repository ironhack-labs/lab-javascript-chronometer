//var this.bntLeft y this.btnRight pertenecen al objeto cronometro
function Chronometer() {
    this.btnLeft = document.getElementById("btnLeft");
    this.btnRight = document.getElementById("btnRight");
    this.minDec = document.getElementById("minDec");
    this.minCen = document.getElementById("minCen");
    this.secDec = document.getElementById("secDec");
    this.secCen = document.getElementById("secCen");
    this.intervalId = 0;
    this.currentTime = 0.0;
    this.minutes = 0.0;
    this.seconds = 0.0;
}

Chronometer.prototype.startClick = function() {
    this.btnLeft.textContent = "STOP";
    this.btnLeft.setAttribute("class", "btn stop");

    this.btnRight.textContent = "SPLIT";
    this.btnRight.setAttribute("class", "btn split");

    var chrono = this;
    this.intervalId = setInterval(function() {
        chrono.currentTime++;

        chrono.minutes = parseInt(chrono.currentTime / 60).toString();
        if (chrono.minutes.length == 1) {
            chrono.minutes = '0'.concat(chrono.minutes);
        }

        chrono.seconds = (chrono.currentTime % 60).toString();
        if (chrono.seconds.length == 1) {
            chrono.seconds = '0'.concat(chrono.seconds);
        }

        chrono.minDec.textContent = chrono.minutes[0];
        chrono.minCen.textContent = chrono.minutes[1];
        chrono.secDec.textContent = chrono.seconds[0];
        chrono.secCen.textContent = chrono.seconds[1];
    }, 1000);
}

Chronometer.prototype.stopClick = function() {
    this.btnLeft.textContent = "START";
    this.btnLeft.setAttribute("class", "btn start");

    this.btnRight.textContent = "RESET";
    this.btnRight.setAttribute("class", "btn reset");

    clearInterval(this.intervalId);
}

Chronometer.prototype.splitClick = function() {
    var splitList = document.getElementById("split");
    var splitItem = document.createElement("li");
    splitItem.textContent = this.minutes + ":" + this.seconds;
    splitList.appendChild(splitItem);
}
