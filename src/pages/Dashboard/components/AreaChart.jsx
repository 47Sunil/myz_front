import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
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
    x: {
      beginAtZero: true,
      grid: {
        color: '#fff',
        display: false,
      },
      ticks: {
        color: '#fff',
        padding: 10,
        stepSize: 200,
        font: {
          family: 'Poppins',
        },
      },
      border: {
        color: '#fff',
      },
    },
    y: {
      grid: {
        color: '#504E51',
        drawTicks: false,
      },
      ticks: {
        color: '#fff',
        padding: 10,
        stepSize: 200,
        font: {
          family: 'Poppins',
        },
      },
      border: {
        color: '#fff',
      },
    },
  },
};
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: 'rgb(56,10,185)',
      backgroundColor: (context) => {
        const ctx = context.chart.ctx;
        const gradient = ctx.createLinearGradient(0, 0, 0, 400);
        gradient.addColorStop(0, 'rgba(61,43,114,1)');
        gradient.addColorStop(1, 'rgba(61,43,114,0)');
        return gradient;
      },
      pointBackgroundColor: '#ffffff',
    },
  ],
};
const AreaChart = () => {
  return (
    <div className='w-full h-full bg-[#1E222D] gap-[20px] rounded-2xl  p-[2rem_1rem_1rem_1rem]  flex  items-center flex-col shadow-[inset_3px_3px_25px_#2d333d] border border-solid border-[#909094]'>
      <div className='w-full'>
        <span className='text-[#BDB9B9] border border-[#BDB9B9] rounded-lg text-xl  p-2 ml-[50px] font-semibold'>
          AVERAGE ORDER VALUE
        </span>
      </div>
      <div
        className='w-full h-full flex justify-center items-center
      '
      >
        <Line
          options={options}
          data={data}
        />
      </div>
    </div>
  );
};

export default AreaChart;
