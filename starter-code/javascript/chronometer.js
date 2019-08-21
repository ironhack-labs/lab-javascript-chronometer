let currentTime 
let intervalId
function Chronometer (){
  
    this.currentTime = currentTime;
    currentTime = 0;
    this.intervalId = intervalId;


   this.startClick =  () => {
       this.intervalId = setInterval( ()=> {
       this.currentTime +=1
       console.log(currentTime)
     },1000);
   }

   this.getMinutes =() => {
     return parseInt(this.currentTime / 60)
   }
    this.getSeconds = () => {
      return this.currentTime % 60
    }

    this.twoDigitsNumber = (value) => {
      let str = value.toString()
      if (str.length < 2) {
        return `0${value}` 
      } else  {
        return str
      }
    }
    this.resetClick = () => {
      this.currentTime = 0
    }
    this.stopClick = () => {
      clearInterval(this.intervalId)
    }
   }

  
