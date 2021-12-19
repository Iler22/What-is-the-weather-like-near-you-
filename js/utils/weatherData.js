import { fetchData } from "./fetchData";

const apiKey = '9030173b33ec8f0bcf39ab0fa1199320';

export async function currentWeatherData(city){
    const currentWeatherURL= `https://api.openweathermap.org/data/2.5/weather?q=Manchester&units=imperial&appid=${apiKey}`;
    const data = await fetchData(currentWeatherURL);
    return data.coord;
    // console.log(data)
}


export async function forecastWeatherData(city){
    const forecastWeatherURL= `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${apiKey}`;
    const forecastData = await fetchData(forecastWeatherURL);
    return forecastData
}



// const postCurrentWeather = async () => {
//     const fetchData = getCurrentWeatherData();
//     const requestUrl = renderWeatherUrl(fetchData);
//     await fetchWeatherData(requestUrl)
//     console.log('finished')
// }

// // postCurrentWeather()

