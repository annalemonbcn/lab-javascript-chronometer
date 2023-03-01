const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  printMinutes();
  printSeconds();
  // printMilliseconds();
}

function printMinutes() {
  minDecElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getMinutes())[0];
  minUniElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getMinutes())[1]; 
}

function printSeconds() {
  secDecElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getSeconds())[0];
  secUniElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getSeconds())[1];
}

// ==> BONUS
function printMilliseconds() {
  milDecElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getMilliseconds())[0];
  milUniElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getMilliseconds())[1];
}

function printSplit() {
  const minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  const seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  // const milliseconds = chronometer.computeTwoDigitNumber(chronometer.getMilliseconds());
  splitsElement.innerHTML += `<li>${minutes}:${seconds}</li>`;
}

function clearSplits() {
  splitsElement.innerHTML = '';
}

function setStopBtn() {
  // Change class and inner text
  btnLeftElement.classList.remove('start');
  btnLeftElement.classList.add('stop');
  btnLeftElement.innerHTML = 'STOP';
}

function setSplitBtn() {
  // Change class and inner text
  btnRightElement.classList.remove('reset');
  btnRightElement.classList.add('split');
  btnRightElement.innerHTML = 'SPLIT';
}

function setStartBtn() {
  // Change class and inner text
  btnLeftElement.classList.remove('stop');
  btnLeftElement.classList.add('start');
  btnLeftElement.innerHTML = 'START';
}

function setResetBtn() {
  // Change class and inner text
  btnRightElement.classList.remove('split');
  btnRightElement.classList.add('reset');
  btnRightElement.innerHTML = 'RESET';
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if(btnLeftElement.classList.contains('start')){
    // Start chrono
    chronometer.start(printTime);
    setStopBtn();
    setSplitBtn();
  } else {
    // Stop chrono
    chronometer.stop();
    setStartBtn();
    setResetBtn();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // Split time
  if(btnRightElement.classList.contains('reset')){
    chronometer.reset();
    // Reset chrono numbers
    minDecElement.innerHTML = '0';
    minUniElement.innerHTML = '0';
    secDecElement.innerHTML = '0';
    secUniElement.innerHTML = '0';
    // Clean split intervals
    clearSplits();
  } else if(btnRightElement.classList.contains('split')){
    printSplit();
  }
});