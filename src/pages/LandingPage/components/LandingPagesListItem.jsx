import React, { useEffect, useState } from 'react';
import CopyIcon from '../../../assets/svg/CopyIcon';
import { Link } from 'react-router-dom';

const LandingPageListitem = () => {
  const [landingPages, setLandingPages] = useState([]);

  // const landingPageList = async () => {
  //     const res = await axios.get('/api/v1/page/pages?limit=10')
  //     console.log(res.data)
  //     setLandingPages(res.data.pages)
  // }

  // landingPageList()

  //     const unixDateConverter = (date) => {
  //         const unixTimestamp = date; // replace with your Unix timestamp

  // const dateObj = new Date(unixTimestamp * 1000);
  // const dateString = new Intl.DateTimeFormat('en-US').format(dateObj);
  // return dateString
  //     }

  return (
    <>
      {landingPages.map((page) => {
        return (
          <div className='body-row bg-white flex flex-row p-2 rounded'>
            <div className='w-3/12 bg-white py-2 px-4 text-sm text-gray-900 font-medium rounded-md border-r border-gray-200'>
              <h2>{page.name}</h2>
              <div className=' flex mt-1 bg-gray-200 rounded overflow-hidden relative'>
                <p className='bg-gray-800 text-white py-1 px-2 text-xs'>
                  preview.myzer.io
                </p>
                <p className='text-gray-500 p-1 text-xs'>/preview</p>
                <div className='absolute p-1 right-0 p-1'>
                  <CopyIcon />
                </div>
              </div>
            </div>
            <div className='w-2/12 bg-white/10 py-2 px-4 text-sm text-gray-900 rounded-md text-center border-r border-gray-100 flex items-center justify-center'>
              Date
            </div>
            <div className='w-2/12 bg-white/10 py-2 px-4 text-sm text-gray-900 rounded-md text-center border-r border-gray-100 flex items-center justify-center'>
              Status
            </div>
            <div className='w-2/12 bg-white/10 py-2 px-4 text-sm text-gray-900 rounded-md text-center border-r border-gray-100 flex items-center justify-center'>
              Page Views
            </div>
            <div className='w-3/12 bg-white/10 py-2 px-4 text-sm text-gray-900 rounded-md text-center flex items-center'>
              <Link to={`/landing-page/builder/${page._id}`}>EDIT PAGE</Link>
            </div>
          </div>
        );
      })}
      <div className='body-row bg-white flex flex-row p-2 rounded'>
        <div className='w-3/12 bg-white py-2 px-4 text-sm text-gray-900 font-medium rounded-md border-r border-gray-200'>
          <h2>Agency Workshop Landing Page</h2>
          <div className=' flex mt-1 bg-gray-200 rounded overflow-hidden relative'>
            <p className='bg-gray-800 text-white py-1 px-2 text-xs'>
              preview.myzer.io
            </p>
            <p className='text-gray-500 p-1 text-xs'>/preview</p>
            <div className='absolute p-1 right-0 p-1'>
              <CopyIcon />
            </div>
          </div>
        </div>
        <div className='w-2/12 bg-white/10 py-2 px-4 text-sm text-gray-900 rounded-md text-center border-r border-gray-100 flex items-center justify-center'>
          Date
        </div>
        <div className='w-2/12 bg-white/10 py-2 px-4 text-sm text-gray-900 rounded-md text-center border-r border-gray-100 flex items-center justify-center'>
          Status
        </div>
        <div className='w-2/12 bg-white/10 py-2 px-4 text-sm text-gray-900 rounded-md text-center border-r border-gray-100 flex items-center justify-center'>
          Page Views
        </div>
        <div className='w-3/12 bg-white/10 py-2 px-4 text-sm text-gray-900 rounded-md text-center flex items-center'>
          Action
        </div>
      </div>
    </>
  );
};

export default LandingPageListitem;
