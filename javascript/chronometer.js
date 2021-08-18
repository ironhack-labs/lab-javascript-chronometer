class Chronometer {
  constructor() {
    this.currentTime = 0; //Seconds
     this.intervalId = null;
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 10;// cambiamos a +10 porque estamos en milisegundos
      callback();
    }, 10); // para que se actualice a milisegundos y no cada segundo
  }

  getMinutes() {
    return Math.floor(this.currentTime / (60*1000));
  }

  getSeconds() {
    return Math.floor((this.currentTime % (60*1000)) / 1000); // para calcular los segundos de los millis 
  }

  // Creamos la función método para conseguir los millisegundos
  getMilliseconds() {
    return this.currentTime % 1000 ; // Para que cada 1000 salte
  }

  computeTwoDigitNumber(value) {
    return value < 10 ? `0${value}` : '' + value;
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let strMinutes = this.computeTwoDigitNumber(this.getMinutes());
    let strSeconds = this.computeTwoDigitNumber(this.getSeconds());
    let strMilliseconds = this.computeTwoDigitNumber(this.getMilliseconds());

    return `${strMinutes}:${strSeconds}:${strMilliseconds[0]}${strMilliseconds[1]} `; // para que solo muestre 2 cifras de los millis
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
