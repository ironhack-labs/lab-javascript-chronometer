class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      callback();
    }, 10);
  }

  getMinutes() {
    let theMinutes = Math.floor(this.currentTime / 6000);
    return theMinutes;
  }

  getSeconds() {
    let theSeconds = Math.floor((this.currentTime - (this.getMinutes() * 6000)) / 100);
    return theSeconds;
  }

  getMilliseconds(){
    let theMiliseconds = Math.floor( (this.currentTime - ((this.getMinutes() * 6000) + (this.getSeconds()*100))));
    return theMiliseconds;
  }

  twoDigitsNumber(parameter) {
    if (parameter < 10) {
      return String(parameter = `0${parameter}`);
    } else if (parameter === 0){
      return String(parameter = `00`);
    } else{
      return String(parameter);
    }
  }

  stopClick() {
    clearInterval(this.intervalId);
  }

  resetClick() {
    this.currentTime = 0;
  }

  splitClick() {
    let min = this.getMinutes();
    let sec = this.getSeconds();
    let milli = this.getMilliseconds();

    if (min < 10 && sec < 10 && milli < 10) {
      return `${0}${min}:${0}${sec}:${0}${milli}`;
    } 
    else if (min < 10 && sec < 10 && milli >= 10) {
      return `${0}${min}:${0}${sec}:${milli}`;
    } 
    else if (min < 10 && sec >= 10 && milli >= 10) {
      return `${0}${min}:${sec}:${milli}`;
    } 
    else if (min >= 10 && sec < 10 && milli < 10) {
      return `${min}:${0}${sec}:${0}${milli}`;
    }
    else if (min >= 10 && sec >= 10 && milli < 10) {
      return `${min}:${sec}:${0}${milli}`;
    }
    else{
      return `${min}:${sec}:${milli}`;
    }
  }
}

