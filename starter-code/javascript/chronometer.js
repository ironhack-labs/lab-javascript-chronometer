class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
    this.intervalmil = 0;
    this.milli = 0;
    this.minutes = 0;
    this.seconds = 0;

  }


  startClick() {
    this.intervalId = setInterval(() => {
      this.currentTime++} ,1000);
    this.intervalmil = setInterval(()=>{
      this.milli++},10);
   
  }

  getMinutes() {
    this.minutes = Math.floor(this.currentTime / 60);
    return this.minutes
  }


  getSeconds() {
   this.seconds = this.currentTime - this.getMinutes() * 60;
   return this.seconds;
    }

  getMilliseconds(){
    if(this.milli>99){
      this.milli=0;
    }
    return this.milli;
  }
  
  twoDigitsNumber(nb) {
    if (nb < 10) {
      return "0" + nb;
      
    }
    return nb.toString();
  }

  stopClick() {
    window.clearInterval(this.intervalId);
    window.clearInterval(this.intervalmil);

  }

  resetClick() {
    this.currentTime = 0;
    this.milli = 0;
   
  }

  splitClick() {
    let min = this.twoDigitsNumber(this.getMinutes());
    let sec = this.twoDigitsNumber(this.getSeconds());
    let mil = this.twoDigitsNumber(this.getMilliseconds());
    return `${min}:${sec}:${mil}`;    
  }

}