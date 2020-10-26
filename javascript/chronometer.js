class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.miliSeconds = 0;
    this.intervalId = 0;
    this.intervalMiliSec = 0;
  }
  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
    }, 1000);
    this.intervalMiliSec = setInterval(() => {
      this.miliSeconds++;
    }, 1);
  }
  getMinutes() {
    this.minutes = Math.floor(this.currentTime / 60);
    return Math.floor(this.currentTime / 60);
  }
  getSeconds() {
    if (this.currentTime === 0) {
      return 0;
    }
    return Number(this.currentTime - this.getMinutes() * 60);
  }
  getMilliseconds() {
    return String(this.miliSeconds - this.currentTime * 1000).substr(0, 2);
  }
  twoDigitsNumber(currentTimeDigit) {
    if (currentTimeDigit < 10) {
      return `0${currentTimeDigit}`;
    }
    if (currentTimeDigit < 60) {
      return `${currentTimeDigit}`;
      //deveria ser getSeconds(), mas está com erro ao invocar já que no
      //parametro de teste envio um numero como argumento da twoDigitsNumber
    }
    //somente o if a baixo está correto ao meu ver, pois está fazendo referencia
    // aos metodos e atributos da classe, os de cima deveriam estar assim, mas
    //se mudar não passam no teste
    if (this.currentTime >= 60) {
      if (this.getMinutes() < 10 && this.getSeconds() < 10) {
        return `0${this.getMinutes()}min 0${this.getSeconds()}sec`;
      }
      if (this.getMinutes() < 10 && this.getSeconds() >= 10) {
        return `0${this.getMinutes()}min ${this.getSeconds()}sec`;
      } else {
        return `${this.getMinutes()}min ${this.getSeconds()}sec`;
      }
    }
  }
  stopClick() {
    clearInterval(this.intervalId);
    clearInterval(this.intervalMiliSec);
  }
  resetClick() {
    this.currentTime = 0;
    this.miliSeconds = 0;
  }
  splitClick() {
    if (this.miliSeconds < 100) {
      return `00:00:0${this.getMilliseconds()}`;
    }
    if (this.miliSeconds < 1000) {
      return `00:00:${this.getMilliseconds()}`;
    }
    if (this.currentTime < 10) {
      return `00:0${this.getSeconds()}:${this.getMilliseconds()}`;
    }
    if (this.currentTime < 60) {
      return `00:${this.getSeconds()}:${this.getMilliseconds()}`;
    }
    if (this.currentTime >= 60) {
      if (this.getMinutes() < 10 && this.getSeconds() < 10) {
        return `0${this.getMinutes()}:0${this.getSeconds()}:${this.getMilliseconds()}`;
      }
      if (this.getMinutes() < 10 && this.getSeconds() >= 10) {
        return `0${this.getMinutes()}:${this.getSeconds()}:${this.getMilliseconds()}`;
      } else {
        return `${this.getMinutes()}:${this.getSeconds()}:${this.getMilliseconds()}`;
      }
    }
  }
}
