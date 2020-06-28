class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
    this.currentMilli = 0;
    this.intervalMilli = 0;
  };

  startClick(callback) {
    this.intervalId = setInterval (() => {
      this.currentTime ++;
    },1000)
    this.intervalMilli = setInterval (() => {
      this.currentMilli ++;
    },10)
  };

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

  twoDigitsNumber(num) {
    if (num <10){
      return '0'+ num     
    }else {       
      return num.toString()   
    }
  };

  stopClick() {
    clearInterval(this.intervalId)
    this.intervalId = 0;
    clearInterval(this.intervalMilli)
    this.intervalMilli = 0;
  }

  resetClick() {
    this.currentTime = 0;
    this.currentMilli = 0;
  }

  splitClick() {
    return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}:${this.twoDigitsNumber(this.getMilli())}`
  }
}
