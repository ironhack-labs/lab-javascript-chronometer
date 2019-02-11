// Constructor
class Chronometer{
  constructor(){
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(){
    this.intervalId = setInterval (() => {
    this.currentTime++;
    this.setTime();
    }, 1000);
  };
  setMinutes() {
    return Math.floor(this.currentTime / 60);
  }
  setSeconds() {
    return this.currentTime % 60
  }

  twoDigitsNumber (number){
    return (number <  10) ? `0${number}`.toString() : number.toString();
  }

  setTime () {
    let minutes = this.twoDigitsNumber(this.setMinutes());
    let seconds = this.twoDigitsNumber(this.setSeconds());
    printTime(minutes, seconds);
  }

  stopClick() {
    clearInterval(this.intervalId);
  }

  resetClick() {
    this.currentTime = 0;
  }
}