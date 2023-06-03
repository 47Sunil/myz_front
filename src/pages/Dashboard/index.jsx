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
    <main className='w-full  h-screen z-[33333] relative grid grid-cols-dashboard min-[3000px]:grid-cols-dashboardLG grid-rows-dashboard gap-[1rem]'>
      <div class='col-start-1 col-end-5 row-start-1 row-end-2 '>
        <DateSection />
      </div>
      <div class='col-start-1 col-end-5 row-start-2 row-end-7 '>
        <ReportSection dashBoardData={dashBoardData} />
      </div>
      <div class='col-start-1 col-end-3 row-start-7 row-end-[14] min-[3000px]:col-start-1  min-[3000px]:col-end-2'>
        <AreaChart />
      </div>
      <div class='col-start-3 col-end-5 row-start-7 row-end-[14] min-[3000px]:row-start-7 min-[3000px]:row-end-[14] min-[3000px]:col-start-2  min-[3000px]:col-end-3'>
        <CountryTables heading={'Online store by sessions by location'} />
      </div>
      <div class='col-start-1 col-end-3 row-start-[14] row-end-[21] min-[3000px]:col-start-3 min-[3000px]:col-end-4 min-[3000px]:row-start-7 min-[3000px]:row-end-[14]'>
        <TopSellingTables heading={'Top Products by units sell'} />
      </div>
      <div class='col-start-3 col-end-5 row-start-[14] row-end-[21] min-[3000px]:row-start-7 min-[3000px]:row-end-[14] min-[3000px]:col-start-4  min-[3000px]:col-end-5'>
        <BarChart />
      </div>
      <div class='col-start-5 col-end-6 row-start-1 row-end-[11] '>
        <OrderActivity ordersActivity={ordersActivity} />
      </div>
      {/* <DateSection />
      <ReportSection dashBoardData={dashBoardData} />
      <AreaChart />
      <CountryTables heading={'Online store by sessions by location'} />
      <TopSellingTables heading={'Top Products by units sell'} />
      <BarChart />
      <OrderActivity ordersActivity={ordersActivity} /> */}
    </main>
  );
};

export default Dashboard;
