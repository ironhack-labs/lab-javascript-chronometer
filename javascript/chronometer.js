//my test  were not running 
// could not get solutions lab-solution.html to work tried re installing 
//was getting the same issue   

class Chronometer {
  constructor() {
    this.currentTime = 0,
    this.intervalID = null;
  }

  start(callback) {
    this.intervalID = setInterval(()=>{ 
      //setInterval method to increment
      //using the Id property able to clear it later on when we need to stop the timer
      this.currentTime +=1 //increment the amount of seconds stored in the property currentTime by 1
      console.log(this.currentTime)
      callback() //start method
      //calls back => functions that updates... will be the argument here 
      //passing a function as the input  and it calls the function in the other JS file
  }, 1000)//1000 = 1 sec

  getMinutes() {
    this.currentTime;
    let minutes = Number(this.currentTime/60) //make sure its number not a sting 
    //conversion to sec 
    console.log(minutes)
    minutes = Math.floor(minutes)//interger rounding 

    //method should take no arguments, and it should return the number of minutes that have passed as an integer 
  }

  getSeconds() {
    this.currentTime;
    let seconds = Number(this.currentTime%60) 
    //can i reuse mintues?
    //make sure its number not a sting 
    //conversion to milisec to sec
    console.log(seconds)
    minutes = Math.floor(minutes)//interger rounding 


    //method should take no arguments, and it should return the number of minutes that have passed as an integer 
  }

  computeTwoDigitNumber(value) {
    if (value<9){
      console.log(value)
      return `0${value}`
    }
    else{
      return value.toString();// ... your code goes here
  }

  stop() {
      //stop timer need a call back
      clearInterval(this.intervalID)
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
//  basically i need to change the inner text on thepage to display the values in the other functions
//  confused on the syntax 
// i need to get all the elements aka tags
// update innertext for each min/sec/mili  i can pass in all of the method from before 
/// do i call the methods in here 
//can i do this.getMinutes()
//or can i do something like this example li.innerText = "text example"
    let minDec = document.querySelector('#minDec')
    minDec.innerText =  this.computeTwoDigitNumber(getMinutes)
    console.log(minDec.innerText) 
    let secDec = document.querySelector('#secDec')
    secDec.innerText =  this.computeTwoDigitNumber(getSeconds)
    console.log(secDec.innerText) // checking to see if its working

    //let milDec = document.querySelector('#milDec')
   // milDec.innerText =  this.computeTwoDigitNumber(getMili)
    

    //split method should expect no arguments
    //split method can make usage of previously declared methods such as getMinutes, getSeconds, and computeTwoDigitNumber.
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
