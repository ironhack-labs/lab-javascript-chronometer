class Chronometer {

  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick(callback) {
    this.currentTime = 0;
    this.intervalId = setInterval(() =>{ 
      this.currentTime += 1; 
    }, 1000);

  }

  getMinutes() {
   let minutes;
    if (this.currentTime === 0){
      return 0;
    } else {
      minutes = Math.trunc(this.currentTime / 60)
      return minutes
    }
  }

  getSeconds() {
    let seconds;
    if (this.currentTime === 0){
      return 0;
    } else { 
      seconds = this.currentTime % 60
    }
    return seconds;
  }
 
    twoDigitsNumber(number) {

    if (number < 10){
      number = `0${number}`
    } else {
      number = number.toString()
    }
    return number;
  }
  
  stopClick() {
    clearInterval(this.intervalId);
  }

  resetClick() {
    this.currentTime = 0
  }

  splitClick() {
    let digitMinutes = this.twoDigitsNumber(this.getMinutes());
    let digitSeconds = this.twoDigitsNumber(this.getSeconds());
    return `${digitMinutes}:${digitSeconds}`;
  }

}
