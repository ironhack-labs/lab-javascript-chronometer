class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;  
  };

  startClick(callback) {
    const intervalId = setInterval(() => {
      this.currentTime += 1
    },1000); 
  }

  getMinutes() {
    let currentMin = Math.trunc(this.currentTime / 60);
    return currentMin;
  };

  getSeconds() {
    let currentSec = (this.currentTime % 60);
    return currentSec;
      
  }
  twoDigitsNumber(time) {
      if (time < 10){
        return `0${time}`
      } else {
        return `${time}`
      }
    }
    
  stopClick() {
      clearInterval(this.intervalId);
    }

  resetClick() {
    return this.currentTime =0;
  }
  splitClick(timeSplit) {
    let timeSplitM = this.twoDigitsNumber(this.getMinutes(timeSplit));
    let timeSplitS = this.twoDigitsNumber(this.getSeconds(timeSplit));
    
    return `${timeSplitM}:${timeSplitS}`;
  
}
}
