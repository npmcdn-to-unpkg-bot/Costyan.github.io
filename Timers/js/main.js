//  Первый таймер
var timerDOM = document.querySelector('.timer');
var btnStart = document.querySelector('.btn-start');
var btnPause = document.querySelector('.btn-pause');
var btnClear = document.querySelector('.btn-clear');
var outputTimer = null;
var myTimer = new Timer();

function outputTime() {
  timerDOM.innerHTML = myTimer.getTimerValue();
}

function startTimer() {
  btnStart.classList.add('btn-hide');
  btnPause.classList.remove('btn-hide');
  myTimer.start();
  outputTimer = setInterval(outputTime, 13);
}

function clearTimer() {
  btnPause.classList.add('btn-hide');
  btnStart.classList.remove('btn-hide');
  btnStart.innerHTML = 'Start';
  myTimer.clear();
}

function pauseTimer() {
  btnStart.classList.remove('btn-hide');
  btnStart.innerHTML = 'Continue';
  btnPause.classList.add('btn-hide');
  myTimer.pause();
}

btnStart.addEventListener('click', startTimer);
btnClear.addEventListener('click', clearTimer);
btnPause.addEventListener('click', pauseTimer);

// Второй таймер
var timerDOM2 = document.querySelector('.timer2');
var btnStart2 = document.querySelector('.btn-start2');
var btnPause2 = document.querySelector('.btn-pause2');
var btnClear2 = document.querySelector('.btn-clear2');
var outputTimer2 = null;
var myTimer2 = new Timer();

function outputTime2() {
  timerDOM2.innerHTML = myTimer2.getTimerValue();
}

function startTimer2() {
  btnStart2.classList.add('btn-hide');
  btnPause2.classList.remove('btn-hide');
  myTimer2.start();
  outputTimer2 = setInterval(outputTime2, 13);
}

function clearTimer2() {
  btnPause2.classList.add('btn-hide');
  btnStart2.classList.remove('btn-hide');
  btnStart2.innerHTML = 'Start';
  myTimer2.clear();
}

function pauseTimer2() {
  btnStart2.classList.remove('btn-hide');
  btnStart2.innerHTML = 'Continue';
  btnPause2.classList.add('btn-hide');
  myTimer2.pause();
}

btnStart2.addEventListener('click', startTimer2);
btnClear2.addEventListener('click', clearTimer2);
btnPause2.addEventListener('click', pauseTimer2);
