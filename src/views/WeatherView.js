import React from 'react';
import styled from 'styled-components';

const WeatherView = () => {
  return <ViewLayout>
    Este es mi espacion para el clima
  </ViewLayout>
};

const ViewLayout = styled.div`
  background-color:white;
  width:100%;
  max-width:70rem;
  max-height:30rem;
  margin: 2rem 0;
  border-radius:.5rem;
  box-shadow: 2px 3px 13px -6px rgba(0,0,0,0.75);
`;

export default WeatherView;
