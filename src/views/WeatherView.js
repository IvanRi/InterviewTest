import React from 'react';
import styled from 'styled-components';
//components
import ContentCard from '../components/common/ContentCard';
import Dropdown from '../components/common/Dropdown';

const WeatherView = () => {
  return <ViewLayout>
    <div className='header'>
      <h2>Clima actual</h2>
      <ContentCard className='drop-container'>
        <Dropdown
          initialValue="Ordenar por"
          handleChange={item => console.log('item', item)}
          items={['Buenos Aires', 'Nueva York', 'Lima', 'Bogota', 'Londres']}
        />
      </ContentCard>
    </div>
    <ContentCard>
      CLIMA ACTUAL
    </ContentCard>
    <div className='header'>
      <h2>Pronostico extendido</h2>
    </div>
    <ContentCard>
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

  .drop-container{
    padding:.5rem;
  }
`;

export default WeatherView;
