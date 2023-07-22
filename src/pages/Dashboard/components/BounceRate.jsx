import { Menu, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';
import { Pie } from 'react-chartjs-2';
import { IoMdArrowDropdown } from 'react-icons/io';
import { MagnifyingGlass } from 'react-loader-spinner';
import { useBounceRateData } from '../../../actions/Dashboard';
import { Chart as ChartJS, ArcElement, Legend, Tooltip } from 'chart.js';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import EmptyState from '../../../components/EmptyState/EmptyState';
ChartJS.register(ArcElement, Tooltip, Legend);
const BounceRate = () => {
  const { data, isFetching } = useBounceRateData();
  const isDataEmpty = !isFetching && data === undefined;
  const bounceRateNumber = Number(data?.data);
  console.log(bounceRateNumber);
  const labels = ['Bounce Rate', 'Stay Rate'];
  const options = {
    responsive: true,
    scaleFontColor: 'black',
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Bounce Rate',
      },
    },
  };
  const bounceRateData = {
    labels,
    datasets: [
      {
        label: 'Bounce Rate',
        data: !isFetching && [bounceRateNumber, 100 - bounceRateNumber],
        borderColor: ['rgb(255, 99, 132)', 'rgb(53, 162, 235)'],
        backgroundColor: ['rgba(255, 99, 132, 0.5)', 'rgba(53, 162, 235, 0.5)'],
      },
    ],
  };
  return (
    <div className='rounded-[13px] bg-white w-full h-full flex flex-col'>
      <div className='rounded-t-[13px] p-[.5rem_1rem] bg-gradient-landing-orange flex items-center justify-between'>
        <p className='text-[19px] text-white font-semibold tracking-[.38px]'>
          Bounce Rate
        </p>
        {/* <Menu
          as='div'
          className='relative inline-block text-left'
        >
          <Menu.Button
            className={
              'inline-flex w-full justify-center rounded-md  px-4 py-2 text-sm font-medium text-white hover:bg-[rgba(0,0,0,.5)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 items-center gap-1'
            }
          >
            <p className='text-[17px] text-[rgba(255,255,255,0.79)]'>
              {'Last used'}
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
                          //   onClick={() => handleGraphFilter(item)}
                        >
                          {'LAst used'}
                        </button>
                      )}
                    </Menu.Item>
                  );
                })}
              </div>
            </Menu.Items>
          </Transition>
        </Menu> */}
      </div>
      <div className='pie flex-grow h-[80%] flex items-center justify-center  w-full px-[1rem] py-[1rem] '>
        {isFetching ? (
          <Skeleton
            width={'100%'}
            height={'100%'}
          />
        ) : isDataEmpty ? (
          <EmptyState />
        ) : (
          <Pie
            options={options}
            data={bounceRateData}
            className=''
          />
        )}
      </div>
      <div className='rounded-b-[13px] border-t border-[#dbdbdb] bg-[#f4f4f4] w-full h-[10%]'></div>
    </div>
  );
};

export default BounceRate;
