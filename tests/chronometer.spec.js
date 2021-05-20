const Chronometer = require('../javascript/chronometer');

describe('Chronometer', () => {
  let chronometer;

  beforeEach(() => {
    chronometer = new Chronometer();
  });

  it('should be a class', () => {
    expect(typeof Chronometer).toBe('function');
  });

  it('should not expect any arguments', () => {
    expect(Chronometer.length).toEqual(0);
  });

  it('should have a `currentTime` property and its value should start off as 0', () => {
    expect(chronometer.currentTime).toBeDefined();
    expect(chronometer.currentTime).toEqual(0);
  });

  it('should have a `intervalId` property and its value should start of as null', () => {
    expect(chronometer.intervalId).toBeDefined();
    expect(chronometer.intervalId).toEqual(null);
  });

  describe('"start" method', () => {
    beforeEach(() => {
      jest.useFakeTimers();
      chronometer.start();
    });

    it('should be declared', () => {
      expect(typeof chronometer.start).toEqual('function');
    });

    it('should increment by 1 the currentTime property on every 1 second interval', () => {
      jest.advanceTimersByTime(1000);
      expect(chronometer.currentTime).toEqual(1);
    });

    it('should hold 3 in currentTime property after 3 seconds', () => {
      jest.advanceTimersByTime(3000);
      expect(chronometer.currentTime).toEqual(3);
    });
  });

  describe('"getMinutes" method', () => {
    it('should be declared', () => {
      expect(typeof chronometer.getMinutes).toEqual('function');
    });

    it('should return a number', () => {
      chronometer.currentTime = 65;
      expect(typeof chronometer.getMinutes()).toEqual('number');
    });

    it('should return a number without decimal places', () => {
      chronometer.currentTime = 65;
      expect(chronometer.getMinutes() % 1).toEqual(0);
    });

    it('should return the number of entire minutes passed', () => {
      chronometer.currentTime = 65;
      expect(chronometer.getMinutes()).toEqual(1);
    });

    it("should return 0 when the chronometer hasn't been started", () => {
      expect(chronometer.getMinutes()).toEqual(0);
    });

    it('should return the number of minutes passed even after a very long time', () => {
      chronometer.currentTime = 50210;
      expect(chronometer.getMinutes()).toEqual(836);
    });
  });

  describe('"getSeconds" method', () => {
    it('should be declared', () => {
      expect(typeof chronometer.getSeconds).toEqual('function');
    });

    it('should return a number', () => {
      chronometer.currentTime = 3;
      expect(typeof chronometer.getSeconds(0)).toEqual('number');
    });

    it("should return 0 when the currentTime counting haven't started", () => {
      chronometer.currentTime = 0;
      expect(chronometer.getSeconds()).toEqual(0);
    });

    it('should return the seconds of the currentTime', () => {
      chronometer.currentTime = 15;
      expect(chronometer.getSeconds()).toEqual(15);
    });

    it('should return the seconds portion of the currentTime that remains after removing the minutes', () => {
      chronometer.currentTime = 115;
      expect(chronometer.getSeconds()).toEqual(55);
    });
  });

  describe('"computeTwoDigitNumber" method', () => {
    it('should be declared', () => {
      expect(typeof chronometer.computeTwoDigitNumber).toEqual('function');
    });

    it('should return a string', () => {
      expect(typeof chronometer.computeTwoDigitNumber(7)).toEqual('string');
    });

    it('should always return a string of length 2', () => {
      expect(chronometer.computeTwoDigitNumber(7).length).toEqual(2);
    });

    it("should return '00' when the value is 0", () => {
      expect(chronometer.computeTwoDigitNumber(0)).toEqual('00');
    });

    it("should return '15' when the value is 15", () => {
      expect(chronometer.computeTwoDigitNumber(15)).toEqual('15');
    });

    it("Should return '03' when the value is 3", () => {
      expect(chronometer.computeTwoDigitNumber(3)).toEqual('03');
    });
  });

  describe('"stop" method', () => {
    it('should be declared', () => {
      expect(typeof chronometer.stop).toEqual('function');
    });

    it('should clear the intervalId', () => {
      spyOn(window, 'clearInterval');
      chronometer.stop();
      expect(clearInterval).toHaveBeenCalled();
    });
  });

  describe('"reset" method', () => {
    it('should be declared', () => {
      expect(typeof chronometer.reset).toEqual('function');
    });

    it('should reset the currentTime property', () => {
      chronometer.currentTime = 5;
      chronometer.reset();
      expect(chronometer.currentTime).toEqual(0);
    });
  });

  describe('"split" method', () => {
    it('should be declared', () => {
      expect(typeof chronometer.split).toEqual('function');
    });

    it('should return valid format with minutes and seconds', () => {
      const min = chronometer.getMinutes();
      const sec = chronometer.getSeconds();

      if (min < 10 && sec < 10) {
        expect(chronometer.split()).toEqual(`${0}${min}:${0}${sec}`);
      } else if (min < 10 && sec > 10) {
        expect(chronometer.split()).toEqual(`0${min}:${sec}`);
      } else if (min > 10 && sec < 10) {
        expect(chronometer.split()).toEqual(`${min}:0${sec}`);
      } else {
        expect(chronometer.split()).toEqual(`${min}:${sec}`);
      }
    });
  });

  // comment the previous test and uncomment the following when working on the bonus iteration
  // describe('split method', () => {
  //   it('should be declared', () => {
  //     expect(typeof chronometer.split).toEqual('function');
  //   });

  //   it('should return valid format with minutes, seconds and milliseconds', () => {
  //     let min = chronometer.getMinutes();
  //     let sec = chronometer.getSeconds();
  //     let milli = chronometer.getMilliseconds();
  //     if (min < 10) {
  //       expect(chronometer.split()).toEqual(`${0}${min}:${0}${sec}:${0}${milli}`);
  //     } else {
  //       expect(chronometer.split()).toEqual(`${min}:${sec}:${milli}`);
  //     }
  //   });
  // });
});
