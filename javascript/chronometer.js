class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick() {
    setInterval(() => {
      this.currentTime += 1;
    },1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
  return this.currentTime % 60;
  }

  twoDigitsNumber(number) {
    let returnString = '';

    if(number < 10) {
      returnString += '0';
    }
    returnString += number;
    return returnString;
  }

  stopClick() {
    clearInterval(this.intervalIdId);
  }

  resetClick() {
    this.currentTime = 0;
  }

  splitClick() {
    const min = this.twoDigitsNumber(this.getMinutes());
    const sec = this.twoDigitsNumber(this.getSeconds());
    return `${min}:${sec}`;
    // pode ser assim tambem return min + ':'+ sec ;
  }
}
