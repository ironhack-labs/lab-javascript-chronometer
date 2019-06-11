class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId;
  }

  startClick() {
    this.intervalId = setInterval(() => {
      return this.currentTime++;
    }, 1000);

  }
  getMinutes() {
    let aux = 0;
    if(this.currentTime<60){
      return 0;
    }
    else{
      aux = this.currentTime/60;
      return parseInt(aux);
    }
  }
  getSeconds() {
    return this.currentTime%60;
  }
  twoDigitsNumber(current) {
    if (current<10){
      return `0${current}`;
    }
    else{
      return `${current}`;
    }
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {

  }
  splitClick() {

  }
}