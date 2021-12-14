// This function renders weather conditions for a given city

export const renderWeatherUrl = (city) => {
    const apiKey = '9030173b33ec8f0bcf39ab0fa1199320';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    return url;
};





