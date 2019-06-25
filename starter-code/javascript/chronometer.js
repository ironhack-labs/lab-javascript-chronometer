class Chronometer {
  
  constructor() {
    this.intervalId = 0; 
    this.currentTime = 0;

  }
  
  twoDigitsNumber(numberx) {
    let resultx = numberx > 9 ? "" + numberx: "0" + numberx;
    return resultx;
  }

   startClick() {
     this.intervalId = 
                        setInterval(()=>{
                                    this.currentTime +=10;
                                    //console.log( this.getMinutes() + " : " + this.getSeconds()); 
                                    //console.log("this.currentime: " + this.currentTime);
                                   // console.log("this.miliseconds(): " + this.getMiliSeconds());

                                  }, 10);
    } // ends of start click

   getMinutes() {
     let minutero = Math.floor( this.currentTime / (1000 * 60) );
     return this.twoDigitsNumber(minutero);
    
   }

  getSeconds() {
      let minutero = Math.floor( this.currentTime / (1000 * 60) );
      
      let segunderoEnMiliseconds  = this.currentTime  - minutero * 60 * 1000 ;
      let segundero = Math.floor( segunderoEnMiliseconds / 1000);

    return this.twoDigitsNumber(segundero);
  }
   getMiliSeconds() {
    let minutero = Math.floor( this.currentTime / (1000 * 60) );
      
    let segunderoEnMiliseconds  = this.currentTime  - minutero * 60 * 1000 ;

    let segundero = Math.floor( segunderoEnMiliseconds / 1000);
    let miliSegundero = Math.floor((this.currentTime%1000)/10);

      return this.twoDigitsNumber(miliSegundero);
   }
 

   stopClick() {
    
     console.log("before clear interval: " + this.intervalId);
     console.log("before clear interval: " + this.intervalId);

     console.log( this.getMinutes() + " : " + this.getSeconds()); 
    this.intervalId =  clearInterval(this.intervalId);
    console.log("after clear interval: " + this.intervalId);

   }
   
  resetClick() {

     this.currentTime = 0;
    
   }
   splitClick() {}
}