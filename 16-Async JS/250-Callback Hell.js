'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// SECTION 250: Wellcome to Callback Hell

const renderCountry = function (data, className = '') {
  const html = `<article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
};

const getCountryAndNeighbour = function (country) {
  const request = new XMLHttpRequest();

  // AJAX call country 1
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    console.log(this.responseText);
    // Converting object
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    // Render country
    renderCountry(data);

    // Get neighbour country
    // We use optional chaining to account for countries with no borders property
    const neighbour = data.borders?.[0];
    console.log('neighbour:', neighbour);

    if (!neighbour) return;

    // AJAX call country 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      // Converting object
      const data2 = JSON.parse(this.responseText);
      console.log(data2);

      // Render country
      renderCountry(data2, 'neighbour');
    });

    countriesContainer.style.opacity = 1;
  });
};

//getCountryAndNeighbour('portugal');
getCountryAndNeighbour('finland');
