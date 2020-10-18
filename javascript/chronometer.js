class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
    this.currentMiliseconds = 0;
    this.currentIdMili = 0;
  }
  startClick(callback) {
    this.intervalId = setInterval(() => this.currentTime++, 1000);
    this.currentIdMili = setInterval(() => this.currentMiliseconds++, 1);
  }
  getMinutes() {
    let minutes = Math.floor(this.currentTime / 60);
    return minutes;
  }
  getSeconds() {
    let seconds = this.currentTime - (this.getMinutes() * 60);
    return seconds
  }

  getMiliseconds() {
    if (this.currentMiliseconds === 1000) {
      this.currentMiliseconds = 0;
    }
      return this.currentMiliseconds.toString();
    
  }
  twoDigitsNumber(number) {
    let stringCreator = number.toString();
    stringCreator = stringCreator.length < 2 ? `0${stringCreator}` : stringCreator;
    return stringCreator
  }
  stopClick() {
    clearInterval(this.intervalId)
    clearInterval(this.currentIdMili)
  }
  resetClick() {
    this.currentTime = 0;
    this.currentMiliseconds = 0;
  }
  splitClick() {
    return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}:${this.getMiliseconds().charAt(0)}${this.getMiliseconds().charAt(1)}`
  }
}
