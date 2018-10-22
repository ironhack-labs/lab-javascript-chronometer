// Constructor
function Chronometer () {
    this.currentTime =0;
    this.intervalId=0;
}

Chronometer.prototype.startClick = function () {
    let self = this;
    this.intervalId= setInterval(function () {
        self.currentTime +=1;
        self.setTime();
    }, 1000);   
};

Chronometer.prototype.setMinutes = function () {
    let minutesTime= this.currentTime / 60;
    return Math.floor(minutesTime);     
};

Chronometer.prototype.setSeconds = function () {
    let secondTime = this.currentTime % 60;
    return secondTime;
};

Chronometer.prototype.twoDigitsNumber = function (n) {
  return (n >= 10 ? "" + n : "0" + n )
};
// Chronometer.prototype.twoDigitsNumber = function () {
//     let stringToDigits = num.ToString();
//     if (stringToDigits.length < 2){
// 				let twoDigitStrings = '0' + num;
// 				return twoDigitsNumber; 
//     }else{
// 			return stringToDigits;
// 		}
  
// };


	  
	Chronometer.prototype.setTime = function (currenTime) {
		var minutes = this.twoDigitsNumber(this.setMinutes(this.currentTime));
		var seconds = this.twoDigitsNumber(this.setMinutes(this.currentTime));
		return minutes + seconds;
};

Chronometer.prototype.setMilliseconds = function () {
	return (this.currentTime == 0 ? 0 : this.currentTime - (60 *60* this.setMinutes()));
};

Chronometer.prototype.stopClick = function () {
  
};

Chronometer.prototype.resetClick = function () {
	this.currentTime = 0;
};

// Chronometer.prototype.splitClick = function () {

// };
