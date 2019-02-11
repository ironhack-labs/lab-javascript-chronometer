'use strict';

class Chronometer{
  constructor(){
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick(){
    const add = function(){
      this.currentTime++;
      this.setTime();
    }

    this.intervalId = setInterval(add.bind(this), 10);
  }

  setMinutes(){
    return Math.floor(this.currentTime/6000);
  }

  setSeconds(){
    return this.currentTime/100;
  }

  setMilliseconds(){
    return this.currentTime%100;
  }


 // 1 min = 6.000 cs
// 100 cs = 1 s

  twoDigitsNumber(num){
    if (num<10){
      return "0" + num;
    }else{
      return "" + num;
    }
  }

  setTime(){
    let milliseconds = this.twoDigitsNumber(this.setMilliseconds());
    let seconds = this.twoDigitsNumber(this.setSeconds());
    let minutes = this.twoDigitsNumber(this.setMinutes());
  }

  stopClick(){
    clearInterval(this.intervalId);
  }

  resetClick(){
    this.currentTime = 0;
  }
}