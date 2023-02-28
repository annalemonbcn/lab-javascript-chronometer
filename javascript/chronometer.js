class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      console.log(`currentTime: ${this.currentTime}`);
    }, 1000);
  }

  getMinutes() {
    console.log(`Current time: ${this.currentTime}`); // -> siempre es 0!!!!
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    if(value.toString.length === 1){
      return '0' + value.toString();
    }
    return value.toString();
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
    // Reset values in HTML
  }

  split() {
    let minutes = computeTwoDigitNumber(this.getMinutes());
    let seconds = computeTwoDigitNumber(this.getSeconds());
    return minutes + ':' + seconds;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
