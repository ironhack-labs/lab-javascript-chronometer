class Chronometer {
constructor(){
  this.currentTime = 0 
  this.intervalId = 0
}
startClick(){

  var intervalId = setInterval(()=>{
    this.currentTime += 1
    this.setTime()
  },1000)
  
}

setMinutes(){
  var timeToMin = this.currentTime / 60
  timeToMin = parseInt(timeToMin)
  return timeToMin
 }

 setSeconds(){
  var secLeft = this.currentTime
  secLeft = this.currentTime % 60

  return secLeft
 }



 /*
We are almost done! We need a setTime method that will be called on every interval of the setInterval in our startClick method. 
This function will create a minutes and seconds variable whit their values according the currentTime. 
We should use the setMinutes, setMinutes and twoDigitsNumber methods to do this 😉
 */

twoDigitsNumber(value){
//return value = '00'
if(value < 10){
  return '0' + value.toString()
}
else {
return value.toString()
}
}

setTime(){
  //
  var sec = this.setSeconds()
  var min = this.setMinutes()
  
return this.twoDigitsNumber(sec) + ' ' + this.twoDigitsNumber(min)
}

stopClick(){
  clearInterval(this.intervalId)
}

resetClick(){
  this.currentTime = 0;
}

}
