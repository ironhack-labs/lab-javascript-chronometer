/*
let number = 7;
console.log(typeof number);

number = number.toString();
console.log(typeof number);


console.log("0" + 7);
*/
/*let currentTime = 365;

function getMinutes() {
    return Math.floor(currentTime / 60);
  }

  function  getSeconds() {
    return Math.floor(currentTime % 60);
  }

  function  computeTwoDigitNumber(value) {
    // 7 -> 07
    // "7" -> "07" ----> "0" + "7"
    let valueString = value.toString();
    if (valueString.length < 2) {
      return '0' + valueString;
    } else {
      return valueString;
    }
  }
*/

function split() {
    let formattedMinutes = computeTwoDigitNumber(getMinutes());
    let formattedSeconds = computeTwoDigitNumber(getSeconds());

    let altFormattedTime = formattedMinutes + ":" + formattedSeconds;
    let formattedTime = `${formattedMinutes}:${formattedSeconds}`;

    return formattedTime;
}

split();


        
