// Constructor
function Chronometer() {
     this.currentTime = 0;
     this.intervalId = 0;
}

var c = new Chronometer();

// https://coderwall.com/p/65073w/using-this-in-scope-based-settimeout-setinterval
Chronometer.prototype.startClick = function () {
    var _this = this;
    this.intervalID = setInterval(function() {
            _this.setTime();
            return _this.currentTime++;
    }, 1000);
};

Chronometer.prototype.setMinutes = function () {
    console.log(this.currentTime);
    return parseInt(this.currentTime / 60);
};

Chronometer.prototype.setSeconds = function () {
  return this.currentTime % 60;
};

Chronometer.prototype.twoDigitsNumber = function (value) {
    var my_string = '' + value;
    if(value < 9){
        return my_string = '0' + my_string;
    }else{
        return value.toString();
    }
};

Chronometer.prototype.setTime = function () {

};

Chronometer.prototype.setMilliseconds = function () {

};

Chronometer.prototype.stopClick = function () {
  clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function () {

};

Chronometer.prototype.splitClick = function () {

};
