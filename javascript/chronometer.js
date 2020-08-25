class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = 0
  }

  startClick(callback){
    
    const myInterval = setInterval(()=> {
      this.currentTime++
      //console.log(this.currentTime)
    }, 1000)
  }



  getMinutes() {
    if(this.currentTime === 0){
      return 0
    }
    else {
        const minits =  Math.floor(this.currentTime / 60)
      return minits
    }
    
  }
  
  getSeconds() {
    const minits =  Math.floor(this.currentTime / 60) 
    const secs = this.currentTime - minits * 60
    return secs
  }


  twoDigitsNumber() {
  let tempMinits = 0
  let tempSecs = 0
  const minits =  Math.floor(this.currentTime / 60) 
  const secs = this.currentTime - minits * 60
   
  tempMinits = ((minits < 10) ? "0" : "") + minits;
  tempSecs = ((secs < 10) ? "0" : "") + secs;
  
  return tempMinits, tempSecs;
  }

  stopClick() {
    //document.getElementById("btnLeft").onclick = () => {
      clearInterval(this.intervalId)
      
    //} 
  }
  resetClick() {
   //document.querySelector('#btnRight').onclick = () => {
     this.currentTime = 0
   //}
  }
  splitClick() {
    let chronometer = new Chronometer 
    let min = this.currentTime.getMinutes()
    let sec = this.currentTime.getSeconds()
    if (min < 10) {
        console.log(`${0}${min}:${0}${sec}`)
    } else {
        console.log(`${min}:${sec}`)
      }
  }
}
