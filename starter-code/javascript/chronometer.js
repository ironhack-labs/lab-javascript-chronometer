// Constructor
class Chronometer {
  constructor (){
    this.currentTime = 0 ;
    this.intervalId=0;
    this.seconds = '00';
    this.minutes = '00';
    this.milliseconds = '00'

  }



startClick (){
  this.intervalId =  setInterval(()=> {
    this.currentTime += 1;
    this.setTime()

  },100)


};

setMinutes (){
  return Math.floor(this.currentTime/60/10)
  
};

setSeconds (){
  return this.currentTime/10 - this.setMinutes() * 60
  
};

setMilliseconds (){
return setInterval(()=>{
  
})

};


twoDigitsNumber (time){
  if  (time < 10) {
    return "0" + time;
  }

  return time.toString();  
};

setTime (){
  this.minutes = this.twoDigitsNumber(this.setMinutes())
  this.seconds = this.twoDigitsNumber(this.setSeconds())
  // return minutes +":"+ seconds

};


stopClick (){
  clearInterval(this.intervalId)
  
};

resetClick (){

  this.currentTime = 0;
  this.minutes = "00";
  this.seconds = "00";
  secUni.innerText = 0;
  secDec.innerText = 0;
  minUni.innerText = 0;
  minDec.innerText = 0;


};

splitClick (){

};

}