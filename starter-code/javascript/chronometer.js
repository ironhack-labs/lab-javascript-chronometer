
  var counterUni =0
  var counterDec = 0
  var counterMinUni = 0
  var counterMinDec = 0
  var stateButton = ""


  function myFunction() {
//  stateButton = document.getElementById("btnLeft").innerHTML
   // console.log(stateButton)

    
    
  counterUni = counterUni
  counterDec = counterDec
var interval = setInterval(numerito, 10)

   /* if(stateButton === "STOP"){
      clearInterval(interval) ;
                              }
    else{stateButton = "STOP";}
    console.log(stateButton)
  document.getElementById('btnLeft').classList.remove('start')
      document.getElementById('btnLeft').classList.add('stop')*/


function numerito(){
  counterUni++
    document.getElementById("secUni").innerHTML = counterUni

    if(counterUni > 9) {
                     counterDec++;
        document.getElementById("secDec").innerHTML = counterDec;
      counterUni = 0;
      document.getElementById("secUni").innerHTML = counterUni;
      //clearInterval(interval);
                      
        if(counterDec > 5) {
                               counterMinUni++;
        document.getElementById("minUni").innerHTML = counterMinUni;
          
          counterDec = 0;
        document.getElementById("secDec").innerHTML = counterDec;
      counterUni = 0;
      document.getElementById("secUni").innerHTML = counterUni;
          
                //clearInterval(interval);
                    }
      //###################
      
      if(counterMinUni > 9) {
                               counterMinDec++;
        document.getElementById("minDec").innerHTML = counterMinDec;
          
          counterDec = 0;
        document.getElementById("secDec").innerHTML = counterDec;
      counterUni = 0;
      document.getElementById("secUni").innerHTML = counterUni;
          counterMinUni = 0;
      document.getElementById("minUni").innerHTML = counterMinUni;
                //clearInterval(interval);
      if(counterMinDec > 8) {
        clearInterval(interval);
      }             
      
      }
      
      
      
      
      
      
    }
}}