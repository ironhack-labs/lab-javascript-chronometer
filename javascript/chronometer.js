class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  
  startClick(callback) {
    this.intervalId=setInterval(()=>{
      this.currentTime +=1
      callback()
    },1000);
  }
  getMinutes() {
    return Math.floor(this.currentTime/60);
  };
  getSeconds() {
    return Math.floor(this.currentTime%60);
  }
  
  twoDigitsNumber(number) {
    return  ("0" + number).slice(-2);
  }

  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    const number1=this.getMinutes()
    const number2=this.getSeconds()
    return `${this.twoDigitsNumber(number1)}:${this.twoDigitsNumber(number2)}`
  }
}