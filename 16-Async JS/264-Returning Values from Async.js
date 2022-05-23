'use strict';

'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
countriesContainer.style.opacity = 1;

// FUNCTIONS FROM PREVIOUS CHAPTERS //
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

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject(err)
    // );
    // Even simpler way
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
};
// FUNCTIONS FROM PREVIOUS CHAPTERS //

// Now, this is a asynchronous function and will return a Promise
const whereAmI = async function () {
  try {
    // Geolocation
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    // Reverse geocoding
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    if (!resGeo.ok) throw new Error('Problem getting location data');
    const dataGeo = await resGeo.json();
    // Country data

    const res = await fetch(
      `https://restcountries.com/v2/name/${dataGeo.country}`
    ); // This will wait until the data is fetched
    if (!res.ok) throw new Error('Problem getting location country');
    const data = await res.json();
    renderCountry(data[0]);

    return `You are in ${dataGeo.city}, ${dataGeo.country}`;
  } catch (err) {
    console.error(err);
    renderError(`Something went wrong 💩 ${err.message}`);
    // Eventhough we have an error in try block it will fullfilled since we handle it in catch block. So we should throw an error again inside the catch block
    throw err;
  }
};

console.log('1: Will get location');

// whereAmI()
//   .then(city => console.log(`2: ${city}`))
//   .catch(err => console.error(`2: ${err.message} 💩`))
//   .finally(() => console.log('3: Finished getting location'));

// If we don't want to mix up the async/await and promise/then concepts, we can convert the chain above to a IIFE

(async function () {
  try {
    const city = await whereAmI();
    console.log(`2: ${city}`);
  } catch (err) {
    console.error(`2: ${err.message} 💩`);
  }
  console.log('3: Finished getting location');
})();
