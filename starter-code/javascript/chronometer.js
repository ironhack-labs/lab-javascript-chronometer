class Chronometer {

  constructor() {
  		this.currentTime =0;
  		this.intervalId = 0;
  }



 startClick() {
 	
 		this.intervalId = setInterval(()=>this.currentTime++,1000)   
 	}
 	
  getMinutes() {

  	if(this.currentTime> 60){
  		this.currentTime = Math.floor(this.currentTime/60);
  		let minutes = this.currentTime
  		 return minutes
  	}else{ return 0 }

  	}
  	
  
  getSeconds() {
  	let seconds = this.currentTime;
  		if(seconds %=60){
  			this.currentTime %= 60
  			return seconds
  		}else{
  			  	return 0
  		}


  }
 twoDigitsNumber(number) {
let string = number.toString();
if(string.length<2){
return '0'+string
}else{
	return "holovorgo"
}	
 }



  stopClick() {
  	clearInterval(this.intervalId)
  }
  resetClick() {
  	return this.currentTime =0;
  }
  splitClick() {
  	let result = this.twoDigitsNumber(this.getMinutes)+':'+this.twoDigitsNumber(this.getSeconds)
  	return result
  }
}

