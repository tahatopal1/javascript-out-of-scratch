'use strict';

// 404 Response is not error but is simply a response, so it cannot be catched inside catch block
// In such cases, we have to throw error manually

const btn = document.querySelector('.btn-country');
btn.style.visibility = 'visible';
const countriesContainer = document.querySelector('.countries');

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

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(res => {
    if (!res.ok) throw new Error(`${errorMsg} (${res.status})`);
    return res.json();
  });
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
};

const getCountryData = function (country) {
  // Country 1
  getJSON(`https://restcountries.com/v2/name/${country}`, `Country not found!`)
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0]?.borders[0];
      //const neighbour = '1fasdf';
      if (!neighbour) throw new Error('No neighbour found');
      // Country 2
      return getJSON(
        `https://restcountries.com/v2/alpha/${neighbour}`,
        `Country not found!`
      );
    })
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      console.error(`${err} 💥💥💥`);
      renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
    }) // Another handling option, catches any error in this chain
    .finally(() => (countriesContainer.style.opacity = 1));
};

btn.addEventListener('click', () => getCountryData('australia'));
//btn.addEventListener('click', () => getCountryData('adsfsdf'));
