class Chronometer {
  constructor() {
   this.currentTime = 0;
   this.intervalId = 0;
  }
  startClick(callback) {
    setInterval(() => {
    this.currentTime++;
  },1000);
}

  getMinutes() {
   return Math.floor(this.currentTime / 60)
    }
    
  getSeconds() {
    return this.currentTime % 60
  }


  twoDigitsNumber(num){
    let string = num.toString();
    string = string.length < 2 ? `0${string}` : string;
    return string
  }
//no entiendo el pad start https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/padStart 

  stopClick() {
    clearInterval(this.intervalId)
  }
  resetClick() {
    this.currentTime = 0 
  }
  splitClick() {
  return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}`
}
}
