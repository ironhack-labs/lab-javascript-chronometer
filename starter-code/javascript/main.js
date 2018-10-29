// Constructor
function newWatch(){
    this.seconds = 0;
    this.minutes = 0;
    this.milliseconds = 0;
    this.startMinutes = document.getElementById("minutes").innerHTML; 
    this.startSeconds = document.getElementById("seconds").innerHTML;
    this.startMilliseconds = document.getElementById("milsec").innerHTML;
    this.splits = document.getElementById("splits");
    this.run = function(){ // method to let the chronometer run.
      if (this.milliseconds < 100){ //ass long as the milliseconds are smaller than 100 only the milliseconds increase. 
        this.seconds = (String(this.seconds).padStart(2,0)); //new value for seconds is assigned to this.seconds (in case only 1 digit a zero is added upfront)
        this.minutes = (String(this.minutes).padStart(2,0)); //new value for seconds is assigned to this.minutes (in case only 1 digit a zero is added upfront)
        this.milliseconds++; //this.milliseconds increases by 1 as long as the condition < 100 is true.
        document.getElementById("minutes").innerHTML = this.minutes; //the innerHTML of the minutes id is chronometer updated by the new assigned value for this.minutes 
        document.getElementById("seconds").innerHTML = this.seconds; //the innerHTML of the seconds id is chronometer updated by the new assigned value for this.seconds 
        document.getElementById("milsec").innerHTML = this.milliseconds; //the innerHTML of the milliseconds id is chronometer updated by the new assigned value for this.milliseconds 
      } 
      else if (this.seconds < 60){ //ass long as the seconds are smaller than 60 only the seconds increase. 
        this.seconds++; //this.seconds increases by 1 as long as the condition <60 is true. 
        this.minutes = (String(this.minutes).padStart(2,0)); //new value for seconds is assigned to this.minutes (in case only 1 digit a zero is added upfront)
        this.milliseconds = 0; //this.milliseconds are resetted to 0, because the computer enters this codeblock which means that the condition of the previous condition < 100 is not true.
        document.getElementById("minutes").innerHTML = this.minutes; //the innerHTML of the minutes id is chronometer updated by the new assigned value for this.minutes 
        document.getElementById("seconds").innerHTML = this.seconds; //the innerHTML of the seconds id is chronometer updated by the new assigned value for this.seconds 
        document.getElementById("milsec").innerHTML = this.milliseconds; //the innerHTML of the milliseconds id is chronometer updated by the new assigned value for this.milliseconds
      } 
      else {    
        this.minutes++; //if the computer hits this codeblock it means the previous condition seconds< 60 is not true, therefore the minutes increase by 1
        this.seconds = 0; //seconds should be resetted to 0 because the minute increased by 1
      }
    }.bind(this); 
    this.refInterval = {}; //key + empty value created to keep track of the run interval
    this.start = function(){ //method to start the this.run function
      this.refInterval = setInterval(this.run, 10); //this.run funciton with an interval of 10milliseconds
    };
    this.stop = function(){ //method to stop the chronometer from running
      clearInterval(this.refInterval) //this function stops the interval that was to this.refInterval by the function this.start
    };
    this.reset = function (){ //this method resets all values in the chronometer to 00 
      document.getElementById("minutes").innerHTML = "00"; //the innerHTML of the minutes id's are updated with "00"
      document.getElementById("seconds").innerHTML = "00"; //the innerHTML of the seconds id's are updated with "00"
      document.getElementById("milsec").innerHTML = "00"; //the innerHTML of the milliseconds id's are updated with "00"
    };
    this.split = function(){ //this method splits the time represented on the chronometer to <li> items
      this.splits.insertAdjacentHTML("beforeend",`
          <li class="name">${this.minutes}:${this.seconds}:${this.milliseconds}</li>
      `)
    }
  }



/*paste the line underneath between line 17 & 25 to see the this.run function in the console:
console.log((String(this.minutes).padStart(2,0)) + ":" + (String(this.seconds).padStart(2,0)) + ":" + this.milliseconds)
*/