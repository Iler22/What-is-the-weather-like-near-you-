export async function fetchWeatherData(url) {
    const response = await fetch(url);
    return await response.json()
}
