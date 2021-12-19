const submitBtn = document.querySelector('btn.submit');
const form = document.querySelector('.form');
const locationEl = document.querySelector('input.city');
const currentDate = moment().format("MM/DD/YY")

let searchCity = [];



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