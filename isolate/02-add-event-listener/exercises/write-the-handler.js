'use strict';

// fill in the _s

const buttonEl = document.createElement('button');
buttonEl.innerHTML = 'are you honest?';
console.log(buttonEl.nodeName, buttonEl.cloneNode(true));

const truthTestHandler = () => {
  // ask a user to confirm if they are honest
  const input = prompt('Are you honest?');
  const inputLowerCase = input.toLowerCase();
  // let them know what you think of their answer
  if (inputLowerCase !== 'yes' || inputLowerCase !== 'no') {
    alert('Answer must be "yes" or "no"');
  } else {
    if (inputLowerCase === 'yes') {
      alert("Hum, I don't think so");
    } else {
      alert('You’re one of mine');
    }
  }
};

buttonEl.addEventListener('click', truthTestHandler);

// "click" the button once
const clickEvent1 = new Event('click');
buttonEl.dispatchEvent(clickEvent1);

// "click" the button again
const clickEvent2 = new Event('click');
buttonEl.dispatchEvent(clickEvent2);
