import React, { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
  },
};

const labels = ['18', '19', '20', '21', '22','23','24','25','26','27','28'];

export const data = {
  labels ,
  datasets: [
      {
          label: 'Temperature',
          data: ['36.1','35.6','36.6','37.8','34.9','35.6','37.7','38.1','36.5','35.7'],
          borderColor: '#ff0d67',
          backgroundColor: 'rgba(255, 99, 132,0.5)',
          borderWidth: 2,
      },
      {
          label: 'Room Temperature',
          data: [36.3,35.8,30.8,30.9,27.9,27.1,25.9,25.0,23.9,24.6],
          borderColor: '#45eaff',
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
          borderWidth: 2
      },
  ],
};

const LineChart = () => {
  const [temperatureData, setTemperatureData] = useState([]);

  useEffect(() => {
    const server = 'http://localhost:4000';
    fetch(`${server}/temperatures`)
      .then(response => response.json())
      .then(data => {
        setTemperatureData(data);
      })
      .catch(error => {
        console.error('Error fetching pulse data:', error);
      });
  }, []);

  const chartData = {
    labels, 
    datasets: [
      {
        label: 'Temperature',
        data: temperatureData,
        borderColor: '#ff0d67',
        backgroundColor: 'rgba(255, 99, 132,0.5)',
        borderWidth: 2,
      },
      {
        label: 'Room Temperature',
        data: [36.3,35.8,30.8,30.9,27.9,27.1,25.9,25.0,23.9,24.6],
        borderColor: '#45eaff',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        borderWidth: 2
    },
     
    ],
  };
  return (
    <div className="chart">
      <h2>Temperature (past 10 days)</h2>
      <Line options={options} data={chartData}/>
    </div>
  )
}

export default LineChart