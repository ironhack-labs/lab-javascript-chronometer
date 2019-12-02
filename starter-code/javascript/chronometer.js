class Chronometer {

  constructor() {
    this.currentTime = 0;
    this.intervalId;
  }

  startClick() {
    this.intervalId = setInterval(function(){
        this.currentTime++;
      }.bind(this), 1000) // por qué el contexto? ver esto. --> si no no supera los tests
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60
  }

  twoDigitsNumber(number) {
    if(number < 10) {
      return '0' + number
    }else{
      return number.toString();
    }
  }

  stopClick() {
    clearInterval(this.intervalId);
  }

  resetClick() {
    this.currentTime = 0;
  }

  splitClick() {

  }

}