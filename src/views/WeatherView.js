import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
//get data endpoints
import { getWeatherData } from '../apiRequest/WeatherData'
//components
import ContentCard from '../components/common/ContentCard';
import Dropdown from '../components/common/Dropdown';
import CurrentWeather from '../components/currentWeather/CurrentWeather';
//utils
import { formatedTime } from '../utils/timeHandlers'

const WeatherView = () => {
  const [locationWeather, setLocationWeather] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    _getCurrentWeatherData()
  }, []);

  const _getCurrentWeatherData = async () => {
    setIsLoading(true)
    const res = await getWeatherData()
    setIsLoading(false)
    //formateo y guardo la informacion en su estado correspondiente
    const formatedCurrentData = {
      current: formatCurrentWeatherData(res),
      extended: formatExtendedWeatherData(res)
    }
    console.log('res', res)
    setLocationWeather(formatedCurrentData)
  };

  const formatCurrentWeatherData = data => {
    //TODO: falta agregar mas datos para completar el componente
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
      min
    }
  }

  const formatExtendedWeatherData = data => {
    //cut the obsolete elements
    const dailyData = [...data.daily].slice(1, 6)
    const formatedData = dailyData.map((item, i) => {
      const { dt, humidity, temp, wind_speed, feels_like } = item
      return { date: formatedTime(dt), humidity, temp, wind_speed, feels_like }
    })
    return formatedData
  }

  return <ViewLayout>
    <div className='header'>
      <h2>Clima actual</h2>
      <ContentCard isLoading={isLoading} className='drop-container'>
        <div className='drop-label'>
          Ubicación:
        </div>
        <Dropdown
          initialValue="Ordenar por"
          handleChange={item => console.log('item', item)}
          items={['Buenos Aires', 'Nueva York', 'Lima', 'Bogota', 'Londres']}
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
      CLIMA EXTENDIDO
    </ContentCard>
  </ViewLayout>
};

const ViewLayout = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

  width:100%;
  max-width:70rem;
  margin: 1rem 0;
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
    height: 15rem;
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
`;

export default WeatherView;
