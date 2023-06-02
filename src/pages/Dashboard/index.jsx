import { useState } from 'react';
import SideBar from '../../components/SideBar/Sidebar';
import TopBar from '../../components/TopBar/Topbar';

import DateSection from './components/Date';
import OrderActivity from './components/Orders';
import ReportSection from './components/Reports';
import SplineChart from './components/SplineChart';
import BarChart from './components/BarChart';
import { CountryTables, Tables, TopSellingTables } from './components/Tables';
import AreaChart from './components/AreaChart';

const Dashboard = () => {
  const [dashBoardData, setDashBoardData] = useState({
    conversion: '4.04%',
    orders: '7',
    sales: 10493,
    sessions: '173',
  });

  const [spinChartData, setSpinChartData] = useState({
    dates: [],
    averageValues: [],
  });

  const [locationData, setLocationData] = useState(['']);

  const [topProducts, setTopProducts] = useState([]);

  const [trafficSource, setTrafficSource] = useState([]);

  const [ordersActivity, setOrdersActivity] = useState([]);

  // useEffect(() => {
  //   axios.get(dataBoardApi).then(resp => {
  //     const respData = resp.data;
  //     setDashBoardData({
  //       conversion: respData.conversion,
  //       orders: respData.orders,
  //       sessions: respData.sessions,
  //       sales: respData.sales,
  //     });
  //   });
  // }, []);
  // useEffect(() => {
  //   axios.get('analytics/dailyAverageOrderValue').then(resp => {
  //     setSpinChartData({
  //       dates: resp.data.dates,
  //       averageValues: resp.data.averageValues,
  //     });
  //   });
  // }, []);

  // useEffect(() => {
  //   axios('analytics/getVisitorCountries').then(resp => {
  //     setLocationData(resp.data.result);
  //   });
  // }, []);

  // useEffect(() => {
  //   axios('analytics/topProduct').then(resp => {
  //     setTopProducts(resp.data.data);
  //   });
  // }, []);

  // useEffect(() => {
  //   axios('analytics/Device').then(device => {
  //     const devices = device.data?.map(item => ({
  //       name: item.type,
  //       data: [item.counts],
  //     }));
  //     setTrafficSource(devices);
  //   });
  // }, []);

  // useEffect(() => {
  //   axios('order/load', {
  //     params: {
  //       page: 1,
  //       limit: 6,
  //       // product_id: '63aaaf42e7e04664c9d7b406',
  //       // start_date: '2022-01-21',
  //       // start_date: '2022-12-27',
  //       // sort: 1,
  //     },
  //   }).then(resp => {
  //     const ordersActivityData = resp.data.orders;
  //     setOrdersActivity(ordersActivityData);
  //   });
  // }, []);

  return (
    <main className='w-full  h-screen z-[33333] relative '>
      <div className='flex gap-[1.875rem]'>
        <div className='flex-grow flex flex-col gap-[1.125rem]'>
          <DateSection />
          <ReportSection dashBoardData={dashBoardData} />
          <div className='flex-grow grid grid-cols-reports grid-rows-reports min-[1600px]:grid-cols-4 gap-4'>
            <AreaChart />
            <CountryTables heading={'Online store by sessions by location'} />
            <TopSellingTables heading={'Top Products by units sell'} />
            <BarChart />
          </div>
        </div>
        <OrderActivity ordersActivity={ordersActivity} />
      </div>
    </main>
  );
};

export default Dashboard;
