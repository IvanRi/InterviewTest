const myApiKey = '6807cadafaf85785dd46ad1417d1e9e7';

// get weather data
export const getWeatherData = coord => {
  return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${coord.lat}&lon=${coord.lon}&appid=${myApiKey}&units=metric&lang=es`)
    .then(res => res.json())
};
