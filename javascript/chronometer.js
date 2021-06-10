
//add the logic here!


//"The constructor method shouldn't expect any arguments.
// It should initialize two properties of the chronometer:
//currentTime, which should start of as the number 0.
// intervalId, which should start as null."

class Chronometer {
  constructor() {    
   

    this.currentTime=0;
    this.intervalId = null;  //store intervalID here to access it outside func as well

//store my other variables here to access them anywhere inside class???
  }


  start((callback)=> {   //arrow function--> "this" refers to the Chronometer class
//name argument v start ("callback") nicht ändern.

 
this.intervalId = setInterval(()=>{

  if (callback) {     //check if callback was passed (if-condition), if yes- execute it
    
    callback();
  
  
  }
  this.currentTime++;  //...else ignore it and just do this
}, 1000)   //interval = 1 sec = 1000 millisecs
  
}




//Method getMinutes

  getMinutes() {    //NO ARGUMENT
    // ... your code goes here

   let passedMinutes= this.currentTime/60;

   //rounding the number to integer with toFixed()
   
  let myIntMinutes= Number(passedMinutes.toFixed());   //store int number in variable just in case
  


return myIntMinutes;     ////function scope???? access later with this????
 
  }



  getSeconds() {
    // ... your code goes here

let secondsAftercurrentMin = this.currentTime % 60;   

return secondsAftercurrentMin;    ////function scope???? access later with this????

  }


  computeTwoDigitNumber(value) {
    // ... your code goes here

//stringify number with toString??
    
let myStringNum= value.toString(); 
 

if(value <10){

myStringNum= "0".concat(myStringNum);

    }  

return myStringNum;
 


  }

  //Later, we'll use the computeTwoDigitNumber method to format
  // the values returned by getMinutes and getSeconds and display them in our chronometer.

  stop() {
    // ... your code goes here

    clearInterval(this.intervalId);  
  }

  reset() {
    // ... your code goes here
this.currentTime=0;

  }

  split() {  //no arguments
    // ... your code goes here


//use my minutes  "myIntMinutes" followed by my secs since minute started "secondsAftercurrentMin"
//turn both into strings with computeTwoDigitNumber
//and concatenate them together with ":"

//meine sekunden seit minute: secondsAftercurrentMin

//let mySplitNum = (myIntMinutes.computeTwoDigitNumber()).concat(":", secondsAftercurrentMin.computeTwoDigitNumber())

//str1.concat(str2, str3, str4.......strn);



//pass my numbers (min and secs) as parameters to computeTwoDigitNumber
//&& store results in variable


let myIntMinutes = this.getMinutes();    
 //else myIntMinutes from above not accessible here?
 
let  secondsAftercurrentMin= this.getSeconds();


let myStringMin = computeTwoDigitNumber(myIntMinutes);     


let myStringSecs = computeTwoDigitNumber(secondsAftercurrentMin);

let mySplitNum = myStringMin.concat(":", myStringSecs);
 
return mySplitNum;



  }


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
