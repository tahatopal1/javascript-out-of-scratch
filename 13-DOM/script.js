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
// ---- Selecting, Creating and Deleting Elements ----

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
// ---- Styles, Attributes and Classes ----

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

// ---- SECTION 188 ----
// ---- Implementing Smooth Scrolling ----

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);
  console.log(e.target.getBoundingClientRect()); // target = btnScrollTo
  console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset); // Current scroll position
  console.log(
    'height/width viewport', // viewport = visible area of the page, it can shrink
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  // Scrolling
  //window.scrollTo(s1coords.left, s1coords.top); // Relative to viewPort, not works accurately everytime
  /*  /window.scrollTo(
    s1coords.left + window.pageXOffset,
    s1coords.top + window.pageYOffset
  );*/ // This is the solution, this gives us the absolute solution

  // More enhanced way
  /*window.scrollTo({
    left: s1coords.left + window.pageXOffset,
    top: s1coords.top + window.pageYOffset,
    behavior: 'smooth', // Ensures a smooth scrolling
  });*/

  // Even more modern way :)
  section1.scrollIntoView({ behavior: 'smooth' });
});

const h1 = document.querySelector('h1');
const alertH1 = function (e) {
  alert('addEventListener: Great! You are reading the heading :)');
  h1.removeEventListener('mouseenter', alertH1); // Ensures to work 'alertH1' only for once
};
h1.addEventListener('mouseenter', alertH1);

// Another way to attaching an event listener
/*h1.onmouseenter = function (e) {
  alert('addEventListener: Great! You are reading the heading :)');
};*/

// addEventListener is better because:
// addEventListener allows us to multiple event listener whereas direct attaching overrides all eventlisteners with only single one

// Second one and even more important is that we can actually remove event handler that we don't need anymore

// ---- SECTION 191 ----
// ---- Event Propogation ----
// rgb(255,255,255)
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
console.log(randomColor());

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor(); // this == document.querySelector('.nav__link')
  console.log('LINK', e.target, e.currentTarget); // target = where the event first happened
  console.log(e.currentTarget === this);

  // Stop propogation
  e.stopPropagation(); // It's that simple
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('LINK', e.target, e.currentTarget); // target = where the event first happened
});

document.querySelector('.nav').addEventListener(
  'click',
  function (e) {
    this.style.backgroundColor = randomColor();
    console.log('LINK', e.target, e.currentTarget); // target = where the event first happened
  },
  false
); // true => no longer listens bubbling phase, it listens capturing phase instead
// It is false by default anyways
// So if true, NAV will be showed down first on the console logs

// ---- SECTION 192 ----
// ---- Event Delegation ----

// Page navigation

/*document.querySelectorAll('.nav__link').forEach(function (el) {
  el.addEventListener('click', function (e) {
    e.preventDefault();
    const id = this.getAttribute('href'); // #section1, #section2, #section3 ids
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  });
}); */ // If we have 1000 of component like this, it means 1000 copies of this event listener. It will definitely affect the performance

// Better solution: Event delegation

// 1st step: Add event listener to a common parent element
// 2st step: Detemine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  // Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});
