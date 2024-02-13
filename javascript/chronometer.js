class Chronometer {

  constructor() {   
    this.currentTime = 0;
    this.intervalId = null;
    this.milliseconds = 0;
  }

start(callback) {
    this.intervalId = setInterval(() => {

      if (callback) { // si el método start recibe la función callback tenemos que ejecutar la función callback
       callback();
      }

      this.milliseconds++; // cada 10 milisegundos sumamos un número a milliseconds

      if(this.milliseconds === 99){ //si los miliseconds son igual a 99,para que no lleguen a 100
      this.currentTime++; 
      this.milliseconds = 0; 
      }
    }, 10);
  }

  getMinutes() {
    // Dividimos en 60 para que nos den los minutos
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    // Con el % obtenemos los segundos
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    if (value < 10) { // Nos regrega el valor con un 0 adelnate si es < a 10
      return `0${value}`;
      } 
  
      return value.toString(); // Si es > a 10 nos devuelve un string
    }

  stop() {
    clearInterval(this.intervalId); //Con el ClearInterval paramos el contador
    this.intervalId = null;
  }

  reset() {
    this.currentTime = 0; 
    this.milliseconds = 0;
  }

  split() {
    const minutes = this.computeTwoDigitNumber(this.getMinutes()); 
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    const milliseconds = this.computeTwoDigitNumber(this.milliseconds); 
    return `${minutes}:${seconds}:${milliseconds}`; 
  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
