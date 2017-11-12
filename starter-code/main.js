var chrono = new Chronometer;
// Start/Stop Button
document.getElementById("btnLeft").addEventListener("click", function () {
  eleClass = this.getAttribute('class');
  if( eleClass === 'btn start'){
    chrono.startClick();
  }
  else{
    chrono.stopClick();
  }

});

// Reset/Split Button
document.getElementById("btnRight").addEventListener("click", function () {
  eleClass = this.getAttribute('class');
  if( eleClass === 'btn split'){
    chrono.splitClick();
  }
  else{
    chrono.stopClick();
  }
});
