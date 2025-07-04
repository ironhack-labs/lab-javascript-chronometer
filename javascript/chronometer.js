class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (callback) {
        callback(); // cada 10 ms se ejecuta el callback (la función que le pasemos)
      }
    }, 10); // Cada 10 ms incrementa el cronómetro (el update)
  }

  getMinutes() {
    return Math.floor(this.currentTime / 6000); // 6000 ms = 1 minuto
  }

  getSeconds() {
    return Math.floor((this.currentTime / 100) % 60); // 100 ms = 1 segundo
  }

  getMilliseconds() {
    return this.currentTime % 100; // El resto son los ms
  }

  computeTwoDigitNumber(value) {
    return value.toString().padStart(2, '0'); // Asegura que siempre tenga 2 dígitos (1 = 01, ...)
  }

  reset() {
    this.currentTime = 0; // Reinicia el cronómetro a 0
  }

  stop() {
    clearInterval(this.intervalId);
  }

  split() {
    return `${this.computeTwoDigitNumber(this.getMinutes())}
    :${this.computeTwoDigitNumber(this.getSeconds())}
    :${this.computeTwoDigitNumber(this.getMilliseconds())}`;
    // Es extraña la línea pero devolvemos un string con el formato MM:SS:MS, siempre en el formate de 2 dígitos
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
