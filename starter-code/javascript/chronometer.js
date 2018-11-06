// Constructor
var intervalo;
function Chronometer() {
    this.currentTime = 0;
    this.intervalId;
}

Chronometer.prototype.startClick = function () {
    var scope = this;
    this.intervalId = setInterval(function(){
        scope.currentTime++;
        console.log(scope.currentTime);
    },1000);
};
Chronometer.prototype.setMinutes = function () {
    //Todo: checar esto despues
    return Math.trunc(this.currentTime/60);
};

Chronometer.prototype.setSeconds = function () {
    return this.currentTime%60;
};

// Chronometer.prototype.twoDigitsNumber = function () {
  
// };

// Chronometer.prototype.setTime = function () {

// };

// Chronometer.prototype.setMilliseconds = function () {

// };

Chronometer.prototype.stopClick = function () {
    console.log(this.intervalId);
    clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function () {
    this.currentTime = 0;
    clearInterval(this.intervalId);
};

Chronometer.prototype.splitClick = function () {
    return this.currentTime;
};
