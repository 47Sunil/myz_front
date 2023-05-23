import React, { useState, useRef } from 'react';

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export default function LandingPageTable({ pages, setDeleted }) {
  const [copySuccess, setCopySuccess] = useState('');
  const textAreaRef = useRef(null);

  // const saveDraft = (event, id) => {
  //   event.preventDefault();
  //   axios
  //     .post('/page/draft', null, {
  //       id,
  //     })
  //     .then((resp) => console.log('Draft response', resp));
  // };

  // const previewHandler = (event, url) => {
  //   event.preventDefault();
  //   window.open(url, '_blank');
  // };

  // const editHandler = (event, pageId) => {
  //   event.preventDefault();
  //   let url = `http://localhost:3000/editor/${pageId}`;
  //   window.open(url, '_blank');
  // };

  // const deleteHandler = (event, pageId) => {
  //   event.preventDefault();
  //   axios
  //     .delete(`page/${pageId}`)
  //     .then((resp) => {
  //       setDeleted((prev) => !prev);
  //     })
  //     .catch((error) => console.log(error));
  // };

  return (
    <div className='bg-[rgba(255,255,255,0.1)] border border-solid border-[rgba(255,255,255,.13)] rounded-2xl p-[15px_25px]  min-h-[300px] px-4'>
      <div className='heading-table flex gap-[2%]'>
        <span
          style={{
            flex: '1 1 50%',
          }}
          className='bg-[rgba(255,255,255,.22)] rounded-lg text-[#c8cacc] text-center p-[8px_10px]'
        >
          Name
        </span>
        <span
          style={{
            flex: '1 1 22%',
          }}
          className='bg-[rgba(255,255,255,.22)] rounded-lg text-[#c8cacc] text-center p-[8px_10px]'
        >
          Date
        </span>
        <span
          style={{
            flex: '1 1 22%',
          }}
          className='bg-[rgba(255,255,255,.22)] rounded-lg text-[#c8cacc] text-center p-[8px_10px]'
        >
          Status
        </span>
        <span
          style={{
            flex: '1 1 22%',
          }}
          className='bg-[rgba(255,255,255,.22)] rounded-lg text-[#c8cacc] text-center p-[8px_10px]'
        >
          Page Views
        </span>
        <span
          style={{
            flex: '1 1 30%',
          }}
          className='bg-[rgba(255,255,255,.22)] rounded-lg text-[#c8cacc] text-center p-[8px_10px]'
        >
          Actions
        </span>
      </div>

      {pages?.map((singlePage) => {
        let changedDateFormate = new Date(singlePage.createdAt);

        return (
          <div className='heading-table mt-5 flex items-center justify-center rounded-lg bg-white'>
            <span
              style={{
                flex: '1 1 50%',
              }}
              className='bg-[rgba(255,255,255,.22)] rounded-lg text-[#c8cacc] text-center p-[8px_10px] flex flex-col items-start justify-start'
            >
              <span className='text-md rounded-lg text-black'>
                {singlePage.name}
              </span>
              <span className='relative mt-2 rounded-lg'>
                <span className='bg-black px-2 text-white'>
                  {singlePage.url}
                </span>
                {/* <span className='relative inline-block min-w-[14rem] bg-[#EEEEEE] pl-4 text-start text-black'>
                  <span>/agency course</span>
                  <span
                    className='absolute right-0 border border-[#E8E8E8] bg-white'
                    style={{ padding: '3px', borderRadius: '4px' }}
                  >
                    <svg
                      height='15'
                      viewBox='0 0 9 12'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M6 1H5.5V3.5H8V3H6V1Z' fill='#625E64' />
                      <path
                        d='M6.66562 0H1.5V1.5H0V12H7.5V10.5H9V2.34375L6.66562 0ZM7 11.5H0.5V2H1.5V10.5H7V11.5ZM8.5 10H2V0.5H6.45938L8.5 2.55V10Z'
                        fill='#625E64'
                      />
                    </svg>
                  </span>
                </span> */}
              </span>
            </span>
            <div className='h-[40px] w-[1px] border-r border-r-[#DBDBDB]'></div>
            <span
              style={{
                flex: '1 1 20%',
              }}
              className='bg-[rgba(255,255,255,.22)] rounded-lg text-[#c8cacc] text-center p-[8px_10px] !text-black'
            >
              {/* 02 Apr, 2022 */}
              {`${changedDateFormate.getDate()} ${
                monthNames[changedDateFormate.getMonth()]
              } ${changedDateFormate.getFullYear()}`}
            </span>
            <div className='h-[40px] w-[1px] border-r border-r-[#DBDBDB]'></div>
            <span
              style={{
                flex: '1 1 20%',
              }}
              className='bg-[rgba(255,255,255,.22)] rounded-lg text-[#c8cacc] text-center p-[8px_10px]'
            >
              <span className='border border-dashed border-[#FA6A2C] bg-[#FFDDC4] px-3 py-1 text-black'>
                {`${singlePage.published ? 'Published' : 'Draft'}`}
              </span>
            </span>
            <div className='h-[40px] w-[1px] border-r border-r-[#DBDBDB]'></div>
            <span
              style={{
                flex: '1 1 20%',
              }}
              className='bg-[rgba(255,255,255,.22)] rounded-lg text-[#c8cacc] text-center p-[8px_10px] !text-black'
            >
              {singlePage.sessions}
            </span>
            <div className='h-[40px] w-[1px] border-r border-r-[#DBDBDB]'></div>
            <span
              style={{
                flex: '1 1 30%',
              }}
              className='bg-[rgba(255,255,255,.22)] rounded-lg text-[#c8cacc] text-center p-[8px_10px] flex justify-center gap-[5px]'
            >
              <button className='flex min-w-[150px] items-center justify-center gap-[5px] rounded-xl border border-[#E6E4E4] bg-[#EFEFEF] py-[7px]'>
                <span className='text-black'>Send to draft </span>
              </button>
              <button className='flex min-w-[40px] items-center justify-center rounded-xl border border-[#E6E4E4] bg-[#EFEFEF] p-[5px] '>
                <svg
                  width='23'
                  height='13'
                  viewBox='0 0 23 13'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M11.375 0C7.21602 0 3.97617 2.47813 0 6.5C3.42266 9.93789 6.29688 13 11.375 13C16.448 13 20.1805 9.12031 22.75 6.57109C20.1195 3.58516 16.3922 0 11.375 0ZM11.375 11.1363C8.86641 11.1363 6.825 9.0543 6.825 6.5C6.825 3.94062 8.86641 1.86367 11.375 1.86367C13.8836 1.86367 15.925 3.9457 15.925 6.5C15.925 9.05938 13.8836 11.1363 11.375 11.1363Z'
                    fill='#504D4D'
                  />
                </svg>
              </button>
              <button className='flex min-w-[40px] items-center justify-center rounded-xl border border-[#E6E4E4] bg-[#EFEFEF] p-[5px] '>
                <svg
                  width='13'
                  height='13'
                  viewBox='0 0 13 13'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M8.875 1.87505C9.17337 1.57668 9.57804 1.40906 10 1.40906C10.422 1.40906 10.8266 1.57668 11.125 1.87505C11.4234 2.17342 11.591 2.57809 11.591 3.00005C11.591 3.422 11.4234 3.82668 11.125 4.12505L4 11.25L1 12L1.75 9.00005L8.875 1.87505Z'
                    stroke='#504D4D'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </svg>
              </button>
              <button className='flex min-w-[40px] items-center justify-center rounded-xl border border-[#E6E4E4] bg-[#EFEFEF] p-[5px] '>
                <svg
                  width='13'
                  height='16'
                  viewBox='0 0 13 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M0.928571 14.2222C0.928571 15.2044 1.75964 16 2.78571 16H10.2143C11.2404 16 12.0714 15.2044 12.0714 14.2222V3.55556H0.928571V14.2222ZM13 0.888889H9.75L8.82143 0H4.17857L3.25 0.888889H0V2.66667H13V0.888889Z'
                    fill='#504D4D'
                  />
                </svg>
              </button>
            </span>
          </div>
        );
      })}
    </div>
  );
}
