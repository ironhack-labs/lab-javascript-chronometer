class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    setInterval(() => {
      this.currentTime += 1;
  }, 1000) 
  }
  getMinutes() {

    return Math.floor(this.currentTime / 60)
  }
  getSeconds() {

    return Math.floor(this.currentTime - this.getMinutes(this.currentTime) * 60)
    // VOLTAR PARA ESTUDAR!!!!!
  }
  twoDigitsNumber(number) {
    let decimais = Math.floor(number / 10)
    let unidade = Math.floor(number % 10)
    return `${decimais}${unidade}`
    // VOLTAR 
  }
  stopClick() {
    
    
    // ... your code goes here
  }
  resetClick() {
    // ... your code goes here
  }
  splitClick() {
    // ... your code goes here
  }
}
