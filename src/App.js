import React from 'react';
import styled from 'styled-components';
//view components
import WeatherView from './views/WeatherView';

const App = () => {
  return <AppLayout className="App">
    <WeatherView />
  </AppLayout>
};

const AppLayout = styled.div`
  background-color: whitesmoke;
  width: 100%;
  height:100vh;
  display: flex;
  justify-content: center;
`;

export default App;
