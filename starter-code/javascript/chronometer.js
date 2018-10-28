
class Chronometer {
  constructor() {
    this.currentTime=0;
    this.intervalId=0;
  }
 
  startClick(){
    var _chronometer = this;
    this.intervalId = setInterval(function() {
      _chronometer.currentTime+=1;
      _chronometer.setTime();
    },10);
  } 

  setMinutes(){
    return Math.floor(this.currentTime/6000);
  }

  setSeconds(){
    return Math.floor(this.currentTime/100);
  }

  twoDigitsNumber(num){
    var numStr = num.toString();
    if (numStr.length===1) numStr="0"+numStr;
    return numStr;
  }

  setTime(){
    var minutes = this.twoDigitsNumber(this.setMinutes());
    var seconds = this.twoDigitsNumber(this.setSeconds());
    var milliseconds = this.twoDigitsNumber(this.setMilliseconds());
    return (minutes+":"+seconds+":"+milliseconds);
    }

  setMilliseconds(){
    return this.currentTime%100;
  }

  stopClick(){
    clearInterval(this.intervalId);
  }

  resetClick(){
    this.currentTime=0;
  }

  splitClick(){
    
  }

}
