import React, { useEffect, useState } from 'react';
import database from '../firebaseConfig';
import { ref, onValue } from 'firebase/database';
import { Line } from 'react-chartjs-2';
import chartImage from '../images/chart.jpg';

const ChartPage = () => {
  const [data, setData] = useState({ temperatures: [], humidities: [], timestamps: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const dataRef = ref(database, 'sensorData');
    const unsubscribe = onValue(
      dataRef,
      (snapshot) => {
        const values = snapshot.val();
        if (values) {
          const temperatures = [];
          const humidities = [];
          const timestamps = [];

          for (let key in values) {
            timestamps.push(new Date(values[key].timestamp).toLocaleTimeString());
            temperatures.push(values[key].temperature);
            humidities.push(values[key].humidity);
          }

          setData({ temperatures, humidities, timestamps });
        } else {
          setError('No data available');
        }
        setLoading(false);
      },
      (error) => {
        setError(error.message);
        setLoading(false);
      }
    );

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  const chartData = {
    labels: data.timestamps,
    datasets: [
      {
        label: 'Temperature (°C)',
        data: data.temperatures,
        borderColor: 'rgba(75, 192, 192, 1)',
        fill: false,
      },
      {
        label: 'Humidity (%)',
        data: data.humidities,
        borderColor: 'rgba(153, 102, 255, 1)',
        fill: false,
      }
    ]
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="chart-page">
      <h1>Temperature and Humidity Chart</h1>
      <img src={chartImage} alt="Chart" className="page-image" />
      <p>This is a page where charts about the ups and downs of temperature and humidity are displayed.</p>
      <Line data={chartData} />
    </div>
  );
};

export default ChartPage;
