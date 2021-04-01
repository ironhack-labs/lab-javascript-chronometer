class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  
  startClick(callback) {
    this.intervalId = setInterval(() => {
     this.currentTime++;
    //  console.log(this.currentTime);
      if (callback) {
        return callback();
      };
    }, 1000);
  }

  getMinutes() {
    let minutes = Math.floor(this.currentTime / 60);
    return minutes;
  }
  
  getSeconds() {
    if(this.currentTime < 60) {
      return this.currentTime;
    } else {
      return this.currentTime % 60;
    }
  }
  twoDigitsNumber(numb) {
    if(numb < 10) {
      return `0${numb}`;
    } else {
      return `${numb}`;
    }  
  }

  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }

  splitClick() {
    const minute = this.twoDigitsNumber(this.getMinutes());
    const second = this.twoDigitsNumber(this.getSeconds());

    return `${minute}:${second}`;
  }
}
