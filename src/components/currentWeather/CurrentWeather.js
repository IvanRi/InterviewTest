import React from 'react';
import styled from 'styled-components';
//icons
import { WiUmbrella, WiThermometer, WiThermometerExterior, WiStrongWind, WiHumidity } from 'react-icons/wi'

const CurrentWeather = props => {
  const { weatherData } = props
  return <ContentLayout>
    <div className='current-container'>
      <div className='current-date'>
        {weatherData ? weatherData.date : '-'}
      </div>
      <img src={`http://openweathermap.org/img/wn/${weatherData ? weatherData.icon : '01n'}@2x.png`} alt='Icono del clima' />
      <div className='current-temp'>
        {weatherData ? weatherData.temp : 0}°C
      </div>
    </div>
    <div className='info-list'>
      <div className='caption-container'><WiUmbrella />{weatherData ? weatherData.description : '-'}</div>
      <div><WiThermometer />{weatherData ? weatherData.max : 0}°C</div>
      <div><WiThermometerExterior />{weatherData ? weatherData.min : 0}°C</div>
      <div><WiStrongWind />{weatherData ? weatherData.wind_speed : 0} Km/h</div>
      <div><WiHumidity />{weatherData ? weatherData.humidity : 0}%</div>
    </div>
  </ContentLayout >
};

const ContentLayout = styled.div`
  height:100%;
  display:flex;

  .current-container{
    color:#F2542D;
    font-weight:bold;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    width:25%;
    height:100%;
  }

  .current-temp{
    font-size: 2rem;
  }

  .current-date{
    font-size: 1.5rem;
    text-transform: capitalize;
  }

  .info-list{
    width: 25%;
    font-size: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    div{
      display:flex;
      align-items:center;
    }
    svg{
      margin-right:1rem;
    }
  }

  .caption-container{
    text-transform:capitalize;
  }
`;

export default CurrentWeather;
