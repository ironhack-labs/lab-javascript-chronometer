class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    this.intervalId = setInterval( () => {
      return (this.currentTime ++);
    },1000);

  }

  getMinutes() {
    let minutes = this.currentTime;
    return Math.floor(this.currentTime / 60);

  }

  getSeconds() {
    return this.currentTime - this.getMinutes() * 60;
  }


  twoDigitsNumber(number) {
    if (number === 0) {
      return "0" + number;
    } 
    else if (number < 10) {
      return "0" + number;
    
    }  else if (number > 10) {
      return "" + number;
    }
  
  }

  stopClick() {
    clearInterval(this.intervalId)
  }


  resetClick() {
    this.currentTime = 0;
  }

  splitClick() {
    let min = this.getMinutes();
    let sec = this.getSeconds();

    // if (min < 10 && sec < 10) {
    //   return "0" + min + ":" + "0" + sec;
    // }
    // else if (min >= 10 && sec < 10) {
    //   return min + ":" + "0" + sec;
    // }
    // else if (min < 10 && sec >= 10) {
    //   return "0" + min + ":" + sec;
    // }

    // else {
    //   return min + ":" + sec;
    // }

    return this.twoDigitsNumber(min) + ":" + this.twoDigitsNumber(sec);

  }

}
