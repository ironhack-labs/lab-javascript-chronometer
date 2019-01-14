// Constructor
function Chronometer() {
this.currentTime=0;
this.intervalId=0;
this.minutes=0;
this.seconds=0;

}

Chronometer.prototype.startClick = function () {
    let self=this;
    this.intervalId = setInterval(function (){
        self.currentTime+=1;
        self.setTime();
        },1000); 
};

Chronometer.prototype.setMinutes = function () {
  let minute = Math.floor(this.currentTime/60)  
  return minute
};

Chronometer.prototype.setSeconds = function () {
    let seconds = 0
    seconds = this.currentTime-(this.setMinutes()*60)
    return seconds
};

Chronometer.prototype.twoDigitsNumber = function (item) {
    if (item==0){
        return "00"
    }
    else if(item.toString().length<2){
        return "0"+ item.toString();
    } else{
        return item.toString()
    }  
};

Chronometer.prototype.setTime = function () {
    this.minutes = this.twoDigitsNumber(this.setMinutes());
    this.seconds = this.twoDigitsNumber(this.setSeconds());
};


//Chronometer.prototype .setMilliseconds = function () {
 
// };

Chronometer.prototype.stopClick = function () {
    let self=this;
    clearInterval(self.intervalId,0);
  
};

Chronometer.prototype.resetClick = function () {
this.currentTime=0;
};

// Chronometer.prototype.splitClick = function () {

// };
