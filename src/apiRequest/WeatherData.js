const myLocation = { lat: -34.639239, lon: -58.504896 };
const myApiKey = '6807cadafaf85785dd46ad1417d1e9e7';

// get weather data
export const getWeatherData = () => {
  return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${myLocation.lat}&lon=${myLocation.lon}&appid=${myApiKey}&units=metric&lang=es
  `)
    .then(res => res.json())
};
