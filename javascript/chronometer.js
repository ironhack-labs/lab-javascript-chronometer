class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
    }, 1000) //usando setInterval para definir qual o intervalo que vai começar a contar/incrementar currentTime (um segundo)
  }

  getMinutes() {
    return this.currentTime < 60 ? 0 : Math.floor(this.currentTime / 60); //se currentTime for menor que 60, continua zerado o contador de minutos. se não, arredondar o valor e passar pro contador
  }

  getSeconds() {
    return this.currentTime === 0 ? 0 : this.currentTime % 60;
  }

  twoDigitsNumber(num) {
    let valor = JSON.stringify(num); //tá recebendo um argumento num que vai voltar stringificado e seu valor está sendo armazenado na let valor
    return valor.length < 2 ? `0${valor}` : valor; //especificando que se o valor, agora em string, tiver um comprimento menor que 2, vai adicionar um 0 junto
  }

  stopClick() {
    clearInterval(this.intervalId); //limpando o intervalId
  }

  resetClick() {
    this.currentTime = 0; //zerando o currentTime
  }

  splitClick() {
    let minutes = this.twoDigitsNumber(this.getMinutes());
    let seconds = this.twoDigitsNumber(this.getSeconds()); //tratando os dados primeiro e salvando os valores nas variáveis para então exibir no formato adequado
    return `${minutes}:${seconds}`;
  }
}