import { useState } from 'react';
import OrderActivity from './components/Orders';
import ReportSection from './components/Reports';
import BarChart from './components/BarChart';
import { CountryTables, TopSellingTables } from './components/Tables';
import AreaChart from './components/AreaChart';
import Datepicker from 'react-tailwindcss-datepicker';

const Dashboard = () => {
  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(11),
  });

  return (
    <main className='w-full  h-screen   relative grid grid-cols-dashboard min-[3000px]:grid-cols-dashboardLG grid-rows-dashboard gap-[1rem]'>
      <div className='col-start-1 col-end-6 row-start-1 row-end-5 '>
        <ReportSection />
      </div>
      <div className='col-start-1 col-end-4 row-start-5 row-end-[12]'>
        <AreaChart />
      </div>
      {/* <div className='col-start-1 col-end-3 row-start-7 row-end-[14] min-[3000px]:col-start-1  min-[3000px]:col-end-2'>
        <AreaChart />
      </div>
      <div className='col-start-3 col-end-5 row-start-7 row-end-[14] min-[3000px]:row-start-7 min-[3000px]:row-end-[14] min-[3000px]:col-start-2  min-[3000px]:col-end-3'>
        <CountryTables heading={'Online store by sessions by location'} />
      </div>
      <div className='col-start-1 col-end-3 row-start-[14] row-end-[21] min-[3000px]:col-start-3 min-[3000px]:col-end-4 min-[3000px]:row-start-7 min-[3000px]:row-end-[14]'>
        <TopSellingTables heading={'Top Products by units sell'} />
      </div>
      <div className='col-start-3 col-end-5 row-start-[14] row-end-[21] min-[3000px]:row-start-7 min-[3000px]:row-end-[14] min-[3000px]:col-start-4  min-[3000px]:col-end-5'>
        <BarChart />
      </div>
      <div className='col-start-5 col-end-6 row-start-1 row-end-[11] '>
        <OrderActivity ordersActivity={ordersActivity} />
      </div> */}
    </main>
  );
};

export default Dashboard;
