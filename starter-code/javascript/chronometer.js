// Constructor
function Chronometer() {
    this.currentTime = 0;
    this.intervalId = 0;
    
}

Chronometer.prototype.startClick = function () {
    this.intervalId = setInterval(function() {
        console.log(this.currentTime);
        this.currentTime++;
        this.setTime();
    }.bind(this), 1000);
    
};

Chronometer.prototype.setMinutes = function () {
    var result = parseInt(this.currentTime / 60);
    return result;
};

Chronometer.prototype.setSeconds = function () {
    var result = this.currentTime % 60;
    return result;
};

Chronometer.prototype.twoDigitsNumber = function (number) {
    if (number < 10){
            return "0" + number;
        } else {
            return "" + number;
        }

}

Chronometer.prototype.setTime = function () {
this.twoDigitsNumber(this.setMinutes());
this.twoDigitsNumber(this.setSeconds());

};

Chronometer.prototype.setMilliseconds = function () {

};

Chronometer.prototype.stopClick = function () {
    clearInterval();
};

Chronometer.prototype.resetClick = function () {

};

Chronometer.prototype.splitClick = function () {

};
