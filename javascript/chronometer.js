class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick(callback) {
    setInterval(() => {
      this.currentTime += 1;
    }, 1000);

    // ... your code goes here
  }
  getMinutes() {
    let seconds = this.currentTime
    // ... your code goes here
    if (seconds === 0) {
      return 0
    }
    if (seconds >= 60) {
      if (seconds % 60 != 0) {
        //Devuelve currentTime en minutos. Truncamos porque en este caso es decimal el cociente
        //Los segundos restantes los calculamos en el metodo getSeconds
        return this.currentTime = Math.trunc(seconds / 60)
      } else {
        //Devuelve currentTime en minutos
        return this.currentTime = seconds / 60
      }

    }
  }
  getSeconds() {
    // ... your code goes here
    let seconds = this.currentTime
    if (seconds === 0) {
      return 0
    }
    //Segundos del tiempo combinado (minutos,segundos)
    return seconds % 60
  }
  twoDigitsNumber(value) {
    // ... your code goes here
    if ((String(value)).length < 2) {
      return `0${value}`
    } else { //¿Es necesario el else?
      return value
    }
  }
  stopClick() {
    clearInterval()
  }
  resetClick() {
    this.currentTime = 0
  }
  splitClick() {
    // ... your code goes here
    return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}`
   // return (this.twoDigitsNumber(this.getMinutes())+":"+ this.twoDigitsNumber(this.getSeconds()))
  }

//twoDigitsNumber(getMinutes(minutes))
  //twoDigitsNumber(getSeconds(seconds))
}
const callback = () => {
  this.currentTime += 1;
}
