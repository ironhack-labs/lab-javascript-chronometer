class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  };

  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
    }, 1000);
  }
  getMinutes() {
    if(this.intervalId === 0) {
      return 0;
    }
    let minutes = Math.floor(this.currentTime / 60);
    //console.log('minutes',minutes +' '+ typeof minutes);
    if(minutes%60 === 0) {
      minutes = 0; 
    }
    
    return minutes;
  }
  getSeconds() {
    if (this.intervalId === 0) {
      return 0;
    }
    var minutes = Math.floor(this.currentTime / 60);
    var remainingSeconds = this.currentTime - (minutes * 60);
    return remainingSeconds;
  }
  twoDigitsNumber(value) {
    let res;
    if(value < 10){
      value = "0"+value;
    }
    res = String(value);
    return res;
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    let sec = this.getSeconds();
    let min = this.getMinutes();

    sec = this.twoDigitsNumber(sec);
    min = this.twoDigitsNumber(min);

    return `${min}:${sec}`;
    
  }
}
