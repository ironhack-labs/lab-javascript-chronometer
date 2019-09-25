class Chronometer {
  constructor() {
    this.currentTime = 0,
    this.intervalId = 0
  }

  //suma 1
  startClick() {
    const intervalId = setInterval(() => {
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

  twoDigitsNumber(value) {
    value = value.toString();
    if(value.length < 2){
      return  '0' + value
    }
    return value;
  }

  stopClick() {
  }

  resetClick() {
    this.currentTime = 0;
  }

  splitClick() {}
}