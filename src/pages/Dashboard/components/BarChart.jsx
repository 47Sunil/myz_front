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
import faker from 'faker';

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
  scaleFontColor: 'white',
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    beginAtZero: false,
    x: {
      beginAtZero: false,
      grid: {
        color: '#fff',
        display: false,
      },
      ticks: {
        color: '#fff',
        padding: 10,
        stepSize: 200,
      },
      border: {
        color: '#fff',
      },
    },
    y: {
      beginAtZero: false,
      grid: {
        color: '#504E51',
        drawTicks: false,
      },
      ticks: {
        color: '#fff',
        padding: 10,
        stepSize: 200,
      },
      border: {
        color: '#fff',
      },
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
console.log(faker.datatype.number({ min: 0, max: 1000 }));
export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: [
        'rgba(235, 105, 4, .8)',
        'rgba(89, 52, 195, .8)',
        'rgba(6, 211, 212, .8)',
      ],
      borderRadius: 9,
      barThickness: 30,
    },
  ],
};

const BarChart = () => {
  return (
    <div className='w-full h-full bg-[#1E222D] gap-[20px] rounded-2xl  pt-8 pr-4 max-w-[570px] flex  items-center flex-col shadow-[inset_3px_3px_25px_#2d333d] border border-solid border-[#909094]'>
      <div className='w-full'>
        <span className='text-[#BDB9B9] border border-[#BDB9B9] rounded-lg text-xl  p-2 ml-[50px] font-semibold'>
          AVERAGE ORDER VALUE
        </span>
      </div>
      <Bar
        options={options}
        data={data}
      />
    </div>
  );
};

export default BarChart;
