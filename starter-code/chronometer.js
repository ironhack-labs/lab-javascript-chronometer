startClick = function(){
  var counter = 0;
  var callbackFunction = function () {
    console.log(counter);
    timeoutId = setTimeout(callbackFunction, 1000);

    counter += 1;

    if (click = true) {
      clearTimeout(timeoutId);
    }
  }

  var timeoutId = setTimeout(callbackFunction, 1000);
};
