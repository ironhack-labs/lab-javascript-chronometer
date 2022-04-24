class Chronometer {
  constructor() {
  this.currentTime = 0
  this.intervalId = null
  }

  //incrementa la propiedad currentTime de 1 en 1 cada 1000 milisegundos 
  start(callback){

    if (callback){
      callback
      this.intervalId = setInterval(()=> {
      this.currentTime++}, 1000)
    } else {
      this.intervalId = setInterval(()=> {
      this.currentTime++}, 1000)
    }
    
  }

  //retorna el tiempo acumulado en minutos
  getMinutes() {
    return Math.floor(this.currentTime / 60)
  }

  //retorna los segundos sobrados de los minutos
  getSeconds() {
    return this.currentTime % 60
  }

  //convierte el tiempo en string y si es menor a 10 le agrega un 0 inicial
  computeTwoDigitNumber(value) {
    value < 10 ? value = `0${value}` : value = `${value}`
    return value
  }

  //detiene el tiempo utilizando intervalId
  stop() {
    clearInterval(this.intervalId)
  }

  //regresa el tiempo a 0
  reset() {
    this.currentTime = 0

  }

  //retorna un string presentado el tiempo en en 2 digitos de minutos y 2 digitos de segundos -> 00:00
  split() {
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
