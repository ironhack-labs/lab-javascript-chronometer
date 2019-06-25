// var btnLeft     = document.getElementById('btnLeft');
// var btnRight    = document.getElementById('btnRight');
// var minDec      = document.getElementById('minDec');
// var minUni      = document.getElementById('minUni');
// var secDec      = document.getElementById('secDec');
// var secUni      = document.getElementById('secUni');
// var milDec      = document.getElementById('milDec');
// var milUni      = document.getElementById('milUni');
var state = {
  running: false
}
var data = {"START" : {buttonID: "btnLeft", css: "btn start", status: "stopped", running: false},
            "RESET" : {buttonID: "btnRight", css: "btn reset", status: "stopped", running: false},
            "STOP" : {buttonID: "btnLeft", css: "btn stop", status: "running",  running: true},
            "SPLIT": {buttonID: "btnRight", css: "btn split", status: "running", running: true}
}

$(document).ready(function(){
  var chronometer = new Chronometer();
  
  setInterval(()=>{  // equivalent to animate loop
    
    if (state.running) {

      printTime();
    }

  }, 10);
  
  function printTime() {
    printMinutes();
    printSeconds();
    printMilliseconds();
  }
  
  function printMinutes() {
    // console.log('');
    $('#minUni').text(chronometer.getMinutes()[1]);
    $('#minDec').text(chronometer.getMinutes()[0]);
  }
  
  function printSeconds() {
    $('#secUni').text(chronometer.getSeconds()[1]);
    $('#secDec').text(chronometer.getSeconds()[0]);

  }
  
  function printMilliseconds() {
    $('#milUni').text(chronometer.getMiliSeconds()[1]);
    $('#milDec').text(chronometer.getMiliSeconds()[0]);
  }
  
  function printSplit() {
    console.log(chronometer.getMinutes()[0] + ""+ chronometer.getMinutes()[1] +
     " : " + chronometer.getSeconds()[0] + "" + chronometer.getSeconds()[1]);

     $('#splits')
     .append(`<li>${chronometer.getMinutes()[0]}${chronometer.getMinutes()[1]}:${chronometer.getSeconds()[0]}${chronometer.getSeconds()[1]}:${chronometer.getMiliSeconds()[0]}${chronometer.getMiliSeconds()[1]}</li>`);
  }
  
  function clearSplits() {
    $('#splits').children().remove();
  }
  
  function setStopBtn() {
    
  }
  
  function setSplitBtn() {
    
  }
  
  function setStartBtn() {
    
    var $leftStartButton = $('#btnLeft')

    if (state.running) {
      chronometer.startClick();
      $leftStartButton.removeClass(data['START']['css']);
      $leftStartButton.addClass(data['STOP']['css']);
      $leftStartButton.text('STOP');
      
    } else {
      printTime();
      chronometer.stopClick(); 
      $leftStartButton.removeClass(data['STOP']['css']);
      $leftStartButton.addClass(data['START']['css']);
      $leftStartButton.text('START');   
      
  }
}
  
  function setResetBtn() {
    var $resetRightButton = $('#btnRight')

    if (state.running) {
      $resetRightButton.removeClass(data['RESET']['css']);
      $resetRightButton.addClass(data['SPLIT']['css']);
      $resetRightButton.text('SPLIT');
      
    } else {
      chronometer.resetClick();
      $resetRightButton.removeClass(data['SPLIT']['css']);       
      $resetRightButton.addClass(data['RESET']['css']);
      $resetRightButton.text('RESET');
      
    } 
  }
  
  // Start/Stop Button
  // btnLeft.addEventListener('click', function () {
    // });
    $('#btnLeft').click( function() {
      
        state.running = !state.running;

        setStartBtn();
        setResetBtn();

    });

    // Reset/Split Button
    // btnRight.addEventListener('click', function () {
      // });
      $('#btnRight').click( ()=>{
        console.log('right button clicked');

          if (state.running) { // it will click split button
            printSplit();
          } else {
            // it will clicked the reset button
            clearSplits();
            printTime();
          }
      });
      

}) // end of $(document).ready(function(){