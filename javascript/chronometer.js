
class Chronometer {
  constructor() {
    this. currentTime = 0;
    this.intervalId = 0;
  }


  startClick(callback) {
    setInterval (() => {
      this.currentTime +=1;}, 1000);
  }

  getMinutes() {
    if (this.currentTime!= 0) {
      return (Math.floor(this.currentTime/60))
    } else {return (0)}
    
  }

  getSeconds() {
    if (this.currentTime!= 0) {

      return (this.currentTime%60)
    } else {return (0)}
  }

  twoDigitsNumber() {

    if (this.currentTime < 10) {
      return `0${this.currentTime}`
    }

  }

  stopClick() {
    clearInterval(this.intervalId);
  }


  resetClick() {
    this. currentTime = 0;

  }

  splitClick() {
    let min= this.getMinutes()
    let sec= this.getSeconds()

      return (`${this.twoDigitsNumber(min)}:${this.twoDigitsNumber(sec)}`)
    
  }

}