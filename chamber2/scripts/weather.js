let temperature = document.querySelector('#weatherTemp');
let image = document.querySelector('.temp img');
let speed = document.querySelector('#windspeed');
let windchill = document.querySelector('.windchill');
let description = document.querySelector('#cloudy');
const url = 'https://api.openweathermap.org/data/2.5/weather?q=Veliky Novgorod&units=imperial&appid=6eb57b92da1a81ed613b13a33028117d';

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
         displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();


  function displayResults(weatherData) {
// TEMPERATURE
  temperature.innerHTML = `${((weatherData.main.temp-32)*5/9).toFixed(0)} &degC`
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
//   DESCRIPTION AND IMAGE
    const desc = weatherData.weather[0].description;
//   CAPITALIZE FIRST LETTERS OF EACH WORD
const words = desc.split(" ");
let result = words.map((word) => { 
    return word[0].toUpperCase() + word.substring(1); 
}).join(" ");

  image.setAttribute('src', iconsrc);
  image.setAttribute('alt', result);
description.innerHTML = result;

// WIND SPEED
speed.innerHTML = `${(weatherData.wind.speed*1.60934).toFixed(0)} km/h`;

// WIND CHILL
let t = weatherData.main.temp;
let s = weatherData.wind.speed
let windchill_fahr = 35.74 + 0.6215*t - 35.75*(s**0.16) + 0.4275*t*(s**0.16);
let windchill_cels = (windchill_fahr - 32)*5/9;
if (t<=50 && s>3){
    windchill.innerHTML = `${windchill_cels.toFixed(0)} &degC`;
} 
    else{
        windchill.innerHTML = ' N/A';
    }

  }
