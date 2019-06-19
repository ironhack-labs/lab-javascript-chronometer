class Chronometer {
  // classe construtora
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0; // guarda o currentTime quando clica no split
  }
  // incrementa o valor de currentTime, a cada 10ms. Atribui esse valor ao intervalId
  startClick() {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
    }, 10);
    return this.intervalId
  }
  // transforma milisegundos em minutos
  getMinutes() {
    return Math.floor((this.currentTime / 100) / 60);
  }
  // transforma milisegundos em segundos. % 60 faz ele zerar a cada 60s
  getSeconds() {
    return Math.floor((this.currentTime / 100) % 60);
  }
  // transforma em string (toString) e adiciona um '0' no começo até a string ter 2 caracteres (padStart)
  twoDigitsNumber(currentTime) {
    return currentTime.toString().padStart(2, '0');
  }
  // pega os milisegundos e zera quando chega a 100
  getMiliseconds() {
    return this.currentTime % 100;
  }
  // quebra o setInterval e guarda o valor de currentTime no intervalId
  stopClick() {
    clearInterval(this.intervalId);
    this.intervalId = this.currentTime;
  }
  // define o valor de currentTime para 0
  resetClick() {
    this.currentTime = 0;
  }
}


