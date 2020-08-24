"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Chronometer =
/*#__PURE__*/
function () {
  function Chronometer() {
    _classCallCheck(this, Chronometer);

    this.currentTime = 0;
    this.intervalId = 0;
  }

  _createClass(Chronometer, [{
    key: "startClick",
    value: function startClick(callback) {
      var _this = this;

      setInterval(function () {
        _this.currentTime++;
      }, 1000);
    }
  }, {
    key: "getMinutes",
    value: function getMinutes() {
      return Math.floor(this.currentTime / 60);
    }
  }, {
    key: "getSeconds",
    value: function getSeconds() {
      return this.currentTime % 60;
    }
  }, {
    key: "twoDigitsNumber",
    value: function twoDigitsNumber(string) {
      if (string < 10) {
        return "0" + string;
      }

      return string;
    }
  }, {
    key: "stopClick",
    value: function stopClick() {
      clearInterval(this.intervalId);
    }
  }, {
    key: "resetClick",
    value: function resetClick() {
      this.currentTime = 0;
    }
  }, {
    key: "splitClick",
    value: function splitClick() {
      return this.twoDigitsNumber(this.getMinutes()) + ":" + this.twoDigitsNumber(this.getSeconds());
    }
  }]);

  return Chronometer;
}();