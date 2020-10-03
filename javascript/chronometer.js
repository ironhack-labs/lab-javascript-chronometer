class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    this.intervalId = setInterval(() => this.currentTime++, 1000);
  }
  getMinutes() {
    return Math.floor( this.currentTime/60 )
  }
  getSeconds() {
    return this.currentTime % 60;
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
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    const min = this.getMinutes();
    const sec = this.getSeconds();
    return `${this.twoDigitsNumber(min)}:${this.twoDigitsNumber(sec)}`;
  }
}

/*class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    this.intervalId = setInterval(() => this.currentTime++, 1);
  }
  getMinutes() {
    return Math.floor( this.currentTime/1000/60 );
  }
  getSeconds() {
    return ( this.currentTime/1000 ) % 60;
  }
  getMilliseconds() {
    return this.currentTime % 1000;
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
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    const min = this.getMinutes();
    const sec = this.getSeconds();
    return `${this.twoDigitsNumber(min)}:${this.twoDigitsNumber(sec)}`;
  }
}*/