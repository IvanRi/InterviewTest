import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const CurrentWeather = props => {
  const { weatherData } = props
  return <ContentLayout>
    {weatherData ? weatherData.date : '- -'}
    {weatherData ? weatherData.temp : 0}
  </ContentLayout>
};

const ContentLayout = styled.div`
  
`;

export default CurrentWeather;
