class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;

    this.currentMilliseconds = 0;
    this.intervaMillisecondslId = 0;
  }
  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
    }, 1000);

    this.intervaMillisecondslId = setInterval(() => {
      this.currentMilliseconds++;
      callback();
    }, 10);
  }
  getMinutes() {
    return Math.floor( this.currentTime/60 )
  }
  getSeconds() {
    return this.currentTime % 60;
  }
  getMilliseconds() {
    return this.currentMilliseconds % 100;
  }
  twoDigitsNumber(number) {
    const string = number.toString();
    if ( string.length === 1 ) {
      return `0${string}`;
    } else {
      return string;
    }
  }
  stopClick() {
    clearInterval(this.intervalId);
    clearInterval(this.intervaMillisecondslId);
  }
  resetClick() {
    this.currentTime = 0;
    this.currentMilliseconds = 0;
  }
  splitClick() {
    const min = this.getMinutes();
    const sec = this.getSeconds();
    const mili = this.getMilliseconds();
    return `${this.twoDigitsNumber(min)}:${this.twoDigitsNumber(sec)}:${this.twoDigitsNumber(mili)}`;
  }
}