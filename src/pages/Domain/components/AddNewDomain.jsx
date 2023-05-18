import React from 'react';
import styled from 'styled-components';
import bg from '../../../assets/images/domainBG.png';
import meshLarge from '../../../assets/images/meshLarge.png';
import MyzerLogo from '../../../assets/svg/MyzerLogo';
import BackToHome from '../../../components/BackToHome/BackToHome';
import starbg from '../../../assets/images/Star.png';
const DomainBG = styled.div`
  background-image: url(${bg});
  background-repeat: no-repeat;
`;

const AddNewDomain = () => {
  return (
    <DomainBG className='h-screen w-screen relative px-16 py-8 '>
      <img
        src={meshLarge}
        alt=''
        className='absolute inset-0 h-full w-full object-cover'
      />
      <div className='flex w-full justify-between items-center '>
        <MyzerLogo />
        <BackToHome text={'Go Back'} />
      </div>
      <div className='w-[60vw] h-[80vh] bg-gradient-add-domain-orange z-10 rounded-[63px] absolute top-[130px] left-[50%] translate-x-[-50%] overflow-hidden'>
        <img
          src={starbg}
          alt=''
          className='absolute object-contain'
        />
      </div>
      <div className='w-[62vw] h-[70vh] bg-[#100921] rounded-[22px] z-20 absolute top-[170px] left-[25%]'>
        <div className='w-full h-[100px] bg-black rounded-t-[22px] border-b border-solid border-b-[rgba(255,255,255,.15)] flex flex-col py-4 px-8 justify-between'>
          <h1 className='font-medium text-[27px] leading-[121%] text-white '>
            Adding Domain
          </h1>
          <p className='capitalize font-normal text-[17px] leading-[121%] text-white'>
            are you ready to launch your converting landing pages with{' '}
            <span className='bg-gradient-add-domain-purple-text bg-clip-text text-transparent'>
              magic!
            </span>
          </p>
        </div>
      </div>
    </DomainBG>
  );
};

export default AddNewDomain;
