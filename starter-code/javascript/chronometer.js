class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId;
  }
  startClick() {
    this.intervalId = setInterval( () => ++this.currentTime, 1000)
  }
  getMinutes() {
    const minutes = Math.floor(this.currentTime / 60);
    return minutes; 
  }
  getSeconds() {
    const seconds = this.currentTime % 60 ;
    return seconds;
  }
  twoDigitsNumber( elm ) {
    if ( elm < 10 ) return `0${elm}`
    return `${elm}`
  }
  stopClick() {
    clearInterval(this.intervalId)
  }
  resetClick() {
    this.currentTime = 0;
  }
  // splitClick() {}
}