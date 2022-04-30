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
  console.log('CONTAINER', e.target, e.currentTarget); // target = where the event first happened
});

document.querySelector('.nav').addEventListener(
  'click',
  function (e) {
    this.style.backgroundColor = randomColor();
    console.log('NAV', e.target, e.currentTarget); // target = where the event first happened
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

// ---- SECTION 193 ----
// ---- DOM Traversing ----

// Going downwards: child
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes); // Nodes
console.log(h1.children); // HTML Collection

h1.firstElementChild.style.color = 'white'; // HTML element
h1.lastElementChild.style.color = 'black'; // HTML element

// Going upwards: parents
console.log(h1.parentNode); // parent is: header__title
console.log(h1.parentElement); // parent is: header__title again

// gives header node
h1.closest('.header').style.background = 'var(--gradient-secondary)';

// gives the element itself
h1.closest('h1').style.background = 'var(--gradient-primary)';

// Going sideways: siblings
// We can only access direct siblings
console.log(h1.previousElementSibling); // null: h1 is the first element of its parent
console.log(h1.nextElementSibling);

console.log(h1.previousSibling); // returns node
console.log(h1.nextSibling);

// Traversing all siblings
console.log(h1.parentElement.children); // All sibling including itself

// Packing children and excluding h1
[...h1.parentElement.children].forEach(function (el) {
  el !== h1 && (el.style.transform = 'scale(0.5)');
});

// ---- SECTION 194 ----
// ---- Tabbed Component ----
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

//tabs.forEach(t => t.addEventListener('click', () => console.log('Tab')));

// Using event delegation
// Altough you click span, it will indicate button
tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  // Guard clause
  clicked && clicked.classList.add('operations__tab--active');

  // Remove active class
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  // Activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

// ---- SECTION 195 ----
// ---- Passing Arguments to Event Handlers ----

// Menu fade animation
// For event delegation, chosen parent is: nav

// Function for clean code
const changeOpacity = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');
    siblings.forEach(el => {
      el !== link && (el.style.opacity = this);
    });
    logo.style.opacity = this;
  }
};

const nav = document.querySelector('.nav');

/*nav.addEventListener('mouseover', function (e) {
  changeOpacity(e, 0.5);
});

nav.addEventListener('mouseout', function (e) {
  changeOpacity(e, 1);
});*/

// With bind method
nav.addEventListener('mouseover', changeOpacity.bind(0.5));
nav.addEventListener('mouseout', changeOpacity.bind(1));

// ---- SECTION 196 ----
// ---- Scroll Event ----

// Sticky navigation
const initialCoords = section1.getBoundingClientRect();

/*window.addEventListener('scroll', function () {
  console.log(window.scrollY);
  if (window.scrollY > initialCoords.top) {
    nav.classList.add('sticky');
  } else nav.classList.remove('sticky');
});*/
//nav.classList.add('sticky');

// ---- SECTION 197 ----
// ---- Better way to Sticky Navigation: Intersection Observer API ----
const obsCallback = function (entries, observer) {
  // Will get called on scrolling (instersection)
  // Array of threshold entries
  entries.forEach(entry => {
    console.log('Observing section1: ');
    console.log(entry);
  });
};
const obsOptions = {
  root: null, // root element the target will intersect (null = intersecting the whole viewport)
  //threshold: 0.1, // intersecting %10 of viewport

  // 0 percent: Our callback will trigger each time that the target element moves completely out of the view, also as soon as it enters the view
  // 100 percent (1): callback will only be called when %100 percent of target is actually visible in viewport
  threshold: [0, 0.2], // intersecting %10 of viewport
};

const observer = new IntersectionObserver(obsCallback, obsOptions);
observer.observe(section1); // section 1 is target

const navHeight = nav.getBoundingClientRect().height;
// Observing header to make it sticky
const stickyNav = function (entries) {
  const [entry] = entries; // entry = entries[0]
  console.log('Observing header: ');
  console.log(entry);
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  //rootMargin: '-90px', // Navigation will appear 90 pixels before the header goes off
  rootMargin: `-${navHeight}px`, // Navigation will appear 90 pixels before the header goes off
});
headerObserver.observe(header);

// ---- SECTION 198 ----
// ---- Revealing Elements on Scroll ----

// Reveal sections
const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

// ---- SECTION 199 ----
// ---- Lazy Loading Images ----

// Very good for performance
const imgTargets = document.querySelectorAll('img[data-src]');
console.log(imgTargets);

const loadImg = function (entries, observer) {
  const [entry] = entries;
  console.log('Observing image: ');
  console.log(entry);
  if (!entry.isIntersecting) return;
  // Replace src with data-src
  entry.target.src = entry.target.dataset.src;

  // Removing the blur as soon as picture is fully loaded
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target); // No longer needed
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '-200px', // We won't see any delay once we declare this
});
imgTargets.forEach(img => imgObserver.observe(img));

// ---- SECTION 200 ----
// ---- Slider Component Part 1 ----

// Slider
const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const maxSlide = slides.length;
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');

  let curSlide = 0;

  const createDots = function () {
    slides.forEach(function (_s, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));
    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  // Previous slide
  const prevSlide = function name() {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  // Slider init
  const init = function () {
    goToSlide(0);
    createDots();
    activateDot(0);
  };

  init();

  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  const slider = document.querySelector('.slider');
  slider.style.transform = 'scale(0.5)';

  // ---- SECTION 201 ----
  // ---- Slider Component Part 2 ----
  document.addEventListener('keydown', function (e) {
    console.log(e);
    e.key === 'ArrowLeft' && prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  });

  // Event delegation
  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};

slider();

// ---- SECTION 202 ----
// ---- Lifecycle DOM Events ----

// DOMContentLoaded: This event is fired by the document as soon as the html completely parsed
// Which means that the HTML has been downloaded and been converted to the DOM tree
// Also all scripts must be downloaded and executed before the DOMContentLoaded event can happen

// Does not wait for images and other for external resources to load
document.addEventListener('DOMContentLoaded', function (e) {
  console.log('HTML parsed and DOM tree built!', e);
});

// load: Fired by the window as soon as not only html is parsed, but also all the images and external sources like CSS files are also loaded
window.addEventListener('load', function (e) {
  console.log('Page fully loaded', e);
});

// beforeunload: Is created immediately before a user is about to leave a page
/*window.addEventListener('beforeunload', function (e) {
  e.preventDefault();
  console.log(e);
  e.returnValue = '';
});*/
