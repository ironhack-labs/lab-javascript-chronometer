class Chronometer {
  constructor() {
   this.currentTime = 0;
   this.intervalId = 0;  //waarom is deze 0?
  }
  
  //Verhoogt tijd elke sec met 1. gaat callback krijgen om tijd te printen
  // gebruik setInterval() om de currentTime elke seconde (1000ms) met 1 te verhogen
  startClick(callback){
    this.intervalId = setInterval(()=>{
      this.currentTime++;
      if(callback){
        callback();
      }

    },1000)
  }
// currenTime is in seconden, reken om naar minuten dus currentTime/60
// should return a number without decimals Math.round()
// should return the currentTime in minutes
// vergeet nooit this. !!!
  getMinutes() {
   let minutes = this.currentTime/60;
   return Math.floor(minutes)
  }

// minuten voor scherm zijn uitgerekend maar nu overgebleven seconden showen
// currentTime - (minutes*60)
  getSeconds() {
   let seconds = this.currentTime - this.getMinutes()*60;
   return seconds;
  }

// zorgt ook dat de getallen onder de 0 als dubbel worden weergegeven
  twoDigitsNumber(number) {
    if(number < 10){
      return `0${number}`
    }else{
      return `${number}`;
    }
  }
// stop het lopen van de stopwatch doe dit met clearInterval
  stopClick() {
    clearInterval(this.intervalId) 
  }
// zet stopwatch terug naar 00:00, dus currentTime = 0
  resetClick() {
   return this.currentTime = 0;
  }

  // momentopname van tijd - dus tijd tijdens klik moet geshowed worden
  splitClick() {
   let minSplit = this.twoDigitsNumber(this.getMinutes());
   let secSplit = this.twoDigitsNumber(this.getSeconds());
   return `${minSplit}:${secSplit}`;

  }
}