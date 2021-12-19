// import { fetchData } from "./fetchData";
const submitBtn = document.querySelector('btn.submit');
const form = document.querySelector('.form');
const locationEl = document.querySelector('input.city');
const weatherToday = document.querySelector('weather-today');

// let searchCity = [];

const apiKey = '9030173b33ec8f0bcf39ab0fa1199320';

const locationData = {
    name: 'city',
    lon: 'longitude',
    lat: 'latitude',
    main: 'main',
    wind: 'wind',
    uvi: 'uv index'
}

async function currentWeatherData(city) {
    const currentWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=Manchester&units=imperial&appid=${apiKey}`;
    const response = await fetch(currentWeatherURL);
    const data = await response.json()
    const lon = data.coord.lon;
    const lat = data.coord.lat;
    console.log(lon)
    console.log(lat)
}    


async function forecastWeatherData() {
    const forecastWeatherURL = `https://api.openweathermap.org/data/2.5/forecast?q=London&appid=${apiKey}`;
    const response = await fetch(forecastWeatherURL);
    const data = await response.json()
    const location = data.name
    console.log(location)
}


// console.log(forecastWeatherData())
// const postCurrentWeather = async () => {
//     const fetchData = getCurrentWeatherData();
//     const requestUrl = renderWeatherUrl(fetchData);
//     await fetchWeatherData(requestUrl)
//     console.log('finished')
// }

// // postCurrentWeather()

const submitFunction = function (event) {
    event.preventDefault();
    location.name = input.city;
    main.classList.remove("hidden");

submitBtn.addEventListener("click", submitFunction)}

currentWeatherData()
forecastWeatherData()
// displayWeather()