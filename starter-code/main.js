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
  eleClass2 = this.getAttribute('class');
  if( eleClass2 === 'btn split'){
    chrono.splitClick();
  }
  else{
    chrono.resetClick();
  }
});
