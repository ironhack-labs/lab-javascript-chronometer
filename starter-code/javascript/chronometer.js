// Constructor
function Chronometer() {
    this.currentTime = 0
    this.intervalId = 0
}



Chronometer.prototype.startClick = function () {
    var that = this
    this.intervalId = setInterval (function (){
        that.currentTime++
        that.setTime()
    },1000)  
};



 Chronometer.prototype.setMinutes = function () {
        return Math.floor(this.currentTime / 60)
 };



Chronometer.prototype.setSeconds = function () {
    return Math.floor(this.currentTime % 60)
 };


Chronometer.prototype.twoDigitsNumber = function (value1) {
    if (value1<10){
        return "0" + value1
    } 

    // `el numero es ${value1}`
    
    return value1.toString()
};


Chronometer.prototype.setTime = function () {
    var min = this.twoDigitsNumber(this.setMinutes())
    var seg = this.twoDigitsNumber(this.setSeconds())

};

Chronometer.prototype.setMilliseconds = function () {};

Chronometer.prototype.stopClick = function () {
    clearInterval(this.intervalId)
};

Chronometer.prototype.resetClick = function () {
    this.currentTime = 0 
};

Chronometer.prototype.splitClick = function () {};
