//var this.bntLeft y this.btnRight pertenecen al objeto cronometro
function Chronometer() {
    this.btnLeft = document.getElementById("btnLeft");
    this.btnRight = document.getElementById("btnRight");
    this.minDec = document.getElementById("minDec");
    this.minCen = document.getElementById("minCen");
    this.secDec = document.getElementById("secDec");
    this.secCen = document.getElementById("secCen");
    this.milDec = document.getElementById("milDec");
    this.milCen = document.getElementById("milCen");
    this.intervalId = 0;
    this.currentTime = 0;
    this.minutes = 0;
    this.seconds = 0;
    this.miliseconds = 0;
}

Chronometer.prototype.startClick = function() {
    this.btnLeft.textContent = "STOP";
    this.btnLeft.setAttribute("class", "btn stop");

    this.btnRight.textContent = "SPLIT";
    this.btnRight.setAttribute("class", "btn split");

    var chrono = this;
    this.intervalId = setInterval(function() {
        chrono.currentTime++;

        chrono.miliseconds = (chrono.currentTime % 100).toString();
        if (chrono.miliseconds.length == 1) {
            chrono.miliseconds = '0'.concat(chrono.miliseconds);
        }

        var seconds = parseInt(chrono.currentTime / 100).toString();
        chrono.minutes = parseInt(seconds / 60).toString();
        if (chrono.minutes.length == 1) {
            chrono.minutes = '0'.concat(chrono.minutes);
        }

        chrono.seconds = (seconds % 60).toString();
        if (chrono.seconds.length == 1) {
            chrono.seconds = '0'.concat(chrono.seconds);
        }

        chrono.minDec.textContent = chrono.minutes[0];
        chrono.minCen.textContent = chrono.minutes[1];
        chrono.secDec.textContent = chrono.seconds[0];
        chrono.secCen.textContent = chrono.seconds[1];
        chrono.milDec.textContent = chrono.miliseconds[0];
        chrono.milCen.textContent = chrono.miliseconds[1];
    }, 10);
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
    splitItem.textContent = this.minutes + ":" + this.seconds + ":" + this.miliseconds;
    splitList.appendChild(splitItem);
}


Chronometer.prototype.resetClick = function() {
    this.minDec.textContent = 0;
    this.minCen.textContent = 0;
    this.secDec.textContent = 0;
    this.secCen.textContent = 0;
    this.milDec.textContent = 0;
    this.milCen.textContent = 0;
    this.currentTime = 0;
    this.minutes = 0;
    this.seconds = 0;

    var splitList = document.getElementById("split");
    splitList.innerHTML = "";
}
