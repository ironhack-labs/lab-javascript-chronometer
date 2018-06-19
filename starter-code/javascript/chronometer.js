// Constructor
function Chronometer() {
	this.currentTime = 0;
     this.intervalId = 0;
     this.miliseconds=0;
     this.intervalMili=0;
}

Chronometer.prototype.startClick = function() {
     var that=this;
	this.intervalId = setInterval(function() {
          that.currentTime++;
          that.setTime();
		if (that.intervalId > 60) {
               that.currentTime = 1;
		}
    }, 1000);
    this.intervalMili=setInterval(function(){
        that.miliseconds++;
        that.setTime();
        if(that.miliseconds>98){
            that.miliseconds=0;
        }
    },10);

};


 Chronometer.prototype.setMinutes = function () {
     return Math.floor(this.currentTime/60);
 };

Chronometer.prototype.setSeconds = function () {
     if(this.currentTime<=0){
          return 0;
     }
    return this.currentTime- (Math.floor(this.currentTime/60)*60) ;
};

Chronometer.prototype.twoDigitsNumber = function (e) {
if(e<10){
     return "0"+e;
}
else {
     return e.toString()
}
};

Chronometer.prototype.setTime = function () {
     this.minutes=this.twoDigitsNumber(this.setMinutes());
     this.seconds=this.twoDigitsNumber(this.setSeconds());;
     this.miliseconds=this.twoDigitsNumber(this.setMilliseconds());;
};

Chronometer.prototype.setMilliseconds = function () {
    console.log(this.miliseconds);
    return this.miliseconds
};

Chronometer.prototype.stopClick = function () {
     clearInterval(this.intervalId);
     clearInterval(this.intervalMili);
};

Chronometer.prototype.resetClick = function () {
    this.minutes="00"
    this.seconds="00"
    this.miliseconds="00"
};

 Chronometer.prototype.splitClick = function () {
     this.currentTime=0;
     this.miliseconds=0;
};
