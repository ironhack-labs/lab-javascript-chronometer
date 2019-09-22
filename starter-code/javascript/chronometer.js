class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  
  startClick() {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      printTime()
    }, 1000)

  }

  getMinutes() {
    return Math.floor(this.currentTime/60);
  }
  
  getSeconds() {
    return this.currentTime - (this.getMinutes()*60)
  }

  getMiliseconds() {
    return this.currentTime - (this.getSeconds()*60)
  }
  
  twoDigitsNumber(numOne) { // Convierte el valor que se le pasa en un string de 2 cifras
    return numOne > 9 ? "" + numOne: "0" + numOne;
  }

  stopClick() {
    clearInterval(this.intervalId)
  }
  
  resetClick() {
    this.stopClick()
    this.currentTime = 0;
    printTime()
    this.startClick()
  }
  
  splitClick() {
    return this.currentTime;
  }
}