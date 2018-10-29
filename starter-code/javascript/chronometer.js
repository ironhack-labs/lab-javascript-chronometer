
function Chronometer() {
    this.currentTime=0;
    this.intervalId=0;
}

Chronometer.prototype.startClick = function () {
    /* volvemos a dar contexto a nuestra varibale this para poder usarla luego */
   
    //var that=this;
    this.intervalId=setInterval(function(){
        
        //that.currentTime++;
        this.currentTime++;
        this.setTime();
        
    }.bind(this),10)

};

Chronometer.prototype.setMinutes = function () {
    return Math.floor(this.currentTime/60/60);
};

Chronometer.prototype.setSeconds = function () {    
    return Math.floor(this.currentTime/60)%60;
   
  
};

Chronometer.prototype.setMilliseconds = function () {
    if(this.setSeconds()===0 && this.setMinutes()===0){
        return this.currentTime
      }else{
        return this.currentTime%100
      }
};

Chronometer.prototype.twoDigitsNumber = function (number) {
  if(number.toString().length===2) return number.toString();
  return  '0'+number;
};

Chronometer.prototype.setTime = function () {
    var minutes=this.twoDigitsNumber(this.setMinutes());
    var seconds=this.twoDigitsNumber(this.setSeconds());
    var miliseconds=this.twoDigitsNumber(this.setMilliseconds());
    printTime(minutes,seconds,miliseconds);
    
};



Chronometer.prototype.stopClick = function () {
    clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function () {
    this.currentTime=0;
    this.setTime();
};

Chronometer.prototype.splitClick = function () {

};
