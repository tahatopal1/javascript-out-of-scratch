'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// ---- SECTION 186 ----
console.log(document.documentElement); // Entire HTML page
console.log(document.head); // head
console.log(document.body); // body

const header = document.querySelector('.header'); // Selects the first element has 'header' class
const allSection = document.querySelectorAll('.section'); // Select all elements has 'section' class
console.log(allSection);

document.getElementById('section--1'); // Only pass the id value
const allButtons = document.getElementsByTagName('button'); // Gets all buttons
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

// Creating and inserting elements
// .insertAdjacentHTML
const message = document.createElement('div');
message.classList.add('cookie-message');
message.textContent =
  'We use cookies for improved functionality and analytics.';
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class = "btn btn--close-cookie">Got it</button>';

// This will also add message below
//header.prepend(message); // first child
header.append(message); // last child

// Makes it doubled
//header.prepend(message.cloneNode(true)); // True: Enables to clone all inner elements

header.before(message); // Adds before the header
//header.after(message); // Adds after the header

// Deleting elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
  });

// ---- SECTION 187 ----

// Styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

// Reading styles (only can read inline style)
console.log(message.style.backgroundColor);
console.log(getComputedStyle(message)); // All of the properties
console.log(getComputedStyle(message).color); // A certain property
console.log(getComputedStyle(message).height); // A certain property

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';

// Custom CSS properties
document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

// Non-Standart Attributes
console.log(logo.designer); // Prints undefined
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Bankist');

console.log(logo.src); // Absolute version
console.log(logo.getAttribute('src')); // Relative version

let link = document.querySelector('.twitter-link');
console.log(link.href);
console.log(link.getAttribute('href')); // They are both absolute anyways

link = document.querySelector('.nav__link--btn');
console.log(link.href); // absolute
console.log(link.getAttribute('href')); // relative

// Data attributes
console.log(logo.dataset.versionNumber);

// Classes
logo.classList.add('c', 'j');
logo.classList.remove('c', 'j');
logo.classList.toggle('c');
logo.classList.contains('c');

// Don't use, overrides all the existing classes and also allows us to only put one class
//logo.className = 'jonas'
