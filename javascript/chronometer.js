class Chronometer {
  constructor() {
    this.currentTime = 0; // Tiempo en segundos
    this.intervalId = null; // Almacena el ID del intervalo
  }

  // Método para iniciar el cronómetro
  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1; // Incrementa el tiempo en segundos

      // Si se pasa una función callback, se ejecuta
      if (callback) callback();
    }, 1000); // Intervalo de 1 segundo (1000 ms)
  }

  // Método para obtener minutos (redondeados hacia abajo)
  getMinutes() {
    return Math.floor(this.currentTime / 60); // Devuelve los minutos completos
  }

  // Método para hallar segundos del minuto actual
  getSeconds() {
    return this.currentTime % 60; // Devuelve los segundos restantes en el minuto actual
  }

  // Método para formatear números a 2 dígitos
  computeTwoDigitNumber(value) {
    return value < 10 ? `0${value}` : `${value}`; // Si el número es menor a 10, se le agrega un 0 delante
  }

  // Método para parar el cronómetro
  stop() {
    clearInterval(this.intervalId); // Detiene el cronómetro
  }

  // Método para resetear el cronómetro
  reset() {
    this.currentTime = 0; // Resetea el tiempo a 0
  }

  // Método para formatear el tiempo en el formato ("mm:ss")
  split() {
    const minutes = this.getMinutes(); // Obtener minutos
    const seconds = this.getSeconds(); // Obtener segundos

    // Usar computeTwoDigitNumber para formatear minutos y segundos
    return `${this.computeTwoDigitNumber(minutes)}:${this.computeTwoDigitNumber(seconds)}`;
  }
}

// La siguiente sección es necesaria para hacer que los test unitarios funcionen
/* Configuración del entorno. No modifiques el siguiente código. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
