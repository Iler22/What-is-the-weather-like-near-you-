// import { fetchData } from "./fetchData";
var city = 'city';
var coord = 'coord';
const submitBtn = document.querySelector('.submit.btn');
const form = document.querySelector('.form');
const locationEl = document.querySelector('input.city');
const weatherToday = document.querySelector('weather-today');
const sectionEl = document.querySelector('.section')
const searchContainerEl = document.querySelector('.searchContainer')


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

searchContainerEl = document.createElement("button");
searchContainerEl.innerHTML = "";
document.body.appendChild(btn);





async function currentWeatherData() {
    const currentWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=Manchester&units=imperial&appid=${apiKey}`;
    const response = await fetch(currentWeatherURL);
    const data = await response.json()
    // const lon = data.coord.lon
    // const lat = data.coord.lat
    // console.log(lon)
    // console.log(lat)
    return data
}


async function forecastWeatherData() {
    const forecastWeatherURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;
    const response = await fetch(forecastWeatherURL)
    const data = await response.json()
    // const location = data.city.name
    // console.log(location)
    return data
}

async function getWeatherData() {
    city = await forecastWeatherData();
    console.log(city);
    coord = await currentWeatherData();
    console.log(coord);
    displayWeather(city, coord)
}


// var myVar = displayWeather(city, coord);
// console.log(myVar)
// function displayWeather(city, coord) {
//     const weatherToday = city.name;
//     const forecastWeather = coord;

// }

function displayWeather({ wind, temp, humidity, uvi }, city) {
    const date = moment().format("MM/DD/YY");
    weatherToday.innerHTML = `
    <h2>${city}, ${date}<h2>
    <ul>
    <li>${temp}</li>
    <li>${humidity}</li>
    <li>${wind}</li>
    <li>${uvi}</li>                   
    </ul>
    `;
}


//   console.log(displayWeather())
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
    city = locationEl.value;
    sectionEl.classList.remove("hidden");
}

submitBtn.addEventListener("click", submitFunction)



// displayWeather()