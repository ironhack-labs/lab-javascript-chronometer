function Chronometer() {
    this.currentTime = 0;
    this.intervalId = 0;
    this.seconds = "00";
    this.minutes = "00";
}

Chronometer.prototype.startClick = function () {
    chronometer.intervalId = setInterval(function () {
        printSeconds();
        printMinutes();
        chronometer.setTime();
        chronometer.currentTime++;
    }, 1000);
};

Chronometer.prototype.setMinutes = function () {
    if (chronometer.currentTime >= 60) {
        return parseInt(chronometer.currentTime / 60);
    } else {
        return 0;
    }
};

Chronometer.prototype.setSeconds = function () {
    if (chronometer.currentTime >= 60) {
        return parseInt(chronometer.currentTime % 60);
    } else {
        return chronometer.currentTime;
    }
};

Chronometer.prototype.twoDigitsNumber = function (num) {
    if (num < 10) {
        return "0" + num;
    } else {
        return num.toString();
    }

};

Chronometer.prototype.setTime = function () {
    this.minutes = chronometer.twoDigitsNumber(chronometer.setMinutes());
    this.seconds = chronometer.twoDigitsNumber(chronometer.setSeconds());

};

Chronometer.prototype.setMilliseconds = function () {

};

Chronometer.prototype.stopClick = function () {
    clearInterval(chronometer.intervalId);
};

Chronometer.prototype.resetClick = function () {
    this.currentTime = 0;
    this.seconds = "00";
    this.minutes = "00";
    document.querySelector("#splits").innerHTML = "";
    document.querySelector("#secDec").innerText = 0;
    document.querySelector("#secUni").innerText = 0;
    document.querySelector("#minDec").innerText = 0;
    document.querySelector("#minUni").innerText = 0;
};

Chronometer.prototype.splitClick = function () {
    var node = document.createElement("li");
    node.setAttribute("class", "split");
    node.innerHTML = `${chronometer.minutes}:${chronometer.seconds}`;
    document.querySelector("#splits").appendChild(node);

};