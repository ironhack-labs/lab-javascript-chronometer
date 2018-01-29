
// Constructor
function Chronometer() {
    this.currentTime=0;
    this.intervalId=0;
}

Chronometer.prototype.startClick = function () {
    var chronos = this;
    this.intervalId = setInterval(function(){
        chronos.currentTime++;
        chronos.setTime();
    },10);
};

Chronometer.prototype.setMinutes = function () {
    return Math.floor(this.currentTime/6000);
};

Chronometer.prototype.setSeconds = function () {
    return Math.floor((this.currentTime%6000)/100);
};

Chronometer.prototype.twoDigitsNumber = function (value) {
    if (value<10){
        return "0"+value;
    } else {
        return ""+value;
    }

};

Chronometer.prototype.setTime = function () {
    this.seconds = this.twoDigitsNumber(this.setSeconds());
    this.minutes = this.twoDigitsNumber(this.setMinutes());
    this.milliSeconds = this.twoDigitsNumber(this.setMilliseconds());
};

Chronometer.prototype.setMilliseconds = function () {
    return this.currentTime%100;
};  

Chronometer.prototype.stopClick = function () {
 clearInterval(this.intervalId); 
};

Chronometer.prototype.resetClick = function () {
    console.log("corrio reset");
    this.currenTime = 0;
    this.seconds="00";
    this.minutes="00";
    this.milliSeconds="00";

};

// Chronometer.prototype.splitClick = function () {

// };
