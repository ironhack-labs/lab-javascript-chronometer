// Constructor
function Chronometer() {
    this.currentTime = 0;
    this.intervalId = 0;
    this.intervalId2 = 0;
    this.secs=0;
    
 }

Chronometer.prototype.startClick = function () {
    var that=this;
    this.intervalId=setInterval(function(){
        that.currentTime++;
        that.setTime();
    },1000)
    this.intervalId2=setInterval(function(){
        if(that.secs==100)
            that.secs=1;
        that.secs++;
    },10)

 };

Chronometer.prototype.setMinutes = function () {
    var minutes=this.currentTime/60;
    return Math.floor(minutes);
    

};

Chronometer.prototype.setSeconds = function () {
    return this.currentTime-this.setMinutes()*60 ;
};

Chronometer.prototype.twoDigitsNumber = function (e) {
    if(e<10)
        return "0"+e;
    else
        return e+"";
};

Chronometer.prototype.setTime = function () {
return this.twoDigitsNumber(this.setMinutes())+":"+this.twoDigitsNumber(this.setSeconds())+":"+this.twoDigitsNumber(this.setMilliseconds());
};

Chronometer.prototype.setMilliseconds = function () {
    return this.secs;
};

Chronometer.prototype.stopClick = function () {
  clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function () {
    this.currentTime=0;
    this.secs=0;
};

// Chronometer.prototype.splitClick = function () {

// };
