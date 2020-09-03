class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
    this.intervalIdMilli = 0;
    this.currentTimeMilli = 0;
  };

  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
    }, 1000);

    this.intervalIdMilli = setInterval(() => {
      this.currentTimeMilli += 1;
    },10);
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

  getMilliSecondes() {
    if(this.intervalIdMilli === 0) {
      return 0;
    }

    let millisecondes = this.currentTimeMilli;
    if(millisecondes%100 === 0) {
      this.currentTimeMilli = 0;
    }

    return millisecondes;
    
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
    clearInterval(this.intervalIdMilli);
  }
  resetClick() {
    this.currentTime = 0;
    this.intervalIdMilli = 0;
  }

  splitClick() {
    let sec = this.getSeconds();
    let min = this.getMinutes();
    let mili = this.getMilliSecondes();

    mili = this.twoDigitsNumber(mili);
    sec = this.twoDigitsNumber(sec);
    min = this.twoDigitsNumber(min);

    return `${min}:${sec}:${mili}`;
    
  }
}
