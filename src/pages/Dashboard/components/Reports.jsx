// import { Skeleton } from '@mui/material';
import { Bars } from 'react-loader-spinner';
import { useReportData } from '../../../actions/Dashboard/index';
import Bitmoji from '../../../assets/svg/Bitmoji';
import EclipseLeft from '../../../assets/svg/Group 198.svg';
import EclipseRight from '../../../assets/svg/Group 200.svg';
import { ImArrowUp, ImArrowDown } from 'react-icons/im';
import 'react-loading-skeleton/dist/skeleton.css';
import NewUserBitmoji from '../../../assets/icons/Frame 8.png';
import { useQueryClient } from 'react-query';

const ReportSection = () => {
  const { data, isLoading, isFetching } = useReportData();
  const { user } = JSON.parse(localStorage.getItem('user'));
  // const queryClient = useQueryClient();
  // const { user } = queryClient.getQueryData('user');
  const isnew = false;
  const isDataEmpty = !isFetching && data === undefined;
  console.log(isDataEmpty);
  console.log(data);
  return (
    <>
      {isFetching ? (
        <div className='bg-gradient-report shadow-[0_0_50px_0_rgba(30, 14, 75, 0.40)] rounded-[13px] flex  p-[.1rem_2rem] h-full w-full items-center justify-center relative'>
          <Bars
            height='80'
            width='80'
            color='#d1d1d1'
            ariaLabel='bars-loading'
            wrapperStyle={{}}
            wrapperClass=''
            visible={true}
          />
        </div>
      ) : isDataEmpty ? (
        <div className='bg-gradient-report shadow-[0_0_50px_0_rgba(30, 14, 75, 0.40)] rounded-[13px] flex  p-[.1rem_2rem] h-full w-full items-center justify-center relative'>
          <img
            src={EclipseLeft}
            alt=''
            className='absolute bottom-0 left-0'
          />
          <img
            src={EclipseRight}
            alt=''
            className='absolute bottom-0 right-0'
          />
          <div className='w-[10rem] h-full text-center flex items-center justify-center'>
            <img
              src={NewUserBitmoji}
              alt='new user'
            />
          </div>
          {/* <div className='w-[2px] h-[40%] bg-[rgba(255,255,255,0.18)]'></div> */}
          <div className='  w-[100%] h-[75%] flex items-start justify-center flex-col gap-3 p-[0_1.5rem]'>
            <p className='text-[#fff] text-[1rem] font-semibold'>
              We are Proudly Developed in India{' '}
            </p>
            <h1 className='font-bold text-[#fff] text-[3vw] leading-[30px]'>
              Namaste {user.name}! Welcome to Myzer
            </h1>
            <p className='text-[#CDBBFF] font-semibold text-[23px]'>
              We are Always ready to get you more conversions from your funnels.
            </p>
          </div>
        </div>
      ) : (
        <div className='bg-gradient-report shadow-[0_0_50px_0_rgba(30, 14, 75, 0.40)] rounded-[13px] flex  p-[.1rem_2rem] h-full w-full items-center justify-between relative'>
          <img
            src={EclipseLeft}
            alt=''
            className='absolute bottom-0 left-0'
          />
          <img
            src={EclipseRight}
            alt=''
            className='absolute bottom-0 right-0'
          />
          <div className='w-[10rem] h-full text-center'>
            <Bitmoji />
          </div>
          <div className='w-[2px] h-[40%] bg-[rgba(255,255,255,0.18)]'></div>
          <div className='total-sales  w-[20%] h-[75%] flex items-center justify-center flex-col  p-[0_1.5rem]'>
            <h2 className='font-medium text-[rgba(205,187,255,0.64)] text-[1.3vw] leading-[30px]'>
              Total Sales
            </h2>
            <h1 className='font-bold text-[3.5vw] leading-[85px] bg-gradient-to-b from-[rgba(255,255,255,1)] from-30% to-[rgba(255,255,255,0)] to-100% bg-clip-text text-transparent'>
              {new Intl.NumberFormat('en-IN', {
                style: 'currency',
                currency: 'INR',
                minimumFractionDigits: 0,
              }).format(data?.data?.totalSales)}
            </h1>
            <div className='w-[95%] bg-[rgba(15,15,15,0.42)] rounded-[25px] flex items-center justify-center gap-2 p-[.5rem_1rem]'>
              <p className='text-[#2BC006] font-semibold text-[10px] flex gap-1'>
                <ImArrowUp />
                {data?.data?.salesPercentageChange}
              </p>
              <p className='text-[rgba(255,255,255,0.73)] text-[10px] font-semibold capitalize'>
                since last 30 days
              </p>
            </div>
          </div>
          <div className='w-[2px] h-[40%] bg-[rgba(255,255,255,0.18)]'></div>

          <div className='total-orders w-[20%] h-[75%]  flex items-center justify-center flex-col  p-[0_1.5rem]'>
            <h2 className='font-medium text-[rgba(205,187,255,0.64)] text-[1.3vw] leading-[30px]'>
              Total Orders
            </h2>
            <h1 className='font-bold text-[3.5vw] leading-[85px] bg-gradient-to-b from-[rgba(255,255,255,1)] from-30% to-[rgba(255,255,255,0)] to-100% bg-clip-text text-transparent'>
              {data?.data?.totalOrders}
            </h1>
            <div className='w-[95%] bg-[rgba(15,15,15,0.42)] rounded-[25px] flex items-center justify-center gap-2 p-[.5rem_1rem]'>
              <p className='text-[#2BC006] font-semibold text-[10px] flex gap-1'>
                <ImArrowUp />
                {data?.data?.ordersPercentageChange}
              </p>
              <p className='text-[rgba(255,255,255,0.73)] text-[10px] font-semibold capitalize'>
                since last week
              </p>
            </div>
          </div>
          <div className='w-[2px] h-[40%] bg-[rgba(255,255,255,0.18)]'></div>

          <div className='conversion-rate w-[20%] h-[75%]  flex items-center justify-center flex-col  p-[0_1.5rem]'>
            <h2 className='font-medium text-[rgba(205,187,255,0.64)] text-[1.3vw] leading-[30px]'>
              Conversion Rate{' '}
            </h2>
            <h1 className='font-bold text-[3.5vw] leading-[85px] bg-gradient-to-b from-[rgba(255,255,255,1)] from-30% to-[rgba(255,255,255,0)] to-100% bg-clip-text text-transparent'>
              {data?.data?.conversionRate}
            </h1>
            <div className='w-[95%] bg-[rgba(15,15,15,0.42)] rounded-[25px] flex items-center justify-center gap-2 p-[.5rem_1rem]'>
              <p className='text-[#2BC006] font-semibold text-[10px] flex gap-1'>
                <ImArrowUp />
                {data?.data?.conversionRatePercentageChange}
              </p>
              <p className='text-[rgba(255,255,255,0.73)] text-[10px] font-semibold capitalize'>
                since last week
              </p>
            </div>
          </div>
          <div className='w-[2px] h-[40%] bg-[rgba(255,255,255,0.18)]'></div>

          <div className='sessions  w-[20%] h-[75%]  flex items-center justify-center flex-col  p-[0_1.5rem]'>
            <h2 className='font-medium text-[rgba(205,187,255,0.64)] text-[1.3vw] leading-[30px]'>
              Session{' '}
            </h2>
            <h1 className='font-bold text-[3.5vw] leading-[85px] bg-gradient-to-b from-[rgba(255,255,255,1)] from-30% to-[rgba(255,255,255,0)] to-100% bg-clip-text text-transparent'>
              {data?.data?.sessions}
            </h1>
            <div className='w-[95%] bg-[rgba(15,15,15,0.42)] rounded-[25px] flex items-center justify-center gap-2 p-[.5rem_1rem]'>
              <p className='text-[#E53009] font-semibold text-[10px] flex gap-1'>
                <ImArrowDown />
                {data?.data?.sessionsPercentageChange}
              </p>
              <p className='text-[rgba(255,255,255,0.73)] text-[10px] font-semibold capitalize'>
                since last week
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ReportSection;
