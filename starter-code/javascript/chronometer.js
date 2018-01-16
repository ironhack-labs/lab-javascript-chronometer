// Constructor
function Chronometer() {
    this.currentTime = 0;
    this.intervalId = 0;

}
var miCrono = new Chronometer;

Chronometer.prototype.startClick = function () {
    var that = this;

    this.intervalId = setInterval(function () {
        that.currentTime++;
    }, 1000)
}

miCrono.startClick();

Chronometer.prototype.setMinutes = function () {
    var minutos = Math.floor(this.currentTime / 60)

    return minutos;

}




Chronometer.prototype.setSeconds = function () {
    var segundos = Math.floor(this.currentTime)
    return this.currentTime % 60;

};


Chronometer.prototype.twoDigitsNumber = function () {
    //var minutes =miCrono.setMinutes().toString();
    var segundos = miCrono.setSeconds().toString();
    var segundos = segundos
    if (segundos < 10) {
        return segundos = "0" + segundos;

    } else if (segundos == 15) {
        return segundos = "15";
    }

    //return minutes;
    // return segundos2;

}



// Chronometer.prototype.setSeconds = function () {

// };

// Chronometer.prototype.twoDigitsNumber = function () {

// };

// Chronometer.prototype.setTime = function () {

// };

// Chronometer.prototype.setMilliseconds = function () {

// };

// Chronometer.prototype.stopClick = function () {

// };

// Chronometer.prototype.resetClick = function () {

// };asincronia

// Chronometer.prototype.splitClick = function () {

// };