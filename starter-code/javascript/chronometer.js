'use strict'

// Constructor
class Chronometer{
  constructor(){
    this.currentTime = 0;
    this.intervalId = 0;
    this.miliId = 0;
    this.currentMilis = 0;
  };

  startClick(){
    this.intervalId = setInterval (() => {
    this.currentTime++;
    this.setTime();
    }, 1000);

    this.miliId = setInterval (() => {
      if (this.currentMilis < 1000) {
        this.currentMilis++;
      } else {
        this.currentMilis = 0;
      };
    }, 1);
  }

  setMinutes() {
    return Math.floor(this.currentTime / 60);
  };

  setSeconds() {
    return this.currentTime % 60;
  };

  setMilis() {
    let milisec = this.currentMilis;;
    return milisec;
  }

  twoDigitsNumber (number){
    return (number <  10) ? `0${number}`.toString() : number.toString();
  };

  setTime () {
    let minutes = this.twoDigitsNumber(this.setMinutes());
    let seconds = this.twoDigitsNumber(this.setSeconds());
    return `${minutes}:${seconds}:${milisec}`;
  };

  stopClick() {
    clearInterval(this.intervalId);
  };

  resetClick() {
    this.currentTime = 0;
  };
};