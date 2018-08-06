// Constructor
function Chronometer() {
    this.currentTime = 0;
    this.intervalId = 0;
}

Chronometer.prototype.startClick = function () {
   this.intervalId = setInterval(function(){
        this.currentTime++;
        printTime();
    }.bind(this),1000)
};

Chronometer.prototype.setMinutes = function () {
    var result = parseInt(this.currentTime / 60);
    return result;  //parseInt does not work as well
};

Chronometer.prototype.setSeconds = function () {
    var result = this.currentTime % 60;
    return result;
};

Chronometer.prototype.twoDigitsNumber = function (number) {
    //var digitNumber = number;
    if (number < 10){
        number = "0" + number;
        return number.toString();
    }
    else{
        return number.toString();
    }
};

 Chronometer.prototype.setTime = function () {
    var minutes = this.twoDigitsNumber(this.setMinutes());
    //console.log("minutes are", minutes);
    var seconds = this.twoDigitsNumber(this.setSeconds());
 };

// Chronometer.prototype.setMilliseconds = function () {

// };

Chronometer.prototype.stopClick = function () {
    clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function () {
    this.currentTime = 0;
 };

 var chronometer1 = new Chronometer();
// Chronometer.prototype.splitClick = function () {

// };
