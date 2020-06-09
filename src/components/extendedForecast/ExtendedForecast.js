import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
//compoents
import WeatherDay from './WeatherDay'

const ExtendedForecast = props => {
  const { weatherData } = props
  return <ContentLayout>
    {
      weatherData && weatherData.map((dayData, i) => <WeatherDay key={i} {...dayData} />)
    }
  </ContentLayout>
};

const ContentLayout = styled.div`
  display:flex;
  flex-wrap:wrap;
  /* justify-content: space-around; */
`;

export default ExtendedForecast;
