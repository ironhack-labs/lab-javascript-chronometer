class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(){
    this.intervalId = setInterval(() => {
    this.currentTime++;
    },1000);
  }
  getMinutes(){
    let minutes = this.currentTime / 60;
    return parseInt(minutes);
  }
  getSeconds() {
    // let seconds = this.currentTime;
    // if(seconds >= 60){
    //   seconds -= 60;
    // }
    // return parseInt(seconds);
    return this.currentTime % 60;
  }
  twoDigitsNumber(number) {
    if (number > 9){
      return number.toString(10);
    }else{
      return `0${number}`;
    }
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick(){
    this.currentTime = 0;
  }
  splitClick(){
    return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}`
  }
}