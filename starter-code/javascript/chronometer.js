class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId
  }
  startClick() {
    const increase = ()=>{
      this.currentTime += 1
    }
    this.intervalId = setInterval(()=>{
      increase()
      printTime()
      console.log(this.currentTime)
    }, 1000)

  }
  getMinutes() {
    let minutes = this.currentTime / 60
    if (minutes <= 1){
      return Math.floor(minutes)
    }
    else {
      return Math.floor(minutes)
    }
  }
  getSeconds() {
    let seconds = this.currentTime
    let minutes = this.currentTime / 60
    if (minutes <= 1){
      return seconds
    }
    else {
      return (seconds - Math.floor(minutes)*60)
    }
  }
  twoDigitsNumber(num) {
    var twoLength = ''
    var numStr = num.toString()
   if (numStr.length == 1){
     let str = num.toString()
      twoLength += "0"
      twoLength += numStr
    return twoLength
   }
   else {
    twoLength = numStr
    return twoLength
   }
  }
  stopClick() {
    clearInterval(this.intervalId)
  }

  resetClick() {
    this.currentTime = 0
  }
  // splitClick() {}
}

window.onload = function(){
 let buttonStart = document.getElementById("btnLeft")
 //Boton Start
 let minuteDec = document.getElementById("minDec")
 let minuteUni = document.getElementById("minUni")
 let secondsDec = document.getElementById("secDec")
 let secondsUni = document.getElementById("secUni")
 buttonStart.onclick = () => {
   if (buttonStart.innerHTML == "START"){
    chronometer.startClick()
    
    buttonStart.classList.remove("start")
    buttonStart.classList.add("stop")
    buttonStart.innerHTML = "STOP"
    //printSeconds()
    //printMinutes()
  }
  else {
    chronometer.stopClick()
    buttonStart.classList.remove("stop")
    buttonStart.classList.add("start")
    buttonStart.innerHTML = "START"
  }

}
let buttonRight = document.getElementById("btnRight")
//Boton Start
buttonRight.onclick = () => {
  if (buttonRight.innerHTML == "RESET"){
    chronometer.resetClick()
    buttonRight.classList.remove("reset")
    buttonRight.classList.add("split")
    buttonRight.innerHTML = "SPLIT"
    //minuteDec.innerHTML = 0
    //minuteUni.innerHTML = 0
    //secondsDec.innerHTML = 0
    //secondsUni.innerHTML = 0
  }
  else {
    
    buttonRight.classList.remove("split")
    buttonRight.classList.add("reset")
    buttonRight.innerHTML = "RESET"
  }

}
}