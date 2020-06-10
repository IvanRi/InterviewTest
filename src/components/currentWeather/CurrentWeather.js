import React from 'react';
import styled from 'styled-components';
//icons
import { WiUmbrella, WiThermometer, WiThermometerExterior, WiStrongWind, WiHumidity } from 'react-icons/wi'
//components
import LineChart from '../common/LineChart'

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
    <div className='graph-layout'>
      <LineChart data={weatherData && weatherData.graphData} />
    </div>
  </ContentLayout >
};

const ContentLayout = styled.div`
  height:100%;
  display:flex;
  align-items: center;
  flex-wrap:wrap;
  justify-content: center;

  .graph-layout{
    min-width:50%;
  }

  .current-container{
    color:#F2542D;
    font-weight:bold;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    min-width:30%;
    height:18rem;
  }

  .current-temp{
    font-size: 2rem;
  }

  .current-date{
    font-size: 1.5rem;
    text-transform: capitalize;
  }

  .info-list{
    min-width: 20%;
    height:18rem;
    font-size: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
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

  @media (max-width: 1000px) {
    .graph-layout{
      min-width:100%;
    }
  }

  @media (min-width: 1001px) {
    .graph-layout{
      width:50%;
    }
  }
`;

export default CurrentWeather;
