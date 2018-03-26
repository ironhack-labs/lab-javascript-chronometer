// Constructor
// function Chronometer() {
function Chronometer() {
    this.currentTime = 55;
    this.intervalId = 0;
    this.minutes = "00";
    this.seconds = "00";
    this.milisecs = "00";
}
// }

Chronometer.prototype.startClick = function () {
    var that = this;
    this.intervalId = setInterval(function () {
        that.currentTime++;
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
    if(this.currentTime % 60 === 0){
        return 0;
    } else {
        return Math.floor(this.currentTime - (60 * this.setMinutes()));
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

Chronometer.prototype.setMilliseconds = function () {
    if(this.currentTime )
};

Chronometer.prototype.stopClick = function () {
    clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function () {
    this.currentTime = 0;
    this.seconds = "00";
    this.minutes = "00";
};

// Chronometer.prototype.splitClick = function () {

// };
