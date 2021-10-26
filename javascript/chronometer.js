class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
      this.intervalId = setInterval(() => {
        
        if (callback) {
          callback();
        }
        this.currentTime++;
        
      }, 1000)

  }

  getMinutes() {
    if (this.currentTime >= 60) {
      let currentMinute = parseInt(this.currentTime / 60);

      return currentMinute;
    }
    return 0;
  }

  getSeconds() {
    let currentSeconds = this.currentTime;

    currentSeconds =  parseInt(currentSeconds % 60);

    return currentSeconds;
  }

  computeTwoDigitNumber(value) {
    let twoDigitNumber = value.toString();

    if (value < 10) {
      twoDigitNumber = twoDigitNumber.padStart(2, 0);
    }

    return twoDigitNumber;
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let splitTime = "00.00"

    splitTime = (this.computeTwoDigitNumber(this.getMinutes()) + ":" + this.computeTwoDigitNumber(this.getSeconds()));

    return splitTime;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}


/*

Estos son nuestros hitos:

Nuestro cronómetro tendrá una pantalla LCD, donde veremos avanzar los minutos y los segundos.
También tendrá dos botones diferentes que cambiarán su comportamiento dependiendo del estado del cronómetro. 
Por ejemplo, el botón de inicio se convertirá en un botón de parada cuando el cronómetro esté en marcha.
Como extra, vamos a añadir una funcionalidad de división. 
Si os estáis cuestionando la utilidad de esta funcionalidad, pues puede ser útil para recordar cuánto tiempo hemos empleado en cada iteración del ejercicio 😉 
A medida que vayamos terminando una iteración, podremos pulsar el botón de dividir, así sabremos lo difícil o fácil que ha sido, dependiendo del tiempo que hayamos tardado en terminarla.
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Este laboratorio se divide principalmente en dos partes principales:

Parte 1: la lógica (que añadirás al archivo javascript/chronometer.js).
Parte 2: la manipulación del DOM, para que podamos representar visualmente y mostrar la lógica previamente escrita (el código que añadirás en el javascript/index.js).
Tu solución requerirá el uso de los métodos setInterval y clearInterval disponibles globalmente.

setInterval puede ser llamado con una función como primer argumento y un número de milisegundos como segundo argumento. Ejecutará dicha función cada número de milisegundos que le hayas pasado.

Al ser llamado, setInterval devuelve un número que puede ser usado para identificar el intervalo que fue inicializado. 
Ese mismo intervalo puede ser detenido posteriormente ejecutando clearInterval y pasándole el id del intervalo que queremos interrumpir.


----------------- Interacción 1 --------------
walk3(){
  setInterval(() => {
    this.weight -= .1; //this se refiere al método que estamos usando (Walk3) y no al windows gracias al arrow fuction
    //Hacer algo "return o consol.log()"
  }, 1000)
}
walk4(){
  setInterval(function() => {
    this.weight -= .1; //this se refiere al método que estamos usando (Walk3) y no al windows gracias al .bind(this)
    //Hacer algo "return o consol.log()"
  }.bind(this), 1000)
}

*/