class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  //startclick com callback função de ++ em time retornando callback
  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (callback) {
       callback();
      }
    }, 1000);// miliseconds
    
  }
  // Transformando miliseconds em minutos
  getMinutes() {
    const minutes = Math.floor(this.currentTime / 60);
    return minutes;
  }
  // transformando miliseconds em seconds
  getSeconds() {
    const seconds = Math.floor(this.currentTime % 60);
    return seconds;
  }
  // adicionando 0 a esquerda
  twoDigitsNumber(value) {
    if (value < 10) return `0${value}`;
    return `${value}`;
  }
  // Stop click puxando intervalID
  stopClick() {
    clearInterval(this.intervalId)
  }
  //Reset click
  resetClick() {
    this.currentTime = 0

  }
  //split click puxando os seconds e minutes
  splitClick() {
    let min = this.twoDigitsNumber(this.getMinutes())
    let sec = this.twoDigitsNumber(this.getSeconds())
    return `${min}:${sec}`
  }
}
