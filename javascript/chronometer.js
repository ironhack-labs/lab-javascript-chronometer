class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }
  //ejecutando una función en un intervalo de 1 segundo
  //incrementará la cantidad de segundos almacenados en la propiedad currentTime en 1.
  start(callback) {
    this.intervalId = setInterval((callback)=> {
    this.currentTime++
    },1000)

  }
  //devolver el número de minutos que han pasado como un número entero.
  getMinutes() {
    
    const minuts = Math.floor(this.currentTime/60)
    return minuts
  }
  //devolver la cantidad de segundos
  getSeconds() {
    const ofSeconds = (this.currentTime%60)
    return ofSeconds
  }
  //condicional 
  computeTwoDigitNumber(value) {
    if (value <10) {
      return (`0${value}`)
    } else {
      return (`${value}`)
    }
  }
  //crear un método que lo detenga.
  stop() {
    clearInterval(this.intervalId)
  }
   //reseteará nuestro cronómetro. 
  reset() {
    return this.currentTime = 0
  }

  split() {
    let minutes = this.computeTwoDigitNumber(this.getMinutes())
    let seconds = this.computeTwoDigitNumber(this.getSeconds())
    return (`${minutes}:${seconds}`)
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
