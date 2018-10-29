
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
        
    }.bind(this),1000)

};

Chronometer.prototype.setMinutes = function () {
    return Math.floor(this.currentTime/60);
};

Chronometer.prototype.setSeconds = function () {    
  if(this.setMinutes()===0){
    return this.currentTime
  }else{
    return this.currentTime%60
  }
  
};

Chronometer.prototype.twoDigitsNumber = function (number) {
  if(number.toString().length===2) return number.toString();
  return  '0'+number;
};

Chronometer.prototype.setTime = function () {
    var minutes=this.twoDigitsNumber(this.setMinutes());
    var seconds=this.twoDigitsNumber(this.setSeconds());
   // debugger
    printTime(minutes,seconds);
    
};

Chronometer.prototype.setMilliseconds = function () {

};

Chronometer.prototype.stopClick = function () {
    clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function () {
    this.currentTime=0;
};

Chronometer.prototype.splitClick = function () {

};
