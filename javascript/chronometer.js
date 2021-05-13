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
        let minutes = Math.trunc(seconds / 60)
        return minutes
      } else {
        //Devuelve currentTime en minutos
        let minutes = seconds / 60
        return minutes
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
    let seconds2 = seconds % 60
    return seconds2
  }
  twoDigitsNumber() {
    // ... your code goes here
   
    if (String(minutes).length < 2) {
      return `0${minutes}`
    }
    if (String(seconds).length < 2) {
      return `0${seconds}`
    }
  }
  stopClick() {
    // ... your code goes here
  }
  resetClick() {
    // ... your code goes here
  }
  splitClick() {
    // ... your code goes here
  }
}
const callback = () => {
  this.currentTime += 1;
}
