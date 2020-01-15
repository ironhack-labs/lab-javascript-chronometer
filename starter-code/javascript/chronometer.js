class Chronometer {

  constructor() {
  		this.currentTime =0;
  		this.intervalId = 0;
  }


 startClick() {
this.intervalId = setInterval(()=>{
	this.currentTime++
},1000)

 		}

 					
 	
 	
  getMinutes() {

return Math.floor(this.currentTime/60) 

  	}
  	
  

getSeconds() {
return this.currentTime < 60 ? this.currentTime : this.currentTime - (this.getMinutes()*60)



   }
 twoDigitsNumber(number) {

let string = number.toString();
	if(string.length<2){
		return '0'+string
		}else{return string
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

