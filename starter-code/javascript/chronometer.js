var chronometer = new newWatch();

var leftButton = document.getElementById("btnLeft");
var rightButton = document.getElementById("btnRight");

leftButton.onclick = function(){
    chronometer.start();
    leftButton.className = 'btn stop';
    leftButton.innerHTML = 'STOP';

    rightButton.className = 'btn split';
    rightButton.innerHTML = 'SPLIT';
    rightButton.onclick = function(){
        chronometer.split();
    }
    leftButton.onclick = function(){
        chronometer.stop();
        leftButton.className = 'btn start';
        leftButton.innerHTML = 'START';
        
        rightButton.className = 'btn reset';
        rightButton.innerHTML = 'RESET';
        rightButton.onclick = function(){
            chronometer.reset();
        }
    }
  }

  
// var startbutton = document.getElementById("btnStart");
// var stopbutton = document.getElementById("btnStop");
// var resetButton = document.getElementById("btnReset");
// var splitButton = document.getElementById("btnSplit");

// startbutton.onclick = function(){
//     chronometer.start();
//     startButton.innerHTML = 'STOP';
//     startButton.setAttribute("class", 'btn stop');
//     startButton.setAttribute("id", "btnStop");
// }

// stopbutton.onclick = function(){
//     chronometer.stop();
//     startButton.innerHTML = 'START';
//     startButton.setAttribute("class", 'btn start');
//     startButton.setAttribute("id", "btnStart");
// }

// resetButton.onclick = function(){
    
// }
// splitButton.onclick = function(){

// }