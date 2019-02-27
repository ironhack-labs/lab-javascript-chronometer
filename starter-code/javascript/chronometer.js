// Constructor
function Chronometer() {
    this.currentTime=0;
    this.intervalId=0;
    this.on = false;
 }

Chronometer.prototype.startClick = function () {
        
        let self = this; //Adaptacao para funcionar o escopo local.
        if (this.on==true){
        self.intervalId = setInterval(function () {
        self.currentTime+=1;
        self.setTime();
        printTime();
    }, 10);
    if (this.of==false){
        self.currentTime=0;
        self.stopClick();
    }
    }
}

Chronometer.prototype.setMinutes = function () {
    return parseInt(this.currentTime/6000)%60;
 };


Chronometer.prototype.setSeconds = function () {
    
    return (this.currentTime/100) % 60;
 };

Chronometer.prototype.twoDigitsNumber = function (numb) {
    if (numb <= 9) return "0" + numb;
    else return String(numb);
  };

Chronometer.prototype.setTime = function () {
    var minutes=0;
    var seconds=0;  4
    var mili=0;   
    minutes =  this.twoDigitsNumber(this.setMinutes());
    seconds = this.twoDigitsNumber(this.setSeconds());
    mili = this.twoDigitsNumber(this.setMilliseconds());
    return minutes + seconds + mili;
};

 Chronometer.prototype.setMilliseconds = function () {
    return parseInt(this.currentTime);
 };

 Chronometer.prototype.stopClick = function () {
    clearInterval(this.intervalId);
    this.intervalId=0;
 };

Chronometer.prototype.resetClick = function () {
    this.currentTime =0;
 };

Chronometer.prototype.splitClick = function () {
    
 };
