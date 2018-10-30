// Constructor
function Chronometer() {

this.currentTime = 0;
this.intervalId = 0;
this.convTime = this.setTime();
this.splitTime = "";

}

Chronometer.prototype.startClick = function () {
    this.intervalId = setInterval(function(){
        this.currentTime ++;
        this.setTime();
        printTime();
    }.bind(this),1000);
};

Chronometer.prototype.setMinutes = function () {
    return Math.floor(this.currentTime/60);
};

Chronometer.prototype.setSeconds = function () {
    return this.currentTime%60
};

Chronometer.prototype.twoDigitsNumber = function (number) {
    if(number<10){
        return "0"+ number.toString();
    }else{
        return number.toString();
    }
};

Chronometer.prototype.setTime = function () {
    this.intMinutes = this.setMinutes();
    this.intSeconds = this.setSeconds();
    this.stringMinutes = this.twoDigitsNumber(this.intMinutes);
    this.stringSeconds = this.twoDigitsNumber(this.intSeconds);
    //return this.stringMinutes + " " + this.stringSeconds;
};

// Chronometer.prototype.setMilliseconds = function () {

// };

Chronometer.prototype.stopClick = function () {
    clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function () {
    this.currentTime = 0;
    this.stringMinutes = "00";
    this.stringSeconds = "00";
    printTime();
};

Chronometer.prototype.splitClick = function () {
    this.splitTime = this.stringMinutes + ":" + this.stringSeconds;
};
