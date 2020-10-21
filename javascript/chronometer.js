class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
    this.currentMil = 0;
    this.intervalMilId = 0;
  }
  startClick(callback) {
    // this.intervalId = setInterval(() => {
    //   this.currentTime++;
    // },1000)
    this.intervalMilId = setInterval(() => {
      this.currentMil++;
      if (this.currentMil === 100){
        this.currentTime++;
      }
    },10);
  }
  getMinutes() {
    return Math.floor(this.currentTime/60);
  }
  getSeconds() {
    return this.currentTime % 60
  }
  getMiliseconds(){
    if (this.currentMil === 100){
      this.currentMil = 0;
    }
    return this.currentMil;
  }
  twoDigitsNumber(number) {
    if(number.toString().length === 1){
      return `0${number}`;
    }
    return number.toString();
  }
  stopClick() {
    // clearInterval(this.intervalId)
    clearInterval(this.intervalMilId)
  }
  resetClick() {
    this.currentTime = 0
    this.currentMil = 0
  }
  splitClick(minutos, segundos){
    return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}:${this.twoDigitsNumber(this.getMiliseconds())}`
  }
}

