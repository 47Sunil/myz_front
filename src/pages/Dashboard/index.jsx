import { useState } from 'react';
import SideBar from '../../components/SideBar/Sidebar';
import TopBar from '../../components/TopBar/Topbar';

import DateSection from './components/Date';
import OrderActivity from './components/Orders';
import ReportSection from './components/Reports';
import SplineChart from './components/SplineChart';
import BarChart from './components/BarChart';
import { Tables } from './components/Tables';

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
    <main className='w-screen overflow-hidden bg-gradient-myzer h-full'>
      <div className='h-full w-full bg-[rgba(30,30,30,.8)] grid grid-cols-[237px_1fr]'>
        <SideBar />
        <div className='block min-w-[83vw] max-w-[100vw]'>
          <TopBar />
          <div className='p-[1.188rem_2.813rem_1.375rem_2.313rem] flex gap-[1.875rem] h-[calc(100vh-85px)] overflow-y-scroll overflow-x-hidden'>
            <div className='flex-grow flex flex-col gap-[1.125rem]'>
              <DateSection />
              <ReportSection dashBoardData={dashBoardData} />
              <div className='flex-grow grid grid-cols-reports grid-rows-reports gap-4'>
                <SplineChart spinChartData={spinChartData} />
                <Tables
                  heading={'Online store by sessions by location'}
                  locationData={locationData}
                />
                <Tables
                  heading={'Top Products by units sell'}
                  topProducts={topProducts}
                />
                <BarChart trafficSource={trafficSource} />
                {/* <div className="online-store-sessions analytic-item"></div> */}
                {/* <div className='top-product-sold analytic-item'></div> */}
                {/* <div className='session-traffic-source analytic-item'></div> */}
              </div>
            </div>
            <OrderActivity ordersActivity={ordersActivity} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
