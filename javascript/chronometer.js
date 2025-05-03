class Chronometer {
  constructor() {
  this.currentTime = 0;
  this.intervalId = null
}

  start(callback) {
    this.intervalId = setInterval(() => {// se usa función flecha para referenciar al chronometer
      this.currentTime += 1;
      if (callback){ 
        callback();
      }
      }, 1000); 
  }

  getMinutes() { //math floor redondea el valor de la opereción
    return Math.floor(this.currentTime /60); // extraer minutos enteros
  }

  getSeconds() { // calcular segundos restantes de la función anterior
    return Math.floor (this.currentTime%60);
  }

  computeTwoDigitNumber(value) {
    return("0" + value).slice(-2) // esta función devuelve 0 + el parametro y el slice lo que hace es que siempre devuelva dos digitos
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
    this.intervalId= null;
  }

  split() { // crear el diseño mm:ss creando dos contaste donde se llama los minutos y segundo previamente creados. Para combinarlos y devolverlos en forma de cadena
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    return `${minutes}:${seconds}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
