const url = 'https://api.openweathermap.org/data/2.5/weather?lat=11.0064&lon=124.6075&appid=545ccaec5b3b8e0dacbfbbf59bb64c31'
const weather = document.querySelector('.weather-center')

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        // console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
}
  
apiFetch();


function  displayResults(weatherData) {

    let card = document.getElementById('weather')
    let currentTemperature = document.createElement('p');
    let weatherIcn = document.createElement('img');
    let captionDesc = document.createElement('figcaption');
    let windSpeed = document.createElement('p');
    let wind = document.createElement('p');

    const tF = weatherData.main.temp.toFixed(0);
    currentTemperature.innerHTML = `Current temperature is <strong>${tF}&deg;F</strong>`;

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;

    weatherIcn.setAttribute('src', iconsrc);
    weatherIcn.setAttribute('alt', desc);
    weatherIcn.setAttribute('class', 'weatherIcon')

    const smH = weatherData.wind.speed;

    if (tF <= 50 && smH > 3) {
        const windC = windChill(tF,smH);
        wind.textContent = `Wind Chill: ${windC.toFixed(1)}`;
    }
    else {
        wind.textContent = `Wind Chill: N/A`;
}

windSpeed.innerHTML = `Speed: ${smH}`;

card.appendChild(currentTemperature);
card.appendChild(weatherIcn);
card.appendChild(captionDesc);
card.appendChild(windSpeed);
card.appendChild(wind);
document.querySelector('div.weather-center').appendChild(card);
}

function windChill(tF, smH) {
    const f = 35.74 + 0.6215 * tF - 35.75 * (smH**0.16) + 0.4275 * tF * (smH**0.16)
    return f
}