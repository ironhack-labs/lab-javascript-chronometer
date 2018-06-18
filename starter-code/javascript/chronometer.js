// Constructor
function Chronometer() {
    this.currentTime = 0;
    this.intervalId = 0;
}

//Chronometer.prototype = Object.create(Chronometer.prototype);
//Chronometer.prototype.constructor = new currentTime;
//Chronometer.prototype.currentTime = function (){
//    setInterval (intervalId, 1000);
//}

Chronometer.prototype.startClick = function () {
    var i = 0;
    var that = this;    
    setInterval (function(){
        that.currentTime++;
        that.setTime();
    }, 1000)
};

Chronometer.prototype.setMinutes = function () {

    return parseInt((Math.floor(this.currentTime)/60));
};

// Nota: al quitarle el parseInt de arriba, deja de pasar el examen x Jasmine

Chronometer.prototype.setSeconds = function (minutes) {
    return this.currentTime - minutes * 60;
}

Chronometer.prototype.twoDigitsNumber = function (setValue) {
    var str = "";
    if (setValue < 10){
        str = "0" + setValue;
    } else {
        str = setValue.toString();
    } 
    return str;

}

Chronometer.prototype.setTime = function (time) {
    var minutes = this.twoDigitsNumber(this.setMinutes);
    var seconds = this.twoDigitsNumber(this.setSeconds);
};

// Chronometer.prototype.setMilliseconds = function () {

// };

Chronometer.prototype.stopClick = function () {
    return clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function () {
    return 
};

// Chronometer.prototype.splitClick = function () {

// };
