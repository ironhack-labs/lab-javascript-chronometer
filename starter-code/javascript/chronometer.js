class Chronometer {
  constructor() {

    this.currentTime=0
    this.intervalId
    this.miliSeconds=0
  }
  startClick() {
    this.intervalId= setInterval(() => {this.currentTime++}, 1000);
    setInterval(() => {this.miliSeconds++}, 10);

 
  };
  getMinutes() {
    return Math.floor(this.currentTime/60);
  }
  getSeconds() {
    return this.currentTime%60;
  }
  twoDigitsNumber(number) {
    return number<10? number=`0${number}` : number.toString();
  }
  stopClick() {
    clearInterval(this.intervalId);
    clearInterval(this.miliSeconds);

  }
  resetClick() {
    this.currentTime=0;
  }
  // splitClick() {}
};