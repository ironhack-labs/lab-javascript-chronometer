class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null

    this.miliIntervalID = null
    this.miliCurrentTime = 0
    this.miliseconds = 0
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      this.setTime()

      printTime(this.minutes, this.seconds)

      if (callback) {
        callback();
      }
    }, 1000);

    // Miliseconds interval
    this.miliIntervalID = setInterval(() => {
      // Cuenta en milisegundos
      this.miliCurrentTime++
      // Valor de milisegundos en string y con 0 delante con nuestra función que lo transforma
      this.miliseconds = this.computeTwoDigitNumber(this.miliCurrentTime)
      // Resetear a 00 la cuenta al llegar a 99
      if (this.miliseconds === "99") this.milliseconds = 0; 
      printMilliseconds(this.miliseconds)
    }, 10)
    
  }

  // Transformar el tiempo en minutos
  getMinutes() {
    return Math.floor(this.currentTime / 60)
  }

  // Transformar el tiempo en segundos
  getSeconds() {
    return this.currentTime % 60;
  }

  // Añadir un cero al delante del tiempo y quedarse con los dos últimos elementos del string
  computeTwoDigitNumber(value) {
    const finalNumber = '0' + value.toString();
    return finalNumber.slice(-2)
  }

  // Crear los valores finales en string para cada uno de los elementos minutos o segundos
  setTime() {
    this.minutes = this.computeTwoDigitNumber(this.getMinutes())
    this.seconds = this.computeTwoDigitNumber(this.getSeconds())
  }

  // Pausar el paso del tiempo
  stop() {
    clearInterval(this.intervalId);
    clearInterval(this.miliIntervalID);
  }

  // Resetear el tiempo
  reset() {
    this.currentTime = 0
    this.miliCurrentTime = 0
    printTime("00", "00")
    printMilliseconds("00")
  }

  // Transformar el tiempo en un string compuesto para mostrar el tiempo en un solo array
  split() {
    let time = `${this.minutes} : ${this.seconds} : ${this.miliseconds}`
    printSplit(time)
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
