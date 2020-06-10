import React from 'react';
import styled from 'styled-components';
//icons
import { WiThermometer, WiThermometerExterior, WiStrongWind, WiHumidity } from 'react-icons/wi'

const WeatherDay = props => {
  const { icon, humidity, max, min, wind_speed, date } = props
  return <ContentLayout>
    <div className='date-layout'>{date || '-'}</div>
    <div className='data-container'>
      < img
        src={`http://openweathermap.org/img/wn/${icon || '01n'}@2x.png`}
        alt='Icono del clima'
        className='img-layout'
      />
      <div className='measures-layout'>
        <div className='max-layout'><WiThermometer />{max || '-'}°C</div>
        <div className='min-layout'><WiThermometerExterior />{min || '-'}°C</div>
        <div className='humidity-layout'><WiStrongWind />{humidity || '-'}%</div>
        <div className='wind_speed-layout'><WiHumidity />{wind_speed || '-'} Km/h</div>
      </div>
    </div>
  </ContentLayout>
};

const ContentLayout = styled.div`
  min-width:13rem;
  
  .img-layout{
    flex:1;
  }

  .measures-layout{
    flex:1;
  }

  .date-layout{
    text-transform:capitalize;
    font-weight:bold;
    text-align:center;
  }

  .data-container{
    display:flex;
    align-items: center;
    svg{
      margin-right:.5rem;
    }
  }
`;

export default WeatherDay;
