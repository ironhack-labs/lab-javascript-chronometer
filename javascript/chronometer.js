class Chronometer {
  constructor() {
    this.currentTime=0;
    this.intervalId=0;
    }
  startClick(callback) {
    this.intervalId= setInterval(()=> {
      this.currentTime++
      if(callback){ //Fix jasmine error. Check callback before calling it.
        callback()
      };
    },1000);
  }

  getMinutes() {
    let minutes=0;
    minutes= this.currentTime/60;
    return Math.trunc(minutes);
  }
  getSeconds() {
    let seconds=0;
    seconds= this.currentTime - this.getMinutes() * 60;
    return seconds;
  }
  twoDigitsNumber(num) {
    let convertedNum=num.toString();
      if(convertedNum.length<2){
        return '0' + num;
      }
    return convertedNum;
    
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime=0;
  }
  splitClick() {
    return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}`
  }
}
