import { currentWeatherData, forecastWeather } from "./weatherData";


const currentWeather = document.querySelector('.weather-today');
const weatherForecast = document.querySelector('.forecast')

async function getWeaherData(city) {
    const coords = await currentWeatherData(city);
    const forecastData = await forecastWeatherData(coords);
    displayWeather(city, forecastData)
}

function displayWeather(city, weatherData) {
    const todayWeather = weatherData;
    const forecastWeather = weatherData;
    displayWeatherToday(city, todayWeather);
    displayForecastWeather(forecastWeather);
}
