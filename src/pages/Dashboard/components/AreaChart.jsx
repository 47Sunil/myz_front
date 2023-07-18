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
import { Menu, Transition } from '@headlessui/react';
import { IoMdArrowDropdown } from 'react-icons/io';
import { Fragment, useState } from 'react';
import { usePageViewsData } from '../../../actions/Dashboard';

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
// export const options = {
//   responsive: true,
//   scaleFontColor: 'black',
//   plugins: {
//     legend: {
//       display: true,
//     },
//   },
//   scales: {
//     x: {
//       // beginAtZero: true,
//       grid: {
//         color: '#000',
//         display: false,
//       },
//       ticks: {
//         color: '#000',
//         padding: 10,
//         stepSize: 200,
//         font: {
//           family: 'Poppins',
//         },
//       },
//       border: {
//         color: '#000',
//       },
//     },
//     y: {
//       grid: {
//         color: '#504E51',
//         drawTicks: false,
//       },
//       ticks: {
//         color: '#000',
//         padding: 10,
//         stepSize: 200,
//         font: {
//           family: 'Poppins',
//         },
//       },
//       border: {
//         color: '#000',
//       },
//     },
//   },
// };

export const options = {
  responsive: true,
  scaleFontColor: 'black',
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Page Views',
    },
  },
};
const dateToDay = (dateStr) => {
  const date = new Date(dateStr);
  const options = { day: 'numeric', month: 'long' };
  const formattedDate = date.toLocaleDateString('en-US', options);

  return formattedDate;
};
const AreaChart = () => {
  const [lastUsedDays, setLastUsedDays] = useState('7');
  const arr = ['Last 7 days', 'Last 15 days', 'Last 30 days'];
  const [graphFilter, setGraphFilter] = useState('Last 7 days');
  const handleGraphFilter = (item) => {
    setGraphFilter(item);
    const days = graphFilter.split(' ')[1];
    setLastUsedDays(days);
  };
  console.log(lastUsedDays);
  const { data, isFetching } = usePageViewsData(lastUsedDays);
  console.log(data?.data);
  const labels = data?.data.map((item) => dateToDay(item.day));
  console.log(labels);
  const graphData = {
    labels,
    datasets: [
      {
        label: 'Views',
        data: !isFetching && data?.data.map((itemVisit) => itemVisit.visits),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Unique Visits',
        data: !isFetching && data?.data.map((itemVisit) => itemVisit.unique),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  // const graphData = {
  //   labels,
  //   datasets: [
  //     {
  //       fill: true,
  //       label: 'Visits',
  //       data: data?.data,
  //       borderColor: 'rgb(56,10,185)',
  //       backgroundColor: (context) => {
  //         const ctx = context.chart.ctx;
  //         const gradient = ctx.createLinearGradient(0, 0, 0, 400);
  //         gradient.addColorStop(0, 'rgba(61,43,114,1)');
  //         gradient.addColorStop(1, 'rgba(61,43,114,0)');
  //         return gradient;
  //       },
  //       pointBackgroundColor: '#ffffff',
  //     },
  //   ],
  // };

  return (
    <div className='rounded-[13px] bg-white w-full h-full flex flex-col'>
      <div className='rounded-t-[13px] p-[.5rem_1rem] bg-gradient-landing-orange flex items-center justify-between'>
        <p className='text-[19px] text-white font-semibold tracking-[.38px]'>
          Page Views
        </p>
        <Menu
          as='div'
          className='relative inline-block text-left'
        >
          <Menu.Button
            className={
              'inline-flex w-full justify-center rounded-md  px-4 py-2 text-sm font-medium text-white hover:bg-[rgba(0,0,0,.5)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 items-center gap-1'
            }
          >
            <p className='text-[17px] text-[rgba(255,255,255,0.79)]'>
              {graphFilter}
            </p>
            <p className='text-[17px] text-[rgba(255,255,255,0.79)]'>
              <IoMdArrowDropdown />
            </p>
          </Menu.Button>
          <Transition
            as={Fragment}
            enter='transition ease-out duration-100'
            enterFrom='transform opacity-0 scale-95'
            enterTo='transform opacity-100 scale-100'
            leave='transition ease-in duration-75'
            leaveFrom='transform opacity-100 scale-100'
            leaveTo='transform opacity-0 scale-95'
          >
            <Menu.Items className='absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
              <div className='px-1 py-1 '>
                {arr.map((item, idx) => {
                  return (
                    <Menu.Item key={idx}>
                      {({ active }) => (
                        <button
                          className={`${
                            active
                              ? 'bg-gradient-landing-blue text-white'
                              : 'text-gray-900'
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                          onClick={() => handleGraphFilter(item)}
                        >
                          {item}
                        </button>
                      )}
                    </Menu.Item>
                  );
                })}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
      <div className='graph h-full w-full px-[1rem]'>
        <Line
          options={options}
          data={graphData}
        />
      </div>
      <div className='rounded-b-[13px] border-t border-[#dbdbdb] bg-[#f4f4f4] w-full h-[10%]'></div>
    </div>
  );
};

export default AreaChart;
