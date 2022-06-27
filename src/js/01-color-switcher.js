const startBtn = document.querySelector('[data-start');
const stopBtn = document.querySelector('[data-stop]');
const body = document.querySelector('body');

let intervalId = null;

startBtn.addEventListener('click', onStartColor);
stopBtn.addEventListener('click', onStopColor);


function onStartColor() {
  const colorBody = getRandomHexColor();
  body.style.backgroundColor = colorBody;
  
  intervalId = setInterval(() => {
    const colorBody = getRandomHexColor();
    body.style.backgroundColor = colorBody;
  }, 1000);

  startBtn.disabled = true;
  stopBtn.disabled = false;
}

function onStopColor() {
  clearInterval(intervalId);
  startBtn.disabled = false;
  stopBtn.disabled = true;
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}