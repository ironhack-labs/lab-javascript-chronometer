// Constructor
function Chronometer() {
    this.currentTime = 0;
    this.intervalId = 0;
    this.minutes = "00";
    this.seconds = "00";
    };

    Chronometer.prototype.startClick = function () {
       this.intervalId = setInterval(()=> {
           this.currentTime +=1;
           this.setTime();console.log(this.currentTime);}
          ,500);
       this.currentTime;
    };

    Chronometer.prototype.setMinutes = function () {
        return Math.floor(this.currentTime / 60);
    };

    Chronometer.prototype.setSeconds = function () {
       return seconds = Math.floor(this.currentTime % 60);
    };

    Chronometer.prototype.twoDigitsNumber = function (num) {
        if (num <10){
        return "0"+ num;
        } else {
            return ""+num
        }
    };

    Chronometer.prototype.setTime = function () {
    //    if (this.currentTime = 0){
    //        this.seconds = "00";
    //        this.minutes = "00";
    //    }
    //    else {
           this.seconds = this.twoDigitsNumber(this.setSeconds);
           this.minutes = this.twoDigitsNumber(this.setMinutes);
    //    }

    };

    Chronometer.prototype.setMilliseconds = function () {

    };

    Chronometer.prototype.stopClick = function () {
       if (-1 != this.intervalId) {
           clearInterval(this.intervalId);
           this.intervalId = -1;
       }
    };

    Chronometer.prototype.resetClick = function () {
    this.currentTime = 0;
    };

    Chronometer.prototype.splitClick = function () {

    };