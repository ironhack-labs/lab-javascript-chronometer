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

      if(this.milliseconds === 99){ //si los miliseconds son igual a 99 (pq no queremos que los milliseconds lleguen a 100);
      this.currentTime++; // mientras la condición suceda sumamos un número a currentTime
      this.milliseconds = 0; // reseteamos los milliseconds para que se produzca todo el rato un bucle.
      }
    }, 10);
  }


  getMinutes() {
    return Math.floor(this.currentTime / 60); // dividimos el currentTime entre 60 para que nos de los minutos y con Math.Floor redondeamos el resultado para que nos de un número exacto. 
  }


  getSeconds() {
    return this.currentTime % 60; // utilizamos el módulo para que de currentTime al dividirlo entre sesenta nos de el resto, esto nos daría el número de segundos que hay en ese momento entre un minuto y otro. 
  }


  computeTwoDigitNumber(value) {
    if (value < 10) { // si el valor es menor de 10, es decir, sólo tiene un dígito, le estamos indicando que nos devuelva ese dígito con un 0 delante. 
    return `0${value}`;
    } 
    return value.toString(); // si es 10 o mayor, es decir, tiene más de un dígito, le estamos indicando que nos devuelva ese número convertido a string. 
  }


  stop() {
    clearInterval(this.intervalId); // estamos parando el contador haciendo que el intervalo que sumaba segundos deje de producirse.
  }

  reset() {
    this.currentTime = 0; // hemos reseteado el currentTime.
    this.milliseconds = 0;
  }

  split() {
    const minutes = this.computeTwoDigitNumber(this.getMinutes()); // asignamos a una constante la función computeTwoDigitNumber y le pasamos como parámetro los minutos para que nos devuelva un string con 2 cifras
    const seconds = this.computeTwoDigitNumber(this.getSeconds()); // igual que arriba
    const milliseconds = this.computeTwoDigitNumber(this.milliseconds); // igual que arriba
    return `${minutes}:${seconds}`; // interpolamos las tres constantes con 2 puntos entre medias. "00:00:00"
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
