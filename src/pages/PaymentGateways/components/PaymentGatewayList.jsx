import { useQuery } from 'react-query';
import styled from 'styled-components';
import {
  useActivatePaymentMutation,
  useDeactivatePaymentMutation,
  usePaymentData,
} from '../../../actions/Payment';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';
import { useState } from 'react';

const PaymentGatewayList = () => {
  const [Page, setPage] = useState(1);
  const { data, isLoading, isFetching } = usePaymentData(Page);
  const length = data?.data?.length;
  console.log(data);
  return (
    <div className='bg-white w-full rounded-t-3xl mt-8'>
      <div className='flex flex-row items-between p-4'>
        <div className='bg-gray-200/80 rounded-lg border border-gray-300 w-64 h-10 flex items-center px-3 text-gray-700 text-sm'>
          Search
        </div>
        <div className=' w-full h-full flex justify-end items-center gap-2 text-black p-2'>
          <p className='text-[12px]'>
            Showing {length} of <span>{data?.counts}</span>
          </p>
          <button
            className='w-[3rem] bg-[rgba(0,0,0,.5)] h-full rounded-xl flex justify-center items-center text-[25px]'
            onClick={() => setPage((old) => Math.max(old - 1, 1))}
            disabled={Page === 1}
          >
            <GrFormPrevious />
          </button>
          <button
            className='w-[3rem] bg-[rgba(0,0,0,.5)] h-full rounded-xl flex justify-center items-center text-[25px]'
            onClick={() => {
              if (Math.ceil(data?.counts / 10)) {
                setPage((old) => old + 1);
              }
            }}
            disabled={Page === Math.ceil(data?.counts / 10)}
          >
            <GrFormNext />
          </button>
        </div>
      </div>
      <div className='w-full bg-gray-200/70 grid grid-cols-5 px-4 border-y border-gray-300'>
        <div className='w-full border-r border-gray-300 py-2 text-sm'>
          Payment Gateway
        </div>
        <div className='w-full border-r pl-3 border-gray-300 py-2 text-sm'>
          Date Added
        </div>
        <div className='w-full border-r pl-3 border-gray-300 py-2 text-sm'>
          Active Status
        </div>
        <div className='w-full border-r pl-3 border-gray-300 py-2 text-sm'>
          Amount Collected
        </div>
        <div className='w-full pl-3 border-gray-300 py-2 text-sm'>
          Quick Actions
        </div>
      </div>
      <ListItem
        item={data}
        isLoading={isLoading}
        page={Page}
        isFetching={isFetching}
      />
    </div>
  );
};

const res = {
  icon: 'https://res.cloudinary.com/lpmaker/image/upload/v1684185082/Supported%20Payment%20Gateways/rzpicon_kww6gv.png',
  title: 'Yomize Gateway',
  brand: 'Razorpay',
  date: '9 May 2023',
  active: true,
  collected: '24567 INR',
};

const ListItem = ({ item, isLoading, page, isFetching }) => {
  // console.log(data, 'payment data table');
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  function convertDate(date) {
    const newFormatDate = new Date(date);
    const day = newFormatDate.getDate().toString().padStart(2, '0');
    const monthIndex = newFormatDate.getMonth();
    const year = newFormatDate.getFullYear().toString();
    const monthAbbreviation = monthNames[monthIndex];
    const formattedDate = `${day} ${monthAbbreviation} ${year}`;
    return formattedDate;
  }
  const { mutate: activate } = useActivatePaymentMutation();
  const { mutate: deactive } = useDeactivatePaymentMutation();
  const handleActivate = (id, page) => {
    activate({ id, page });
  };
  const handleDeactivate = (id, page) => {
    deactive({ id, page });
  };
  return (
    <>
      {!isLoading &&
        item?.data.map((i, idx) => {
          return (
            <div
              className='w-full grid grid-cols-5 px-4 py-3 text-gray-600 items-center'
              key={idx}
            >
              <div className='w-full text-sm flex gap-4 items-center'>
                <img
                  src={i.icon}
                  className='w-14 h-14 p-3 bg-[#FFE7C3] rounded-full border-[#FFC978] border'
                  alt={i.brand + ' mini icon'}
                />
                <div className='w-full'>
                  {i.title}
                  <p className='text-xs text-gray-600/60 -mt-1'>{i.brand}</p>
                </div>
              </div>
              <div className='w-full pl-3 text-sm'>{convertDate(i.date)}</div>
              <div className='w-full pl-3 text-sm'>
                {i.active ? (
                  <span className='bg-green-100 border border-green-800/50 rounded-xl px-4 py-1'>
                    Active
                  </span>
                ) : (
                  <span className='bg-gray-100 border border-gray-800/50 rounded-xl px-4 py-1'>
                    Not Active
                  </span>
                )}
              </div>
              <div className='w-full pl-3 text-sm'>{i.collected}</div>
              <div className='w-full pl-3 text-sm'>
                {i.active ? (
                  <button
                    className='bg-gray-100 border border-gray-800/50 rounded-xl px-4 py-1'
                    onClick={() => handleDeactivate(i._id, page)}
                  >
                    {isFetching ? ' Deactivating' : ' Deactivate'}
                  </button>
                ) : (
                  <button
                    className='bg-gray-100 border border-gray-800/50 rounded-xl px-4 py-1'
                    onClick={() => handleActivate(i._id, page)}
                  >
                    {isFetching ? 'Activating' : 'Activate'}
                  </button>
                )}
              </div>
            </div>
          );
        })}
    </>
  );
};

export default PaymentGatewayList;
