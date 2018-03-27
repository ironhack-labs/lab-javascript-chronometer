// Constructor
// function Chronometer() {
function Chronometer() {
    this.currentTime = 0;
    this.currentMilisec = 0;
    this.intervalId = 0;
    this.intervalIdMilisec = 0;
    this.minutes = "00";
    this.seconds = "00";
    this.milisecs = "000";
}

Chronometer.prototype.startClick = function () {
    var that = this;
    this.intervalId = setInterval(function () {
        that.currentTime++;
        setInterval(function () {
            that.currentMilisec++;
            that.setMilliseconds();
        }, 1);
        that.setTime();
    }, 1000);
};

Chronometer.prototype.setMinutes = function () {
    if (this.currentTime < 60) {
        return 0;
    }
    if ((this.currentTime / 60) >= 1) {
        return Math.floor(this.currentTime / 60);
    }
};

Chronometer.prototype.setSeconds = function () {
    if (this.currentTime % 60 === 0) {
        return 0;
    } else {
        return Math.floor(this.currentTime - (60 * this.setMinutes()));
    }
};

Chronometer.prototype.setMilliseconds = function () {
    if (this.currentMilisec === 0 || this.currentMilisec > 999) {
        this.milisecs = "000";
    } else {
        var textMilisecs = "" + this.currentMilisec;
        if (textMilisecs.length > 2) {
            this.milisecs = textMilisecs;
        } else if (textMilisecs.length > 1) {
            this.milisecs = "0" + textMilisecs;
        } else if (textMilisecs.length === 1) {
            this.milisecs = "00" + textMilisecs;
        }
    }
};

Chronometer.prototype.twoDigitsNumber = function (num) {
    var numeroEnTexto = "" + num; // conversion de num a string
    if (num == 0) {
        return "00";
    } else {
        if (numeroEnTexto.length > 1) {
            return numeroEnTexto;
        } else {
            return "0" + numeroEnTexto;
        }
    }
};

Chronometer.prototype.setTime = function () {
    this.minutes = this.twoDigitsNumber(this.setMinutes());
    this.seconds = this.twoDigitsNumber(this.setSeconds());

};

Chronometer.prototype.stopClick = function () {
    clearInterval(this.intervalId);
    clearInterval(this.intervalIdMilisec);
};

Chronometer.prototype.resetClick = function () {
    this.currentTime = 0;
    this.currentMilisec = 0;
    this.seconds = "00";
    this.minutes = "00";
    this.milisecs = "000";
};
