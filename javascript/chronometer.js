class Chronometer {
  constructor() {
    this.currentTime=0;
    this.intervalId=0;
  }
  startClick(callback) {
    this.intervalId= setInterval(()=>{
      this.currentTime++;
    },1000)
  }
  getMinutes() {
    return Math.floor(this.currentTime/60);
  }
  getSeconds() {
    return Math.floor(this.currentTime%60)
  }
  twoDigitsNumber(func) {
    const twoDigits= func.toString();
    if(twoDigits.length===1){
      let zero=`0${twoDigits}`
      return zero;
    }
    return twoDigits;    
  }
  stopClick() {
    clearInterval(this.intervalId)
  }
  resetClick() {
    this.currentTime=0;
  }
  splitClick() {
    return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}`
  }
}
