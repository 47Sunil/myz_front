import React from 'react';
import bg from '../../assets/images/domainBG.png';
import meshLarge from '../../assets/images/meshLarge.png';
import MyzerLogo from '../../assets/svg/MyzerLogo';
import BackToHome from '../BackToHome/BackToHome';
import styled from 'styled-components';

const BgDiv = styled.div`
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
`;
const SecondScreenWrapper = ({ children, gobackLink }) => {
  return (
    <BgDiv className='h-screen w-screen relative px-16 py-8'>
      <img
        src={meshLarge}
        alt=''
        className='absolute inset-0 h-full w-full object-cover'
      />
      <div className='flex w-full justify-between items-center '>
        <MyzerLogo />
        <BackToHome
          text={'Go Back'}
          gobackLink={gobackLink}
        />
      </div>
      {children}
    </BgDiv>
  );
};

export default SecondScreenWrapper;
