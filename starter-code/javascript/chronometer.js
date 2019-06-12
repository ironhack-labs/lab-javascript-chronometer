  class Chronometer {
  constructor() {
  	this.currentTime = 0
    this.intervalId 
    this.mili = 0
    this.intervalId2
  }
  startClick= () => {
    this.intervalId=setInterval(()=>{
      this.currentTime++
    },1000)
    this.intervalId2=setInterval(()=>{
      this.mili++
      if (this.mili >99){
        this.mili=0
      }
    },10)
  }
  getMinutes= ()=>{
    return Math.floor(this.currentTime/60).toString()
  }
  getSeconds= () => {
    return (this.currentTime - (60*Math.floor(this.currentTime/60))).toString()
  }
  getmili = () =>{
    return (this.mili).toString()
  }
  twoDigitsNumber=(value) => {
    if(value.length==1){
      return ("0"+value)
    }else{
      return value
    }
  }
  resetClick=()=> {
    this.currentTime=0
  }
  // splitClick() {}

   stopClick=() =>{
     clearInterval(this.intervalId)
     clearInterval(this.intervalId2)
   }
}