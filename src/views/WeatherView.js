import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useMediaLayout } from 'use-media';
//get data endpoints
import { getWeatherData } from '../apiRequest/WeatherData';
//components
import ContentCard from '../components/common/ContentCard';
import Dropdown from '../components/common/Dropdown';
import CurrentWeather from '../components/currentWeather/CurrentWeather';
import ExtendedForecast from '../components/extendedForecast/ExtendedForecast';
//utils
import { formatedTime, formatedHourlyGraphTime } from '../utils/timeHandlers';

const WeatherView = () => {
  const [locationWeather, setLocationWeather] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [cityCoord, setCityCoord] = useState({ lat: -34.639239, lon: -58.504896 })
  const isWide = useMediaLayout({ minWidth: 1000 });

  useEffect(() => {
    _getCurrentWeatherData()
    console.log("WIDE", isWide)
  }, [cityCoord]);

  const _getCurrentWeatherData = async () => {
    setIsLoading(true)
    const res = await getWeatherData(cityCoord)
    setIsLoading(false)
    //formateo y guardo la informacion en su estado correspondiente
    const formatedCurrentData = {
      current: formatCurrentWeatherData(res),
      extended: formatExtendedWeatherData(res)
    }
    setLocationWeather(formatedCurrentData)
  };

  const formatCurrentWeatherData = data => {
    const { dt, humidity, temp, wind_speed, weather } = data.current
    const { max, min } = data.daily[0].temp
    return {
      date: formatedTime(dt),
      humidity,
      temp,
      wind_speed,
      icon: weather[0].icon,
      description: weather[0].description,
      max,
      min,
      graphData: formatGraphData(data.hourly.slice(0, 24))
    }
  }

  const formatGraphData = data => {
    const labels = data.map(item => formatedHourlyGraphTime(item.dt))
    const dataset = data.map(item => item.temp)
    return { labels, dataset }
  }

  const formatExtendedWeatherData = data => {
    //cut the obsolete elements
    const dailyData = [...data.daily].slice(1, 6)
    const formatedData = dailyData.map((item, i) => {
      const { dt, humidity, temp, wind_speed, weather } = item
      return {
        date: formatedTime(dt),
        humidity,
        min: temp.min,
        max: temp.max,
        wind_speed,
        icon: weather[0].icon
      }
    })
    return formatedData
  }

  const handleCityChange = cityCoord => {
    setCityCoord(cityCoord)
  }

  return <ViewLayout>
    <div className='header'>
      <h2>Clima actual</h2>
      <ContentCard isLoading={isLoading} className='drop-container'>
        <div className='drop-label'>
          Ubicación:
        </div>
        <Dropdown
          initialValue="Buenos aires"
          handleChange={value => handleCityChange(value)}
          items={[
            { label: 'Montevideo', value: { lat: -34.8207362, lon: -56.3765246 } },
            { label: 'Londres', value: { lat: -34.639239, lon: -0.3817841 } },
            { label: 'Nueva York', value: { lat: 40.6643, lon: -73.9385 } },
            { label: 'Tokio', value: { lat: 35.6894, lon: 139.692 } },
            { label: 'Sydney', value: { lat: -33.8667, lon: 151.2 } },
            { label: 'Buenos Aires', value: { lat: -34.639239, lon: -58.504896 } }
          ]}
        />
      </ContentCard>
    </div>
    <ContentCard isLoading={isLoading} className='current-styles'>
      <CurrentWeather weatherData={locationWeather && locationWeather.current} />
    </ContentCard>
    <div className='header'>
      <h2>Pronostico extendido</h2>
    </div>
    <ContentCard isLoading={isLoading}>
      <ExtendedForecast weatherData={locationWeather && locationWeather.extended} />
    </ContentCard>
  </ViewLayout>
};

const ViewLayout = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

  width:100%;
  max-width:70rem;
  margin: 1rem .5rem;
  font-family: 'Roboto', sans-serif;
  color:grey;

  .header{
    display:flex;
    align-items:center;
    justify-content:space-between;
    h2{
      margin:1rem 0;

    }
  }

  .current-styles{
    min-height: 17rem;
  }

  .drop-container{
    padding: .2rem .5rem;
    display:flex;
    align-items:center;
    .drop-label{
      margin-right:.5rem;
      font-weight:bold;
    }
  }

  @media (max-width: 1000px) {
    .header{
      flex-direction: column;
      margin-bottom:1rem;
    }
  }
`;

export default WeatherView;
