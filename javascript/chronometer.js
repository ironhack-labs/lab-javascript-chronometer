class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
    this.currentMilli = 0;
    this.millisecondsIntervalId = 0;
  };
  startClick(callback) {
     this.intervalId = setInterval(() => {
      this.currentTime++;
     callback();
    }, 1000);
    this.millisecondsIntervalId = setInterval (() => {
      this.currentMilli ++;
      callback();
    },10)
  }
  getMinutes() {
    if (this.currentTime === 0){
      return 0;
    } else {
      return Math.floor(this.currentTime/60)
    }
  };
  getSeconds() {
      if (this.currentTime === 0){
      return 0;
    } else {
      return Math.floor(this.currentTime % 60)
    }
  };

  getMilli() {
    if (this.currentMilli === 0){
      return 0;
    } else {
      if(this.currentMilli > 99) {
        this.currentMilli = 0;
      }
      return this.currentMilli
    }
};

  twoDigitsNumber(value) {
    if (value <10){
      return '0'+ value     
    }else {       
      return value.toString()   
    }
  };
  stopClick() {
    clearInterval(this.intervalId);
    clearInterval(this.millisecondsIntervalId);
  }
 
  resetClick() {
    this.currentTime = 0;
    this.currentMilli = 0;
  }
  splitClick() {
    return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}:${this.twoDigitsNumber(this.getMilli())}`
  }
}
