class Chronometer {
  constructor() {

    this.currentTime = 0;
    this.intervalId;
    this.milisegundos = 0;
  }

  startClick() { this.intervalId = setInterval(() => { 
      this.milisegundos++;

      if(this.milisegundos % 100 == 0){
        this.currentTime++;
        this.milisegundos = 0;
      }
      
    }, 10)
  }

  getMinutes() { return Math.floor(this.currentTime / 60) }

  getSeconds() { return this.currentTime % 60 }

  getMiliseconds () {
    return this.milisegundos
  }

  twoDigitsNumber(digitToFormat) { return (digitToFormat < 10) ? `0${digitToFormat}` : `${digitToFormat}` }

  stopClick() { clearInterval(this.intervalId) }

  resetClick() { this.currentTime = 0; this.milisegundos = 0; }
}
