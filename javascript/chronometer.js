class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick(callback) {
    this.intervalId = setInterval( () => {
      this.currentTime++;
      if (callback){
        callback()
      }
    }, 1000);

  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    if (this.currentTime === 0) return 0;
    return this.currentTime % 60;
  }

  twoDigitsNumber (number){
  if (number ===0 || number <= 9){
       return `0${number}`;
   } return `${number}`
  };

  stopClick() {
    clearInterval(this.intervalId);
  }

  resetClick() {
    this.currentTime = 0;
  }

  splitClick(minutes, seconds) {
    minutes = this.twoDigitsNumber(this.getMinutes());
    seconds = this.twoDigitsNumber(this.getSeconds());
    return `${minutes}:${seconds}`
}

}
