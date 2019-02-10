// Constructor
 function Chronometer() {
  this.currentTime=0;
  this.intervalId='';
 };
 var minutes=0
 var seconds=0
 var minutes1=0
 var minutes2=0

 Chronometer.prototype.startClick = function () {
    this.intervalId = setInterval((function(){
        this.currentTime++;
        //console.log(this.currentTime);
    }).bind(this),1000);
};

Chronometer.prototype.setMinutes = function () {// creo que no me redondea bien el 837... se puede usar math.round?
  var minutes= this.currentTime/60;
  var minutes1= minutes.toFixed(2)
  var minutes2= parseInt(minutes1)
//  console.log(minutes2);
  return minutes2
};

Chronometer.prototype.setSeconds = function () {
    var seconds=this.currentTime/60;
    var radixPos = String(seconds).indexOf('.');
  //console.log(radixPos)
    var value = String(seconds).slice(radixPos);
    var value2 = value.replace('.','');
    var value3 = Number(value2);
    this.currentTime = value3;
   // console.log(value3);
  // console.log(minutes2)
    return this.currentTime
 };

 Chronometer.prototype.twoDigitsNumber = function (number) {//devuelve string, no se si se podria hacer de otra forma
    var number2= number.toString().length;
    if (number2==1){
       var numberDigits = '0'+ number;
      // console.log (numberDigits)
       return numberDigits
    }
      else{
          number=number.toString()
       // console.log (number)
        return number
      }
    
};
 Chronometer.prototype.setTime = function () {

 };

// Chronometer.prototype.setMilliseconds = function () {

// };

Chronometer.prototype.stopClick = function () {
    clearInterval(); 
 };

 Chronometer.prototype.resetClick = function () {
   this.currentTime=0
 };

// Chronometer.prototype.splitClick = function () {

// };
