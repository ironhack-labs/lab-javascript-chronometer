class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick(callback) {
    this.intervalId = setInterval( () => {
      this.currentTime ++;
      callback();
    }, 1000);
  }

  getMinutes() {
    let numberOfMinutes = Math.floor(this.currentTime/60);
    return numberOfMinutes;
  }

  getSeconds() {
    let numberOfSeconds = this.currentTime % 60;
    return numberOfSeconds;
  }

  twoDigitsNumber(n) {
    return n.toString().length === 1 ? "0" + n.toString() : n.toString();
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
    
    if (min < 10 && sec < 10) { return `0${min}:0${sec}` }
    else if (min < 10 && sec > 10) { return `0${min}:${sec}` } 
    else if (min > 10 && sec < 10) { return `${min}:0${sec}` } 
    else { return `${min}:${sec}` };
  }
}

// Miliseconds
class Miliseconds extends Chronometer {
  startClick(callback) {
    this.intervalId = setInterval( () => {
      this.currentTime ++;
      callback();
    }, 10);
  }

  getMiliseconds() {
    let numberOfMiliseconds = this.currentTime % 60;
    return numberOfMiliseconds;
  }

  splitClick() {
    let mili = this.getMiliseconds();
    return mili < 10 ? `:0${mili}` : `:${mili}`;
  }
}
