// Constructor


function Chronometer() {
    
    this.currentTime = 0;
    this.intervalId = 0;  

}

Chronometer.prototype.startClick = function () {    


    this.intervalId = setInterval (function(){
        this.currentTime += 1;
        this.setTime();

    }.bind(this), 1000);
   
};

Chronometer.prototype.setMinutes = function () {

    var minutes = this.currentTime / 60;
    return Math.floor(minutes);
};

Chronometer.prototype.setSeconds = function () {

    var minutes = this.currentTime % 60;    
    // return Math.floor((minutes - Math.floor(minutes)) * 60);
    return Number(Math.floor(minutes));

};

Chronometer.prototype.twoDigitsNumber = function (param1) {
    
    var string = param1.toString();
    
    if (string.length === 1)
    {
        string = "0" + string;
        return string;
    }else{
        return string;
    }
  
};

Chronometer.prototype.setTime = function () {

    
    var minutes = this.twoDigitsNumber(this.setMinutes);
    var seconds =  this.twoDigitsNumber(this.setSeconds);

    return minutes, seconds;
};

// Chronometer.prototype.setMilliseconds = function () {

// };

Chronometer.prototype.stopClick = function () {

   
    clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function () {

};

// Chronometer.prototype.splitClick = function () {

// };
