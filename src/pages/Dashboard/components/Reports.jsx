import Bitmoji from '../../../assets/images/bitmoji.png';
const ReportSection = ({ dashBoardData }) => {
  const {
    sales: totalSales,
    conversion: conversionRate,
    orders: totalOrders,
    sessions,
  } = dashBoardData;

  return (
    <div className='bg-gradient-report shadow-[0_0_50px_rgba(30, 14, 75, 0.4)] rounded-[9px] flex gap-[2.563] p-[.938rem_1.063rem] h-full w-full'>
      <div className='w-[20rem] h-full text-center self-center border border-solid border-white bg-[rgba(255,255,255,.03)] shadow-bitmoji rounded-[17px]'>
        <img
          src={Bitmoji}
          alt=''
          className='self-center mx-auto scale-90'
        />
      </div>
      <div className='flex-grow grid grid-cols-reports place-content-center'>
        <div className='total-sales px-12 self-center text-white'>
          <h2 className='font-medium text-[1.3vw] leading-[30px]'>
            Total Sales 🤑
          </h2>

          <div className='flex'>
            <h1 className='font-semibold text-[3.5vw] leading-[85px] mr-4'>
              &#8377;{' '}
            </h1>
            <h1 className='font-semibold text-[3.5vw] leading-[85px] '>
              {new Intl.NumberFormat('en-IN').format(totalSales)}
            </h1>
          </div>
        </div>
        <div className='total-orders  px-12 self-center text-white'>
          <h2 className='font-medium text-[1.3vw] leading-[30px]'>
            Total Orders 🤑
          </h2>
          <h1 className='font-semibold text-[3.5vw] leading-[85px]'>
            {totalOrders}
          </h1>
        </div>
        <div className='conversion-rate px-12 self-center text-white'>
          <h2 className='font-medium text-[1.3vw] leading-[30px]'>
            Conversion Rate 🤯{' '}
          </h2>
          <h1 className='font-semibold text-[3.5vw] leading-[85px]'>
            {conversionRate}
          </h1>
        </div>
        <div className='sessions px-12 self-center text-white'>
          <h2 className='font-medium text-[1.3vw] leading-[30px]'>Session </h2>
          <h1 className='font-semibold text-[3.5vw] leading-[85px]'>
            {sessions}
          </h1>
        </div>
      </div>
    </div>
  );
};
export default ReportSection;
