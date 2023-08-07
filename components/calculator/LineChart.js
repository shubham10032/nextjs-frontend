import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
// import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const  LineChart =({ rows,selectedYear }) =>{
 const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const datasets = Object.keys(rows).map((year) => {
    const data = rows[year].rows.map((row) => ({ x: row.paymentDate, y: row.balance }));
    return {
        label: year,
        data: selectedYear === '' ? data : data.filter((d) => d.x.includes(selectedYear)),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        fill: false,
    };
});


const chartData = {
    datasets,
};


  return <Bar data={chartData} options={options} />;
}

export default LineChart
