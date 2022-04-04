'use strict';

const par = document.createElement('p');
document.body.append(par);

const startLogOutTimer = function () {
  // Set time to 5 minutes
  let time = 100;

  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);
    // In each call, print the remaining time to UI
    par.textContent = `${min}:${sec}`;
    time === 0 && clearInterval(timer);
    time--;
  };

  tick(); // Call timer immediately

  // Call the timer every second
  const timer = setInterval(tick, 1000);
};

startLogOutTimer();
