import React from 'react';
import styled from 'styled-components';
import { Line } from 'react-chartjs-2';

const LineChart = props => {
  const { data } = props

  const initialState = {
    labels: data ? data.labels : [],
    datasets: [
      {
        label: 'Temperatura',
        lineTension: 0.1,
        backgroundColor: '#f2542d85',
        borderColor: '#F2542D',
        borderDash: [],
        borderDashOffset: 0.0,
        borderCapStyle: 'butt',
        borderJoinStyle: 'miter',
        pointBorderColor: '#F2542D',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: '#F2542D',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: data ? data.dataset : []
      }
    ]
  };

  return <ContentLayout>
    <h3>Temperatura proximas 24hrs</h3>
    <Line data={initialState} legend={{ display: false }} />
  </ContentLayout>
};

const ContentLayout = styled.div`
  
`;

export default LineChart;
