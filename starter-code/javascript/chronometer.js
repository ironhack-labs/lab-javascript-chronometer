class Chronometer {
  constructor() {
    this.currentTime = 0,
    this.intervalId = 0,
    this.miliseconds = 0
  } 

  //suma 1
  startClick() {
    this.intervalId = setInterval(() => {
      this.currentTime++
    }, 1000);
  }

  //devuelve los min 
  getMinutes() {
    return Math.floor((this.currentTime / 60))
  }

  //devuelve los seg
  getSeconds() {
    if(this.currentTime != 0){
      return Math.floor(this.currentTime % 60)
    }
    return this.currentTime
  }

  getMiliseconds(){
    return Math.floor((this.currentTime / 60000) * 1000000)
  }

  twoDigitsNumber(value) {
    value = value.toString();
    if(value.length < 2){
      return  '0' + value
    }
    return value;
  }

  stopClick() {
    clearInterval(this.intervalId)
  }

  resetClick() {
    this.currentTime = 0;
  }

  splitClick() {
    return {
      min: this.twoDigitsNumber(this.getMinutes()),
      sec: this.twoDigitsNumber(this.getSeconds()),
      milSec: this.twoDigitsNumber(this.getMiliseconds())
    }
  }
}