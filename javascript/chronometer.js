class Chronometer {
  constructor() {
    this.currentTime = 0,
    this.intervalId = null
  }

  start(callback) {
    this.intervalId= setInterval(() => { // Se llama a la propiedad intervalId y se le da la indicacion de que iniciara un intervalo de tiempo a donde se le sumara 1 segudno a currentTime
      this.currentTime++
    }, 1000); //----> Cada segundo sumara 1 
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60); // --> Devuelve los minutos convirtindolos a entero.
  }

  getSeconds() {
    return Math.floor(this.currentTime % 60);//---> devuelve los segundos.
  }

  computeTwoDigitNumber(value) {
    if (value < 10) {
      return `0${value}`
    } else {
      return `${value}`;
    }
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    let minutes = this.computeTwoDigitNumber(this.getMinutes());
    let seconds = this.computeTwoDigitNumber(this.getSeconds());
    return `${minutes}:${seconds}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
