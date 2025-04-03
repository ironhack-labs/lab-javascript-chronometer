/*chronometer.js: Define la clase Chronometer con la lógica del 
 cronómetro (inicio, parada, reseteo, obtención de tiempo, etc.). */

class Chronometer {
  constructor() {
    this.currentTime = 0; // Guarda el tiempo actual en segundos
    this.currentMilliseconds = 0; // Guarda los milisegundos actuales
    this.intervalId = null; // El ID del intervalo que se usará para detener el cronómetro
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentMilliseconds += 10; // Incrementa los milisegundos
      if (this.currentMilliseconds >= 1000) {
        this.currentTime++; // Incrementa el tiempo en segundos
        this.currentMilliseconds = 0; // Resetea los milisegundos
      }
      if (callback) callback(); //Llama al callback si se pasa (se usa para actualizar la vista)
    }, 10); // El intervalo se ejecuta cada 10ms
  }

  // metodos para luego sacar el split
  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }
  getMilliseconds() {
    return Math.floor((this.currentMilliseconds % 1000) / 10);
  }

  computeTwoDigitNumber(value) {
    return value.toString().padStart(2, '0');
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    return `${this.computeTwoDigitNumber(
      this.getMinutes()
    )}:${this.computeTwoDigitNumber(
      this.getSeconds()
    )}:${this.computeTwoDigitNumber(this.getMilliseconds())}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
