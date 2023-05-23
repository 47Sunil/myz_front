import React from 'react';
import styled from 'styled-components';
import AppSidebar from '../components/Global/AppSidebar';
import HeaderBar from '../components/Global/HeaderBar';
import { useLocation } from 'react-router-dom';
import ViewAllTemplatesModal from './LandingPage/components/ViewAllTemplatesModal';

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
  top: 0;
  left: 0;
  inset: 0;
`;

const Header = styled.header`
  grid-row: 1;
  grid-column: 2;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0 0 22px 0;
  z-index: 3333;
`;

const Sidebar = styled.div`
  grid-row: 1 / span 2;
  grid-column: 1;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.0153) 0%,
    rgba(255, 255, 255, 0.09) 100%
  );
  z-index: 33333;
  border-right: 1px solid rgba(255, 255, 255, 0.21);
`;

const Main = styled.main`
  grid-row: 2 / span 1;
  grid-column: 2;
  background: #ff000;
  max-height: calc(100vh - 50px);
  padding: 1rem;
  overflow-y: scroll;
`;

const AppBackground = ({ children }) => {
  const location = useLocation();
  const path = location.pathname.split('/').join('');
  return (
    <>
      {path !== 'accountssignin' &&
      path !== 'accountssignup' &&
      path !== 'domainadd_domain' &&
      path !== 'domainadd_dns' &&
      path !== 'landing-pagescreate_landing_page' ? (
        <Background>
          <Overlay />
          <Header>
            <HeaderBar />
          </Header>
          <Sidebar>
            <AppSidebar />
          </Sidebar>
          <Main className='p-4 z-10'>{children}</Main>
          {/* <ViewAllTemplatesModal /> */}
        </Background>
      ) : (
        <>{children}</>
      )}
    </>
  );
};

export default AppBackground;
