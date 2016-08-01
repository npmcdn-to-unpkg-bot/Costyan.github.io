function Timer() {
  var self = this;
  self.timer = null;
  self.startTime = 0;
  self.curTime = 0;
  self.prevTime = 0;
  self.outputTime = 0;

  self.getTimerValue = function() {
    return self.outputTime;
  }

  self.getMyTime = function() {
    var tmpTime = new Date();
    return tmpTime.getTime();
  }

  self.process = function() {
    self.curTime = self.getMyTime();
    self.outputTimer();
  }

  self.outputTimer = function() {
    var outT = self.prevTime + self.curTime - self.startTime;
    milliseconds = outT % 1000;
    outT = (outT / 1000) >> 0;
    seconds = outT % 60;
    outT = (outT / 60) >> 0;
    minutes = outT % 60;
    outT = (outT / 60) >> 0;
    hours = outT % 24;
    self.outputTime = '' + ((hours / 10) >> 0) + (hours % 10) + ':' +
                      ((minutes / 10) >> 0) + (minutes % 10) + ':' +
                      ((seconds / 10) >> 0) + (seconds % 10) + '.' +
                      ((milliseconds / 100) >> 0) + ((milliseconds % 100 / 10) >> 0) + (milliseconds % 10);
  }

  self.start = function() {
    self.startTime = self.getMyTime();
    self.timer = setInterval(self.process, 7);
  }

  self.clear = function() {
    clearInterval(self.timer);
    self.startTime = 0;
    self.curTime = 0;
    self.prevTime = 0;
    self.outputTime = '00:00:00.000';
  }

  self.pause = function() {
    clearInterval(self.timer);
    self.prevTime = self.prevTime + self.curTime - self.startTime;
  }

  return {
    getTimerValue: self.getTimerValue,
    start: self.start,
    clear: self.clear,
    pause: self.pause
  }
}
