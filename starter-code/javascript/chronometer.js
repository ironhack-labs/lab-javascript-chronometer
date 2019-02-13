// Constructor

function Chronometer() {
    this.currentTime = 0;
    this.intervalId = 0;
    this.milisec = 0;
    this.sec = 0;
    this.min = 0;
    this.run = function () {
        if (this.milisec < 100) {
            this.milisec++;
            console.log(this.min + ":" + this.sec + ":" + this.milisec);

        } else if (this.sec < 60) {
            this.milisec = 0;
            this.sec += 1;

        } else {
            this.min += 1;
            this.sec = 0;
        }
    }

    this.start = function () {
        var x = this.run.bind(this);
        setInterval(x, 10)
    }
}

Chronometer.prototype.startClick = function () {
    var _this = this;
    this.intervalId = setInterval(function () {
        _this.currentTime += 1;
    }, 1000);
}

Chronometer.prototype.setMinutes = function () {
    return Math.floor(this.currentTime * 6000);
}

Chronometer.prototype.setSeconds = function () {
    return Math.floor((this.currentTime % 6000) / 100);
};

Chronometer.prototype.setMilliseconds = function () {
    return this.currentTime % 100;
};

Chronometer.prototype.twoDigitsNumber = function () {
    var digit = 0;
    if (digit < 10) {
        return "0" + digit.toString();
    } else {
        return digit.toString();
    }
};


Chronometer.prototype.setTime = function () {
    var minutes = this.twoDigitsNumber(this.setMinutes());
    var seconds = this.twoDigitsNumber(this.setSeconds());
    var milisec = this.twoDigitsNumber(this.setMilliseconds());
    
    secDec.innerHTML = seconds.substr(0, 1);
    secUni.innerHTML = seconds.substr(1, 1);
    
    minDec.innerHTML = minutes.substr(0, 1);
    minUni.innerHTML = minutes.substr(1, 1);
    
    milDec.innerHTML = milisec.substr(0, 1);
    milUni.innerHTML = milisec.substr(1, 1);

    return minutes + ":" + seconds + ":" + milisec;
};

Chronometer.prototype.stopClick = function () {
    clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function () {
    this.currentTime = 0;
    this.run();
};

Chronometer.prototype.splitClick = function () {
    currentTime = this.setTime();
    newList = document.createElement("li");
    newList.innerHTML = currentTime;
    var list = document.getElementById("splits");
    list.appendChild(newList);
};