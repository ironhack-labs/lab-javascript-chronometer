
class Chronometer  {
constructor(){
    this.currentTime = 0; 
    this.intervalId = 0;
}
startClick(){
   function myTimer(){
       this.currentTime++;
       this.setTime();
   }
   setInterval(myTimer.bind(this), 1000);
}

setMinutes(){
    return Math.floor(this.currentTime/60);
}

setSeconds(){
    return Math.floor(this.currentTime%60);
}

twoDigitsNumber(number){
    if (number<10){
        return "0" + number;
    }
    return number.toString();
}

setTime() {
    let minutes = this.twoDigitsNumber(this.setMinutes);
    let seconds = this.twoDigitsNumber(this.setSeconds);
    
    }

stopClick (){
    clearInterval(this.intervalId);
}

resetClick (){
    clearInterval(this.myTimer);
}


}