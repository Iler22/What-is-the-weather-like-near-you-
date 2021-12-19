const submitBtn = document.querySelector('btn.submit');
const form = document.querySelector('.form');
const locationEl = document.querySelector('input.city');
const currentDate = moment().format("MM/DD/YY")

let searchCity = [];



async function displayWeather() {
  const date = moment().format("MM/DD/YY");
  weatherToday.innerHTML = `
  <h2>${location}, ${date}<h2>
  <p>${location.main.temp}<p>
  <p>${location.main.humidity}<p>
  <p>${location.wind}<p>
  <p>${location.uvi}                      
  `;
}


// console.log(coords.value)
// form.addEventListener('submit', async function (e) {
//         e.preventDefault();
//         const locationName = locationEl.value;
     
// });


// let btn = document.createElement("button");
// btn.innerHTML = "Click Me";
// document.body.appendChild(btn);

// async function displayWeather() {
//     try {
//         const url = renderWeatherUrl(city);
//         const coords = await fetchWeatherData(url);
//         return locationEl
//     } catch (error) {
//         console.log(error);
//     }