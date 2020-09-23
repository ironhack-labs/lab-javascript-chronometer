class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;

  }
  startClick() {
    this.intervalId = setInterval(function(){ 
    this.currentTime++; 
  }, 1000);

 
  }
  getMinutes() {
    const minutes =  Math.floor(this.currentTime/60);
    return minutes;
  }

  getSeconds() {
    const seconds = this.currentTime%60;
    return seconds
  }


  twoDigitsNumber(elem) {
  //  return ('0' + elem).slice(-2)
   
  if (elem<10){
    elem = "0" + elem
  } else{
    elem = elem 
  }
  return elem
  }


 stopClick() {
    clearInterval(this.intervalId)
  }
  resetClick() {
    this.currentTime = 0
    
  }
  splitClick() {
    let splitMinutes = this.twoDigitsNumber(this.getMinutes())
    let splitSeconds = this.twoDigitsNumber(this.getSeconds())
    let splitValue = splitMinutes +`:`+ splitSeconds
    return splitValue
  }
}


