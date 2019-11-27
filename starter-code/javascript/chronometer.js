class Chronometer {
  constructor() {
      this.currentTime = 0;
      this.intervalId;
      this.currentMilis = 0;
      this.instervalMilisId;
  }

  startClick() {
      this.intervalId = setInterval(function() {
          this.currentTime++;
          console.log(this.currentTime);
      }.bind(this), 1000);

      // In order to pass all Jasmine tests I must set another interval for milis
      this.instervalMilisId = setInterval(() => {
          this.currentMilis++;
      }, 10);
  }

  getMinutes() {
      return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
      return Math.floor(this.currentTime % 60);
  }

  getMiliSeconds() {
      return Math.floor(this.currentMilis % 100);
  }

  twoDigitsNumber(value) {
      return (value < 10) ? '0' + value : value.toString();
  }

  stopClick() {
      clearInterval(this.intervalId);
      clearInterval(this.instervalMilisId);
  }

  resetClick() {
      this.currentTime = 0;
      this.currentMilis = 0;
  }

  splitClick() {
      return `${this.twoDigitsNumber(this.getMinutes())} : ${this.twoDigitsNumber(this.getSeconds())} : ${this.twoDigitsNumber(this.getMiliSeconds()) }`;
  }
}