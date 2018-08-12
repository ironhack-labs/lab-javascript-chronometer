describe('', function () {
  beforeEach(function () {
    chronometer = new Chronometer();
  });

  describe('constructor function', function () {
    it('Should declare a Chronometer function', function () {
      expect(typeof Chronometer).toEqual('function');
    });

    it('Should not receive any parameter', function () {
      expect(Chronometer.length).toEqual(0);
    });

    it('Should declare a `currentTime` property', function () {
      expect(chronometer.currentTime).toBeDefined();
    });

    it('`currentTime` should be equal to 0 at the beginning', function () {
      expect(chronometer.currentTime).toEqual(0);
    });

    it('Should declare a `intervalId` property', function () {
      expect(chronometer.intervalId).toBeDefined();
    });
  });

  describe('startClick function', function () {
    beforeEach(function () {
      jasmine.clock().install();
      chronometer.startClick();
    });

    afterEach(function () {
      jasmine.clock().uninstall();
    });

    it('Declare a startClick method', function () {
      expect(typeof chronometer.startClick).toEqual('function');
    });

    it('Should declare an intervalId property as part of Chronometer', function () {
      expect(chronometer.intervalId).toBeDefined();
    });

    it('Set to intervalId a new setInterval', function () {
      expect(typeof chronometer.intervalId).toEqual('number');
    });

    it('should increment 1 to currentTime property on every 1 second interval', function () {
      jasmine.clock().tick(1000);

      expect(chronometer.currentTime).toEqual(1);
    });

    it('after 3 seconds, currentTime should be 3', function () {
      jasmine.clock().tick(3000);

      expect(chronometer.currentTime).toEqual(3);
    });
  });

  describe('setMinutes function', function () {
    it('Should be declare', function () {
      expect(typeof chronometer.setMinutes).toEqual('function');
    });

    it('Should return a number', function () {
      chronometer.currentTime = 65;
      expect(typeof chronometer.setMinutes()).toEqual('number');
    });

    it('Should return a number without decimals', function () {
      chronometer.currentTime = 65;

      expect(chronometer.setMinutes() % 1).toEqual(0);
    });

    it('Should return the currentTime in minutes', function () {
      chronometer.currentTime = 65;

      expect(chronometer.setMinutes()).toEqual(1);
    });

    it('Should return 0 when the currentTime haven\'t start', function () {
      chronometer.currentTime = 0;

      expect(chronometer.setMinutes()).toEqual(0);
    });

    it('Should return the currentTime in minutes even for laaaarge numbers', function () {
      chronometer.currentTime = 50210;

      expect(chronometer.setMinutes()).toEqual(836);
    });
  });

  describe('setSeconds function', function () {
    it('Should be declare', function () {
      expect(typeof chronometer.setSeconds).toEqual('function');
    });

    it('Should return a number', function () {
      chronometer.currentTime = 3;

      expect(typeof chronometer.setSeconds(0)).toEqual('number');
    });

    it('Should return 0 when the currentTime haven\'t start', function () {
      chronometer.currentTime = 0;

      expect(chronometer.setSeconds(0)).toEqual(0);
    });

    it('Should return the seconds of the currentTime', function () {
      chronometer.currentTime = 15;

      expect(chronometer.setSeconds(0)).toEqual(15);
    });

    it('Should return the seconds that remain after removing the minutes to the currentTime', function () {
      chronometer.currentTime = 115;

      expect(chronometer.setSeconds(1)).toEqual(55);
    });
  });

  describe('twoDigitsNumber function', function () {
    it('Should be declare', function () {
      expect(typeof chronometer.twoDigitsNumber).toEqual('function');
    });

    it('Should return a string', function () {
      expect(typeof chronometer.twoDigitsNumber(7)).toEqual('string');
    });

    it('Should return \'00\' when the value is 0', function () {
      expect(chronometer.twoDigitsNumber(0)).toEqual('00');
    });

    it('Should return \'15\' when the value is 15', function () {
      expect(chronometer.twoDigitsNumber(15)).toEqual('15');
    });

    it('Should return a string of length 2', function () {
      expect(chronometer.twoDigitsNumber(7).length).toEqual(2);
    });

    it('Should return \'03\' when the value is 3', function () {
      expect(chronometer.twoDigitsNumber(3)).toEqual('03');
    });
  });

  describe('setTime function', function () {
    it('Should be declare', function () {
      expect(typeof chronometer.setTime).toEqual('function');
    });

    it('Should be called on each interval of our startClick setInterval', function () {
      jasmine.clock().install();
      chronometer.startClick();
      spyOn(chronometer, 'setTime');
      jasmine.clock().tick(1000);

      expect(chronometer.setTime).toHaveBeenCalled();
      jasmine.clock().uninstall();
    });

    it('setTime should declare a `minutes` variable to store the 2 characters length minutes value', function () {
      spyOn(chronometer, 'setTime').and.callFake(function () {
        var minutes = this.twoDigitsNumber(this.setMinutes());

        expect(minutes).toBeDefined();
      });
      chronometer.setTime();
    });

    it('setTime should declare a `seconds` variable to store the 2 characters length seconds value', function () {
      spyOn(chronometer, 'setTime').and.callFake(function () {
        var seconds = this.twoDigitsNumber(this.setSeconds(2));

        expect(seconds).toBeDefined();
      });
      chronometer.setTime();
    });

    it('`minutes` should equal \'00\' when currentTime is 0', function () {
      chronometer.currentTime = 0;
      spyOn(chronometer, 'setTime').and.callFake(function () {
        var minutes = this.twoDigitsNumber(this.setMinutes());

        expect(minutes).toEqual('00');
      });
      chronometer.setTime();
    });

    it('`minutes` should equal \'00\' when currentTime is 0', function () {
      chronometer.currentTime = 0;
      spyOn(chronometer, 'setTime').and.callFake(function () {
        var seconds = this.twoDigitsNumber(this.setSeconds(0));

        expect(seconds).toEqual('00');
      });
      chronometer.setTime();
    });

    it('`minutes` should equal the elapsed minutes of our currentTime', function () {
      chronometer.currentTime = 121;
      spyOn(chronometer, 'setTime').and.callFake(function () {
        var minutes = this.twoDigitsNumber(this.setMinutes());

        expect(minutes).toEqual('02');
      });
      chronometer.setTime();
    });

    it('`seconds` should equal the seconds that remain after removing the minutes to the currentTime', function () {
      chronometer.currentTime = 129;
      spyOn(chronometer, 'setTime').and.callFake(function () {
        var seconds = this.twoDigitsNumber(this.setSeconds(2));

        expect(seconds).toEqual('09');
      });
      chronometer.setTime();
    });
  });

  describe('stopClick function', function () {
    it('Should be declare', function () {
      expect(typeof chronometer.stopClick).toEqual('function');
    });

    it('Should clear the intervalId', function () {
      spyOn(window, 'clearInterval');
      chronometer.stopClick();

      expect(clearInterval).toHaveBeenCalled();
    });
  });

  describe('resetClick function', function () {
    it('Should be declare', function () {
      expect(typeof chronometer.resetClick).toEqual('function');
    });

    it('Should clear the currentTime property', function () {
      chronometer.resetClick();

      expect(chronometer.currentTime).toEqual(0);
    });
  });
});
