// Start/Stop Button
var leftButton = document.querySelector('#btnLeft');
var rightButton= document.querySelector('#btnRight');
var countSeconds=0;
var countDecimas=0;
var countMinutes=0;
var countHours=0;
var startTimer;
var startButton = document.querySelector('btnLeft');



document.getElementById("btnLeft").addEventListener("click", function () {
var seconds = document.querySelector('#secCen');
var decimas= document.querySelector('#secDec');
var minutes= document.querySelector('#minCen');
var hours= document.querySelector('#minDec');

if (leftButton.className === 'btn start'){

    startTimer = setInterval(function(){
    countSeconds += 1;
      if(countSeconds<10)
      {
        seconds.innerHTML= countSeconds;
      }
      else if (countSeconds>10) {
        countSeconds=0;
        countDecimas++;
        seconds.innerHTML=countSeconds;
        decimas.innerHTML=countDecimas;
      }
      else if (countDecimas>5) {
        countSeconds=0;
        seconds.innerHTML=countSeconds;
        countDecimas=0;
        decimas.innerHTML=countDecimas;
        countMinutes++;
        minutes.innerHTML=countMinutes;
      }
      else if (countMinutes>10) {
        countSeconds=0;
        seconds.innerHTML=countSeconds;
        countDecimas=0;
        decimas.innerHTML=countDecimas;
        countMinutes=0;
        minutes.innerHTML=countMinutes;
        countHours++;
        hours.innerHTML=countHours;
      }
    },50);
  }
  else if (leftButton.className === 'btn stop'){
       clearInterval(startTimer);
     }



       if (leftButton.className === "btn start" ){
       leftButton.innerHTML = "STOP";
       leftButton.className = "btn stop";
       rightButton.className = "btn split";
       rightButton.innerHTML = "SPLIT";
     } else {
       leftButton.innerHTML = "START";
       leftButton.className = "btn start";
       rightButton.className = "btn reset";
       rightButton.innerHTML = "RESET";
     }
});


// // Reset/Split Button
// document.getElementById("btnRight").addEventListener("click", function () {
//   console.log("Right button clicked");
// });
