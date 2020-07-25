class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick(callback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      this.currentTime += 1; 
    },1000)
  }
  
  getMinutes() {
    // ... your code goes here
    let minutes = this.currentTime / 60;
    return Math.floor(minutes);
  }
  getSeconds() {
    // ... your code goes here
    let minutes = this.currentTime / 60;
    minutes =  Math.floor(minutes); 

    let seconds =  this.currentTime - (minutes * 60);
    return seconds;
  }

  twoDigitsNumber(value) {
    let strRet = '';

    if (value.length > 1 ){
      strRet += String(value);
    }else {
      strRet += '0'+String(value);
    }

    return strRet;
  }
  stopClick() {
    // ... your code goes here
    clearInterval(this.intervalId);
  }
  resetClick() {
    // ... your code goes here
    this.currentTime = 0;
  }
  splitClick(minutos, segundos) {
    // ... your code goes here
    if (! minutos ){
      minutos = 0;
    }

    if (! segundos ){
      segundos = 0;
    }

    let strRetorno = '';

    strRetorno = this.twoDigitsNumber(minutos) + ':' + this.twoDigitsNumber(segundos)

    return strRetorno;

  }
}
