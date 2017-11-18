// Start/Stop Button
document.getElementById("btnLeft").addEventListener("click", function () {
  crono=new Chronometer();
  if(document.getElementById('btnLeft').innerText === 'START'){
    crono.startClick("btnLeft");
  }else if(document.getElementById('btnLeft').innerText === 'STOP'){
    crono.stopClick("btnLeft");
  }
});

// Reset/Split Button
document.getElementById("btnRight").addEventListener("click", function () {
  crono=new Chronometer();
  if(document.getElementById('btnRight').innerText === 'SPLIT'){
    crono.startClick("btnRight");
  }else if(document.getElementById('btnRight').innerText === 'RESET'){
    crono.stopClick("btnRight");
  }
});
