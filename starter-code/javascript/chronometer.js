// Constructor
// function Chronometer() {

// }

'use strict';

class Chronometer {
  constructor(){
    this.currentTime = 0;
    this.intervalId = 0;
  }
 
  startClick() {
    const add = function(){ 
      this.currentTime ++;
      this.setTime()
    }

    this.intervalId = setInterval(add.bind(this), 1000)
  }

  setMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  setSeconds() {
    return this.currentTime % 60;
  }

  setMilliseconds(){
    return this.currentTime % 100;
  }

  twoDigitsNumber(num) {
      if(num < 10){
       return `0${num}`;
      } else {
        return `${num}`;
      }
  }

  setTime() {
    let minutes = this.twoDigitsNumber(this.setMinutes);
    let seconds = this.twoDigitsNumber(this.setSeconds)
  }

  stopClick() {
    clearInterval(this.intervalId);
  }

  resetClick(){
    this.currentTime = 0;
  }

}

