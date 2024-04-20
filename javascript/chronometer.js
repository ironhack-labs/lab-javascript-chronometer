class Chronometer {
  constructor() {
    // Añadimos dos propiedades:
    this.currentTime = 0; // current time in milliseconds, ponemos this para añadir una propiedad a una clase
    this.intervalId = null;
  }

  start(callback) {
    // Dentro de la función pasada a setInterval
    this.intervalId = setInterval(() => {
      this.currentTime++; // Incrementamos el valor de currentTime en 1
      // console.log('Contador: ' + this.currentTime); // Imprimimos el valor actual del contador, esta linea es opcional
      if (callback) {
        callback(); // Ejecutamos el callback si se proporciona
      }
    }, 1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    let valueString = value.toString();
    if (valueString.length < 2) {
      return '0' + valueString;
    } else {
      return valueString;
    }
  }

  /*OTRA OPCIÓN:
   if (value<10){
    return "0"+value; 
      } else {
        return value.toString();
      }
    */

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.stop();  //Detener el cronómetro si está en ejecución
    this.currentTime = 0; // Restablecer currentTime a 0

    /*
    document.getElementById('minDec').innerHTML = '0'; // Actualizar minDec en el HTML
    document.getElementById('minUni').innerHTML = '0'; // Actualizar minUni en el HTML
    document.getElementById('milDec').innerHTML = '0'; // Actualizar milDec en el HTML
    document.getElementById('milUni').innerHTML = '0'; // Actualizar milUni en el HTML 
     No es necesario actualizar los valores en el HTML, ya que están inicializados en 0, pero si fuese necesario se puede añadir lo siguiente:
    */
  }

  split() {
    return (
      this.computeTwoDigitNumber(this.getMinutes()) +
      ':' +
      this.computeTwoDigitNumber(this.getSeconds())
    ); // Esta linea de código nos dice: oye en el split quiero que me devuelvas los minutos en unidades de dos digitos y los segundos en unidades de dos digitos.
  }

  /* OTRA OPCIÓN:
  split() {
  (Obtener los minutos formateados con dos dígitos):
  let minutes = this.computeTwoDigitNumber(this.getMinutes());
  (Obtener los segundos formateados con dos dígitos)
  let seconds = this.computeTwoDigitNumber(this.getSeconds());
  (Concatenar los minutos y segundos formateados con ":")
  return `${minutes}:${seconds}`;
} */
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
