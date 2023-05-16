import MyzerLogo from '../../assets/svg/MyzerLogo';
import DashboardLogo from '../../assets/svg/DashboardLogo';
import LandingPagesLogo from '../../assets/svg/LandingPagesLogo';
import TransactionsLogo from '../../assets/svg/TransactionLogo';
import PaymentLogo from '../../assets/svg/PaymentLogo';
import DomainLogo from '../../assets/svg/DomainLogo';
import SubscriptionLogo from '../../assets/svg/SubscriptionLogo';
import OtherLogo from '../../assets/svg/OtherLogo';
import AccountLogo from '../../assets/svg/AccountLogo';
import LogoutLogo from '../../assets/svg/LogoutLogo';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const SideBarItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 10px 10px 10px 15px;
  margin: 0 0 16px;
  position: relative;
  z-index: 99;
  &:before {
    content: '';
    position: absolute;
    z-index: -1;
    border-radius: 0 9px 9px 0;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10.5px);
    transition: width 0.3s linear;
    inset: 0;
    width: 0;
  }
  &:hover:before {
    width: 100%;
  }
  &:after {
    position: absolute;
    content: '';
    left: 0;
    width: 0;
    top: 0;
    bottom: 0;
    background: linear-gradient(180deg, #bd61ec 0%, #5e36ce 100%);
    z-index: 9;
    transition: width 0.3s linear;
  }
  &:hover:after {
    width: 7px;
  }
`;

const SideBar = () => {
  return (
    <div className='flex flex-col border border-solid border-[rgba(255,255,255,.21)] bg-gradient-sidebar max-h-screen w-[236px]'>
      <div className='mix-blend-screen text-center pt-[1.2rem]'>
        <MyzerLogo className='mx-auto mb-1 h-[40px]' />
        <hr />
      </div>

      <div className='flex flex-col justify-between h-[calc(100vh-64px)] font-medium text-[14px] px-[24px] leading-[21px] text-[rgba(255,255,255,.69)]'>
        <div className='section-tools'>
          <div className='flex flex-col justify-evenly py-[20px]'>
            <SideBarItem>
              <div className='w-[22px] opacity-30'>
                <DashboardLogo />
              </div>
              <h4>
                <Link to='/home'>Dashboard</Link>
              </h4>
            </SideBarItem>
            <SideBarItem>
              {' '}
              <div className='w-[22px]'>
                {' '}
                <LandingPagesLogo />{' '}
              </div>
              <h4>
                <Link to='/landing-pages'>Landing Pages</Link>
              </h4>
            </SideBarItem>
            <SideBarItem>
              <div className='w-[22px]'>
                <TransactionsLogo />
              </div>
              <h4>Transactions</h4>
            </SideBarItem>
            <SideBarItem>
              <div className='w-[22px]'>
                <DomainLogo />
              </div>
              <h4>Domains</h4>
            </SideBarItem>
          </div>
          <div className='flex flex-col justify-evenly py-[20px]'>
            <h3 className='p-[10px] mb-[20px]'>Settings</h3>
            <SideBarItem>
              <div className='w-[22px]'>
                <PaymentLogo />
              </div>
              <h4>Payment Options</h4>
            </SideBarItem>
            <SideBarItem>
              <div className='w-[22px]'>
                <AccountLogo />
              </div>
              <h4>Account Options</h4>
            </SideBarItem>
            <SideBarItem>
              <div className='w-[22px]'>
                <SubscriptionLogo />
              </div>
              <h4>Subscription</h4>
            </SideBarItem>
            <SideBarItem>
              <div className='w-[22px]'>
                <OtherLogo />
              </div>
              <h4>Other Settings</h4>
            </SideBarItem>
          </div>
        </div>
        <div className='mb-8'>
          <SideBarItem>
            <div className='w-[22px]'>
              <LogoutLogo />
            </div>
            <h4>Logout</h4>
          </SideBarItem>
        </div>
      </div>
    </div>
  );
};
export default SideBar;
