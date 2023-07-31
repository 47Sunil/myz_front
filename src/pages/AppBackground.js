import React from 'react';
import styled from 'styled-components';
import AppSidebar from '../components/Global/AppSidebar';
import HeaderBar from '../components/Global/HeaderBar';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useQueryClient } from 'react-query';
import {
  formatDateFromMilliseconds,
  formatSubscriptionEndDateAndTimer,
  startTimer,
} from '../utils/Data/expiryInfo';
import { useState } from 'react';
import { useEffect } from 'react';
// import ViewAllTemplatesModal from './LandingPage/components/ViewAllTemplatesModal';

const Background = styled.div`
  height: 100vh;
  width: 100vw;
  max-height: 100vh;
  overflow: hidden;
  background: radial-gradient(
      50rem at left top,
      rgba(172, 32, 1, 1),
      rgba(172, 32, 1, 0.14)
    ),
    radial-gradient(
      150rem at center left,
      rgba(28, 146, 255, 1),
      rgba(28, 146, 255, 0.52)
    ),
    radial-gradient(
      150rem at right,
      rgba(97, 23, 255, 1),
      rgba(97, 23, 255, 0.57)
    );

  display: grid;
  grid-template-columns: 200px auto;
  grid-template-rows: 50px auto;

  position: relative;
`;
const Overlay = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgba(30, 30, 30, 0.8);
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  inset: 0;
`;

const Header = styled.header`
  grid-row: 1;
  grid-column: 2;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0 0 22px 0;
  z-index: 2;

  ${'' /* z-index: 3333; */}
`;

const Sidebar = styled.div`
  grid-row: 1 / span 2;
  grid-column: 1;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.0153) 0%,
    rgba(255, 255, 255, 0.09) 100%
  );
  ${'' /* z-index: 33333; */}
  z-index:2;
  border-right: 1px solid rgba(255, 255, 255, 0.21);
`;

const Main = styled.main`
  grid-row: 2 / span 1;
  grid-column: 2;
  /* background: #ff0000; */
  max-height: calc(100vh - 50px);
  z-index: 1;
  padding: 1rem;
  overflow-y: scroll;
`;

const AppBackground = ({ children }) => {
  const location = useLocation();
  const path = location.pathname.split('/').join('');
  const queryClient = useQueryClient();
  const { user } = queryClient.getQueryData('user');
  const endDate = user.subscription.end_date;
  const endDateFormatted = new Date(user.subscription.end_date);
  const subsExpiryTime = endDateFormatted - Date.now();
  console.log(subsExpiryTime);
  const sevenDaysInMs = 7 * 24 * 60 * 60 * 1000;
  const timerstartDay = new Date(endDate) - sevenDaysInMs;
  console.log(timerstartDay);
  const { formattedDate } = formatSubscriptionEndDateAndTimer(endDate);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const renewDate = Date.parse(endDate) + sevenDaysInMs;
  const expiry = renewDate - Date.now();
  console.log(expiry);
  const formattedRenewDate = formatDateFromMilliseconds(renewDate);
  const getTime = (endDate) => {
    const time = Date.parse(endDate) - Date.now();
    console.log(time);
    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };
  if (subsExpiryTime > 0 && Date.now() >= timerstartDay) {
    useEffect(() => {
      const interval = setInterval(() => getTime(endDate), 1000);
      return () => clearInterval(interval);
    }, []);
  }
  return (
    <>
      {subsExpiryTime <= sevenDaysInMs && subsExpiryTime > 0 ? (
        <div className='bg-gradient-landing-orange w-screen h-[2rem] flex justify-center items-center'>
          <p>
            Your subscription is about to end in {days} day &nbsp;
            {hours} hours &nbsp; {minutes} minutes &nbsp;{seconds} seconds. You
            can pay in advance{' '}
            <Link
              to='/subscription'
              className='bg-gradient-landing-blue text-white px-2'
            >
              Click Here
            </Link>
          </p>
        </div>
      ) : subsExpiryTime <= 0 && expiry >= 0 ? (
        <div className='bg-red-600 w-screen h-[2rem] flex justify-center items-center'>
          <p>
            Your subcription is expired. Renew before {formattedRenewDate} to
            keep your account active.{' '}
          </p>
        </div>
      ) : subsExpiryTime <= 0 && expiry < 0 ? (
        <div className='bg-red-600 w-screen h-[2rem] flex justify-center items-center'>
          <p>Your account is on hold. Renew your subscription.</p>
        </div>
      ) : null}

      <Background>
        <Overlay />
        <Header>
          <HeaderBar />
        </Header>
        <Sidebar>
          <AppSidebar />
        </Sidebar>

        <Main className='p-4 '>
          <Outlet />
        </Main>
        {/* <ViewAllTemplatesModal /> */}
      </Background>
    </>
  );
};

export default AppBackground;
