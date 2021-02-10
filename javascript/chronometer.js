class Chronometer {

  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
    this.msCurrentTime = 0;
    this.msIntervalId = 0;
  }
    
  startClick() {
    this.intervalId = setInterval ( () => {
      this.currentTime++;
      this.getMinutes();
      this.getSeconds();
      this.currentSecondsTwoDigits = this.twoDigitsNumber(this.seconds);
      this.currentMinutesTwoDigits = this.twoDigitsNumber(this.minutes);
      printTime(this.currentMinutesTwoDigits, this.currentSecondsTwoDigits);
    }, 1000);

    this.msIntervalId = setInterval ( () => {
      this.msCurrentTime++;
      this.getMilliSeconds()
      printMilliseconds(this.milliTwoDigits);
      console.log(this.milliTwoDigits);
    }, 1);

  }

  getMilliSeconds() {
    if (this.currentTime < 1) {
    this.milliSeconds = this.msCurrentTime;
    }

    if (this.currentTime >= 1) {
      this.milliSeconds = this.msCurrentTime % 1000;
    }
    this.centiSeconds = Math.floor(this.milliSeconds/10);
    this.centiTwoDigits = `${this.centiSeconds.toString()[0]}${this.centiSeconds.toString()[1]}`;
    if (this.milliSeconds < 10)
      this.milliTwoDigits = `0${this.milliSeconds}`
    if (this.milliSeconds > 10 && this.milliSeconds < 100) {
      this.milliTwoDigits = `${this.milliSeconds.toString()[0]}${this.milliSeconds.toString()[1]}`;
    }
    if (this.milliSeconds >= 100) {
    this.milliTwoDigits = `${this.milliSeconds.toString()[1]}${this.milliSeconds.toString()[2]}`;
    }
  }

  getMinutes() {
    if (this.currentTime < 60) {
      this.minutes = 0;
      return this.minutes;
    } 

    if (this.currentTime >= 60) {
      this.minutes = (this.currentTime - (this.currentTime % 60))/60;
      return this.minutes;
    }
  }
  getSeconds() {
    if (this.currentTime === 0) {
      this.seconds = 0;
      return this.seconds;
    }
    if (this.currentTime % 60 === 0) {
      this.seconds = 0;
      return this.seconds;
    }
    if (this.currentTime % 60 !== 0) {
      this.seconds = this.currentTime%60
      return this.seconds;
    }
  }

  twoDigitsNumber(number) {
    if (number < 10) {
      return `0${number}`;
    } else {
      return number.toString();
    }
  }

  stopClick() {
    return clearInterval(this.intervalId) + clearInterval(this.msIntervalId);
  }

  resetClick() {
    this.currentTime = 0;
    this.minutes = 0;
    this.seconds = 0;
    printTime(`00`, `00`);
    printMilliseconds(`00`);
  }

  splitClick() {
    let minutes = this.getMinutes();
    let seconds = this.getSeconds();
    if (minutes === 0 && seconds === 0) {
       return `00:00`;
    }
    if (minutes < 10 && seconds < 10) {
       return `${0}${minutes}:${0}${seconds}`;
    }
    if (minutes < 10 && seconds > 9) {
      return `${0}${minutes}:${seconds}`;
    }
    if (minutes > 9 && seconds < 10) {
      return `${minutes}:${0}${seconds}`;
    }
    if (minutes > 10 && seconds > 10) {
      return `${minutes}:${seconds}`;
    }
  };
}
